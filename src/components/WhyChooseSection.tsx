import { motion } from "framer-motion";
import { Scaling, LayoutDashboard, Camera, Rocket } from "lucide-react";

const reasons = [
  { icon: Scaling, title: "Scalable Platforms", desc: "Websites and apps that grow with your business using modern cloud infrastructure." },
  { icon: LayoutDashboard, title: "Modern Web Architecture", desc: "Fast, accessible, SEO-optimized web applications using GitHub, Cloudflare, WordPress, and more." },
  { icon: Camera, title: "AI-Enhanced Wallpapers", desc: "Professional photography elevated with cutting-edge AI for stunning 4K digital art." },
  { icon: Rocket, title: "Rapid Deployment", desc: "From concept to launch in days — not months. We move fast without compromising quality." },
];

const WhyChooseSection = () => (
  <section className="relative py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Why Choose <span className="text-gradient-primary">PixelPlace</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass card-glow rounded-xl p-6 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <r.icon size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
