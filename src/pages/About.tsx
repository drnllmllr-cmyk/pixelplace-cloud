import { motion } from "framer-motion";
import { Globe, Shield, Mail, Search, Wrench, Award, Clock, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate, useLocation } from "react-router-dom";

const services = [
  { icon: Globe, title: "Websites & Web Apps", desc: "Custom, fast, and built to convert" },
  { icon: Shield, title: "Security & Protection", desc: "Keep your business and customers safe" },
  { icon: Mail, title: "Email Setup", desc: "Look professional from day one" },
  { icon: Search, title: "SEO", desc: "Get found by local customers searching right now" },
  { icon: Wrench, title: "Maintenance", desc: "We handle it so you don't have to" },
];

const stats = [
  { icon: Clock, value: "20+", label: "Years of Experience" },
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Star, value: "99%", label: "Client Satisfaction" },
  { icon: Award, value: "1000+", label: "Projects Delivered" },
];

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToContact = () => {
    if (location.pathname !== "/") {
      navigate("/#contact");
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
              At PixelPlace.cloud, we build fast, modern websites and applications that help businesses attract customers and grow.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mb-4">
              Led by two senior tech professionals with 20+ years of experience, we’ve worked with organizations including NASA Headquarters, the Federal Reserve, and law enforcement agencies, delivering 500+ successful projects across small businesses and enterprise environments.
            </p>
            <p className="text-base text-foreground font-semibold max-w-3xl mx-auto">
              No outsourcing. No junior developers. Just real experience, clean execution, and results that make your business look professional and credible online.
            </p>
            <p className="text-base text-primary font-semibold max-w-2xl mx-auto mt-4">
              Enterprise-level quality — without the enterprise price.
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

      {/* What We Do */}
      <section className="py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              What We <span className="text-gradient-primary">Do</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
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

      {/* CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Contact Us <span className="text-gradient-primary">Today!</span>
            </h2>
            <button
              onClick={goToContact}
              className="btn-glow px-8 py-3.5 rounded-lg font-semibold text-primary-foreground text-base mt-6"
            >
              Schedule Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
