import { motion } from "framer-motion";

import cyberPentest from "@/assets/cyber-pentest.jpg";
import cyberAssessment from "@/assets/cyber-assessment.jpg";
import cyberReporting from "@/assets/cyber-reporting.jpg";

const projects = [
  {
    title: "Penetration Testing",
    tag: "Offensive Security",
    image: cyberPentest,
    backContent: {
      heading: "Professional Penetration Testing",
      details: [
        "Manual web & application testing using Kali Linux",
        "OWASP Top 10 vulnerability exploitation",
        "SQL Injection, XSS, CSRF, SSRF attacks",
        "Authentication & session management testing",
        "API security testing & JWT analysis",
        "Network penetration & privilege escalation",
        "Burp Suite, Metasploit, Nmap, Nikto toolchain",
        "Comprehensive remediation reporting",
      ],
    },
  },
  {
    title: "Security Assessments",
    tag: "Vulnerability Analysis",
    image: cyberAssessment,
    backContent: {
      heading: "Comprehensive Security Assessments",
      details: [
        "Full-scope vulnerability scanning & analysis",
        "OSINT reconnaissance & threat modeling",
        "Port scanning & network service enumeration",
        "Configuration & compliance auditing",
        "Cloud security posture reviews (AWS, Azure, GCP)",
        "Risk scoring & prioritized findings",
        "OpenVAS, Nessus, Shodan, theHarvester tools",
        "Executive & technical summary reports",
      ],
    },
  },
  {
    title: "Detailed Reporting",
    tag: "Documentation",
    image: cyberReporting,
    backContent: {
      heading: "Detailed Security Reporting",
      details: [
        "Executive summary for stakeholders",
        "Technical findings with proof-of-concept",
        "CVSS risk-rated vulnerability classification",
        "Step-by-step remediation guidance",
        "Compliance mapping (SOC 2, PCI-DSS, HIPAA)",
        "Re-test verification & sign-off",
        "Visual attack chain documentation",
        "Ongoing advisory & support included",
      ],
    },
  },
];

const FlipCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="flip-card-container h-[340px] cursor-pointer"
    >
      <div className="flip-card-inner">

        {/* Front */}
        <div className="absolute inset-0 backface-hidden glass card-glow rounded-xl overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              width={640}
              height={512}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <span className="text-xs font-display text-primary mb-2 block">{project.tag}</span>
            <h3 className="font-display text-lg font-semibold">{project.title}</h3>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 glass card-glow rounded-xl overflow-hidden p-6 flex flex-col justify-center">
          <h3 className="font-display text-base font-bold text-primary mb-3">
            {project.backContent.heading}
          </h3>
          <ul className="space-y-1.5">
            {project.backContent.details.map((detail, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5 shrink-0">▸</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

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
          <FlipCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
