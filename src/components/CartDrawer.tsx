"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag, Truck, Gift } from "lucide-react";
import { useStore } from "@/lib/store";

export function CartDrawer() {
  const open = useStore((s) => s.cartOpen);
  const setOpen = useStore((s) => s.setCartOpen);
  const cart = useStore((s) => s.cart);
  const updateQty = useStore((s) => s.updateQty);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const total = useStore((s) => s.cartTotal());
  const FREE_DELIVERY_THRESHOLD = 2000;
  const remaining = Math.max(0, FREE_DELIVERY_THRESHOLD - total);
  const progress = Math.min(100, (total / FREE_DELIVERY_THRESHOLD) * 100);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] bg-[#5B315E]/30 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 260 }}
            className="fixed right-0 top-0 bottom-0 z-[80] w-full sm:w-[440px] bg-[#FFF8F0] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-[#F4E4D4]">
              <div className="flex items-center gap-2">
                <Gift size={18} className="text-[#5B315E]" />
                <h3 className="font-serif text-2xl text-[#5B315E]">Your Gift Bag</h3>
                <span className="text-xs text-[#332B32]/75">{cart.length} items</span>
              </div>
              <button onClick={() => setOpen(false)} className="h-9 w-9 rounded-full bg-[#F6C9CF]/30 flex items-center justify-center hover:bg-[#F6C9CF]">
                <X size={16} />
              </button>
            </div>

            {remaining > 0 ? (
              <div className="p-4 mx-4 mt-4 rounded-2xl bg-[#F6C9CF]/30 border border-[#F6C9CF]">
                <div className="flex items-center gap-2 text-xs text-[#5B315E]">
                  <Truck size={14} />
                  <span>Add <strong>₹{remaining.toLocaleString()}</strong> more for FREE DELIVERY</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-[#C8A96B] to-[#5B315E]"
                  />
                </div>
              </div>
            ) : (
              <div className="p-4 mx-4 mt-4 rounded-2xl bg-[#B9E4D0]/50 border border-[#B9E4D0] text-xs text-[#5B315E] flex items-center gap-2">
                <Truck size={14} /> You've unlocked <strong>FREE DELIVERY</strong> 🎉
              </div>
            )}

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {cart.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🎁</div>
                  <p className="font-serif text-xl text-[#5B315E]">Your bag is empty</p>
                  <p className="text-sm text-[#332B32]/75 mt-2">Let's find something beautiful to gift.</p>
                  <Link href="/shop" onClick={() => setOpen(false)} className="btn-primary mt-6 inline-flex">
                    Explore Gifts
                  </Link>
                </div>
              )}
              {cart.map((line) => (
                <motion.div
                  key={line.productId}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  className="flex gap-3 p-3 rounded-2xl bg-white border border-[#F4E4D4]"
                >
                  <div className="relative h-20 w-20 rounded-xl overflow-hidden shrink-0 bg-[#F4E4D4]">
                    <Image src={line.image} alt={line.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-base text-[#332B32] truncate">{line.name}</p>
                    {line.recipient && <p className="text-xs text-[#C8A96B] font-script">For {line.recipient}</p>}
                    {line.message && <p className="text-xs text-[#332B32]/80 italic truncate">"{line.message}"</p>}
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-[#FFF8F0] rounded-full border border-[#F4E4D4]">
                        <button onClick={() => updateQty(line.productId, line.qty - 1)} className="h-7 w-7 flex items-center justify-center text-[#5B315E]">
                          <Minus size={12} />
                        </button>
                        <span className="text-xs w-5 text-center font-semibold">{line.qty}</span>
                        <button onClick={() => updateQty(line.productId, line.qty + 1)} className="h-7 w-7 flex items-center justify-center text-[#5B315E]">
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-serif text-lg text-[#5B315E]">₹{(line.price * line.qty).toLocaleString()}</span>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(line.productId)} className="self-start h-7 w-7 rounded-full hover:bg-[#F6C9CF]/40 flex items-center justify-center text-[#332B32]/75">
                    <X size={14} />
                  </button>
                </motion.div>
              ))}
            </div>

            {cart.length > 0 && (
              <div className="p-5 border-t border-[#F4E4D4] space-y-3 bg-white/60">
                <div className="flex justify-between text-sm">
                  <span className="text-[#332B32]/80">Subtotal</span>
                  <span className="font-semibold">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#332B32]/80">Wrapping</span>
                  <span className="text-[#B9E4D0]">Free ✨</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#F4E4D4]">
                  <span className="font-serif text-lg">Total</span>
                  <span className="font-serif text-2xl text-[#5B315E]">₹{total.toLocaleString()}</span>
                </div>
                <button className="btn-primary w-full justify-center">
                  <ShoppingBag size={16} /> Proceed to Checkout
                </button>
                <p className="text-center text-xs text-[#332B32]/80">Secure checkout · Handcrafted in 3–5 days</p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
