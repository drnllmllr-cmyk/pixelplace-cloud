import { motion } from "framer-motion";
import { Check, Zap, Shield, Rocket } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$2,499",
    period: "/project",
    description: "Perfect for small businesses getting started",
    icon: Zap,
    glow: "glow-green",
    gradient: "from-accent to-accent/60",
    features: [
      "Custom website or web app",
      "Responsive design",
      "Basic SEO setup",
      "3 rounds of revisions",
      "30-day post-launch support",
    ],
  },
  {
    name: "Pro",
    price: "$6,999",
    period: "/project",
    description: "For growing teams that need robust solutions",
    icon: Shield,
    glow: "glow-cyan",
    gradient: "from-primary to-primary/60",
    popular: true,
    features: [
      "Everything in Starter",
      "Cloud infrastructure setup",
      "API integrations",
      "Advanced analytics",
      "CI/CD pipeline",
      "90-day support & maintenance",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large-scale operations",
    icon: Rocket,
    glow: "glow-purple",
    gradient: "from-secondary to-secondary/60",
    features: [
      "Everything in Pro",
      "Dedicated engineering team",
      "24/7 priority support",
      "SOC 2 compliance",
      "Custom SLAs",
      "On-call incident response",
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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
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

              <button
                className={`w-full py-3 rounded-xl font-display font-semibold text-sm transition-all ${
                  tier.popular
                    ? "btn-glow text-primary-foreground"
                    : "border border-border/60 text-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {tier.price === "Custom" ? "Contact Us" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
