"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Minus, Plus, X, ShoppingBag, ArrowRight, Heart } from "lucide-react";
import { useStore } from "@/lib/store";

export default function CartPage() {
  const cart = useStore((s) => s.cart);
  const updateQty = useStore((s) => s.updateQty);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const total = useStore((s) => s.cartTotal());

  if (cart.length === 0) {
    return (
      <main className="pt-32 pb-20 min-h-screen">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="text-8xl mb-6">🎁</div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#5B315E]">Your gift bag is empty</h1>
          <p className="mt-4 text-[#332B32]/80">Let's fill it with something beautiful.</p>
          <Link href="/shop" className="btn-primary mt-8 inline-flex">
            Start Gifting <ArrowRight size={16} className="arrow" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 min-h-screen">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-[#332B32] mb-2">Your Gift Bag</h1>
        <p className="text-[#332B32]/80 mb-10">{cart.length} {cart.length === 1 ? "gift" : "gifts"} ready to be wrapped with love</p>

        <div className="grid lg:grid-cols-[1fr_400px] gap-10">
          <div className="space-y-4">
            {cart.map((line) => (
              <motion.div
                key={line.productId}
                layout
                className="flex gap-4 md:gap-6 p-4 md:p-5 rounded-3xl bg-white border border-[#F4E4D4]"
              >
                <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-2xl overflow-hidden bg-[#F4E4D4] shrink-0">
                  <Image src={line.image} alt={line.name} fill sizes="(max-width: 768px) 96px, 128px" className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-xl text-[#332B32]">{line.name}</p>
                  {line.recipient && <p className="text-sm text-[#C8A96B] font-script mt-1">For {line.recipient}</p>}
                  {line.message && <p className="text-xs text-[#332B32]/80 italic mt-1">"{line.message}"</p>}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-[#FFF8F0] rounded-full border border-[#F4E4D4]">
                      <button onClick={() => updateQty(line.productId, line.qty - 1)} className="h-9 w-9 flex items-center justify-center">
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center font-semibold">{line.qty}</span>
                      <button onClick={() => updateQty(line.productId, line.qty + 1)} className="h-9 w-9 flex items-center justify-center">
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-serif text-2xl text-[#5B315E]">₹{(line.price * line.qty).toLocaleString()}</span>
                  </div>
                </div>
                <button onClick={() => removeFromCart(line.productId)} className="self-start h-9 w-9 rounded-full hover:bg-[#F6C9CF]/40 flex items-center justify-center text-[#332B32]/75">
                  <X size={16} />
                </button>
              </motion.div>
            ))}
          </div>

          <aside className="glass rounded-3xl p-6 h-fit sticky top-28">
            <h3 className="font-serif text-2xl text-[#5B315E] mb-6">Order summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#332B32]/80">Subtotal</span>
                <span className="font-semibold">₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#332B32]/80">Wrapping</span>
                <span className="text-[#B9E4D0]">Free ✨</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#332B32]/80">Delivery</span>
                <span>{total >= 2000 ? <span className="text-[#B9E4D0]">Free</span> : <span>₹99</span>}</span>
              </div>
            </div>
            <div className="my-6 pt-4 border-t border-[#F4E4D4] flex justify-between">
              <span className="font-serif text-xl">Total</span>
              <span className="font-serif text-3xl text-[#5B315E]">
                ₹{(total + (total >= 2000 ? 0 : 99)).toLocaleString()}
              </span>
            </div>
            <button className="btn-primary w-full justify-center">
              <ShoppingBag size={16} /> Proceed to Checkout
            </button>
            <p className="text-center text-xs text-[#332B32]/80 mt-3">Secure · Handcrafted · Delivered with love 💗</p>
          </aside>
        </div>
      </div>
    </main>
  );
}
