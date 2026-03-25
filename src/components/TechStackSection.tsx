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
        className="text-sm md:text-base text-muted-foreground font-display italic"
      >
        Schedule to view and purchase from full portfolio
      </motion.p>
    </div>
  </section>
);

export default TechStackSection;
