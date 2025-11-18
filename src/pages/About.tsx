import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Bloge</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe that great furniture should be beautiful, functional, and accessible to everyone.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={aboutImage}
                  alt="Our workspace"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2020, Bloge began with a simple mission: to make modern, quality furniture
                    accessible to everyone. We noticed a gap in the market for furniture that was both
                    beautifully designed and reasonably priced.
                  </p>
                  <p>
                    Today, we work directly with skilled craftsmen and manufacturers to bring you pieces that
                    combine Scandinavian minimalism with contemporary comfort. Every item in our collection is
                    carefully selected to ensure it meets our high standards for quality, design, and
                    sustainability.
                  </p>
                  <p>
                    We're more than just a furniture store—we're your partner in creating spaces that inspire
                    and comfort you every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We prioritize eco-friendly materials and sustainable manufacturing practices in all our
                  products.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  Every piece is crafted with attention to detail and built to last for years to come.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-muted-foreground">
                  Timeless designs that blend seamlessly with any interior style and stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We're constantly growing and evolving. Follow us on social media to stay updated on new
              collections, design tips, and exclusive offers.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
