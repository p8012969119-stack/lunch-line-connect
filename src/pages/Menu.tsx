import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const menuCategories = [
  {
    category: "🥗 Veg Meals",
    items: [
      { name: "Veg Thali", price: 80 },
      { name: "Paneer Butter Masala", price: 120 },
      { name: "Dal Tadka", price: 70 },
      { name: "Veg Pulao", price: 90 },
    ],
  },
  {
    category: "🍗 Non-Veg Meals",
    items: [
      { name: "Chicken Biryani", price: 150 },
      { name: "Fish Curry", price: 140 },
      { name: "Egg Curry", price: 80 },
      { name: "Chicken Fried Rice", price: 120 },
    ],
  },
  {
    category: "🍟 Snacks",
    items: [
      { name: "Samosa", price: 20 },
      { name: "French Fries", price: 40 },
      { name: "Veg Sandwich", price: 50 },
      { name: "Pasta", price: 70 },
    ],
  },
  {
    category: "🧃 Fresh Juices",
    items: [
      { name: "Mango Juice", price: 30 },
      { name: "Orange Juice", price: 30 },
      { name: "Watermelon Juice", price: 25 },
      { name: "Mixed Fruit Juice", price: 40 },
    ],
  },
  {
    category: "🍰 Cakes & Desserts",
    items: [
      { name: "Chocolate Cake", price: 60 },
      { name: "Black Forest", price: 80 },
      { name: "Ice Cream", price: 40 },
      { name: "Gulab Jamun", price: 30 },
    ],
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Menu 📋</h1>
            <p className="text-xl text-muted-foreground">
              Discover our wide variety of delicious meals and snacks
            </p>
          </div>

          <div className="space-y-8">
            {menuCategories.map((category, idx) => (
              <Card key={idx} className="animate-slide-up hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex justify-between items-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className="text-primary font-bold">₹{item.price}</span>
                      </div>
                    ))}
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

export default Menu;
