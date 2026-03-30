import { motion } from "framer-motion";
import { Globe, Cloud, ShieldCheck, Bot, Network } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Modern, responsive web applications built with cutting-edge frameworks and optimized for performance.", color: "neon-cyan" },
  { icon: Cloud, title: "HD Wallpaper", desc: "HD AI Enhanced beautiful pictures of South Florida, beaches, historic locations, national parks and more.", color: "neon-blue" },
  { icon: ShieldCheck, title: "Security Assessments", desc: "Security scanning, vulnerability scanning, open ports, reporting, Red Teaming.", color: "neon-green" },
  { icon: Bot, title: "Penetration Testing", desc: "Remote Penetration Testing, Web Applications, Mobile Apps, APIs, Cloud Infrastructure, Networking Penetration Testing.", color: "neon-purple" },
  { icon: Network, title: "Network Assessments", desc: "Comprehensive network infrastructure analysis, topology mapping, firewall rule review, segmentation testing, and wireless security auditing.", color: "neon-cyan" },
];

const colorMap: Record<string, string> = {
  "neon-cyan": "text-neon-cyan group-hover:shadow-[0_0_30px_hsl(186_100%_50%/0.3)]",
  "neon-blue": "text-neon-blue group-hover:shadow-[0_0_30px_hsl(210_100%_55%/0.3)]",
  "neon-green": "text-neon-green group-hover:shadow-[0_0_30px_hsl(160_80%_45%/0.3)]",
  "neon-purple": "text-neon-purple group-hover:shadow-[0_0_30px_hsl(270_80%_55%/0.3)]",
};

const ServicesSection = () => (
  <section id="services" className="relative py-24 bg-grid">
    <div className="absolute inset-0 bg-radial-glow" />
    <div className="relative z-10 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Our <span className="text-gradient-primary">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">End-to-end digital solutions engineered for the modern enterprise.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass card-glow rounded-xl p-6 cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-lg glass flex items-center justify-center mb-5 transition-all duration-400 ${colorMap[s.color]}`}>
              <s.icon size={28} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
