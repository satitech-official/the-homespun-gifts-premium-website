"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, X } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { useStore } from "@/lib/store";

export default function WishlistPage() {
  const wishlist = useStore((s) => s.wishlist);
  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const addToCart = useStore((s) => s.addToCart);
  const setCartOpen = useStore((s) => s.setCartOpen);

  const items = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <main className="pt-32 pb-20 min-h-screen">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-[#332B32] mb-2">Your Wishlist 💗</h1>
        <p className="text-[#332B32]/80 mb-10">{items.length} {items.length === 1 ? "gift" : "gifts"} saved for later</p>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-7xl mb-4">💝</div>
            <h2 className="font-serif text-2xl text-[#5B315E]">No gifts saved yet</h2>
            <p className="mt-2 text-[#332B32]/80">Tap the heart on any product to save it here.</p>
            <Link href="/shop" className="btn-primary mt-6 inline-flex">Browse Gifts</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {items.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden border border-[#F4E4D4] card-lift relative"
              >
                <div className="relative aspect-square product-img-wrap bg-gradient-to-br from-[#FFF8F0] to-[#F4E4D4]">
                  <Link href={`/product/${p.id}`} className="relative block h-full w-full">
                    <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                  </Link>
                  <button
                    onClick={() => toggleWishlist(p.id)}
                    className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 flex items-center justify-center shadow-md"
                  >
                    <X size={16} className="text-[#5B315E]" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96B]">{p.category}</p>
                  <Link href={`/product/${p.id}`}>
                    <h3 className="font-serif text-lg text-[#332B32] mt-1 line-clamp-1">{p.name}</h3>
                  </Link>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-serif text-xl text-[#5B315E]">₹{p.price.toLocaleString()}</span>
                    <button
                      onClick={() => {
                        addToCart({ productId: p.id, name: p.name, image: p.image, price: p.price });
                        setCartOpen(true);
                      }}
                      className="h-9 w-9 rounded-full bg-[#5B315E] text-white flex items-center justify-center hover:bg-[#332B32]"
                    >
                      <ShoppingBag size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
