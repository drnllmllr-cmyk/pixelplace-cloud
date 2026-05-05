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
          <a
            href="/website-development#services"
            className="glass px-8 py-3.5 rounded-lg font-semibold text-foreground hover:border-primary/40 transition-all duration-300 text-base inline-flex items-center justify-center"
          >
            View Solutions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <p className="relative text-2xl md:text-4xl font-display font-bold leading-tight tracking-tight">
            <span className="text-foreground">We help businesses turn their websites into </span>
            <span className="text-gradient-primary">lead-generating machines</span>
          </p>
          <div className="mx-auto mt-4 h-[2px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
