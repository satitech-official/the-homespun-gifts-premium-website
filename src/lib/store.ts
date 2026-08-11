import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PRODUCTS, type Product } from "./data";

export type CartLine = {
  productId: string;
  qty: number;
  name: string;
  image: string;
  price: number;
  recipient?: string;
  message?: string;
};

export type Reminder = {
  id: string;
  title: string;
  date: string;
  person: string;
  remindDays: 7 | 14 | 30;
};

type Store = {
  cart: CartLine[];
  wishlist: string[];
  reminders: Reminder[];
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  addToCart: (p: { productId: string; name: string; image: string; price: number; qty?: number; recipient?: string; message?: string }) => void;
  removeFromCart: (productId: string) => void;
  updateQty: (productId: string, qty: number) => void;
  toggleWishlist: (productId: string) => void;
  addReminder: (r: Reminder) => void;
  removeReminder: (id: string) => void;
  cartCount: () => number;
  cartTotal: () => number;
};

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      reminders: [],
      cartOpen: false,
      setCartOpen: (v) => set({ cartOpen: v }),
      addToCart: (p) =>
        set((s) => {
          const existing = s.cart.find((c) => c.productId === p.productId);
          if (existing) {
            return {
              cart: s.cart.map((c) =>
                c.productId === p.productId ? { ...c, qty: c.qty + (p.qty ?? 1), recipient: p.recipient ?? c.recipient, message: p.message ?? c.message } : c,
              ),
            };
          }
          return { cart: [...s.cart, { productId: p.productId, qty: p.qty ?? 1, name: p.name, image: p.image, price: p.price, recipient: p.recipient, message: p.message }] };
        }),
      removeFromCart: (id) => set((s) => ({ cart: s.cart.filter((c) => c.productId !== id) })),
      updateQty: (id, qty) =>
        set((s) => ({
          cart: qty <= 0
            ? s.cart.filter((c) => c.productId !== id)
            : s.cart.map((c) => (c.productId === id ? { ...c, qty } : c)),
        })),
      toggleWishlist: (id) =>
        set((s) => ({
          wishlist: s.wishlist.includes(id) ? s.wishlist.filter((w) => w !== id) : [...s.wishlist, id],
        })),
      addReminder: (r) => set((s) => ({ reminders: [...s.reminders, r] })),
      removeReminder: (id) => set((s) => ({ reminders: s.reminders.filter((r) => r.id !== id) })),
      cartCount: () => get().cart.reduce((n, c) => n + c.qty, 0),
      cartTotal: () => get().cart.reduce((n, c) => n + c.qty * c.price, 0),
    }),
    { name: "homespun-store" },
  ),
);

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
