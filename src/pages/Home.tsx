import { Link } from "react-router-dom";
import { GraduationCap, Store, Salad, Pizza, Coffee, Cake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Pizza className="absolute top-10 left-10 w-16 h-16 animate-float" />
          <Coffee className="absolute top-20 right-20 w-12 h-12 animate-float" style={{ animationDelay: '1s' }} />
          <Cake className="absolute bottom-20 left-1/4 w-14 h-14 animate-float" style={{ animationDelay: '2s' }} />
          <Salad className="absolute bottom-10 right-1/4 w-16 h-16 animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            Welcome to Campus Canteen Connect 🍽️
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up">
            Order your favorite meals with just a few clicks!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link to="/student-login">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 hover-lift">
                <GraduationCap className="w-6 h-6" />
                Student Portal
              </Button>
            </Link>
            <Link to="/shop-login">
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 border-white text-white hover:bg-white hover:text-primary hover-lift">
                <Store className="w-6 h-6" />
                Shop Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Choose Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover-lift cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Pizza className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Wide Variety</h3>
                <p className="text-muted-foreground">
                  From veg meals to cakes, we've got everything to satisfy your cravings
                </p>
              </div>
            </Card>

            <Card className="p-6 hover-lift cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Service</h3>
                <p className="text-muted-foreground">
                  Order online and pickup when ready. No more waiting in long queues
                </p>
              </div>
            </Card>

            <Card className="p-6 hover-lift cursor-pointer">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fresh & Hygienic</h3>
                <p className="text-muted-foreground">
                  All meals prepared fresh with highest hygiene standards
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
