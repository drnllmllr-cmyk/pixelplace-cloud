import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyGOh27ntjI2-PGsxj2CEDxsfXXh9WgUcvrOtPYcTPOwHi09dgv7bICwrdMOdHogAemTw/exec";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, description } = await req.json();

    // Validate inputs
    if (!name || !email || !description) {
      return new Response(
        JSON.stringify({ error: "Name, email, and description are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Forward submission to Google Apps Script (source of truth)
    const formData = new URLSearchParams({
      name,
      email,
      company: company || "",
      description,
    });

    const scriptResponse = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const scriptBody = await scriptResponse.text();

    if (!scriptResponse.ok) {
      console.error("Apps Script error:", scriptResponse.status, scriptBody.slice(0, 400));
      return new Response(
        JSON.stringify({
          error:
            "Contact form endpoint rejected the request. Please make sure your Google Apps Script is deployed as a Web App with public access.",
        }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (scriptBody.includes("Sorry, unable to open the file") || scriptBody.includes("Page Not Found")) {
      console.error("Apps Script returned an access page instead of success response");
      return new Response(
        JSON.stringify({
          error:
            "Google Apps Script URL is not publicly accessible yet. Set Web App access to Anyone and deploy a new version.",
        }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store in database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({ name, email, company: company || null, description });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`New contact submission from ${name} (${email})`);

    return new Response(
      JSON.stringify({ success: true, message: "Submission received" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
