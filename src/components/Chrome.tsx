"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, Search, ShoppingBag, User, Menu, X, MessageCircle } from "lucide-react";
import { useStore } from "@/lib/store";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const count = useStore((s) => s.cartCount());
  const setCartOpen = useStore((s) => s.setCartOpen);
  const wishCount = useStore((s) => s.wishlist.length);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/#occasions", label: "Occasions" },
    { href: "/#build", label: "Build Hamper" },
    { href: "/#personalize", label: "Personalize" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 inset-x-0 z-50 mx-auto flex max-w-[1280px] items-center justify-between px-4 md:px-6 transition-all duration-500 ${
          scrolled ? "top-3" : "top-4 md:top-5"
        }`}
      >
        <div
          className={`flex w-full items-center justify-between rounded-full px-4 py-2.5 md:px-5 md:py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-[0_20px_50px_-20px_rgba(91,49,94,0.35)]" : "bg-white/40 backdrop-blur-md border border-white/60"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#5B315E] text-[#C8A96B] font-serif text-xl italic shadow-md">
              H
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-[#F6C9CF] animate-pulse-soft" />
            </span>
            <span className="hidden md:block leading-tight">
              <span className="block font-serif text-lg text-[#5B315E] italic tracking-tight">The Homespun</span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C8A96B]">Gifts · Studio</span>
            </span>
          </Link>

          <nav className="desktop-nav hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative px-3 py-2 text-sm font-medium text-[#332B32] hover:text-[#5B315E] transition-colors"
              >
                {l.label}
                <span className="absolute left-1/2 bottom-1 h-[2px] w-0 -translate-x-1/2 bg-[#C8A96B] transition-all duration-300 group-hover:w-4" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-2 shrink-0">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full text-[#5B315E] hover:bg-[#F6C9CF]/40 transition"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <Link
              href="/wishlist"
              className="relative hidden md:flex h-10 w-10 items-center justify-center rounded-full text-[#5B315E] hover:bg-[#F6C9CF]/40 transition"
              aria-label="Wishlist"
            >
              <Heart size={18} />
              {wishCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#EFA7B5] text-[10px] font-bold text-white">
                  {wishCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#5B315E] hover:bg-[#F6C9CF]/40 transition"
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#5B315E] text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </button>
            <Link
              href="/about"
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full text-[#5B315E] hover:bg-[#F6C9CF]/40 transition"
              aria-label="About us"
            >
              <User size={18} />
            </Link>
            <Link
              href="#build"
              className="hidden lg:inline-flex btn-primary !py-2 !px-4 text-xs"
            >
              Create Your Gift
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-[#5B315E]"
              aria-label="Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 inset-x-0 z-40 mx-auto max-w-2xl px-4"
          >
            <form action="/shop" className="glass rounded-full p-2 pl-6 shadow-2xl flex items-center gap-3">
              <Search size={18} className="text-[#5B315E]" />
              <input
                autoFocus
                name="search"
                placeholder="Search for birthday hampers, scrapbooks, chocolate bouquets…"
                className="flex-1 bg-transparent py-2 outline-none placeholder:text-[#5B315E]/50 text-sm"
              />
              <button type="button" onClick={() => setSearchOpen(false)} className="px-3 text-sm text-[#5B315E]">
                Close
              </button>
            </form>
            <div className="mt-3 glass rounded-2xl p-4 shadow-xl">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96B]">Popular</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  ["Birthday Hamper", "birthday"],
                  ["Scrapbook", "scrapbook"],
                  ["Baby Welcome", "baby"],
                  ["Chocolate Box", "chocolate"],
                  ["Couple Gift", "couple"],
                  ["Luxury Hamper", "luxury"],
                ].map(([label, query]) => (
                  <Link
                    key={label}
                    href={`/shop?search=${encodeURIComponent(query)}`}
                    onClick={() => setSearchOpen(false)}
                    className="px-3 py-1.5 rounded-full bg-[#F6C9CF]/40 text-xs text-[#5B315E] hover:bg-[#F6C9CF] transition"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#5B315E]/30 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#FFF8F0] p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif italic text-xl text-[#5B315E]">Menu</span>
                <button onClick={() => setOpen(false)} className="h-10 w-10 rounded-full bg-[#F6C9CF]/40 flex items-center justify-center">
                  <X size={18} />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="flex items-center justify-between py-3 border-b border-[#F4E4D4] text-[#332B32] font-medium"
                    >
                      <span>{l.label}</span>
                      <span className="text-[#C8A96B]">→</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-2">
                <Link href="#build" onClick={() => setOpen(false)} className="btn-primary justify-center">
                  Create Your Gift
                </Link>
                <a
                  href="https://wa.me/919999999999?text=Hi%20The%20Homespun%20Gifts!"
                  className="btn-outline justify-center"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Preloader({ onDone }: { onDone: () => void }) {
  const [opened, setOpened] = useState(false);
  const reduceMotion = useReducedMotion();
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    const openDelay = reduceMotion ? 80 : 320;
    const finishDelay = reduceMotion ? 420 : 1150;
    const t1 = window.setTimeout(() => setOpened(true), openDelay);
    const t2 = window.setTimeout(() => onDoneRef.current(), finishDelay);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [reduceMotion]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.015 }}
      transition={{ duration: reduceMotion ? 0.18 : 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#FFF8F0]"
      role="status"
      aria-label="Loading The Homespun Gifts"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6C9CF] via-[#FFF8F0] to-[#DCCDF5] animate-gradient" />
      <div className="absolute inset-0 grain opacity-25" />

      {!reduceMotion && [
        [8, 12, 0.1], [18, 78, 0.5], [30, 22, 0.8], [38, 90, 0.2],
        [52, 8, 0.6], [60, 70, 0.9], [72, 32, 0.3], [82, 88, 0.7],
      ].map(([top, left, delay], i) => (
        <motion.span
          key={i}
          className="absolute text-[#A47F3C]"
          style={{ top: `${top}%`, left: `${left}%` }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.15, 0.8], rotate: [0, 180, 360] }}
          transition={{ duration: 2.2, delay, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          ✦
        </motion.span>
      ))}

      <div className="relative flex flex-col items-center px-6 text-center">
        <motion.div
          animate={opened && !reduceMotion ? { y: [0, -6, 0] } : { y: 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          className="relative h-32 w-40 md:h-40 md:w-52"
          aria-hidden="true"
        >
          <motion.div
            animate={opened && !reduceMotion ? { y: -24, rotate: -6 } : { y: 0, rotate: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-0 z-10 h-10 rounded-t-xl bg-[#5B315E] shadow-xl md:h-12"
          >
            <div className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-[#C8A96B]" />
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 top-10 rounded-b-xl bg-[#EFA7B5] shadow-2xl md:top-12">
            <div className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-[#C8A96B]" />
            <div className="absolute inset-x-0 top-1/2 h-4 -translate-y-1/2 bg-[#C8A96B]" />
          </div>

          <AnimatePresence>
            {opened && !reduceMotion && [...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16, x: 0, scale: 0.4 }}
                animate={{ opacity: [0, 1, 0], y: -86 - (i % 3) * 15, x: (i - 2.5) * 20, scale: [0.4, 1, 0.7] }}
                transition={{ duration: 0.95, delay: i * 0.06, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 text-lg text-[#B65F78]"
              >
                {i % 2 === 0 ? "♥" : "✦"}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.45, delay: reduceMotion ? 0 : 0.18 }}
          className="mt-8"
        >
          <h1 className="font-serif text-4xl font-bold text-[#4B284E] md:text-5xl">
            The Homespun <span className="text-gradient-gold">Gifts</span>
          </h1>
          <p className="mt-2 font-script text-xl font-bold text-[#8A682F] md:text-2xl">
            Made with love, wrapped with memories.
          </p>
          <div className="mx-auto mt-5 h-1.5 w-48 overflow-hidden rounded-full bg-white/70 shadow-inner">
            <motion.div
              className="h-full origin-left rounded-full bg-[#5B315E]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduceMotion ? 0.3 : 1.0, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919999999999?text=Hi%20The%20Homespun%20Gifts!%20I%20would%20like%20help%20creating%20a%20personalized%20gift."
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.7, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-24 md:bottom-6 right-4 z-40 group"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-soft opacity-60 blur-md" />
      <span className="relative flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 pr-5 text-white shadow-2xl">
        <MessageCircle size={18} fill="white" />
        <span className="hidden md:inline text-sm font-semibold">Need help?</span>
      </span>
    </motion.a>
  );
}

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [isCoarse, setIsCoarse] = useState(true);

  useEffect(() => {
    const coarse = typeof window !== "undefined" && matchMedia("(pointer: coarse)").matches;
    setIsCoarse(coarse);
    if (coarse) return;
    let rx = 0,
      ry = 0;
    const move = (e: MouseEvent) => {
      if (dot.current) dot.current.style.transform = `translate(${e.clientX - 9}px, ${e.clientY - 9}px)`;
      rx = e.clientX;
      ry = e.clientY;
    };
    let animationFrame = 0;
    const tick = () => {
      if (ring.current) {
        const cur = ring.current.getBoundingClientRect();
        const nx = cur.left + (rx - cur.left - 32) * 0.18;
        const ny = cur.top + (ry - cur.top - 32) * 0.18;
        ring.current.style.transform = `translate(${nx}px, ${ny}px)`;
      }
      animationFrame = requestAnimationFrame(tick);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!ring.current) return;
      if (t.closest("[data-cursor='view']")) setLabel("VIEW");
      else if (t.closest("[data-cursor='explore']")) setLabel("EXPLORE");
      else if (t.closest("[data-cursor='drag']")) setLabel("DRAG");
      else setLabel("");
      ring.current.classList.toggle("custom-cursor-large", !!t.closest("[data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    animationFrame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (isCoarse) return null;

  return (
    <>
      <div ref={dot} className="custom-cursor" />
      <div ref={ring} className="custom-cursor">
        {label}
      </div>
    </>
  );
}

export function MobileBottomNav() {
  const count = useStore((state) => state.cartCount());
  const setCartOpen = useStore((state) => state.setCartOpen);

  return (
    <nav className="mobile-bottom-nav hidden fixed bottom-0 inset-x-0 z-40 md:hidden">
      <div className="mx-3 mb-3 glass rounded-full px-2 py-2 flex items-center justify-around shadow-2xl">
        <Link href="/" className="flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] text-[#5B315E] font-medium">
          <span className="text-base">🏠</span>Home
        </Link>
        <Link href="/shop" className="flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] text-[#5B315E] font-medium">
          <span className="text-base">🛍️</span>Shop
        </Link>
        <Link href="/#build" className="flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] text-[#5B315E] font-medium">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#5B315E] text-white shadow-lg -mt-4">✨</span>
          Build
        </Link>
        <Link href="/wishlist" className="flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] text-[#5B315E] font-medium">
          <span className="text-base">💗</span>Wishlist
        </Link>
        <button
          onClick={() => setCartOpen(true)}
          className="flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] text-[#5B315E] font-medium"
        >
          <span className="text-base relative">
            🛒
            {count > 0 && (
              <span className="absolute -top-1 -right-2 h-4 min-w-4 px-1 rounded-full bg-[#EFA7B5] text-[10px] flex items-center justify-center text-white">
                {count}
              </span>
            )}
          </span>
          Cart
        </button>
      </div>
    </nav>
  );
}
