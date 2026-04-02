import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border/30 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-10">
        <div className="md:col-span-2">
          <img src={logo} alt="PixelPlace.cloud" className="h-18 md:h-20 w-auto mb-4" />
          <p className="text-sm text-muted-foreground max-w-sm">
            Building beautiful websites and powerful applications for modern businesses.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-primary transition-colors cursor-pointer">Website Development</li>
            <li className="hover:text-primary transition-colors cursor-pointer">App Development</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-primary transition-colors cursor-pointer">About</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/30 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} PixelPlace.cloud — All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
