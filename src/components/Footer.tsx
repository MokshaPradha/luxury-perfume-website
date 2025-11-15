import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="font-['Playfair_Display'] text-2xl tracking-wider">
                AURELIA
              </span>
              <span className="font-['Cormorant'] text-xs tracking-[0.3em] text-[var(--color-gold)]">
                PARFUMS
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Crafting luxury fragrances since 1985. Experience the art of perfumery with our exquisite collections.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-['Cormorant'] text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-sm text-muted-foreground hover:text-[var(--color-gold)] transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-[var(--color-gold)] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-[var(--color-gold)] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-sm text-muted-foreground hover:text-[var(--color-gold)] transition-colors">
                  Fragrance Quiz
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="font-['Cormorant'] text-lg mb-4">Customer Service</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">Shipping & Delivery</li>
              <li className="text-sm text-muted-foreground">Returns & Exchanges</li>
              <li className="text-sm text-muted-foreground">Track Order</li>
              <li className="text-sm text-muted-foreground">FAQ</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-['Cormorant'] text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive exclusive offers and the latest news.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background"
              />
              <Button className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Aurelia Parfums. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-[var(--color-gold)]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-[var(--color-gold)]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
