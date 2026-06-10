import { motion } from "framer-motion";
import { Sparkles, Code2, Headphones, FileText, ArrowRight } from "lucide-react";
import ParticleField from "./ParticleField";
import VideoBackground from "./VideoBackground";

const headlineLines = [
  { prefix: "Premium ", accent: "Web Development", suffix: "," },
  { prefix: "Managed ", accent: "Help Desk", suffix: "" },
  { prefix: "and ", accent: "Professional PDF Guides", suffix: "" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-grid pt-28 pb-16 md:pt-32 md:pb-20">
      {/* HD looping background video */}
      <VideoBackground opacity={0.45} overlay={0.55} />

      <ParticleField />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 text-xs sm:text-sm font-body tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-gradient-primary font-semibold">Premium Digital Solutions</span>
          </div>
        </motion.div>

        {/* Headline — rolls in line by line */}
        <div className="mb-4 [perspective:1200px]">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
            {headlineLines.map((line, i) => (
              <span key={i} className="block overflow-hidden py-1">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0, rotateX: -55, filter: "blur(8px)" }}
                  animate={{ y: "0%", opacity: 1, rotateX: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.25 + i * 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformOrigin: "50% 100%" }}
                >
                  <span className="text-foreground/95">{line.prefix}</span>
                  <span className="relative inline-block">
                    <span className="text-gradient-primary drop-shadow-[0_0_30px_hsl(var(--primary)/0.55)]">
                      {line.accent}
                    </span>
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.7, delay: 0.6 + i * 0.35, ease: "easeOut" }}
                    />
                  </span>
                  <span className="text-foreground/95">{line.suffix}</span>
                </motion.span>
              </span>
            ))}
          </h1>
        </div>


        {/* Service chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 mb-10"
        >
          {[
            { icon: Code2, label: "Web Development" },
            { icon: Headphones, label: "Help Desk Support" },
            { icon: FileText, label: "PDF Guides" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/40 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] text-xs sm:text-sm font-body text-muted-foreground hover:text-foreground"
            >
              <Icon className="w-3.5 h-3.5 text-primary" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-glow group px-8 py-3.5 rounded-lg font-semibold text-primary-foreground text-base inline-flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="/website-development#services"
            className="glass px-8 py-3.5 rounded-lg font-semibold text-foreground hover:border-primary/40 hover:shadow-[0_0_25px_hsl(var(--primary)/0.25)] transition-all duration-300 text-base inline-flex items-center justify-center"
          >
            View Solutions
          </a>
        </motion.div>

        {/* Tagline panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Glow border */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-neon-cyan/40 via-primary/40 to-neon-purple/40 opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
            <div className="relative glass-strong rounded-2xl px-6 sm:px-10 py-7 sm:py-9 overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/40 rounded-br-2xl" />

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                {/* Stat */}
                <div className="flex items-baseline gap-1 leading-none">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-gradient-primary drop-shadow-[0_0_25px_hsl(var(--primary)/0.5)]">
                    20+
                  </span>
                  <span className="text-sm sm:text-base font-body uppercase tracking-widest text-muted-foreground">
                    yrs
                  </span>
                </div>

                {/* Divider */}
                <div className="hidden sm:block h-16 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

                {/* Text */}
                <div className="text-left">
                  <p className="text-[10px] sm:text-xs font-body uppercase tracking-[0.25em] text-primary mb-1">
                    Experience &amp; Service
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold leading-tight">
                    <span className="text-foreground">White Glove </span>
                    <span className="text-gradient-primary">Customer Service</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
