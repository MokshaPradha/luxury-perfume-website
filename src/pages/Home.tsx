import { motion } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../lib/products';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Sparkles, Truck, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

export function Home() {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sophie Laurent',
      role: 'Fashion Editor',
      comment: 'Aurelia Parfums captures the essence of luxury. Every fragrance tells a story of elegance and sophistication.',
      rating: 5,
    },
    {
      id: 2,
      name: 'James Anderson',
      role: 'Entrepreneur',
      comment: 'The quality is unmatched. These perfumes are my signature scents for both business and leisure.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Isabella Romano',
      role: 'Lifestyle Blogger',
      comment: 'I\'ve tried countless fragrances, but Aurelia stands out. The longevity and sillage are exceptional.',
      rating: 5,
    },
  ];
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden bg-gradient-to-br from-[var(--color-cream)] to-white dark:from-gray-900 dark:to-black">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759793499819-bf60128a54b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwZXJmdW1lfGVufDF8fHx8MTc2MzAxNzE0OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4"
            >
              Luxury Fragrances
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-['Playfair_Display'] text-5xl md:text-7xl mb-6"
            >
              Discover Your
              <br />
              Signature Scent
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              Experience the art of fine perfumery with our exclusive collection of luxury fragrances. Each bottle is a masterpiece.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4"
            >
              <Link to="/shop">
                <Button className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 px-8 py-6 text-base">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/quiz">
                <Button variant="outline" className="px-8 py-6 text-base">
                  Find Your Scent
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 border-y border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders over $100' },
              { icon: Shield, title: 'Authentic', desc: '100% Genuine Products' },
              { icon: Award, title: 'Premium Quality', desc: 'Luxury Ingredients' },
              { icon: Sparkles, title: 'Gift Wrapping', desc: 'Complimentary Service' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="h-8 w-8 mx-auto mb-4 text-[var(--color-gold)]" />
                <h3 className="font-['Cormorant'] text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Best Sellers */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.3em] text-[var(--color-gold)] uppercase mb-2">
              Customer Favorites
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-4">
              Best Sellers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most beloved fragrances, cherished by perfume connoisseurs worldwide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" className="px-8 py-6">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Discount Banner */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 dark:from-[var(--color-gold)] dark:to-yellow-600 text-white dark:text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] uppercase mb-4">Limited Time Offer</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl mb-6">
              Holiday Special
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get 25% off on selected fragrances. Ends November 30th.
            </p>
            <Link to="/shop">
              <Button className="bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90 px-8 py-6 text-base">
                Shop the Sale
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.3em] text-[var(--color-gold)] uppercase mb-2">
              Just Launched
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-4">
              New Arrivals
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Brand Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-6">
                The Art of Perfumery
              </h2>
              <p className="text-muted-foreground mb-4">
                Since 1985, Aurelia Parfums has been crafting exceptional fragrances that capture the essence of luxury and elegance. Our master perfumers blend the finest natural ingredients from around the world to create unforgettable scents.
              </p>
              <p className="text-muted-foreground mb-8">
                Each bottle represents our commitment to excellence, artistry, and the timeless tradition of French perfumery. We believe that fragrance is more than a scent—it's an expression of identity, emotion, and memory.
              </p>
              <Link to="/about">
                <Button variant="outline">
                  Discover Our Heritage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608494604059-7971195e13e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MzAwNzg3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Brand Story"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.3em] text-[var(--color-gold)] uppercase mb-2">
              Testimonials
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-12 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[var(--color-gold)] fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg italic mb-6">"{testimonials[currentTestimonial].comment}"</p>
              <h4 className="font-['Cormorant'] text-xl mb-1">{testimonials[currentTestimonial].name}</h4>
              <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
              
              <div className="flex justify-center mt-6">
                <Button
                  variant="outline"
                  className="px-4 py-2"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="px-4 py-2"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-cream)] to-white dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-4">
              Join Our Community
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive exclusive offers, fragrance tips, and be the first to know about new launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
              />
              <Button className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 px-8 py-4 rounded-full">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}