import { motion } from "framer-motion";
import cyberPentest from "@/assets/cyber-pentest.jpg";
import cyberAssessment from "@/assets/cyber-assessment.jpg";
import cyberReporting from "@/assets/cyber-reporting.jpg";

const projects = [
  { title: "Penetration Testing", tag: "Offensive Security", image: cyberPentest },
  { title: "Security Assessments", tag: "Vulnerability Analysis", image: cyberAssessment },
  { title: "Detailed Reporting", tag: "Documentation", image: cyberReporting },
];

const PortfolioSection = () => (
  <section id="cyber security" className="relative py-24 bg-grid">
    <div className="absolute inset-0 bg-radial-glow" />
    <div className="relative z-10 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Cyber <span className="text-gradient-primary">Security</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional Offensive Cyber Security services; lead by Senior Penetration Tester with 20 years of professional experience in technology.
        </p>
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
            <div className="h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={640}
                height={512}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
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
