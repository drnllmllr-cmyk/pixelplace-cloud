import { motion } from "framer-motion";
import { ArrowLeft, Download, Monitor, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const placeholders = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Wallpaper ${String(i + 1).padStart(3, "0")}`,
}));

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-display font-semibold text-sm">Back to Home</span>
          </Link>
          <h1 className="font-display font-bold text-lg text-foreground">
            HD Wallpaper <span className="text-gradient-primary">Gallery</span>
          </h1>
          <div className="w-24" />
        </div>
      </div>

      {/* Hero banner */}
      <section className="pt-28 pb-12 text-center relative">
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            4K Wallpaper <span className="text-gradient-primary">Collection</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2"
          >
            Professional photography elevated with cutting-edge AI enhancements.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-muted-foreground"
          >
            Starting at <span className="text-primary font-bold">$9.99</span>
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 1) }}
              className="group glass rounded-2xl overflow-hidden border border-border/30 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_25px_hsl(var(--primary)/0.15)]"
            >
              {/* Placeholder image */}
              <div className="aspect-[3/4] bg-muted/30 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Monitor className="w-8 h-8 text-muted-foreground/30 mx-auto mb-2" />
                    <span className="text-xs text-muted-foreground/40 font-display">{item.name}</span>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary font-display font-bold text-sm">Preview</span>
                </div>
              </div>

              {/* Info section */}
              <div className="p-4 space-y-3">
                <h3 className="font-display font-semibold text-sm text-foreground truncate">
                  {item.name}
                </h3>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-accent">
                    <Download size={12} />
                    <span>Instant Download</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-accent">
                    <Monitor size={12} />
                    <span>4K Resolution</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-accent">
                    <Smartphone size={12} />
                    <span>Works on Phone & Desktop</span>
                  </div>
                </div>

                <button className="w-full py-2 rounded-lg bg-primary text-primary-foreground font-display font-bold text-xs tracking-wider hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:scale-[1.02]">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-border/30 py-12 text-center">
        <p className="text-muted-foreground text-sm mb-4">
          Don't see what you're looking for?{" "}
          <Link to="/#contact" className="text-primary hover:underline font-semibold">
            Get In Touch
          </Link>{" "}
          for custom requests.
        </p>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} PixelPlace.cloud — All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default Gallery;
