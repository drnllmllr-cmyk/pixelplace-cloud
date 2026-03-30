import { motion } from "framer-motion";
import { Check, Image, Globe, Shield, Search, Network, Wifi, Server, Monitor, MessageSquare } from "lucide-react";

const tiers = [
  {
    name: "HD Wallpaper",
    price: "$9.99",
    period: "/per photo",
    description: "Beautiful, original images captured by a professional photographer and elevated using cutting-edge AI enhancements—delivering striking visuals perfect for portraits and digital wallpapers",
    icon: Image,
    glow: "glow-green",
    gradient: "from-accent to-accent/60",
    features: [
      "Outdoor Nature",
      "Historic",
      "National parks",
      "Travel",
      "Florida",
    ],
  },
  {
    name: "Website Development",
    price: "$349.00",
    period: "/per website",
    description: "AI & Experience Developers working together building and deploying your websites",
    icon: Globe,
    glow: "glow-cyan",
    gradient: "from-primary to-primary/60",
    popular: true,
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
    glow: "glow-cyan",
    gradient: "from-primary to-accent/60",
    features: [
      "Back End App Development",
      "API Integration & Development",
      "Database Design & Management",
      "Cloud Deployment & Hosting",
      "Ongoing Maintenance & Support",
    ],
  },
  {
    name: "Website Pen Test",
    price: "$349.00",
    period: "/per website",
    description: "Manual penetration testing for websites with comprehensive vulnerability assessment and detailed reporting",
    icon: Shield,
    glow: "glow-purple",
    gradient: "from-secondary to-secondary/60",
    features: [
      "OWASP Top 10 Testing",
      "Injection & XSS Testing",
      "CSRF & SSRF Analysis",
      "Authentication Testing",
      "Session Management Review",
      "Detailed Remediation Report",
    ],
  },
  {
    name: "App Pen Test",
    price: "$449.00",
    period: "/per app",
    description: "In-depth application penetration testing for mobile and web apps with manual exploitation techniques",
    icon: Server,
    glow: "glow-purple",
    gradient: "from-secondary to-primary/60",
    features: [
      "Mobile & Web App Testing",
      "JWT & OAuth Analysis",
      "Business Logic Testing",
      "API Integration Testing",
      "Privilege Escalation Checks",
      "Comprehensive Reporting",
    ],
  },
  {
    name: "API Pen Test",
    price: "$99.00",
    period: "/per API",
    description: "Targeted API security testing covering authentication, authorization, and data exposure vulnerabilities",
    icon: Wifi,
    glow: "glow-purple",
    gradient: "from-primary to-secondary/60",
    features: [
      "REST & GraphQL Testing",
      "Authentication Bypass",
      "Rate Limiting Analysis",
      "Data Exposure Testing",
      "Injection Attacks",
      "Security Report & Fixes",
    ],
  },
  {
    name: "Security Assessment",
    price: "$99.00",
    period: "/per vulnerability assessment",
    description: "Detailed vulnerability scanning and security assessments to strengthen your business",
    icon: Search,
    glow: "glow-green",
    gradient: "from-accent to-secondary/60",
    features: [
      "Port & Network Scanning",
      "OSINT",
      "Vulnerability Assessment",
    ],
  },
  {
    name: "Network Assessment",
    price: "$199.00",
    period: "/per assessment",
    description: "Comprehensive network infrastructure analysis, topology review, and wireless security auditing",
    icon: Network,
    glow: "glow-cyan",
    gradient: "from-primary to-accent/60",
    features: [
      "Network Topology Mapping",
      "Firewall Rule Review",
      "Segmentation Testing",
      "Wireless Security Audit",
      "Infrastructure Hardening",
    ],
  },
  {
    name: "Consultation",
    price: "$100.00",
    period: "/per session",
    description: "Identify issues fast and get clear, actionable solutions for networks, security, and systems. No guesswork — just expert answers.",
    icon: MessageSquare,
    glow: "glow-green",
    gradient: "from-accent to-primary/60",
    features: [
      "Network Troubleshooting",
      "Security Strategy Review",
      "System Architecture Guidance",
      "Risk Assessment & Prioritization",
      "Expert Recommendations",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Simple, <span className="text-gradient-primary">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your needs. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass rounded-2xl p-8 border border-border/50 card-glow group ${
                tier.popular ? "md:-mt-4 md:mb-[-1rem]" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-display font-bold tracking-wider">
                  MOST POPULAR
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center mb-6 group-hover:${tier.glow} transition-shadow`}>
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

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-3 rounded-xl font-display font-semibold text-sm transition-all ${
                  tier.popular
                    ? "btn-glow text-primary-foreground"
                    : "border border-border/60 text-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                Pay Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
