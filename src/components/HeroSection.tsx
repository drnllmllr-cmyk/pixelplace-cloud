import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-grid pt-28 pb-16 md:pt-32 md:pb-20">
      <ParticleField />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Premium Web Development &{" "}
            <span className="text-gradient-primary">Digital Solutions</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
        >
          for Modern Business
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-glow px-8 py-3.5 rounded-lg font-semibold text-primary-foreground text-base"
          >
            Get Started
          </button>
          <button
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="glass px-8 py-3.5 rounded-lg font-semibold text-foreground hover:border-primary/40 transition-all duration-300 text-base"
          >
            View Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
