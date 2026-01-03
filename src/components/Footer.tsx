import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold text-gradient-gold mb-2">
              Alpha X Wealth
            </h3>
            <p className="text-sm text-muted-foreground">
              Ethical • Educational • Shariah-Aligned
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alpha X Wealth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
