import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you! We'll be in touch soon.");
    setForm({ name: "", email: "", company: "", description: "" });
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
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground">Ready to build something incredible? Let's talk.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass glow-cyan rounded-2xl p-8 space-y-5"
        >
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
            />
          </div>
          <button type="submit" className="btn-glow w-full py-3.5 rounded-lg font-semibold text-primary-foreground flex items-center justify-center gap-2">
            <Send size={18} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
