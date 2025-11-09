import { Link, useLocation } from "react-router-dom";
import { Home, Menu, Info, Mail, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <UtensilsCrossed className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-xl bg-gradient-warm bg-clip-text text-transparent">
              Campus Canteen Connect
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>
            <Link to="/menu">
              <Button
                variant={isActive("/menu") ? "default" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Menu className="w-4 h-4" />
                Menu
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant={isActive("/about") ? "default" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Info className="w-4 h-4" />
                About
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant={isActive("/contact") ? "default" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
