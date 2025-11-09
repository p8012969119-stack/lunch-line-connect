import { useState } from "react";
import { ShoppingCart, Plus, Minus, CreditCard, Smartphone, Banknote, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FoodItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  icon: string;
};

const foodItems: FoodItem[] = [
  { id: 1, name: "Veg Thali", category: "veg", price: 80, icon: "🥗" },
  { id: 2, name: "Paneer Butter Masala", category: "veg", price: 120, icon: "🍛" },
  { id: 3, name: "Chicken Biryani", category: "non-veg", price: 150, icon: "🍗" },
  { id: 4, name: "Fish Curry", category: "non-veg", price: 140, icon: "🐟" },
  { id: 5, name: "Samosa", category: "snacks", price: 20, icon: "🥟" },
  { id: 6, name: "French Fries", category: "snacks", price: 40, icon: "🍟" },
  { id: 7, name: "Mango Juice", category: "juice", price: 30, icon: "🧃" },
  { id: 8, name: "Orange Juice", category: "juice", price: 30, icon: "🍊" },
  { id: 9, name: "Chocolate Cake", category: "cake", price: 60, icon: "🍰" },
  { id: 10, name: "Black Forest", category: "cake", price: 80, icon: "🎂" },
];

const StudentDashboard = () => {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [showPayment, setShowPayment] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const studentName = localStorage.getItem("studentName") || "Student";

  const addToCart = (itemId: number) => {
    setCart((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    toast.success("Added to cart! 🛒");
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = foodItems.find((i) => i.id === Number(itemId));
      return total + (item?.price || 0) * quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  const handlePayment = (method: string) => {
    setSelectedPayment(method);
    setShowPayment(false);
    setShowOTP(true);
  };

  const handleOTPSubmit = () => {
    if (otp.length === 6) {
      setShowOTP(false);
      setOtp("");
      // Simulate confetti animation
      toast.success("🎉 Order Confirmed! Your food will be ready soon!");
      setCart({});
    } else {
      toast.error("Please enter a valid 6-digit OTP");
    }
  };

  const categories = [
    { name: "Veg Meals", icon: "🥗", filter: "veg" },
    { name: "Non-Veg Meals", icon: "🍗", filter: "non-veg" },
    { name: "Snacks", icon: "🍟", filter: "snacks" },
    { name: "Fresh Juices", icon: "🧃", filter: "juice" },
    { name: "Cakes", icon: "🎂", filter: "cake" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {studentName}! 🎉</h1>
              <p className="text-muted-foreground">What would you like to order today?</p>
            </div>
            
            <Button variant="outline" className="gap-2 relative" onClick={() => getTotalItems() > 0 && setShowPayment(true)}>
              <ShoppingCart className="w-5 h-5" />
              Cart
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2">{getTotalItems()}</Badge>
              )}
            </Button>
          </div>

          {categories.map((category) => (
            <div key={category.filter} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-3xl">{category.icon}</span>
                {category.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foodItems
                  .filter((item) => item.category === category.filter)
                  .map((item) => (
                    <Card key={item.id} className="hover-lift overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              <span className="text-3xl">{item.icon}</span>
                              {item.name}
                            </CardTitle>
                            <CardDescription className="text-xl font-bold text-primary mt-2">
                              ₹{item.price}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        {cart[item.id] ? (
                          <div className="flex items-center justify-between bg-secondary rounded-lg p-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="font-bold">{cart[item.id]}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => addToCart(item.id)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        ) : (
                          <Button
                            className="w-full gap-2"
                            onClick={() => addToCart(item.id)}
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Add to Cart
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Dialog */}
      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose Payment Method</DialogTitle>
            <DialogDescription>
              Total Amount: ₹{getTotalPrice()}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-3">
            <Button
              className="w-full justify-start gap-3 h-16"
              variant="outline"
              onClick={() => handlePayment("cash")}
            >
              <Banknote className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Cash</div>
                <div className="text-sm text-muted-foreground">Pay at counter</div>
              </div>
            </Button>
            
            <Button
              className="w-full justify-start gap-3 h-16"
              variant="outline"
              onClick={() => handlePayment("upi")}
            >
              <Smartphone className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">UPI</div>
                <div className="text-sm text-muted-foreground">Google Pay, PhonePe, etc.</div>
              </div>
            </Button>
            
            <Button
              className="w-full justify-start gap-3 h-16"
              variant="outline"
              onClick={() => handlePayment("card")}
            >
              <CreditCard className="w-6 h-6" />
              <div className="text-left">
                <div className="font-semibold">Card</div>
                <div className="text-sm text-muted-foreground">Credit or Debit Card</div>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* OTP Dialog */}
      <Dialog open={showOTP} onOpenChange={setShowOTP}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter OTP</DialogTitle>
            <DialogDescription>
              Payment method: {selectedPayment.toUpperCase()}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="otp">6-Digit OTP</Label>
              <Input
                id="otp"
                type="text"
                maxLength={6}
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                className="text-center text-2xl tracking-widest"
              />
            </div>
            
            <Button className="w-full" onClick={handleOTPSubmit}>
              Verify & Place Order
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default StudentDashboard;
