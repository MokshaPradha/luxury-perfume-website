import { MessageCircle, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl bg-card border border-border shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border p-4 bg-[var(--color-gold)] text-black rounded-t-2xl">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">Chat Support</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm mb-4">
                Hello! How can we help you today?
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-sm">
                  Track my order
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  Shipping information
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  Product recommendations
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  Contact support
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[var(--color-gold)] text-black shadow-2xl hover:bg-[var(--color-gold)]/90"
          size="icon"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </motion.div>
    </>
  );
}
