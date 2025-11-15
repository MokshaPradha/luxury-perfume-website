import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Champs-Élysées', 'Paris, France 75008'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+33 1 42 96 00 00', 'Mon-Sat: 9AM-7PM'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['support@aureliaparfums.com', 'info@aureliaparfums.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9AM-7PM', 'Sat: 10AM-6PM', 'Sun: Closed'],
    },
  ];
  
  const stores = [
    { city: 'Paris', address: '123 Champs-Élysées, 75008', phone: '+33 1 42 96 00 00' },
    { city: 'London', address: '456 Bond Street, W1S 1RX', phone: '+44 20 7629 1234' },
    { city: 'New York', address: '789 Fifth Avenue, NY 10022', phone: '+1 212 555 0100' },
  ];
  
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-[var(--color-gold)] uppercase mb-2">
            Get In Touch
          </p>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h2 className="font-['Cormorant'] text-2xl mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    className="mt-2"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 px-8 py-6"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-[var(--color-gold)]" />
                  </div>
                  <div>
                    <h3 className="font-['Cormorant'] text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Store Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-[var(--color-gold)] uppercase mb-2">
              Visit Our Stores
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl">
              Store Locations
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stores.map((store, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-['Cormorant'] text-2xl mb-4">{store.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{store.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[var(--color-gold)]" />
                    <p className="text-sm text-muted-foreground">{store.phone}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-6"
                >
                  Get Directions
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8"
        >
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Interactive map would be displayed here</p>
              <p className="text-sm text-muted-foreground mt-2">
                Integration with Google Maps or similar service
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Quick Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-[var(--color-cream)] to-white dark:from-gray-900 dark:to-black rounded-2xl p-12 text-center"
        >
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-muted-foreground mb-8">
            Chat with our customer support team or reach out via WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90">
              <MessageSquare className="mr-2 h-5 w-5" />
              Start Live Chat
            </Button>
            <Button variant="outline">
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp Support
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
