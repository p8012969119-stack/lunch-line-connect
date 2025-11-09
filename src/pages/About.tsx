import { Lightbulb, ChefHat, Clock, Receipt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    {
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      title: "Innovative Idea",
      description: "A digital solution that revolutionizes campus food ordering",
    },
    {
      icon: <ChefHat className="w-12 h-12 text-accent" />,
      title: "Expert Chefs",
      description: "Experienced culinary team preparing fresh meals daily",
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Fast Service",
      description: "Quick order processing and minimal waiting time",
    },
    {
      icon: <Receipt className="w-12 h-12 text-accent" />,
      title: "Transparent Billing",
      description: "Clear pricing with no hidden charges",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl font-bold mb-4">About Campus Canteen Connect</h1>
            <p className="text-xl text-muted-foreground">
              Transforming the way students order food on campus
            </p>
          </div>

          <Card className="mb-12 animate-slide-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Campus Canteen Connect was created to solve a common problem faced by students - 
                long queues at the canteen and time wasted waiting for food. Our platform enables 
                students to order their favorite meals digitally, pay online, and simply pick up 
                their order when it's ready.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that students should spend more time learning and less time waiting in 
                lines. Our system helps canteen vendors manage orders efficiently while providing 
                students with a seamless ordering experience.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, idx) => (
              <Card key={idx} className="hover-lift animate-slide-up">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-warm text-white animate-slide-up">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Join Us Today!</h2>
              <p className="text-lg mb-6">
                Start ordering your favorite meals with just a few clicks. No more waiting in queues!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
