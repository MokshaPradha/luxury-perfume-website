import { Product, Review } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Élégance Noir',
    brand: 'LUXE PARIS',
    price: 249,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2Mjk1MDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 234,
    category: 'Eau de Parfum',
    gender: 'women',
    size: ['30ml', '50ml', '100ml'],
    description: 'A sophisticated blend of dark florals and rich amber, Élégance Noir is the epitome of modern luxury. This captivating fragrance opens with bright bergamot and delicate rose, transitioning into a heart of jasmine and iris, before settling into a warm base of vanilla, patchouli, and amber.',
    notes: {
      top: ['Bergamot', 'Pink Pepper', 'Rose'],
      heart: ['Jasmine', 'Iris', 'Orange Blossom'],
      base: ['Vanilla', 'Patchouli', 'Amber', 'Musk']
    },
    inStock: true,
    isBestSeller: true,
    isNew: false
  },
  {
    id: '2',
    name: 'Oud Impérial',
    brand: 'MAISON D\'OR',
    price: 395,
    image: 'https://images.unsplash.com/photo-1650686036849-ff87bcaa2e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmcmFncmFuY2UlMjBnb2xkfGVufDF8fHx8MTc2MzAxNzE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 189,
    category: 'Eau de Parfum',
    gender: 'unisex',
    size: ['50ml', '100ml'],
    description: 'Experience the mystique of the Orient with Oud Impérial. This rare and precious fragrance combines the finest oud wood with saffron and leather, creating an unforgettable olfactory experience that speaks of royalty and refinement.',
    notes: {
      top: ['Saffron', 'Cardamom', 'Nutmeg'],
      heart: ['Oud Wood', 'Rose', 'Leather'],
      base: ['Sandalwood', 'Amber', 'Musk']
    },
    inStock: true,
    isBestSeller: true,
    isNew: true
  },
  {
    id: '3',
    name: 'Velvet Rose',
    brand: 'BELLE AROMA',
    price: 189,
    originalPrice: 229,
    image: 'https://images.unsplash.com/photo-1655500061669-1f8ac338a319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVyZnVtZSUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzYyOTQ4MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 312,
    category: 'Eau de Toilette',
    gender: 'women',
    size: ['30ml', '50ml', '100ml'],
    description: 'Velvet Rose embodies timeless femininity with a contemporary twist. This elegant fragrance features the finest Turkish rose petals, enhanced by fruity notes and a creamy sandalwood base.',
    notes: {
      top: ['Lychee', 'Bergamot', 'Mandarin'],
      heart: ['Turkish Rose', 'Peony', 'Magnolia'],
      base: ['Sandalwood', 'Vanilla', 'White Musk']
    },
    inStock: true,
    isBestSeller: true
  },
  {
    id: '4',
    name: 'Midnight Cedar',
    brand: 'NOIR HOMME',
    price: 275,
    image: 'https://images.unsplash.com/photo-1759793499819-bf60128a54b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwZXJmdW1lfGVufDF8fHx8MTc2MzAxNzE0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    reviews: 156,
    category: 'Eau de Parfum',
    gender: 'men',
    size: ['50ml', '100ml'],
    description: 'A bold and masculine scent that captures the essence of a moonlit forest. Midnight Cedar combines fresh citrus with woody notes and warm spices for a truly distinctive fragrance.',
    notes: {
      top: ['Grapefruit', 'Black Pepper', 'Elemi'],
      heart: ['Cedarwood', 'Vetiver', 'Geranium'],
      base: ['Patchouli', 'Oakmoss', 'Tonka Bean']
    },
    inStock: true
  },
  {
    id: '5',
    name: 'Jasmine Blanc',
    brand: 'LUXE PARIS',
    price: 225,
    image: 'https://images.unsplash.com/photo-1759382622584-c1fae60c415d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwaW5ncmVkaWVudHMlMjBmbG93ZXJzfGVufDF8fHx8MTc2Mjk1MTgxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 278,
    category: 'Eau de Parfum',
    gender: 'women',
    size: ['30ml', '50ml', '100ml'],
    description: 'Pure elegance in a bottle. Jasmine Blanc celebrates the intoxicating beauty of white flowers with a luminous and sophisticated composition.',
    notes: {
      top: ['Neroli', 'Green Notes', 'Cassis'],
      heart: ['Jasmine Sambac', 'Tuberose', 'Gardenia'],
      base: ['White Musk', 'Cashmeran', 'Blonde Woods']
    },
    inStock: true,
    isNew: true
  },
  {
    id: '6',
    name: 'Ambre Solaire',
    brand: 'MAISON D\'OR',
    price: 315,
    image: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2Mjk1MDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 201,
    category: 'Eau de Parfum',
    gender: 'unisex',
    size: ['50ml', '100ml'],
    description: 'Warm and radiant like the golden hour sun. Ambre Solaire wraps you in a sensual embrace of amber, incense, and precious resins.',
    notes: {
      top: ['Labdanum', 'Coriander', 'Clary Sage'],
      heart: ['Incense', 'Benzoin', 'Myrrh'],
      base: ['Amber', 'Vanilla', 'Tonka Bean']
    },
    inStock: true,
    isBestSeller: true
  },
  {
    id: '7',
    name: 'Citrus Supreme',
    brand: 'BELLE AROMA',
    price: 165,
    image: 'https://images.unsplash.com/photo-1650686036849-ff87bcaa2e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmcmFncmFuY2UlMjBnb2xkfGVufDF8fHx8MTc2MzAxNzE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    reviews: 423,
    category: 'Eau de Toilette',
    gender: 'unisex',
    size: ['30ml', '50ml', '100ml'],
    description: 'Fresh, vibrant, and utterly uplifting. Citrus Supreme is a zesty celebration of Mediterranean citrus groves, perfect for everyday wear.',
    notes: {
      top: ['Bergamot', 'Lemon', 'Grapefruit', 'Mandarin'],
      heart: ['Neroli', 'Petit Grain', 'Basil'],
      base: ['Vetiver', 'Cedar', 'Musk']
    },
    inStock: true
  },
  {
    id: '8',
    name: 'Noir Mystique',
    brand: 'NOIR HOMME',
    price: 299,
    originalPrice: 349,
    image: 'https://images.unsplash.com/photo-1655500061669-1f8ac338a319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVyZnVtZSUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzYyOTQ4MzkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 167,
    category: 'Eau de Parfum',
    gender: 'men',
    size: ['50ml', '100ml'],
    description: 'Dark, mysterious, and utterly captivating. Noir Mystique is crafted for the modern gentleman who dares to be different.',
    notes: {
      top: ['Bergamot', 'Lavender', 'Pink Pepper'],
      heart: ['Iris', 'Clary Sage', 'Geranium'],
      base: ['Leather', 'Vetiver', 'Patchouli', 'Amber']
    },
    inStock: true,
    isNew: true
  }
];

