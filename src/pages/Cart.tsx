import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  // Mock cart data
  const cartItems = [];
  const subtotal = 0;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-6">Your cart is empty</p>
              <Link to="/shop">
                <Button size="lg">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {/* Sample cart item structure */}
                <div className="flex gap-4 p-4 border border-border rounded-lg">
                  <div className="w-24 h-24 bg-muted rounded-md flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Product Name</h3>
                    <p className="text-sm text-muted-foreground mb-2">Category</p>
                    <p className="font-bold text-primary">$299</p>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center border border-border rounded-lg">
                      <Button variant="ghost" size="icon">
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="px-4 text-sm">1</span>
                      <Button variant="ghost" size="icon">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="border border-border rounded-lg p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">{shipping === 0 ? "Free" : `$${shipping}`}</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-lg text-primary">${total}</span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full">
                    Proceed to Checkout
                  </Button>
                  <Link to="/shop">
                    <Button variant="outline" size="lg" className="w-full mt-3">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
