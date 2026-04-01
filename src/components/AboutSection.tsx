import { motion } from "framer-motion";
import { Globe, Camera, Monitor } from "lucide-react";

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
            PixelPlace.cloud delivers high-performance digital solutions for modern businesses. We specialize in custom website and app development using platforms like GitHub, Cloudflare, WordPress, Wix, GoDaddy, Lovable, and Google Scripts — plus stunning AI-enhanced HD wallpapers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Led by professionals with over 20 years of hands-on experience, we work with startups, small businesses, and enterprise clients to build scalable websites, powerful apps, and beautiful digital content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid gap-5"
        >
          {[
            { icon: Globe, title: "Website Development", desc: "Custom websites built for performance, SEO, and scale" },
            { icon: Monitor, title: "App Development", desc: "Full-stack applications with backend integration and cloud deployment" },
            { icon: Camera, title: "HD Wallpapers", desc: "Professional photography enhanced with AI for stunning digital wallpapers" },
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
