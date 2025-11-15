import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Product } from '../types/product';
import { useStore } from '../lib/store';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useStore();
  const isInWishlist = wishlist.some((item) => item.id === product.id);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, product.size[0]);
  };
  
  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300">
          {/* Badges */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90">
                New
              </Badge>
            )}
            {product.isBestSeller && (
              <Badge variant="secondary">Best Seller</Badge>
            )}
            {product.originalPrice && (
              <Badge variant="destructive">
                Sale
              </Badge>
            )}
          </div>
          
          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Heart
              className={`h-5 w-5 ${
                isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-700'
              }`}
            />
          </button>
          
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden bg-[var(--color-cream)]">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="mb-2">
              <p className="text-xs tracking-wider text-muted-foreground uppercase">
                {product.brand}
              </p>
              <h3 className="font-['Cormorant'] text-xl mt-1">{product.name}</h3>
            </div>
            
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                <span className="ml-1 text-sm">{product.rating}</span>
              </div>
              <span className="mx-2 text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">
                {product.reviews} reviews
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-xl">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              
              <Button
                onClick={handleAddToCart}
                size="icon"
                className="rounded-full bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90"
              >
                <ShoppingBag className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
