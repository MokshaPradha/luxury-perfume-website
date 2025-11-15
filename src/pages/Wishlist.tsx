import { Link } from 'react-router-dom';
import { useStore } from '../lib/store';
import { motion } from 'motion/react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';

export function Wishlist() {
  const { wishlist } = useStore();
  
  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Heart className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
          <h2 className="font-['Playfair_Display'] text-3xl mb-4">
            Your Wishlist is Empty
          </h2>
          <p className="text-muted-foreground mb-8">
            Save your favorite fragrances to easily find them later
          </p>
          <Link to="/shop">
            <Button className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Explore Fragrances
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-4">
            My Wishlist
          </h1>
          <p className="text-muted-foreground">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
