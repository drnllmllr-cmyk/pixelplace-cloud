import { motion } from "framer-motion";
import previewRealestate from "@/assets/preview-realestate.jpg";
import previewLawfirm from "@/assets/preview-lawfirm.jpg";
import previewDentist from "@/assets/preview-dentist.jpg";

const projects = [
  {
    title: "Real Estate Website",
    description: "Luxury property listings with advanced search and elegant design",
    image: previewRealestate,
  },
  {
    title: "Law Firm Website",
    description: "Professional legal practice with attorney profiles and case results",
    image: previewLawfirm,
  },
  {
    title: "Dentist Website",
    description: "Modern dental practice with online booking and patient portal",
    image: previewDentist,
  },
];

const OurWorkSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-gradient-primary">Work</span>
          </h2>
          <p className="relative max-w-3xl mx-auto text-lg md:text-2xl font-display font-semibold leading-snug">
            <span className="text-foreground">See what we can build for your business — </span>
            <span className="text-gradient-primary italic">professional, modern websites</span>
            <span className="text-foreground"> tailored to your industry.</span>
          </p>
          <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group glass rounded-2xl overflow-hidden border border-border/50 card-glow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={800}
                  height={544}
                  className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
