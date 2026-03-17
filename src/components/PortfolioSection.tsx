import { motion } from "framer-motion";

const projects = [
  { title: "Cloud Dashboard", tag: "Infrastructure", gradient: "from-neon-cyan/20 to-neon-blue/10" },
  { title: "Security Operations Center", tag: "Cybersecurity", gradient: "from-neon-green/20 to-neon-cyan/10" },
  { title: "AI Analytics Platform", tag: "AI Solutions", gradient: "from-neon-purple/20 to-neon-magenta/10" },
];

const PortfolioSection = () => (
  <section id="penetration testing" className="relative py-24 bg-grid">
    <div className="absolute inset-0 bg-radial-glow" />
    <div className="relative z-10 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Our <span className="text-gradient-primary">Solutions</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Enterprise platforms built for scale, security, and intelligence.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group glass card-glow rounded-xl overflow-hidden"
          >
            <div className={`h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
              {/* Mockup lines */}
              <div className="absolute inset-4 border border-foreground/5 rounded-lg">
                <div className="h-3 bg-foreground/5 rounded-t-lg" />
                <div className="p-3 space-y-2">
                  <div className="h-2 bg-foreground/5 rounded w-3/4" />
                  <div className="h-2 bg-foreground/5 rounded w-1/2" />
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-12 bg-foreground/5 rounded" />
                    <div className="h-12 bg-foreground/5 rounded" />
                    <div className="h-12 bg-foreground/5 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <span className="text-xs font-display text-primary mb-2 block">{p.tag}</span>
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
