import { motion } from "framer-motion";
import { Globe, Shield, Mail, Search, Wrench, Award, Clock, Users, Star, Briefcase, Code, Cpu, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import founderImg from "@/assets/founder-darnell.png";
import serverRackImg from "@/assets/darnell-server-rack.png.asset.json";

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

const experience = [
  "NASA Headquarters",
  "The Federal Reserve Board",
  "Major financial and real estate organizations",
  "Federal and government agencies",
  "Small businesses and startups",
  "Enterprise technology environments",
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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8">
              <Award size={16} className="text-primary" />
              <span className="text-sm font-display text-primary">Over Two Decades of Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              About <span className="text-gradient-primary">PixelPlace.cloud</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Meet The Founder */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs md:text-sm font-display uppercase tracking-[0.3em] text-primary mb-3">Meet The Founder</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              <span className="text-gradient-primary">Darnell Miller</span>
            </h2>
            <p className="mt-3 text-base md:text-lg text-muted-foreground">
              Founder &amp; Principal Technology Consultant
            </p>
            <div className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </motion.div>

          <div className="grid lg:grid-cols-[auto,1fr] gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto lg:mx-0 w-full max-w-sm"
            >
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 blur-xl opacity-70" />
              <div className="relative glass rounded-3xl p-2 border border-primary/30 overflow-hidden card-glow">
                <img
                  src={founderImg}
                  alt="Darnell Miller, Founder of PixelPlace.cloud"
                  className="rounded-2xl w-full h-auto object-cover aspect-[3/4]"
                />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-4 py-3 border border-primary/30 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-widest text-primary font-display">Founder</p>
                  <p className="text-base font-display font-semibold text-foreground">Darnell Miller</p>
                </div>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5 text-foreground/85 leading-relaxed"
            >
              <p>
                For more than <span className="text-primary font-semibold">20 years</span>, Darnell Miller has helped organizations solve technology challenges ranging from everyday support issues to enterprise infrastructure, cybersecurity, and web development.
              </p>
              <p>
                His journey began at just <span className="text-foreground font-semibold">15 years old</span> as an Audio/Visual Technology Intern, where he developed a passion for technology and engineering. During high school, he completed specialized technical programs focused on computer-aided design (CAD), creating architectural floor plans and technical drawings using <span className="text-foreground font-semibold">AutoCAD and Autodesk Inventor</span>.
              </p>
              <p>
                After competing in semi-professional football, Darnell made the decision to pursue technology full-time and began building what would become a two-decade career spanning managed support operations, systems administration, network engineering, cybersecurity, and software development.
              </p>
              <p>
                Throughout his career, he has supported organizations ranging from small businesses and managed service providers to some of the most recognized institutions in the United States.
              </p>

              {/* Experience list */}
              <div className="glass rounded-2xl p-6 border border-primary/20 card-glow">
                <p className="text-xs uppercase tracking-[0.25em] text-primary font-display mb-4 flex items-center gap-2">
                  <Briefcase size={14} /> His experience includes work with
                </p>
                <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6">
                  {experience.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                In <span className="text-foreground font-semibold">2017</span>, Darnell served on the <span className="text-foreground font-semibold">NASA Headquarters Information Technology and Telecommunications Services (HITTS)</span> contract, supporting executives, managers, developers, and mission-critical operations across Washington D.C. and Arlington, Virginia.
              </p>
              <p>
                As his career evolved, he expanded into <span className="text-primary font-semibold">cybersecurity and penetration testing</span>, helping organizations identify vulnerabilities and strengthen their security posture. He later completed advanced full-stack web development training, adding modern web application development to an already extensive technical background.
              </p>
              <p>
                Today, Darnell combines his experience in infrastructure, cybersecurity, support operations, and web development to help businesses build reliable, secure, and professional technology solutions.
              </p>
              <p>
                Whether developing a website, improving business operations, providing technical support, or consulting on cybersecurity initiatives, his focus remains the same.
              </p>
              <p className="flex items-start gap-3 text-foreground/90">
                <Heart size={20} className="text-primary mt-1 shrink-0" />
                <span>
                  Outside of technology, Darnell is a dedicated <span className="text-foreground font-semibold">father of four</span> who values family, continuous learning, fitness, and personal growth. When he's away from the keyboard, you'll often find him enjoying time with his children or surfing a good wave whenever the opportunity presents itself.
                </span>
              </p>
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="relative group">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-neon-cyan/40 via-primary/40 to-neon-purple/40 opacity-70 blur-sm" />
              <div className="relative glass-strong rounded-2xl p-8 md:p-10 border border-primary/30">
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-display mb-3 flex items-center gap-2">
                  <Cpu size={14} /> Mission Statement
                </p>
                <p className="text-xl md:text-2xl font-display font-semibold leading-snug text-foreground">
                  "I believe technology should help businesses{" "}
                  <span className="text-gradient-primary">grow, operate more efficiently,</span> and present themselves{" "}
                  <span className="text-gradient-primary">professionally online.</span>"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* In The Field */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-24 w-[360px] h-[360px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Copy — left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <p className="text-xs md:text-sm font-display uppercase tracking-[0.3em] text-primary">
                In The Field
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                Hands-On <span className="text-gradient-primary">Infrastructure</span> Expertise
              </h2>
              <p className="text-foreground/85 leading-relaxed">
                From network closets and server racks to cloud platforms and enterprise managed supports —
                Darnell brings real, hands-on experience to every project. No outsourced guesswork,
                no theoretical advice. Just proven systems built and maintained by someone who has
                actually wired the racks, configured the switches, and supported the users.
              </p>
              <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-foreground/90">
                {["Server & Rack Management","Network Engineering","Switch & Router Configuration","Cabling & Topology","Cloud & Hybrid Infrastructure","Endpoint & Server Support"].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image — right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-md lg:max-w-lg"
            >
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 blur-2xl opacity-70" />
              <div className="relative glass rounded-3xl p-2 border border-primary/30 overflow-hidden card-glow">
                <img
                  src={serverRackImg.url}
                  alt="Darnell Miller working on a network server rack"
                  className="rounded-2xl w-full h-auto object-cover aspect-[3/4] block"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-4 py-3 border border-primary/30 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-widest text-primary font-display">On Site</p>
                  <p className="text-sm font-display font-semibold text-foreground">Network &amp; Server Infrastructure</p>
                </div>
              </div>
            </motion.div>
          </div>
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
