import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee text-cream py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Campus Canteen Connect</h3>
            <p className="text-coffee-light text-sm">
              Your one-stop solution for delicious campus meals. Order, pay, and pickup with ease!
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-coffee-light">
              <li><a href="/" className="hover:text-cream transition-colors">Home</a></li>
              <li><a href="/menu" className="hover:text-cream transition-colors">Menu</a></li>
              <li><a href="/about" className="hover:text-cream transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-cream transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-light/30 mt-8 pt-6 text-center text-sm text-coffee-light">
          <p>&copy; 2025 Campus Canteen Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
