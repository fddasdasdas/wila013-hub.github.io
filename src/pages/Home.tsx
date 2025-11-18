import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-furniture.jpg";
import chair1 from "@/assets/chair-1.jpg";
import chair3 from "@/assets/chair-3.jpg";
import sofa1 from "@/assets/sofa-1.jpg";
import sofa3 from "@/assets/sofa-3.jpg";
import table3 from "@/assets/table-3.jpg";
import lamp2 from "@/assets/lamp-2.jpg";
import bed from "@/assets/bed-1.jpg";
import desk from "@/assets/desk-1.jpg";

const Home = () => {
  const featuredProducts = [
    { id: "1", name: "Modern Wooden Chair", price: 299, image: chair1, category: "Chairs" },
    { id: "4", name: "Terracotta Sofa", price: 1299, image: sofa1, category: "Sofas" },
    { id: "3", name: "Velvet Accent Chair", price: 449, image: chair3, category: "Chairs" },
    { id: "11", name: "Arc Floor Lamp", price: 279, image: lamp2, category: "Lighting" },
    { id: "9", name: "Marble Side Table", price: 349, image: table3, category: "Tables" },
    { id: "6", name: "Navy Velvet Loveseat", price: 1099, image: sofa3, category: "Sofas" },
    { id: "16", name: "Platform Bed Frame", price: 799, image: bed, category: "Bedroom" },
    { id: "19", name: "Home Office Desk", price: 499, image: desk, category: "Office" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))]">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Modern furniture" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Modern Furniture for Contemporary Living
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Discover our curated collection of timeless pieces designed to transform your space into a haven of style and comfort.
              </p>
              <div className="flex gap-4">
                <Link to="/shop">
                  <Button size="lg" className="group">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
              <p className="text-muted-foreground">Find the perfect pieces for every room</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Living Room", "Bedroom", "Office", "Lighting", "Storage", "Dining", "Chairs", "Sofas"].map((category) => (
                <Link
                  key={category}
                  to="/shop"
                  className="group p-8 bg-background border border-border rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                >
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {category}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-muted-foreground">Handpicked favorites from our collection</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/shop">
                <Button size="lg" variant="outline">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Space Today</h2>
            <p className="text-lg mb-8 opacity-90">
              Get 15% off your first order when you sign up for our newsletter
            </p>
            <div className="flex justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md w-full max-w-md text-foreground"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
