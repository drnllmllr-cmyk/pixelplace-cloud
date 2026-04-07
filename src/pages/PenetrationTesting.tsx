import { motion } from "framer-motion";
import { Shield, Globe, Server, Lock, Settings, FileText, CheckCircle2, ArrowRight, Zap, Users, Clock, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/pentest-hero.jpg";
import webappImg from "@/assets/pentest-webapp.jpg";
import apiImg from "@/assets/pentest-api.jpg";
import reportImg from "@/assets/pentest-report.jpg";

const services = [
  {
    icon: Globe,
    title: "Web Application Security Testing",
    desc: "We test your website for common and critical vulnerabilities including cross-site scripting (XSS), SQL injection, insecure input handling, and misconfigurations that could allow unauthorized access.",
    image: webappImg,
  },
  {
    icon: Server,
    title: "API Security Testing",
    desc: "We assess API endpoints for authentication issues, improper access controls, data exposure, and logic flaws that could be exploited by attackers.",
    image: apiImg,
  },
  {
    icon: Shield,
    title: "Vulnerability Assessment",
    desc: "We perform a combination of automated scanning and manual testing to identify known vulnerabilities and security weaknesses across your application.",
    image: reportImg,
  },
  {
    icon: Lock,
    title: "Authentication & Access Control Testing",
    desc: "We evaluate login systems, session management, and user roles to ensure unauthorized users cannot gain access to restricted areas or sensitive data.",
  },
  {
    icon: Settings,
    title: "Security Misconfiguration Review",
    desc: "We identify exposed admin panels, weak server configurations, missing protections, and other misconfigurations that increase risk.",
  },
  {
    icon: FileText,
    title: "Input & Data Validation Testing",
    desc: "We test forms, fields, and user inputs to ensure they are properly secured against malicious input and injection attacks.",
  },
];

const deliverables = [
  { title: "Detailed Security Report", desc: "A clear and structured report outlining all identified vulnerabilities, categorized by severity (Low, Medium, High, Critical)." },
  { title: "Proof of Concept", desc: "Where applicable, we demonstrate how vulnerabilities can be exploited to help you understand real-world risk." },
  { title: "Business Risk Explanation", desc: "Each issue is explained in plain language so you understand the potential impact on your business." },
  { title: "Remediation Guidance", desc: "Step-by-step recommendations on how to fix each vulnerability quickly and effectively." },
  { title: "Follow-Up Support", desc: "We are available to guide you through fixes or assist with remediation if needed." },
];

const steps = [
  { step: "01", title: "Consultation", desc: "We review your website or application and define the scope of testing." },
  { step: "02", title: "Testing", desc: "We perform remote security testing using a combination of manual techniques and automated tools." },
  { step: "03", title: "Analysis", desc: "All findings are reviewed, validated, and categorized based on risk." },
  { step: "04", title: "Reporting", desc: "You receive a professional report with detailed findings and remediation steps." },
  { step: "05", title: "Review & Support", desc: "We walk you through the results and help you understand next steps." },
];

const pricing = [
  { name: "Basic Security Assessment", price: "$300.00", desc: "Ideal for small websites and basic vulnerability checks.", highlight: false, payLink: "https://buy.stripe.com/aFa3cwg6I613bdB3nk7Zu02" },
  { name: "Standard Penetration Test", price: "$800.00", desc: "Includes deeper testing of authentication, inputs, and application logic.", highlight: true, payLink: "https://buy.stripe.com/aFaeVe7AcexzgxV7DA7Zu03" },
  { name: "Advanced Testing", price: "$2,000.00", desc: "Designed for larger applications, APIs, and complex systems.", highlight: false, payLink: "https://buy.stripe.com/4gM14o1bO4WZ5Th2jg7Zu04" },
];

const whyUs = [
  { icon: Zap, title: "Real-World Testing Approach", desc: "We simulate realistic attack scenarios, not just automated scans." },
  { icon: Users, title: "Developer & Security Expertise", desc: "We understand both how systems are built and how they are attacked — allowing us to identify and fix issues effectively." },
  { icon: Clock, title: "Fast Turnaround", desc: "Receive clear, actionable results quickly so you can take immediate action." },
  { icon: Wifi, title: "Remote & Flexible", desc: "All testing is performed remotely with minimal disruption to your operations." },
];

const PenetrationTesting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Penetration Testing" className="w-full h-full object-cover opacity-20" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8">
              <Shield size={16} className="text-primary" />
              <span className="text-sm font-display text-primary">Professional Security Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Penetration Testing <span className="text-gradient-primary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Identify vulnerabilities before attackers do.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-10">
              We provide professional remote penetration testing for websites and applications, helping businesses uncover security weaknesses, reduce risk, and protect sensitive data from real-world threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="btn-glow px-8 py-4 rounded-xl font-display font-semibold text-primary-foreground inline-flex items-center justify-center gap-2"
              >
                Book Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-10 border border-border/50">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-foreground">Why Penetration Testing <span className="text-gradient-primary">Matters</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Modern websites and applications are constant targets for automated attacks and real-world exploitation. Even small vulnerabilities can lead to data breaches, downtime, and loss of customer trust.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our penetration testing services are designed to simulate real-world attacks in a controlled and safe manner. We identify vulnerabilities, assess their impact, and provide clear guidance on how to fix them — before they can be exploited.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Services We <span className="text-gradient-primary">Provide</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden border border-border/50 card-glow group"
              >
                {s.image && (
                  <div className="overflow-hidden h-40">
                    <img src={s.image} alt={s.title} loading="lazy" width={800} height={544} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4">
                    <s.icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              What You <span className="text-gradient-primary">Receive</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deliverables.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 border border-border/50"
              >
                <CheckCircle2 size={24} className="text-primary mb-4" />
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              How The Process <span className="text-gradient-primary">Works</span>
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start glass rounded-xl p-6 border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shrink-0">
                  <span className="text-lg font-display font-bold text-primary-foreground">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              <span className="text-gradient-primary">Pricing</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative glass rounded-2xl p-8 border card-glow ${p.highlight ? "border-primary/50 md:-mt-4 md:mb-[-1rem]" : "border-border/50"}`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-display font-bold tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{p.name}</h3>
                <div className="text-3xl font-display font-bold text-primary mb-4">{p.price}</div>
                <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
                <Link
                  to="/#contact"
                  className={`block w-full py-3 rounded-xl font-display font-semibold text-sm text-center transition-all ${
                    p.highlight
                      ? "btn-glow text-primary-foreground"
                      : "border border-border/60 text-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Why Choose <span className="text-gradient-primary">Us</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyUs.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 border border-border/50 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-4">
                  <w.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-base font-display font-bold text-foreground mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-12 border border-primary/30 max-w-3xl mx-auto">
            <Shield size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
              Request a Security Assessment
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Protect your website or application before it becomes a target. Secure your digital presence with confidence.
            </p>
            <Link
              to="/#contact"
              className="btn-glow px-10 py-4 rounded-xl font-display font-semibold text-primary-foreground inline-flex items-center gap-2"
            >
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <p className="text-xs text-muted-foreground mt-6">
              We build and secure websites and applications — ensuring performance, reliability, and protection from real-world threats.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PenetrationTesting;
