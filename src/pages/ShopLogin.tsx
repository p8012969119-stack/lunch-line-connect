import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Store, Mail, Lock, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

const ShopLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    shopName: "",
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      localStorage.setItem("shopName", loginData.email.split("@")[0]);
      toast.success("Shop login successful! 🏪");
      navigate("/shop-dashboard");
    } else {
      toast.error("Please fill all fields");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.shopName && registerData.email && registerData.password) {
      localStorage.setItem("shopName", registerData.shopName);
      toast.success("Shop registered successfully! 🎉");
      navigate("/shop-dashboard");
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="gradient-warm min-h-[calc(100vh-4rem)] py-12 px-4 relative overflow-hidden">
        <Package className="absolute top-20 left-10 w-20 h-20 text-white/10 animate-float" />
        <Store className="absolute bottom-20 right-10 w-16 h-16 text-white/10 animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto max-w-md relative z-10">
          <Card className="shadow-2xl animate-slide-up">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl">Shop Portal</CardTitle>
              <CardDescription>Manage your canteen orders efficiently</CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">🔐 Login</TabsTrigger>
                  <TabsTrigger value="register">🆕 Register</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="shop-login-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="shop-login-email"
                          type="email"
                          placeholder="shop@canteen.com"
                          className="pl-10"
                          value={loginData.email}
                          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="shop-login-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="shop-login-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10"
                          value={loginData.password}
                          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Login
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="shop-name">Shop Name</Label>
                      <div className="relative">
                        <Store className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="shop-name"
                          placeholder="Campus Cafe"
                          className="pl-10"
                          value={registerData.shopName}
                          onChange={(e) => setRegisterData({ ...registerData, shopName: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="shop-register-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="shop-register-email"
                          type="email"
                          placeholder="shop@canteen.com"
                          className="pl-10"
                          value={registerData.email}
                          onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="shop-register-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="shop-register-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10"
                          value={registerData.password}
                          onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Register Shop
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShopLogin;
