import { motion } from "framer-motion";
import { ShieldCheck, Mail, Globe, Cookie, Lock, UserCheck, FileText, Baby, RefreshCw, LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Section = {
  icon: LucideIcon;
  title: string;
  body?: string;
  bullets?: string[];
};

const sections: Section[] = [
  {
    icon: FileText,
    title: "Information We Collect",
    body: "We may collect the following information when you interact with our website:",
    bullets: [
      "Name",
      "Email address",
      "Phone number",
      "Company name",
      "Information submitted through contact forms",
      "Information related to support requests",
      "Website analytics and usage data",
      "IP address and browser information",
    ],
  },
  {
    icon: UserCheck,
    title: "How We Use Your Information",
    body: "We use collected information to:",
    bullets: [
      "Respond to inquiries and support requests",
      "Provide website development services",
      "Provide application development services",
      "Deliver remote IT and Help Desk support",
      "Process purchases of digital products and PDF guides",
      "Improve our website and services",
      "Communicate updates regarding services",
    ],
  },
  {
    icon: FileText,
    title: "Digital Products",
    body: "PixelPlace.cloud offers downloadable digital products and educational PDF guides. These products are provided for informational and educational purposes only. Unauthorized reproduction, redistribution, or resale of digital products is prohibited.",
  },
  {
    icon: Cookie,
    title: "Cookies and Analytics",
    body: "Our website may use cookies and analytics tools to understand visitor behavior and improve user experience. Cookies may collect:",
    bullets: ["Pages visited", "Time spent on pages", "Browser type", "Device information"],
  },
  {
    icon: Globe,
    title: "Third-Party Services",
    body: "We may use trusted third-party services including:",
    bullets: [
      "Website hosting providers",
      "Payment processors",
      "Analytics platforms",
      "Customer support platforms",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    body: "We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the internet is 100% secure.",
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    body: "You may request to:",
    bullets: [
      "Access your personal information",
      "Correct inaccurate information",
      "Delete your personal information",
      "Opt out of marketing communications",
    ],
  },
  {
    icon: Baby,
    title: "Children's Privacy",
    body: "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children.",
  },
  {
    icon: RefreshCw,
    title: "Changes to This Policy",
    body: "We reserve the right to update this Privacy Policy at any time. Updates will be posted on this page with a revised effective date.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
              <ShieldCheck size={16} className="text-primary" />
              <span className="text-sm font-display text-primary">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight">
              <span className="text-gradient-primary">Privacy Policy</span>
            </h1>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: June 2026</p>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Welcome to <span className="text-primary font-semibold">PixelPlace.cloud</span>. We respect your privacy and are
              committed to protecting any personal information you provide while using our website and services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-6">
            {sections.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.05, 0.3) }}
                  className="glass card-glow rounded-2xl p-6 md:p-8 border border-border/40"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground shrink-0">
                      <Icon size={22} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground pt-2">{s.title}</h2>
                  </div>
                  {s.body && <p className="text-foreground/80 leading-relaxed mb-3">{s.body}</p>}
                  {s.bullets && (
                    <ul className="grid sm:grid-cols-2 gap-2 mt-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-foreground/80">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.title === "Cookies and Analytics" && (
                    <p className="text-sm text-muted-foreground mt-4">You may disable cookies through your browser settings.</p>
                  )}
                  {s.title === "Third-Party Services" && (
                    <p className="text-sm text-muted-foreground mt-4">
                      These providers only receive information necessary to perform their services.
                    </p>
                  )}
                  {s.title === "Your Rights" && (
                    <p className="text-sm text-muted-foreground mt-4">To exercise these rights, contact us using the information below.</p>
                  )}
                </motion.article>
              );
            })}

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl p-8 md:p-10 border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-background"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <Mail size={28} className="text-primary" />
                  <h2 className="font-display text-3xl font-bold text-gradient-primary">Contact Us</h2>
                </div>
                <p className="text-foreground/80 mb-4">
                  If you have questions regarding this Privacy Policy, please contact:
                </p>
                <div className="space-y-2">
                  <p className="font-display text-xl font-semibold text-foreground">PixelPlace.cloud</p>
                  <p className="text-foreground/80">
                    Email:{" "}
                    <a href="mailto:support@pixelplace.cloud" className="text-primary hover:underline font-semibold">
                      support@pixelplace.cloud
                    </a>
                  </p>
                  <p className="text-foreground/80">
                    Website: <span className="text-primary font-semibold">PixelPlace.cloud</span>
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
