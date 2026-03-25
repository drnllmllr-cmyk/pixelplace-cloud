import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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

    if (!name || !email || !description) {
      return new Response(
        JSON.stringify({ success: false, error: "Name, email, and description are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Forward to Google Apps Script as JSON
    console.log(`Sending to Apps Script: name=${name}, email=${email}`);

    const scriptResponse = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, company: company || "", description, message: description }),
      redirect: "follow",
    });

    const scriptBody = await scriptResponse.text();
    console.log(`Apps Script response status: ${scriptResponse.status}`);
    console.log(`Apps Script response body: ${scriptBody.slice(0, 500)}`);

    if (!scriptResponse.ok) {
      return new Response(
        JSON.stringify({ success: false, error: `Google Apps Script returned status ${scriptResponse.status}` }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check for HTML error pages
    if (scriptBody.includes("<!DOCTYPE html>") || scriptBody.includes("Sorry, unable to open the file")) {
      return new Response(
        JSON.stringify({ success: false, error: "Google Apps Script is not publicly accessible. Redeploy with access set to Anyone." }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Try to parse as JSON
    try {
      const parsed = JSON.parse(scriptBody);
      if (parsed.result === "success" || parsed.status === "success" || parsed.success === true) {
        console.log(`Submission successful for ${name} (${email})`);
        return new Response(
          JSON.stringify({ success: true }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      } else {
        return new Response(
          JSON.stringify({ success: false, error: parsed.error || "Apps Script did not confirm success" }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    } catch {
      // Non-JSON but 200 — treat as success (some Apps Scripts return plain text "Success")
      if (scriptBody.toLowerCase().includes("success")) {
        console.log(`Submission successful (plain text) for ${name} (${email})`);
        return new Response(
          JSON.stringify({ success: true }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      return new Response(
        JSON.stringify({ success: false, error: `Unexpected response from Apps Script: ${scriptBody.slice(0, 200)}` }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
