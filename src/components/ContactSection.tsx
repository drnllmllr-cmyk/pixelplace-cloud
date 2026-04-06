import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", description: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const { data, error } = await supabase.functions.invoke("notify-contact", {
        body: {
          name: form.name,
          email: form.email,
          company: form.company,
          description: form.description,
        },
      });

      if (error) {
        throw new Error(error.message || "Failed to submit the message.");
      }

      if (data?.success === true) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", description: "" });
      } else {
        throw new Error(data?.error || "Submission was not confirmed. Please try again.");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setErrorMessage(message);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">
            Contact Us
          </h2>
          <p className="text-xl md:text-2xl font-display font-semibold text-foreground mb-1">
            Get More Customers with a Better Website
          </p>
          <a href="tel:5615035443" className="text-primary hover:text-primary/80 font-bold text-lg transition-colors">
            (561) 503-5443
          </a>
          <p className="text-muted-foreground mt-3">Fast, modern websites starting at $349. Simple, affordable, and built to help your business grow.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass glow-cyan rounded-2xl p-10 text-center space-y-4"
            >
              <CheckCircle2 className="mx-auto text-green-400" size={48} />
              <h3 className="text-xl font-display font-semibold text-foreground">Message Sent!</h3>
              <p className="text-muted-foreground">We'll get back to you shortly at <strong>support@pixelplace.cloud</strong>.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass glow-cyan rounded-2xl p-8 space-y-5"
            >
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-3 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                  >
                    <AlertCircle size={18} className="shrink-0" />
                    <span>{errorMessage} If this keeps happening, email support@pixelplace.cloud.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {[
                { key: "name", label: "Name", type: "text" },
                { key: "email", label: "Email", type: "email" },
                { key: "company", label: "Company", type: "text" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-sm font-display text-muted-foreground mb-2">{f.label}</label>
                  <input
                    type={f.type}
                    required={f.key !== "company"}
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    disabled={isSubmitting}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-display text-muted-foreground mb-2">Project Description</label>
                <textarea
                  rows={4}
                  required
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow w-full py-3.5 rounded-lg font-semibold text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;
