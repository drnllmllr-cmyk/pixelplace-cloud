import { motion } from "framer-motion";
import { Globe, Monitor, Scaling, LayoutDashboard, Shield, Rocket, Award, Clock, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const expertise = [
  { icon: Globe, title: "Website Development", desc: "Custom websites built for performance, SEO, and scale" },
  { icon: Monitor, title: "App Development", desc: "Full-stack applications with backend integration and cloud deployment" },
];

const reasons = [
  { icon: Scaling, title: "Scalable Platforms", desc: "Websites and apps that grow with your business using modern cloud infrastructure." },
  { icon: LayoutDashboard, title: "Modern Web Architecture", desc: "Fast, accessible, SEO-optimized web applications using GitHub, Cloudflare, WordPress, and more." },
  { icon: Shield, title: "Reliable & Secure", desc: "Best practices in security, performance, and uptime so your site is always online." },
  { icon: Rocket, title: "Rapid Deployment", desc: "From concept to launch in days — not months. We move fast without compromising quality." },
];

const stats = [
  { icon: Clock, value: "20+", label: "Years of Experience" },
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Star, value: "99%", label: "Client Satisfaction" },
  { icon: Award, value: "1000+", label: "Projects Delivered" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8">
              <Award size={16} className="text-primary" />
              <span className="text-sm font-display text-primary">Over Two Decades of Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              About <span className="text-gradient-primary">PixelPlace</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              PixelPlace.cloud delivers high-performance digital solutions for modern businesses.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              We specialize in custom website and app development using platforms like GitHub, Cloudflare, WordPress, Wix, GoDaddy, Lovable, and Google Scripts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-border/50 text-center card-glow"
              >
                <s.icon size={28} className="text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">{s.value}</div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-10 border border-border/50">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-foreground">
              20+ Years of <span className="text-gradient-primary">Hands-On Experience</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Led by professionals with over 20 years of hands-on experience, we work with startups, small businesses, and enterprise clients to build scalable websites and powerful applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team combines deep technical knowledge with a passion for delivering results. From front-end design to backend architecture, we handle every layer of your project with precision and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient-primary">Expertise</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass card-glow rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Why Choose <span className="text-gradient-primary">PixelPlace</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Backed by 20+ years of experience, here's what sets us apart.
            </p>
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

      <Footer />
    </div>
  );
};

export default About;
