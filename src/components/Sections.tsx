"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Heart, ShoppingBag, Sparkles } from "lucide-react";
import { OCCASIONS, PRODUCTS } from "@/lib/data";
import { useStore } from "@/lib/store";

export function Occasions() {
  return (
    <section id="occasions" className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-script text-2xl text-[#C8A96B] mb-2"
            >
              For every story you want to tell
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-6xl text-[#332B32] leading-tight"
            >
              Find the perfect gift
              <br />
              for every <span className="italic text-[#5B315E]">moment</span>.
            </motion.h2>
          </div>
          <Link href="/shop" className="btn-outline self-start md:self-auto">
            Shop All Occasions <ArrowUpRight size={16} className="arrow" />
          </Link>
        </div>

        <div className="grid gap-4 md:gap-5 grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px]">
          {OCCASIONS.map((occ, i) => (
            <motion.div
              key={occ.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              data-cursor="view"
              className={`group relative overflow-hidden card-lift ${
                occ.shape === "tall" ? "md:row-span-2" : ""
              } ${occ.shape === "wide" ? "md:col-span-2" : ""} ${occ.shape === "arch" ? "md:rounded-t-[80px] rounded-t-[60px]" : "rounded-3xl"}`}
            >
              <Image
                src={occ.image}
                alt={occ.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#332B32]/80 via-[#332B32]/20 to-transparent" />
              <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <ArrowUpRight size={16} className="text-[#5B315E]" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96B]">{occ.count} Gifts</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl italic">{occ.title}</h3>
                <p className="text-xs md:text-sm text-white/90 mt-1 opacity-0 group-hover:opacity-100 transition">{occ.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ p, i }: { p: (typeof PRODUCTS)[0]; i: number }) {
  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const addToCart = useStore((s) => s.addToCart);
  const setCartOpen = useStore((s) => s.setCartOpen);
  const wishlisted = useStore((s) => s.wishlist.includes(p.id));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      className="product-card group relative bg-white rounded-3xl overflow-hidden border border-[#F4E4D4] card-lift"
      data-cursor="view"
    >
      <div className="relative aspect-square product-img-wrap bg-gradient-to-br from-[#FFF8F0] to-[#F4E4D4]">
        <Link href={`/product/${p.id}`} className="relative block h-full w-full">
          <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
        </Link>
        {p.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#5B315E] text-white text-[10px] uppercase tracking-wider font-semibold">
            {p.badge}
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(p.id);
          }}
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-110 transition"
          aria-label="Wishlist"
        >
          <Heart size={16} className={wishlisted ? "text-[#EFA7B5] fill-[#EFA7B5]" : "text-[#5B315E]"} />
        </button>
        <div className="product-cta absolute inset-x-3 bottom-3 flex gap-2">
          <button
            onClick={() => {
              addToCart({ productId: p.id, name: p.name, image: p.image, price: p.price });
              setCartOpen(true);
            }}
            className="flex-1 py-2.5 rounded-full bg-[#5B315E] text-white text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#332B32] transition"
          >
            <ShoppingBag size={14} /> Add
          </button>
          <Link
            href={`/product/${p.id}`}
            className="px-3 py-2.5 rounded-full bg-white text-[#5B315E] text-xs font-semibold flex items-center justify-center hover:bg-[#F6C9CF] transition"
          >
            View
          </Link>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96B]">{p.category}</p>
        <Link href={`/product/${p.id}`}>
          <h3 className="font-serif text-lg text-[#332B32] mt-1 line-clamp-1">{p.name}</h3>
        </Link>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, idx) => (
            <Star key={idx} size={11} fill="#C8A96B" stroke="#C8A96B" />
          ))}
          <span className="text-xs text-[#332B32]/75 ml-1">({p.reviews})</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-xl text-[#5B315E]">₹{p.price.toLocaleString()}</span>
            {p.oldPrice && <span className="text-xs line-through text-[#332B32]/80">₹{p.oldPrice.toLocaleString()}</span>}
          </div>
          {p.customizable && (
            <span className="text-[10px] text-[#C8A96B] flex items-center gap-1">
              <Sparkles size={10} /> Customizable
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function SignatureCollection() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-[#FFF8F0] to-[#F4E4D4]/40">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <p className="font-script text-2xl text-[#C8A96B] mb-2">Curated for your favorites</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#332B32]">
            Our Most <span className="italic text-[#5B315E]">Loved</span> Gifts
          </h2>
        </div>
        <div className="grid gap-5 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PRODUCTS.slice(0, 8).map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
