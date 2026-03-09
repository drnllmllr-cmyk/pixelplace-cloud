import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, NexaFlow",
    quote: "PixelPlace transformed our cloud infrastructure. Migration was seamless and we saw a 40% improvement in performance overnight.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, Vaultrix",
    quote: "Their cybersecurity audit uncovered vulnerabilities we never knew existed. We now sleep easy knowing our data is protected.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Elena Petrova",
    role: "VP Engineering, DataPulse",
    quote: "The AI automation tools they built cut our manual processes by 60%. Absolutely game-changing for our team's productivity.",
    rating: 5,
    avatar: "EP",
  },
  {
    name: "James Okafor",
    role: "CEO, CloudBridge",
    quote: "From concept to deployment in weeks, not months. PixelPlace's team delivers enterprise-grade solutions with startup speed.",
    rating: 5,
    avatar: "JO",
  },
];

const trustBadges = [
  { label: "99.99% Uptime", value: "Guaranteed" },
  { label: "50+", value: "Projects Delivered" },
  { label: "SOC 2", value: "Compliant" },
  { label: "24/7", value: "Support" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Trusted by <span className="text-gradient-primary">Innovators</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about working with PixelPlace.cloud
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto"
        >
          {trustBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-4 text-center border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="text-2xl font-display font-bold text-primary">{badge.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{badge.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all group relative"
            >
              <Quote className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors" size={32} />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-display font-bold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
