import { create } from 'zustand';
import { CartItem, Product } from '../types/product';

interface StoreState {
  cart: CartItem[];
  wishlist: Product[];
  darkMode: boolean;
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  toggleDarkMode: () => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  wishlist: [],
  darkMode: false,
  
  addToCart: (product, size) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === product.id && item.selectedSize === size
      );
      
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id && item.selectedSize === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      
      return {
        cart: [...state.cart, { ...product, quantity: 1, selectedSize: size }],
      };
    }),
  
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })),
  
  clearCart: () => set({ cart: [] }),
  
  addToWishlist: (product) =>
    set((state) => {
      if (state.wishlist.find((item) => item.id === product.id)) {
        return state;
      }
      return { wishlist: [...state.wishlist, product] };
    }),
  
  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== productId),
    })),
  
  toggleDarkMode: () =>
    set((state) => {
      const newDarkMode = !state.darkMode;
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { darkMode: newDarkMode };
    }),
}));
