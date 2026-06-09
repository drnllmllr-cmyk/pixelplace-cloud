import { motion } from "framer-motion";
import { FileText, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import coverEbola from "@/assets/cover-ebola.png";
import coverDadbod from "@/assets/cover-dadbod.png";
import coverVerticalLiving from "@/assets/cover-vertical-living.png";
import coverAITravel from "@/assets/cover-ai-travel-architect.png";
import coverAISideHustle from "@/assets/cover-ai-side-hustle.png";
import coverToddlerSnack from "@/assets/cover-toddler-plane-snack.png";
import coverDigitalDeclutter from "@/assets/cover-digital-declutter.png";
import coverBoundaryScript from "@/assets/cover-boundary-script.png";
import coverRomanticizing from "@/assets/cover-romanticizing-life.png";
import coverFriendshipReset from "@/assets/cover-friendship-reset.png";
import coverMicroHabit from "@/assets/cover-micro-habit-stacking.png";
import coverIntentionalMorning from "@/assets/cover-intentional-morning.png";
import coverProteinBreakfast from "@/assets/cover-protein-breakfast.png";
import coverMagnesiumMap from "@/assets/cover-magnesium-map.png";
import coverSomaticHealing from "@/assets/cover-somatic-healing.png";

const PAY_LINK = "https://buy.stripe.com/3cI8wQ3jW7571D19LI7Zu0d";

type Guide = {
  title: string;
  description: string;
  category: string;
  cover?: string;
};

const guides: Guide[] = [
  {
    title: "Ebola 2026 Emergency Intelligence Report",
    description: "Comprehensive emergency intelligence briefing with outbreak analysis, response protocols and preparedness frameworks.",
    category: "Health & Safety",
    cover: coverEbola,
  },
  {
    title: "The 15-Minute Dad Bod Shred",
    description: "Hyper-efficient Garage Workouts for Busy Dads — torch fat, build muscle, and transform your body before the kids wake up.",
    category: "Fitness",
    cover: coverDadbod,
  },
  { title: "Vertical Living: Maximizing Space for Your Apartment Cat", description: "The Urban Cat Blueprint — small-space catification, stylish climbing systems, and designer-friendly solutions.", category: "Pets & Lifestyle", cover: coverVerticalLiving },
  { title: "The AI Travel Architect", description: "Prompt libraries for custom itineraries — budget optimization, hidden gem destinations, and weekend escape prompts.", category: "AI & Travel", cover: coverAITravel },
  { title: "The AI Side Hustle Handbook", description: "5 ways to earn with ChatGPT this week — no coding required, fast income systems, AI-powered opportunities.", category: "AI & Income", cover: coverAISideHustle },
  { title: "The Toddler Plane-Snack Architecture Guide", description: "Travel strategies that actually work — stress-free flights, slow-eat snacks, and parent-tested systems.", category: "Parenting", cover: coverToddlerSnack },
  { title: "30-Day Digital Declutter", description: "The minimalist tech guide — reduce screen time, mental clarity, simplify your apps, and reclaim your attention.", category: "Productivity", cover: coverDigitalDeclutter },
  { title: "The Boundary Script Book", description: "Word-for-word responses for difficult people — set limits without the guilt at work and with family.", category: "Self-Help", cover: coverBoundaryScript },
  { title: "Romanticizing Your Ordinary Life", description: "The aesthetic habit tracker — main character energy, mindful living, beautiful routines, and daily joy.", category: "Lifestyle", cover: coverRomanticizing },
  { title: "The Friendship Reset", description: "Making and keeping adult friends — meaningful connections, modern social skills, and friendship frameworks.", category: "Relationships", cover: coverFriendshipReset },
  { title: "Micro-Habit Stacking for Busy Parents", description: "2-minute wins, atomic habits for families, stress reduction — small changes, big results.", category: "Parenting", cover: coverMicroHabit },
  { title: "The Intentional Morning", description: "A guide to low-dopamine rises — protect your focus, no morning scrolling, mental clarity, healthy rituals.", category: "Wellness", cover: coverIntentionalMorning },
  { title: "The 30g Protein Breakfast Club", description: "50 quick recipes to hit your daily targets — muscle preservation, high satiety meals, fast prep.", category: "Nutrition", cover: coverProteinBreakfast },
  { title: "The Magnesium Map", description: "Choosing the right form for sleep, stress, and energy — glycinate vs citrate, science-based guide.", category: "Health", cover: coverMagnesiumMap },
  { title: "Somatic Healing for Stress", description: "10-minute daily movements to release stored trauma — nervous system regulation and gentle daily practice.", category: "Wellness", cover: coverSomaticHealing },
  { title: "Office 365 Admin Mastery", description: "Configure tenants, security baselines, conditional access and licensing the right way.", category: "Microsoft 365" },
  { title: "QuickBooks Setup & Optimization", description: "From chart of accounts to bank reconciliation — a clean QuickBooks build, end to end.", category: "Accounting" },
  { title: "Argus Enterprise Workflow Guide", description: "Real estate financial modeling in Argus with reusable templates and shortcuts.", category: "Real Estate" },
  { title: "Wolters Kluwer CCH Axcess Playbook", description: "Tax workflow optimization, e-filing and document management in CCH Axcess.", category: "Tax" },
  { title: "Marshall & Swift Valuation Guide", description: "Cost approach valuations done right — components, depreciation and reporting.", category: "Valuation" },
  { title: "Bluebeam Revu for Construction Teams", description: "Markups, takeoffs, Studio Sessions and Studio Projects for field-to-office collaboration.", category: "Construction" },
  { title: "Google Workspace Admin Blueprint", description: "Domain setup, security, DLP, Vault and user lifecycle automation.", category: "Google Workspace" },
  { title: "Canon Printer Deployment Manual", description: "Driver packaging, secure print, scan-to-folder and troubleshooting Canon fleets.", category: "Printer Support" },
  { title: "HP Printer Enterprise Support Guide", description: "JetAdmin, firmware management, secure printing and queue troubleshooting.", category: "Printer Support" },
  { title: "Xerox Workplace Cloud Handbook", description: "Centralized print management, pull printing and analytics for Xerox fleets.", category: "Printer Support" },
  { title: "Windows Print Server Build Guide", description: "Build a resilient, secure print server with proper drivers and monitoring.", category: "Servers" },
  { title: "File Server & Permissions Playbook", description: "NTFS, share permissions, ABE and Volume Shadow Copy done properly.", category: "Servers" },
  { title: "Network Administration Field Guide", description: "Switching, routing, VLANs and firewalls for small business networks.", category: "Networking" },
  { title: "Cloudflare Zero Trust for SMBs", description: "Access, Tunnel, Gateway and DLP for a modern remote workforce.", category: "Cybersecurity" },
  { title: "WordPress Hardening & Performance", description: "Lock down WordPress, tune caching and ship Core Web Vitals that rank.", category: "Web Development" },
  { title: "Shopify Storefront Optimization", description: "Theme tuning, app audits and CRO patterns that lift conversion.", category: "E-commerce" },
  { title: "GoDaddy Domain & DNS Mastery", description: "DNS records, transfers, SSL and email deliverability through GoDaddy.", category: "Domains & DNS" },
  { title: "GitHub for Small Teams", description: "Branching, PR reviews, Actions and deployment workflows that scale.", category: "DevOps" },
  { title: "Dentist Office IT Operations Manual", description: "HIPAA-aligned IT setup for modern dental practices — imaging, PMS and backup.", category: "Healthcare IT" },
  { title: "Law Firm Technology Stack Guide", description: "Document management, e-discovery readiness and secure client portals.", category: "Legal IT" },
  { title: "Tax Firm Workflow Automation", description: "Client intake, document collection and review queues that save weeks per season.", category: "Tax" },
  { title: "Construction Site Connectivity Guide", description: "Trailer Wi-Fi, point-to-point links, ruggedized devices and field comms.", category: "Construction" },
  { title: "Gas Station IT & POS Support Guide", description: "Forecourt controllers, POS, surveillance and PCI compliance basics.", category: "Retail IT" },
  { title: "MSP Onboarding Playbook", description: "Standardize client onboarding, documentation and tooling like a pro MSP.", category: "MSP" },
  { title: "Disaster Recovery Planning Guide", description: "RTO/RPO, runbooks, immutable backups and tested recovery procedures.", category: "Business Continuity" },
  { title: "Backup Strategy 3-2-1-1-0", description: "Modern backup architecture against ransomware with verified restores.", category: "Backups" },
  { title: "Email Security & Anti-Phishing Guide", description: "SPF, DKIM, DMARC, anti-phishing posture and user awareness training.", category: "Cybersecurity" },
  { title: "Penetration Testing Readiness", description: "Prepare your environment, scope and remediation pipeline for a real pentest.", category: "Cybersecurity" },
  { title: "Vulnerability Management Program", description: "Scan, prioritize and remediate vulnerabilities on a repeatable cadence.", category: "Cybersecurity" },
  { title: "Endpoint Hardening for Windows 11", description: "Baselines, ASR rules, BitLocker, AppLocker and tamper protection.", category: "Endpoint" },
  { title: "macOS Business Deployment", description: "MDM, configuration profiles, FileVault and patching for Mac fleets.", category: "Endpoint" },
  { title: "Active Directory Cleanup Guide", description: "OUs, GPOs, stale accounts and tiered admin done right.", category: "Identity" },
  { title: "Azure AD / Entra ID Hardening", description: "Conditional Access, MFA, PIM and Identity Protection step-by-step.", category: "Identity" },
  { title: "VPN to Zero Trust Migration", description: "Retire legacy VPN with a phased Zero Trust rollout for remote users.", category: "Networking" },
  { title: "Firewall Configuration Best Practices", description: "Rule hygiene, segmentation, logging and tuning for SMB firewalls.", category: "Networking" },
  { title: "Wi-Fi Survey & Design Guide", description: "Design and validate dependable enterprise Wi-Fi in any environment.", category: "Networking" },
  { title: "VoIP Phone System Buyer's Guide", description: "Choose, deploy and tune a modern cloud phone system for your business.", category: "Communications" },
  { title: "Microsoft Teams Governance", description: "Naming, lifecycle, guest access and external sharing controls.", category: "Microsoft 365" },
  { title: "SharePoint Information Architecture", description: "Hub sites, permissions and search-friendly content design.", category: "Microsoft 365" },
  { title: "Power Automate for Operations", description: "Practical automations that replace busywork in finance, HR and IT.", category: "Automation" },
  { title: "SEO for Local Service Businesses", description: "Win local pack rankings with on-page, GBP and reviews strategy.", category: "Marketing" },
  { title: "Website Speed Optimization", description: "Diagnose and fix Core Web Vitals on any modern site.", category: "Web Development" },
  { title: "Google Analytics 4 Setup Guide", description: "Events, conversions, audiences and clean reports for decision makers.", category: "Analytics" },
  { title: "Stripe Payments Implementation", description: "Checkout, subscriptions, webhooks and reconciliation done correctly.", category: "Payments" },
  { title: "PCI-DSS Compliance Starter", description: "Scope reduction, SAQ selection and evidence collection workflow.", category: "Compliance" },
  { title: "HIPAA Compliance for Small Practices", description: "Risk analysis, safeguards, BAAs and incident response essentials.", category: "Compliance" },
  { title: "SOC 2 Readiness Roadmap", description: "Controls, policies and evidence to pass your first Type 1.", category: "Compliance" },
  { title: "Incident Response Playbook", description: "Detect, contain, eradicate, recover — a ready-to-use IR runbook.", category: "Cybersecurity" },
];

const PdfGuides = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-display text-primary">Premium PDF Guides</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-gradient-primary">Premium PDF Guides</span> that give you solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Helpful and personal support built for you.
            </p>
            <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
              Step-by-step PDF guides built for you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {guides.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.03, 0.4) }}
                className="group glass card-glow rounded-2xl p-6 flex flex-col border border-border/40"
              >
                {g.cover ? (
                  <div className="relative mb-5 rounded-xl overflow-hidden border border-primary/20 bg-black/40 aspect-[3/4]">
                    <img
                      src={g.cover}
                      alt={`${g.title} cover`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-display uppercase tracking-wider text-primary bg-background/70 backdrop-blur px-2 py-1 rounded-md border border-primary/30">
                      {g.category}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground">
                      <FileText size={22} />
                    </div>
                    <span className="text-xs font-display uppercase tracking-wider text-primary/80">{g.category}</span>
                  </div>
                )}
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground leading-snug">{g.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">{g.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-display font-bold text-foreground">$10.99</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <ShieldCheck size={14} className="text-primary" /> Secure checkout
                  </span>
                </div>
                <a
                  href={PAY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow w-full py-3 rounded-xl font-display font-semibold text-sm text-primary-foreground text-center"
                >
                  Buy & Download
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-12 max-w-2xl mx-auto">
            After successful payment you will receive your PDF download via email. For instant delivery questions, contact support.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PdfGuides;
