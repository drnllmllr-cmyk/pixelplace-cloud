import { motion } from "framer-motion";
import { Headphones, Check, Building2, Stethoscope, Scale, HardHat, Fuel, Briefcase, Printer, Server, Network, Cloud, ArrowRight, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";

const industries = [
  { icon: Briefcase, label: "MSPs" },
  { icon: Stethoscope, label: "Dentist Offices" },
  { icon: Building2, label: "Tax Firms" },
  { icon: Scale, label: "Law Firms" },
  { icon: HardHat, label: "Construction Sites" },
  { icon: Briefcase, label: "Small Businesses" },
  { icon: Fuel, label: "Gas Stations" },
];

const platforms = [
  "Office 365", "QuickBooks", "Argus", "Wolters Kluwer", "Marshall & Swift",
  "Bluebeam", "Google Suite", "Canon Printers", "HP Printers", "Xerox Printers",
  "Print Servers", "File Servers", "Network Administration",
];

const services = [
  {
    icon: Clock,
    name: "Hourly Support",
    price: "$75.00",
    period: "/per hour",
    description: "On-demand expert help when you need it — no contract, billed by the hour.",
    gradient: "from-primary to-primary/60",
    features: [
      "Remote troubleshooting & repair",
      "Office 365 / Google Workspace help",
      "Printer, server & network fixes",
      "QuickBooks, Argus, Bluebeam support",
      "Response within business hours",
    ],
  },
  {
    icon: Shield,
    name: "Monthly Support",
    price: "$375.00",
    period: "/per month",
    description: "Predictable monthly coverage for individuals and very small teams.",
    gradient: "from-primary to-accent/60",
    popular: true,
    features: [
      "Priority remote help desk",
      "Patch & update management",
      "Endpoint monitoring",
      "Email & account administration",
      "Printer & device management",
      "Monthly health report",
    ],
  },
  {
    icon: Briefcase,
    name: "Business Support",
    price: "$899.00",
    period: "/per month",
    description: "Full managed help desk for growing businesses across all platforms.",
    gradient: "from-accent to-primary/60",
    features: [
      "Unlimited remote help desk",
      "Server, network & printer management",
      "Office 365 / Google Workspace admin",
      "Backup & disaster recovery oversight",
      "Security monitoring & hardening",
      "Onboarding & offboarding",
      "Dedicated technician",
    ],
  },
];

const PAY_LINK = "https://buy.stripe.com/3cI8wQ3jW7571D19LI7Zu0d";

const HelpDeskSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <VideoBackground opacity={0.4} overlay={0.6} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8">
              <Headphones size={16} className="text-primary" />
              <span className="text-sm font-display text-primary">Managed Help Desk</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Premium <span className="text-gradient-primary">Help Desk Support</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Real experience supporting MSPs, dentist offices, tax firms, law firms, construction sites,
              small businesses and gas stations — across every platform you rely on.
            </p>
            <a
              href="https://remotedesktop.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow px-8 py-4 rounded-xl font-display font-semibold text-primary-foreground inline-flex items-center justify-center gap-2"
            >
              Start Remote Support <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            Industries <span className="text-gradient-primary">We Support</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-5 text-center border border-border/40 card-glow"
              >
                <ind.icon size={28} className="text-primary mx-auto mb-3" />
                <p className="text-sm font-display text-foreground">{ind.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            Platforms <span className="text-gradient-primary">& Systems</span>
          </motion.h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Deep, real-world experience across the tools your business actually uses every day.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {platforms.map((p) => (
              <span key={p} className="glass px-4 py-2 rounded-full text-sm font-display text-foreground border border-border/40">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Choose Your <span className="text-gradient-primary">Support Plan</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a single hour to fully managed business support — pick what fits and we'll handle the rest.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative glass rounded-2xl p-8 border border-border/50 card-glow group ${tier.popular ? "md:-mt-4 md:mb-[-1rem]" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-display font-bold tracking-wider">
                    MOST POPULAR
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center mb-6`}>
                  <tier.icon size={24} className="text-primary-foreground" />
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-display font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/#contact"
                  className={`block w-full py-3 rounded-xl font-display font-semibold text-sm transition-all text-center ${
                    tier.popular
                      ? "btn-glow text-primary-foreground"
                      : "border border-border/60 text-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpDeskSupport;
