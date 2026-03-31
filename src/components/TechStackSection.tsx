import { motion } from "framer-motion";
import wallpaperLake from "@/assets/wallpaper-lake.png";
import wallpaperIguana from "@/assets/wallpaper-iguana.png";
import wallpaperOcean from "@/assets/wallpaper-ocean.png";
import wallpaperSeagull from "@/assets/wallpaper-seagull.png";
import wallpaperForest from "@/assets/wallpaper-forest.png";

const photos = [
  { src: wallpaperLake, alt: "Misty lake at sunrise" },
  { src: wallpaperIguana, alt: "Iguana on beach rocks" },
  { src: wallpaperOcean, alt: "Ocean waves and beach" },
  { src: wallpaperSeagull, alt: "Seagull flying over beach" },
  { src: wallpaperForest, alt: "Spanish moss forest trail" },
];

const TechStackSection = () => (
  <section id="hd wallpaper" className="relative py-24 bg-grid">
    <div className="absolute inset-0 bg-radial-glow" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold mb-16"
      >
        HD Wallpaper <span className="text-gradient-primary">Gallery</span>
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.alt}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group overflow-hidden rounded-xl glass card-glow"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-lg md:text-2xl font-display font-semibold text-foreground tracking-wide mb-6"
      >
        Download stunning 4K wallpapers –{" "}
        <span className="text-gradient-primary">starting at $9.99</span>
      </motion.p>

      <motion.a
        href="/gallery"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-block px-8 py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold text-sm tracking-wider hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:scale-105 mb-8"
      >
        View Full Collection
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto glass rounded-2xl p-8 border border-primary/20"
      >
        <h3 className="text-xl font-display font-bold text-primary mb-4">Ready to Download?</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          Browse our collection of stunning 4K wallpapers, perfect for your phone, desktop, or workspace.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Simply select your favorite image and click "<span className="text-primary font-semibold">Buy Now</span>" for instant access. Once your purchase is complete, your high-quality download will be available immediately.
        </p>
        <p className="text-sm font-display font-semibold text-foreground tracking-wide">
          Clean. Sharp. Professional. <span className="text-gradient-primary">Elevate your screen today.</span>
        </p>
      </motion.div>
    </div>
  </section>
);

export default TechStackSection;
