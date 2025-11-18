import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import chair from "@/assets/chair-1.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // In a real app, fetch product data based on id
  const product = {
    id: id || "1",
    name: "Modern Wooden Chair",
    price: 299,
    image: chair,
    category: "Chairs",
    description:
      "Crafted from premium solid oak with a comfortable beige cushion, this modern chair brings Scandinavian elegance to any space. The clean lines and minimalist design make it a perfect addition to your dining room or home office.",
    features: [
      "Solid oak wood construction",
      "Comfortable upholstered cushion",
      "Scandinavian design aesthetic",
      "Weight capacity: 250 lbs",
      "Assembly required",
    ],
    dimensions: {
      width: '21"',
      depth: '22"',
      height: '32"',
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>

              <p className="text-muted-foreground mb-8">{product.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dimensions */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Dimensions:</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Width</p>
                    <p className="font-medium">{product.dimensions.width}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Depth</p>
                    <p className="font-medium">{product.dimensions.depth}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Height</p>
                    <p className="font-medium">{product.dimensions.height}</p>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-6 font-medium">{quantity}</span>
                  <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button size="lg" className="w-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
