import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, reviews as productReviews } from '../lib/products';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { Star, Heart, ShoppingBag, Check, ChevronLeft } from 'lucide-react';
import { useStore } from '../lib/store';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState(product?.size[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [imageZoom, setImageZoom] = useState(false);
  
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useStore();
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }
  
  const isInWishlist = wishlist.some((item) => item.id === product.id);
  const reviews = productReviews[product.id] || [];
  const similarProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }
  };
  
  const handleToggleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/shop" className="flex items-center text-sm text-muted-foreground hover:text-[var(--color-gold)]">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Shop
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div
              className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--color-cream)] cursor-zoom-in"
              onClick={() => setImageZoom(!imageZoom)}
            >
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className={`h-full w-full object-cover transition-transform duration-300 ${
                  imageZoom ? 'scale-150' : 'scale-100'
                }`}
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-[var(--color-gold)] text-black">New</Badge>
                )}
                {product.isBestSeller && (
                  <Badge variant="secondary">Best Seller</Badge>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive">Sale</Badge>
                )}
              </div>
            </div>
            
            <p className="text-xs text-center text-muted-foreground">
              Click image to zoom · 360° view available in store
            </p>
          </motion.div>
          
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm tracking-[0.3em] text-[var(--color-gold)] uppercase mb-2">
                {product.brand}
              </p>
              <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-[var(--color-gold)] text-[var(--color-gold)]'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>
              
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                    <Badge variant="destructive">
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  </>
                )}
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            
            {/* Size Selection */}
            <div>
              <Label className="mb-3 block">Size</Label>
              <div className="flex gap-3">
                {product.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/10'
                        : 'border-border hover:border-[var(--color-gold)]/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div>
              <Label className="mb-3 block">Quantity</Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex gap-3">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 py-6"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleToggleWishlist}
                className="py-6 px-6"
              >
                <Heart
                  className={`h-5 w-5 ${
                    isInWishlist ? 'fill-red-500 text-red-500' : ''
                  }`}
                />
              </Button>
            </div>
            
            {/* Stock Status */}
            {product.inStock && (
              <div className="flex items-center text-sm text-green-600">
                <Check className="h-4 w-4 mr-2" />
                In Stock - Ships within 24 hours
              </div>
            )}
            
            {/* Additional Info */}
            <div className="border-t border-border pt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gender</span>
                <span className="capitalize">{product.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Free Shipping</span>
                <span>On orders over $100</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Tabs defaultValue="notes" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="notes">Fragrance Notes</TabsTrigger>
              <TabsTrigger value="description">Full Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="notes" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-['Cormorant'] text-xl mb-4">Top Notes</h4>
                  <ul className="space-y-2">
                    {product.notes.top.map((note) => (
                      <li key={note} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] mr-3"></span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-['Cormorant'] text-xl mb-4">Heart Notes</h4>
                  <ul className="space-y-2">
                    {product.notes.heart.map((note) => (
                      <li key={note} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] mr-3"></span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-['Cormorant'] text-xl mb-4">Base Notes</h4>
                  <ul className="space-y-2">
                    {product.notes.base.map((note) => (
                      <li key={note} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] mr-3"></span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="description">
              <div className="bg-card border border-border rounded-xl p-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                <h4 className="font-['Cormorant'] text-xl mb-3">Ingredients</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our perfumes are crafted with the finest natural and synthetic ingredients, carefully sourced from around the world. We use alcohol denat., parfum (fragrance), aqua (water), and various essential oils and aromatic compounds to create our unique scents. All ingredients comply with international safety standards.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="space-y-6">
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-card border border-border rounded-xl p-6"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-['Cormorant'] text-lg">{review.userName}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="mt-1">
                              Verified Purchase
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'fill-[var(--color-gold)] text-[var(--color-gold)]'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{review.comment}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(review.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="bg-card border border-border rounded-xl p-12 text-center">
                    <p className="text-muted-foreground">
                      No reviews yet. Be the first to review this product!
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
        
        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Playfair_Display'] text-3xl mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={`font-medium ${className}`}>{children}</label>;
}
