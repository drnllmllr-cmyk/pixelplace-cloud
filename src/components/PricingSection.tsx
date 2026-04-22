import { motion } from "framer-motion";
import { Check, Globe, Monitor } from "lucide-react";

const tiers = [
  {
    name: "Website Development",
    price: "$499.00",
    period: "/per website",
    description: "Elite AI & Experienced Developers delivering secure, high-performance websites and applications — built and deployed using modern platforms like GitHub, Cloudflare, WordPress, Wix, GoDaddy, and more.",
    icon: Globe,
    glow: "glow-cyan",
    gradient: "from-primary to-primary/60",
    popular: true,
    payLink: "https://buy.stripe.com/7sYdRa9IkgFH3L90b87Zu0a",
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
    price: "$899.00",
    period: "/per app",
    description: "Custom application development with modern frameworks, backend integration, and seamless deployment",
    icon: Monitor,
    glow: "glow-cyan",
    gradient: "from-primary to-accent/60",
    payLink: "https://buy.stripe.com/eVq7sM4o00GJ95t9LI7Zu0b",
    features: [
      "Back End App Development",
      "API Integration & Development",
      "Database Design & Management",
      "Cloud Deployment & Hosting",
      "Ongoing Maintenance & Support",
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
            Major Discount! <span className="text-gradient-primary">This sale won't last long</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your needs. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="block w-full py-3 rounded-xl font-display font-semibold text-sm transition-all text-center border border-border/60 text-foreground hover:border-primary/40 hover:text-primary"
                >
                  Pay Now
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
