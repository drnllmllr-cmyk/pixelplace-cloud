import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = ["Home", "Services", "About Us", "Website Development", "Blog"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const sectionId = id.toLowerCase().replace(/\s+/g, "-");
    const targetSection = sectionId === "services" ? "pricing" : sectionId;

    if (sectionId === "home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
      return;
    }

    if (sectionId === "about-us") {
      navigate("/about");
      setOpen(false);
      return;
    }
    if (sectionId === "website-development" || sectionId === "services") {
      if (location.pathname !== "/website-development") {
        navigate("/website-development#services");
      } else {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      }
      setOpen(false);
      return;
    }
    if (sectionId === "blog") {
      navigate("/blog");
      setOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/#" + targetSection);
    } else {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const handleConsultation = () => {
    if (location.pathname !== "/") {
      navigate("/#contact");
      return;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { if (location.pathname !== "/") { navigate("/"); } else { window.scrollTo({ top: 0, behavior: "smooth" }); } }}>
          <img src={logo} alt="PixelPlace.cloud" className="h-12 sm:h-14 md:h-20 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </button>
          ))}
          <button
            onClick={handleConsultation}
            className="btn-glow px-5 py-2 rounded-lg text-sm font-semibold text-primary-foreground"
          >
            Book Free Consultation
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-strong border-t border-border/30 px-4 pb-4"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left py-3 text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
