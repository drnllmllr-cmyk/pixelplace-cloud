import { motion } from "framer-motion";
import { FileText, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";
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
];


const PdfGuides = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <VideoBackground opacity={0.4} overlay={0.6} />
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

            {/* Attention-grabbing animated tagline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-10 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-lg opacity-60 group-hover:opacity-90 transition-opacity animate-pulse" />
                <div className="relative glass-strong rounded-2xl px-8 py-5 border border-primary/40 flex items-center gap-3">
                  <Sparkles size={20} className="text-primary animate-pulse" />
                  <span className="font-display font-bold text-xl md:text-2xl tracking-tight">
                    <span className="text-gradient-primary">High-Quality PDF Guides</span>
                    <span className="text-foreground/90"> that Help &amp; Give Solutions</span>
                  </span>
                  <Sparkles size={20} className="text-secondary animate-pulse" />
                </div>
              </div>
            </motion.div>

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
                  <div className="relative mb-5 rounded-xl overflow-hidden border border-primary/20 bg-gradient-to-br from-background via-muted/40 to-background aspect-[3/4] shadow-[0_10px_40px_-10px_hsl(186_100%_50%/0.25)] flex items-center justify-center p-3">
                    <img
                      src={g.cover}
                      alt={`${g.title} cover`}
                      className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03] drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-3 left-3 z-10 text-[10px] font-display uppercase tracking-wider text-primary bg-background/80 backdrop-blur px-2 py-1 rounded-md border border-primary/30">
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
