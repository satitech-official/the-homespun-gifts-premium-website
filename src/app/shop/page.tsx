"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, Star, Heart, ShoppingBag, Sparkles, Search, ArrowUpDown } from "lucide-react";
import { PRODUCTS, OCCASIONS } from "@/lib/data";
import { useStore } from "@/lib/store";

const SORT_OPTIONS = [
  { id: "popular", label: "Popular" },
  { id: "new", label: "New" },
  { id: "low", label: "Price: Low to High" },
  { id: "high", label: "Price: High to Low" },
  { id: "rating", label: "Best Rated" },
];

export default function ShopPage() {
  const [occasions, setOccasions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sort, setSort] = useState("popular");
  const [onlyCustom, setOnlyCustom] = useState(false);
  const [search, setSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const addToCart = useStore((s) => s.addToCart);
  const setCartOpen = useStore((s) => s.setCartOpen);
  const wishlist = useStore((s) => s.wishlist);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialSearch = params.get("search");
    const initialOccasion = params.get("occasion");
    if (initialSearch) setSearch(initialSearch);
    if (initialOccasion) setOccasions([initialOccasion]);
  }, []);

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      if (occasions.length && !occasions.some((o) => p.occasion.includes(o))) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (onlyCustom && !p.customizable) return false;
      if (search && !`${p.name} ${p.category} ${p.tags.join(" ")}`.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
    switch (sort) {
      case "low":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "high":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case "new":
        list = [...list].sort((a, b) => (a.badge === "New" ? -1 : 1));
        break;
    }
    return list;
  }, [occasions, priceRange, onlyCustom, sort, search]);

  const activeFilterCount = occasions.length + (priceRange[0] > 0 || priceRange[1] < 10000 ? 1 : 0) + (onlyCustom ? 1 : 0);

  return (
    <main className="pt-32 pb-20 min-h-screen">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="mb-10">
          <p className="font-script text-2xl text-[#C8A96B]">The full collection</p>
          <h1 className="font-serif text-4xl md:text-6xl text-[#332B32]">
            Shop <span className="italic text-[#5B315E]">every gift</span>
          </h1>
          <p className="mt-3 text-[#332B32]/80 max-w-xl">
            Browse our handcrafted collection — every gift is customizable, beautifully wrapped and delivered with love.
          </p>
        </div>

        {/* Search + sort */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="flex-1 glass rounded-full px-5 py-3 flex items-center gap-3">
            <Search size={18} className="text-[#5B315E]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search hampers, scrapbooks, occasions…"
              className="flex-1 bg-transparent outline-none placeholder:text-[#5B315E]/50 text-sm"
            />
            {search && (
              <button onClick={() => setSearch("")} className="text-[#5B315E]">
                <X size={16} />
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFiltersOpen((v) => !v)}
              className="relative px-5 py-3 rounded-full bg-white border border-[#F4E4D4] flex items-center gap-2 text-sm font-medium text-[#5B315E] md:hidden"
            >
              <SlidersHorizontal size={16} /> Filters
              {activeFilterCount > 0 && (
                <span className="h-5 min-w-5 px-1 rounded-full bg-[#5B315E] text-white text-xs flex items-center justify-center">{activeFilterCount}</span>
              )}
            </button>
            <div className="glass rounded-full px-2 py-1 flex items-center">
              <ArrowUpDown size={14} className="text-[#5B315E] ml-2" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent outline-none text-sm px-2 py-2 text-[#5B315E] font-medium"
              >
                {SORT_OPTIONS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[260px_1fr] gap-8">
          {/* FILTERS */}
          <aside
            className={`${filtersOpen ? "block" : "hidden"} md:block space-y-6 glass rounded-3xl p-6 h-fit sticky top-28`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl text-[#5B315E]">Filters</h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={() => {
                    setOccasions([]);
                    setPriceRange([0, 10000]);
                    setOnlyCustom(false);
                  }}
                  className="text-xs text-[#C8A96B] underline"
                >
                  Clear all
                </button>
              )}
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C8A96B] mb-3">Occasion</p>
              <div className="flex flex-col gap-2">
                {OCCASIONS.map((o) => {
                  const active = occasions.includes(o.title);
                  return (
                    <label key={o.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={active}
                        onChange={() =>
                          setOccasions((prev) => (prev.includes(o.title) ? prev.filter((x) => x !== o.title) : [...prev, o.title]))
                        }
                        className="accent-[#5B315E]"
                      />
                      <span className="text-sm text-[#332B32]">{o.title}</span>
                      <span className="ml-auto text-xs text-[#332B32]/80">{o.count}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C8A96B] mb-3">Price range</p>
              <input
                type="range"
                min={0}
                max={10000}
                step={500}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-[#5B315E]"
              />
              <div className="flex items-center justify-between text-xs text-[#332B32]/80 mt-2">
                <span>₹{priceRange[0].toLocaleString()}</span>
                <span>₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyCustom}
                  onChange={(e) => setOnlyCustom(e.target.checked)}
                  className="accent-[#5B315E]"
                />
                <Sparkles size={14} className="text-[#C8A96B]" />
                <span className="text-sm text-[#332B32]">Personalizable only</span>
              </label>
            </div>
          </aside>

          {/* PRODUCTS */}
          <div>
            <p className="text-sm text-[#332B32]/75 mb-4">
              Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? "gift" : "gifts"}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <AnimatePresence>
                {filtered.map((p, i) => {
                  const wishlisted = wishlist.includes(p.id);
                  return (
                    <motion.div
                      key={p.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: i * 0.04 }}
                      className="product-card group relative bg-white rounded-3xl overflow-hidden border border-[#F4E4D4] card-lift"
                      data-cursor="view"
                    >
                      <div className="relative aspect-square product-img-wrap bg-gradient-to-br from-[#FFF8F0] to-[#F4E4D4]">
                        <Link href={`/product/${p.id}`} className="relative block h-full w-full">
                          <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                        </Link>
                        {p.badge && (
                          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#5B315E] text-white text-[10px] uppercase tracking-wider font-semibold">
                            {p.badge}
                          </span>
                        )}
                        <button
                          onClick={() => toggleWishlist(p.id)}
                          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-110 transition"
                        >
                          <Heart size={16} className={wishlisted ? "text-[#EFA7B5] fill-[#EFA7B5]" : "text-[#5B315E]"} />
                        </button>
                        <div className="product-cta absolute inset-x-3 bottom-3 flex gap-2">
                          <button
                            onClick={() => {
                              addToCart({ productId: p.id, name: p.name, image: p.image, price: p.price });
                              setCartOpen(true);
                            }}
                            className="flex-1 py-2.5 rounded-full bg-[#5B315E] text-white text-xs font-semibold flex items-center justify-center gap-1.5"
                          >
                            <ShoppingBag size={14} /> Add
                          </button>
                          <Link
                            href={`/product/${p.id}`}
                            className="px-3 py-2.5 rounded-full bg-white text-[#5B315E] text-xs font-semibold flex items-center justify-center"
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
                })}
              </AnimatePresence>
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🎀</div>
                <p className="font-serif text-2xl text-[#5B315E]">No gifts match your filters</p>
                <p className="text-sm text-[#332B32]/75 mt-2">Try changing or clearing your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
