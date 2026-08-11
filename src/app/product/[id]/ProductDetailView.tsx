"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  Heart,
  ShoppingBag,
  Sparkles,
  Truck,
  Shield,
  Gift,
  MessageCircle,
  Package,
  ArrowLeft,
} from "lucide-react";
import type { Product } from "@/lib/data";
import { PRODUCTS } from "@/lib/data";
import { useStore } from "@/lib/store";
import { ProductCard } from "@/components/Sections";

export default function ProductDetailView({ product }: { product: Product }) {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);

  const addToCart = useStore((s) => s.addToCart);
  const setCartOpen = useStore((s) => s.setCartOpen);
  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const wishlist = useStore((s) => s.wishlist);
  const wishlisted = wishlist.includes(product.id);

  const recommended = PRODUCTS.filter((p) => p.id !== product.id && p.occasion.some((o) => product.occasion.includes(o))).slice(0, 4);

  return (
    <main className="pt-28 md:pt-32 pb-20">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-[#5B315E] mb-6 hover:underline">
          <ArrowLeft size={14} /> Back to shop
        </Link>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10">
          <div className="space-y-4">
            <motion.div
              className="relative aspect-square rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#FFF8F0] to-[#F4E4D4] shadow-xl"
              data-cursor="explore"
            >
              <Image src={product.images[selectedImage] || product.image} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 50vw" loading="eager" className="object-cover" />
              {product.badge && (
                <span className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-[#5B315E] text-white text-xs uppercase tracking-wider font-semibold">
                  {product.badge}
                </span>
              )}
            </motion.div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative h-20 w-20 rounded-2xl overflow-hidden border-2 transition ${
                      selectedImage === i ? "border-[#5B315E]" : "border-transparent"
                    }`}
                  >
                    <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96B]">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-5xl text-[#332B32] mt-2 leading-tight">{product.name}</h1>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C8A96B" stroke="#C8A96B" />
                ))}
              </div>
              <span className="text-sm text-[#332B32]/80">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-serif text-4xl text-[#5B315E]">₹{product.price.toLocaleString()}</span>
              {product.oldPrice && (
                <>
                  <span className="text-lg line-through text-[#332B32]/80">₹{product.oldPrice.toLocaleString()}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#B9E4D0] text-[#332B32]">
                    Save {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            <p className="mt-6 text-[#332B32]/80 leading-relaxed">{product.description}</p>

            {product.customizable && (
              <div className="mt-8 space-y-4 p-6 rounded-3xl bg-[#FFF8F0] border border-[#F4E4D4]">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-[#C8A96B]" size={16} />
                  <p className="font-serif text-lg text-[#5B315E]">Personalize this gift</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#C8A96B]">Recipient's name</label>
                  <input
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="e.g. Priya"
                    className="mt-2 w-full px-4 py-3 rounded-full bg-white border border-[#F4E4D4] outline-none focus:border-[#5B315E]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#C8A96B]">Handwritten note</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    placeholder="A little message they'll keep forever…"
                    className="mt-2 w-full px-4 py-3 rounded-2xl bg-white border border-[#F4E4D4] outline-none focus:border-[#5B315E] resize-none font-script text-lg"
                  />
                </div>
                <label className="flex items-center justify-center gap-2 py-6 rounded-2xl border-2 border-dashed border-[#F4E4D4] bg-white cursor-pointer hover:border-[#C8A96B]">
                  <Gift size={18} className="text-[#5B315E]" />
                  <span className="text-sm text-[#332B32]/80">Upload a photo to include</span>
                  <input type="file" className="hidden" accept="image/*" />
                </label>
              </div>
            )}

            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center bg-white rounded-full border border-[#F4E4D4]">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="h-11 w-11 flex items-center justify-center text-[#5B315E]">
                  −
                </button>
                <span className="w-8 text-center font-semibold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="h-11 w-11 flex items-center justify-center text-[#5B315E]">
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  addToCart({
                    productId: product.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    qty,
                    recipient,
                    message,
                  });
                  setCartOpen(true);
                }}
                className="flex-1 btn-primary justify-center"
              >
                <ShoppingBag size={16} /> Customize & Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className="h-12 w-12 rounded-full bg-white border border-[#F4E4D4] flex items-center justify-center hover:border-[#EFA7B5]"
              >
                <Heart size={18} className={wishlisted ? "text-[#EFA7B5] fill-[#EFA7B5]" : "text-[#5B315E]"} />
              </button>
            </div>

            <a
              href={`https://wa.me/919999999999?text=Hi! I'd like to order ${encodeURIComponent(product.name)} from The Homespun Gifts.`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 w-full btn-outline justify-center"
            >
              <MessageCircle size={16} /> Order on WhatsApp
            </a>

            <div className="mt-8 grid grid-cols-3 gap-3 text-xs">
              {[
                { icon: Truck, title: "3–5 days", desc: "Pan-India delivery" },
                { icon: Shield, title: "Secure", desc: "Razorpay payments" },
                { icon: Package, title: "Gift wrap", desc: "Included free" },
              ].map((f) => (
                <div key={f.title} className="text-center p-3 rounded-2xl bg-white border border-[#F4E4D4]">
                  <f.icon size={16} className="text-[#C8A96B] mx-auto" />
                  <p className="font-semibold text-[#5B315E] mt-2">{f.title}</p>
                  <p className="text-[#332B32]/75 mt-0.5">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {recommended.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-3xl md:text-4xl text-[#332B32] mb-8">
              You might also <span className="italic text-[#5B315E]">love</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {recommended.map((p, i) => (
                <ProductCard key={p.id} p={p} i={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
