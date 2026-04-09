import { motion } from "framer-motion";
import { Code, Layout, Smartphone, Rocket, Check, Globe, Monitor, Shield, Mail, Link2, Search, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Code, title: "Custom Web Apps", desc: "Tailored web applications built with modern frameworks for speed and reliability." },
  { icon: Layout, title: "Responsive Design", desc: "Pixel-perfect layouts that look great on every device and screen size." },
  { icon: Smartphone, title: "Mobile-First", desc: "Optimized for mobile users with progressive web app capabilities." },
  { icon: Rocket, title: "Performance", desc: "Lightning-fast load times with optimized assets and clean code." },
];

const tiers = [
  {
    name: "Website Development",
    price: "$349.00",
    period: "/per website",
    description: "Elite AI & Experienced Developers delivering secure, high-performance websites and applications — built and deployed using modern platforms like GitHub, Cloudflare, WordPress, Wix, GoDaddy, and more.",
    icon: Globe,
    gradient: "from-primary to-primary/60",
    popular: true,
    payLink: "https://buy.stripe.com/dRm28s9Ik3SV81p2jg7Zu00",
    features: [
      "Front End Website Development",
      "Google Sheets, App Scripts",
      "Website Migrations",
      "Domain & DNS Management",
      "Cloudflare, GitHub",
    ],
  },
  {
    name: "App Development",
    price: "$449.00",
    period: "/per app",
    description: "Custom application development with modern frameworks, backend integration, and seamless deployment",
    icon: Monitor,
    gradient: "from-primary to-accent/60",
    payLink: "https://buy.stripe.com/dRmeVe8EgdtvdlJ8HE7Zu01",
    features: [
      "Back End App Development",
      "API Integration & Development",
      "Database Design & Management",
      "Cloud Deployment & Hosting",
      "Ongoing Maintenance & Support",
    ],
  },
  {
    name: "Website Security & Protection",
    price: "$199.00",
    period: "/per website",
    description: "Protect your website from threats with vulnerability scanning, SSL enforcement, and bot protection",
    icon: Shield,
    gradient: "from-secondary to-secondary/60",
    payLink: "",
    features: [
      "Basic vulnerability scan",
      "Security hardening",
      "SSL / HTTPS enforcement",
      "Bot & attack protection (Cloudflare)",
    ],
  },
  {
    name: "Business Email Setup & Protection",
    price: "$150.00",
    period: "/per setup",
    description: "Professional email configuration with spam filtering and security for your business domain",
    icon: Mail,
    gradient: "from-accent to-accent/60",
    payLink: "",
    features: [
      "Professional email (name@company.com)",
      "MX record configuration",
      "Spam filtering (AppRiver / Microsoft / Google)",
      "Email security setup",
    ],
  },
  {
    name: "Domain & DNS Management",
    price: "$99.00",
    period: "/per domain",
    description: "Complete domain setup with DNS configuration, record management, and seamless domain migration",
    icon: Link2,
    gradient: "from-primary to-secondary/60",
    payLink: "",
    features: [
      "Domain connection",
      "DNS configuration",
      "MX, A, CNAME records",
      "Domain migration",
    ],
  },
  {
    name: "SEO Optimization (Starter)",
    price: "$115.00",
    period: "/per website",
    description: "Get found on Google with indexing, meta tags, speed optimization, and mobile-first improvements",
    icon: Search,
    gradient: "from-accent to-primary/60",
    payLink: "",
    features: [
      "Google indexing",
      "Meta tags",
      "Page speed optimization",
      "Mobile optimization",
    ],
  },
  {
    name: "Website Maintenance & Support",
    price: "$75.00",
    period: "/per month",
    description: "Keep your website running smoothly with updates, monitoring, and ongoing support",
    icon: Wrench,
    gradient: "from-secondary to-accent/60",
    payLink: "",
    features: [
      "Updates & fixes",
      "Performance monitoring",
      "Security monitoring",
      "Minor changes",
    ],
  },
];

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8">
              <Code size={16} className="text-primary" />
              <span className="text-sm font-display text-primary">Professional Web Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Website <span className="text-gradient-primary">Development</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Custom websites and web applications built for performance and scalability. Schedule your consultation and get started deploying your applications.
            </p>
            <Link
              to="/#contact"
              className="btn-glow px-8 py-4 rounded-xl font-display font-semibold text-primary-foreground inline-flex items-center justify-center gap-2"
            >
              Free Consultation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              What We <span className="text-gradient-primary">Build</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass card-glow rounded-xl p-6"
              >
                <div className="w-14 h-14 rounded-lg glass flex items-center justify-center mb-5 text-primary group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-400">
                  <f.icon size={28} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
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
              Major Discount! <span className="text-gradient-primary">This sale won't last long</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a plan that fits your needs. No hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative glass rounded-2xl p-8 border border-border/50 card-glow group ${
                  tier.popular ? "md:-mt-4 md:mb-[-1rem]" : ""
                }`}
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

                <div className="mb-8 space-y-1">
                  <div>
                    <span className="text-4xl font-display font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground text-sm">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {tier.payLink ? (
                  <a
                    href={tier.payLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 rounded-xl font-display font-semibold text-sm transition-all text-center ${
                      tier.popular
                        ? "btn-glow text-primary-foreground"
                        : "border border-border/60 text-foreground hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    Pay Now
                  </a>
                ) : (
                  <Link
                    to="/#contact"
                    className="block w-full py-3 rounded-xl font-display font-semibold text-sm transition-all text-center border border-border/60 text-foreground hover:border-primary/40 hover:text-primary"
                  >
                    Pay Now
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