export const reviews: { [productId: string]: Review[] } = {
  '1': [
    {
      id: 'r1',
      userName: 'Sophie Laurent',
      rating: 5,
      comment: 'Absolutely divine! This perfume is sophisticated and long-lasting. I receive compliments every time I wear it.',
      date: '2024-10-15',
      verified: true
    },
    {
      id: 'r2',
      userName: 'Emily Chen',
      rating: 5,
      comment: 'My new signature scent. The blend is perfect - not too sweet, not too heavy. Just elegant.',
      date: '2024-10-10',
      verified: true
    },
    {
      id: 'r3',
      userName: 'Isabella Romano',
      rating: 4,
      comment: 'Beautiful fragrance with excellent longevity. The packaging is also stunning!',
      date: '2024-10-05',
      verified: true
    }
  ],
  '2': [
    {
      id: 'r4',
      userName: 'James Anderson',
      rating: 5,
      comment: 'The oud is rich but not overpowering. This is luxury in a bottle. Worth every penny.',
      date: '2024-10-18',
      verified: true
    },
    {
      id: 'r5',
      userName: 'Maya Patel',
      rating: 5,
      comment: 'Exquisite! The saffron and oud combination is magical. This fragrance is truly special.',
      date: '2024-10-12',
      verified: true
    }
  ]
};
