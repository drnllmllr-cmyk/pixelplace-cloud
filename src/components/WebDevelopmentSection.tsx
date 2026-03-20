import { motion } from "framer-motion";
import { Code, Layout, Smartphone, Rocket } from "lucide-react";

const features = [
  { icon: Code, title: "Custom Web Apps", desc: "Tailored web applications built with modern frameworks for speed and reliability." },
  { icon: Layout, title: "Responsive Design", desc: "Pixel-perfect layouts that look great on every device and screen size." },
  { icon: Smartphone, title: "Mobile-First", desc: "Optimized for mobile users with progressive web app capabilities." },
  { icon: Rocket, title: "Performance", desc: "Lightning-fast load times with optimized assets and clean code." },
];

const WebDevelopmentSection = () => (
  <section id="website development" className="relative py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Website <span className="text-gradient-primary">Development</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Custom websites and web applications built for performance, scalability, and security.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glass card-glow rounded-xl p-6"
          >
            <div className="w-14 h-14 rounded-lg glass flex items-center justify-center mb-5 text-primary group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-400">
              <f.icon size={28} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WebDevelopmentSection;
