import { motion } from "framer-motion";
import { Server, Lock, Cpu } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="relative py-24">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            About <span className="text-gradient-primary">PixelPlace</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            PixelPlace.cloud delivers secure, high-performance digital solutions for modern businesses. We specialize in custom website development, professional penetration testing, security assessments, and AI-enhanced digital content to help brands grow and stay protected online.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Led by professionals with over 20 years of hands-on experience, we work with startups, small businesses, and enterprise clients to build scalable systems, identify vulnerabilities, and strengthen their digital presence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid gap-5"
        >
          {[
            { icon: Server, title: "Cloud Architecture", desc: "Distributed systems designed for 99.99% uptime" },
            { icon: Lock, title: "Secure Infrastructure", desc: "Zero-trust security from the ground up" },
            { icon: Cpu, title: "AI-Powered Tools", desc: "Smart automation that adapts to your workflows" },
          ].map((item, i) => (
            <div key={i} className="glass card-glow rounded-xl p-5 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
