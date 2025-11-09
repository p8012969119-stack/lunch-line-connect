import { useState } from "react";
import { Check, Clock, User, UtensilsCrossed, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Order = {
  id: number;
  studentName: string;
  items: string;
  quantity: number;
  paymentType: string;
  time: string;
  status: "pending" | "accepted" | "ready";
};

const ShopDashboard = () => {
  const shopName = localStorage.getItem("shopName") || "Shop";
  
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      studentName: "Rahul Kumar",
      items: "Veg Thali, Mango Juice",
      quantity: 2,
      paymentType: "UPI",
      time: "10:30 AM",
      status: "pending",
    },
    {
      id: 2,
      studentName: "Priya Singh",
      items: "Chicken Biryani",
      quantity: 1,
      paymentType: "Cash",
      time: "10:35 AM",
      status: "pending",
    },
    {
      id: 3,
      studentName: "Amit Patel",
      items: "Samosa, Coffee",
      quantity: 3,
      paymentType: "Card",
      time: "10:40 AM",
      status: "accepted",
    },
  ]);

  const acceptOrder = (orderId: number) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: "accepted" } : order
      )
    );
    toast.success("Order accepted! ✅");
  };

  const markReady = (orderId: number) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: "ready" } : order
      )
    );
    toast.success("Order marked as ready! 🎉");
  };

  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary" className="gap-1"><Clock className="w-3 h-3" /> Pending</Badge>;
      case "accepted":
        return <Badge variant="default" className="gap-1 bg-accent"><Clock className="w-3 h-3" /> Preparing</Badge>;
      case "ready":
        return <Badge variant="default" className="gap-1 bg-green-500"><Check className="w-3 h-3" /> Ready</Badge>;
    }
  };

  const stats = {
    pending: orders.filter((o) => o.status === "pending").length,
    preparing: orders.filter((o) => o.status === "accepted").length,
    ready: orders.filter((o) => o.status === "ready").length,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Vendor Dashboard 🧾</h1>
            <p className="text-muted-foreground">Welcome back, {shopName}!</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-500" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Pending Orders
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-amber-500">{stats.pending}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <UtensilsCrossed className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Preparing
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary">{stats.preparing}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-500" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Ready for Pickup
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-500">{stats.ready}</div>
              </CardContent>
            </Card>
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Recent Orders</h2>
            
            {orders.map((order) => (
              <Card key={order.id} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="font-semibold">{order.studentName}</span>
                        {getStatusBadge(order.status)}
                      </div>
                      
                      <div className="flex items-start gap-2 text-sm">
                        <UtensilsCrossed className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <span>{order.items}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>Qty: {order.quantity}</span>
                        <div className="flex items-center gap-1">
                          <CreditCard className="w-4 h-4" />
                          {order.paymentType}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {order.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {order.status === "pending" && (
                        <Button
                          onClick={() => acceptOrder(order.id)}
                          className="gap-2"
                        >
                          <Check className="w-4 h-4" />
                          Accept Order
                        </Button>
                      )}
                      
                      {order.status === "accepted" && (
                        <Button
                          onClick={() => markReady(order.id)}
                          className="gap-2 bg-green-500 hover:bg-green-600"
                        >
                          <Check className="w-4 h-4" />
                          Mark Ready
                        </Button>
                      )}
                      
                      {order.status === "ready" && (
                        <Badge variant="default" className="gap-1 bg-green-500 text-lg px-4 py-2">
                          <Check className="w-4 h-4" />
                          Ready for Pickup
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopDashboard;
