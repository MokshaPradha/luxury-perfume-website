import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Award, Heart, Leaf, Sparkles } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to crafting only the finest fragrances using premium ingredients.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every perfume is created with love and dedication by our master perfumers.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We source our ingredients responsibly and use eco-friendly packaging.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Blending traditional techniques with modern creativity to create unique scents.',
    },
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1608494604059-7971195e13e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MzAwNzg3MHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Us"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <p className="text-sm tracking-[0.3em] uppercase mb-4">Since 1985</p>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl">
              Our Story
            </h1>
          </motion.div>
        </div>
      </section>
      
      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-6">
                The Art of Perfumery
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded in 1985 in the heart of Paris, Aurelia Parfums was born from a passion for creating extraordinary fragrances that capture life's most precious moments. Our founder, Marie Aurelia Laurent, envisioned a perfume house that would blend the timeless elegance of French perfumery with innovative artistry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For nearly four decades, we have remained dedicated to our founding principles: using only the finest natural ingredients, working with master perfumers, and never compromising on quality. Each Aurelia fragrance is a labor of love, taking months—sometimes years—to perfect.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] text-[var(--color-gold)] uppercase mb-2">
              Our Values
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl">
              What Drives Us
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-gold)]/10 mb-6">
                  <value.icon className="h-8 w-8 text-[var(--color-gold)]" />
                </div>
                <h3 className="font-['Cormorant'] text-2xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <p className="text-sm tracking-[0.3em] text-[var(--color-gold)] uppercase mb-4">
                Founder & Master Perfumer
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-6">
                Marie Aurelia Laurent
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Born into a family of botanists in Grasse, France, Marie developed a deep appreciation for natural fragrances from an early age. After studying chemistry and perfumery at the prestigious ISIPCA in Versailles, she apprenticed under renowned perfumers before founding Aurelia Parfums.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Marie's philosophy is simple yet profound: "A perfume should not just smell beautiful—it should tell a story, evoke memories, and become part of who you are."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Marie continues to oversee the creation of every Aurelia fragrance, ensuring that each bottle meets her exacting standards of excellence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759793499819-bf60128a54b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwZXJmdW1lfGVufDF8fHx8MTc2MzAxNzE0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Founder"
                className="w-full h-[600px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Crafting Process */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-cream)] to-white dark:from-gray-900 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] text-[var(--color-gold)] uppercase mb-2">
              The Process
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl">
              Crafting Excellence
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: '01',
                title: 'Ingredient Selection',
                description: 'We source the finest natural ingredients from around the world, from Bulgarian rose to Indonesian patchouli.',
              },
              {
                number: '02',
                title: 'Composition',
                description: 'Our master perfumers blend hundreds of ingredients, creating harmonious compositions through months of refinement.',
              },
              {
                number: '03',
                title: 'Maturation',
                description: 'Each fragrance matures for several weeks, allowing the notes to harmonize and develop their full character.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="font-['Playfair_Display'] text-6xl text-[var(--color-gold)]/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-['Cormorant'] text-2xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1759382622584-c1fae60c415d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwaW5ncmVkaWVudHMlMjBmbG93ZXJzfGVufDF8fHx8MTc2Mjk1MTgxMXww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2Mjk1MDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1655500061669-1f8ac338a319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVyZnVtZSUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzYyOTQ4MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1650686036849-ff87bcaa2e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmcmFncmFuY2UlMjBnb2xkfGVufDF8fHx8MTc2MzAxNzE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1608494604059-7971195e13e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MzAwNzg3MHww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1759793499819-bf60128a54b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwZXJmdW1lfGVufDF8fHx8MTc2MzAxNzE0OHww&ixlib=rb-4.1.0&q=80&w=1080',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square rounded-xl overflow-hidden"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
