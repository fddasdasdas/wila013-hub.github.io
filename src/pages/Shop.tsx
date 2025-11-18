import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import chair1 from "@/assets/chair-1.jpg";
import chair2 from "@/assets/chair-2.jpg";
import chair3 from "@/assets/chair-3.jpg";
import sofa1 from "@/assets/sofa-1.jpg";
import sofa2 from "@/assets/sofa-2.jpg";
import sofa3 from "@/assets/sofa-3.jpg";
import table1 from "@/assets/table-1.jpg";
import table2 from "@/assets/table-2.jpg";
import table3 from "@/assets/table-3.jpg";
import lamp1 from "@/assets/lamp-1.jpg";
import lamp2 from "@/assets/lamp-2.jpg";
import lamp3 from "@/assets/lamp-3.jpg";
import shelf from "@/assets/shelf-1.jpg";
import storage1 from "@/assets/storage-1.jpg";
import storage2 from "@/assets/storage-2.jpg";
import bed from "@/assets/bed-1.jpg";
import nightstand from "@/assets/nightstand-1.jpg";
import dresser from "@/assets/dresser-1.jpg";
import desk from "@/assets/desk-1.jpg";
import officeChair from "@/assets/office-chair-1.jpg";

const Shop = () => {
  const products = [
    // Chairs Category
    { id: "1", name: "Modern Wooden Chair", price: 299, image: chair1, category: "Chairs" },
    { id: "2", name: "Contemporary Dining Chair", price: 249, image: chair2, category: "Chairs" },
    { id: "3", name: "Velvet Accent Chair", price: 449, image: chair3, category: "Chairs" },
    
    // Sofas Category
    { id: "4", name: "Terracotta Sofa", price: 1299, image: sofa1, category: "Sofas" },
    { id: "5", name: "L-Shaped Sectional", price: 1899, image: sofa2, category: "Sofas" },
    { id: "6", name: "Navy Velvet Loveseat", price: 1099, image: sofa3, category: "Sofas" },
    
    // Tables Category
    { id: "7", name: "Minimalist Coffee Table", price: 599, image: table1, category: "Tables" },
    { id: "8", name: "Walnut Dining Table", price: 899, image: table2, category: "Tables" },
    { id: "9", name: "Marble Side Table", price: 349, image: table3, category: "Tables" },
    
    // Lighting Category
    { id: "10", name: "Tripod Floor Lamp", price: 189, image: lamp1, category: "Lighting" },
    { id: "11", name: "Arc Floor Lamp", price: 279, image: lamp2, category: "Lighting" },
    { id: "12", name: "Ceramic Table Lamp", price: 129, image: lamp3, category: "Lighting" },
    
    // Storage Category
    { id: "13", name: "Modern Bookshelf", price: 449, image: shelf, category: "Storage" },
    { id: "14", name: "TV Console Cabinet", price: 699, image: storage1, category: "Storage" },
    { id: "15", name: "Storage Cabinet", price: 549, image: storage2, category: "Storage" },
    
    // Bedroom Category
    { id: "16", name: "Platform Bed Frame", price: 799, image: bed, category: "Bedroom" },
    { id: "17", name: "Walnut Nightstand", price: 249, image: nightstand, category: "Bedroom" },
    { id: "18", name: "Modern Dresser", price: 649, image: dresser, category: "Bedroom" },
    
    // Office Category
    { id: "19", name: "Home Office Desk", price: 499, image: desk, category: "Office" },
    { id: "20", name: "Ergonomic Office Chair", price: 399, image: officeChair, category: "Office" },
    { id: "21", name: "Office Lounge Chair", price: 299, image: chair1, category: "Office" },
  ];

  const categories = ["All", "Chairs", "Sofas", "Tables", "Lighting", "Storage", "Bedroom", "Office"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop All Products</h1>
            <p className="text-lg text-muted-foreground">
              Explore our complete collection of modern furniture
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button key={category} variant="outline" size="sm">
                    {category}
                  </Button>
                ))}
              </div>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
