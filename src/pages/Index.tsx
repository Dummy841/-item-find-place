
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { Cart } from "@/components/Cart";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <main className="pt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Discover Amazing Products
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Shop our curated collection of premium products with fast shipping and excellent customer service.
              </p>
            </div>
            <ProductGrid />
          </div>
        </main>
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
