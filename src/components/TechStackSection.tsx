import { motion } from "framer-motion";
import { Cloud, Brain, ShieldCheck, Globe, Workflow } from "lucide-react";

const techs = [
  { icon: Cloud, label: "Cloud", color: "text-neon-cyan" },
  { icon: Brain, label: "AI", color: "text-neon-purple" },
  { icon: ShieldCheck, label: "Security", color: "text-neon-green" },
  { icon: Globe, label: "Web Platforms", color: "text-neon-blue" },
  { icon: Workflow, label: "Automation", color: "text-neon-magenta" },
];

const TechStackSection = () => (
  <section id="hd wallpaper" className="relative py-24 bg-grid">
    <div className="absolute inset-0 bg-radial-glow" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold mb-16"
      >
        Technology <span className="text-gradient-primary">Stack</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {techs.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col items-center gap-3"
          >
            <div className="w-20 h-20 glass card-glow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <t.icon size={36} className={t.color} />
            </div>
            <span className="text-sm font-display font-medium text-muted-foreground group-hover:text-foreground transition-colors">{t.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
