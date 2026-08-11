"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Heart, Camera, ArrowUpRight, Send, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { TESTIMONIALS, GALLERY_IMAGES, PRODUCTS } from "@/lib/data";
import CountUp from "./CountUp";

export function GiftStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.pexels.com/photos/5493198/pexels-photo-5493198.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </motion.div>
      <div className="relative mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <p className="font-script text-2xl text-[#C8A96B]">Stories that stay</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#332B32] leading-tight max-w-3xl mx-auto">
            Some gifts are <span className="italic text-[#5B315E]">opened</span>.
            <br />
            Some are <span className="italic text-[#5B315E]">remembered forever</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: "https://images.pexels.com/photos/5493208/pexels-photo-5493208.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "A couple, a quiet evening", quote: "For their 5th anniversary" },
            { img: "https://images.pexels.com/photos/9451785/pexels-photo-9451785.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "A smile she didn't expect", quote: "A birthday surprise, delivered at work" },
            { img: "https://images.pexels.com/photos/426905/pexels-photo-426905.jpeg?auto=compress&cs=tinysrgb&w=1400", title: "A little one, welcomed", quote: "The softest first gift" },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden">
                <Image src={m.img} alt={m.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#332B32]/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-script text-lg text-[#F6C9CF]">{m.quote}</p>
                  <p className="font-serif italic text-2xl">{m.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <p className="font-script text-2xl text-[#C8A96B]">A wall of love</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#332B32]">
            Made with <span className="italic text-[#5B315E]">love</span> 💗
          </h2>
          <p className="mt-4 text-[#332B32]/80">Real gifts, real smiles, real moments.</p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {GALLERY_IMAGES.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="mb-4 break-inside-avoid group relative rounded-2xl overflow-hidden"
              data-cursor="explore"
            >
              <Image src={g.src} alt={g.caption} width={600} height={600} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#332B32]/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition flex items-center justify-between">
                <p className="font-script text-lg">{g.caption}</p>
                <Camera size={18} />
              </div>
              <button className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:scale-110">
                <Heart size={16} className="text-[#EFA7B5]" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [i, setI] = useState(0);
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-[#FFF8F0] to-[#F6C9CF]/20">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <p className="font-script text-2xl text-[#C8A96B]">Words from happy hearts</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#332B32]">
            Loved by <span className="italic text-[#5B315E]">thousands</span>.
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 border border-[#F4E4D4] card-lift relative"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#F6C9CF] to-[#DCCDF5] overflow-hidden">
                  <Image src={t.avatar} alt={t.name} width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-serif text-lg text-[#332B32]">{t.name}</p>
                  <p className="text-xs text-[#C8A96B]">{t.occasion}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#C8A96B" stroke="#C8A96B" />
                ))}
              </div>
              <p className="mt-4 text-[#332B32]/80 italic font-serif text-lg leading-relaxed">"{t.review}"</p>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <Image src={t.gift} alt="gift" fill sizes="96px" className="object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CustomerPhotoWall() {
  const photos = [
    { src: "https://images.pexels.com/photos/10819195/pexels-photo-10819195.jpeg?auto=compress&cs=tinysrgb&w=1400", note: "For my Priya 💕", rotate: -4 },
    { src: "https://images.pexels.com/photos/28769885/pexels-photo-28769885.jpeg?auto=compress&cs=tinysrgb&w=1400", note: "She loved it!", rotate: 3 },
    { src: "https://images.pexels.com/photos/21956560/pexels-photo-21956560.jpeg?auto=compress&cs=tinysrgb&w=1400", note: "Our forever album", rotate: -2 },
    { src: "https://images.pexels.com/photos/426905/pexels-photo-426905.jpeg?auto=compress&cs=tinysrgb&w=1400", note: "Welcome little Aarav", rotate: 5 },
    { src: "https://images.pexels.com/photos/7754232/pexels-photo-7754232.jpeg?auto=compress&cs=tinysrgb&w=1400", note: "10 years of us 💗", rotate: -3 },
    { src: "https://images.pexels.com/photos/18434553/pexels-photo-18434553.jpeg?auto=compress&cs=tinysrgb&w=1400", note: "Best Diwali ever", rotate: 2 },
  ];
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-[#FFF8F0]">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <p className="font-script text-2xl text-[#C8A96B]">Their smiles, our stories</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#332B32]">
            Their moments, <span className="italic text-[#5B315E]">our gifts</span>.
          </h2>
        </div>
        <div className="relative flex flex-wrap justify-center gap-8">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: p.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="polaroid w-48 md:w-56"
              style={{ transform: `rotate(${p.rotate}deg)` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image src={p.src} alt="" fill sizes="(max-width: 768px) 192px, 224px" className="object-cover" />
              </div>
              <p className="text-center font-script text-lg mt-2 text-[#5B315E]">{p.note}</p>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-[#F6C9CF] opacity-70" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Trending() {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden" data-cursor="drag">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 mb-8 flex items-end justify-between">
        <div>
          <p className="font-script text-2xl text-[#C8A96B]">Loved right now</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#332B32]">
            Trending <span className="italic text-[#5B315E]">right now</span>
          </h2>
        </div>
        <Link href="/shop" className="btn-outline">
          See all <ArrowRight size={16} className="arrow" />
        </Link>
      </div>
      <div className="relative">
        <div className="flex gap-5 overflow-x-auto no-scrollbar px-4 md:px-8 snap-x snap-mandatory pb-4">
          {PRODUCTS.map((p, i) => (
            <div key={p.id} className="snap-start shrink-0 w-[280px] md:w-[320px]">
              <div className="product-card group relative bg-white rounded-3xl overflow-hidden border border-[#F4E4D4] card-lift" data-cursor="view">
                <div className="relative aspect-square product-img-wrap bg-gradient-to-br from-[#FFF8F0] to-[#F4E4D4]">
                  <Link href={`/product/${p.id}`}>
                    <Image src={p.image} alt={p.name} width={400} height={400} className="w-full h-full object-cover" />
                  </Link>
                  {p.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#5B315E] text-white text-[10px] uppercase tracking-wider font-semibold">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96B]">{p.category}</p>
                  <Link href={`/product/${p.id}`}>
                    <h3 className="font-serif text-lg text-[#332B32] mt-1 line-clamp-1">{p.name}</h3>
                  </Link>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-serif text-xl text-[#5B315E]">₹{p.price.toLocaleString()}</span>
                    <span className="text-xs text-[#C8A96B] flex items-center gap-1"><Star size={10} fill="#C8A96B" /> {p.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LimitedEdition() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-[#5B315E] text-[#FFF8F0] overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        {[
          [8, 10, 18, 0.2], [15, 34, 28, 1.1], [10, 72, 20, 0.7], [24, 90, 34, 1.7],
          [32, 18, 24, 0.5], [38, 56, 16, 1.4], [46, 82, 30, 0.9], [52, 5, 22, 2.0],
          [60, 30, 36, 1.2], [66, 68, 20, 0.4], [72, 92, 26, 1.8], [80, 12, 32, 0.8],
          [86, 48, 18, 1.5], [90, 78, 30, 0.3], [20, 52, 14, 2.2], [42, 38, 24, 0.6],
          [58, 52, 18, 1.0], [76, 64, 28, 1.9], [88, 26, 16, 1.3], [34, 72, 22, 0.1],
        ].map(([top, left, size, delay], i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#C8A96B] blur-xl animate-pulse-soft"
            style={{ top: `${top}%`, left: `${left}%`, width: size, height: size, animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
        <div>
          <p className="font-script text-2xl text-[#C8A96B]">Only while they last</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Limited Edition
            <br />
            <span className="text-gradient-gold italic">Gift Boxes</span>
          </h2>
          <p className="mt-6 text-[#FFF8F0]/85 max-w-md">
            Hand-numbered luxury boxes available only this season. Each one tells a story worth keeping.
          </p>
          <div className="mt-8 flex gap-4">
            {[{ l: "Days", v: "07" }, { l: "Hours", v: "14" }, { l: "Mins", v: "32" }, { l: "Secs", v: "08" }].map((t) => (
              <div key={t.l} className="text-center">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-[#FFF8F0]/10 backdrop-blur border border-[#C8A96B]/30 flex items-center justify-center font-serif text-2xl md:text-3xl text-gradient-gold">
                  {t.v}
                </div>
                <p className="text-[10px] uppercase tracking-wider text-[#FFF8F0]/80 mt-2">{t.l}</p>
              </div>
            ))}
          </div>
          <button className="btn-primary mt-10 !bg-gradient-to-r !from-[#C8A96B] !to-[#E7C990] !text-[#5B315E]">
            Reserve Yours <ArrowRight size={16} className="arrow" />
          </button>
        </div>

        <div className="relative">
          <motion.div whileHover={{ scale: 1.03 }} className="relative aspect-square rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(200,169,107,0.5)]">
            <Image src="https://images.pexels.com/photos/4397883/pexels-photo-4397883.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Limited edition" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5B315E]/80 via-transparent to-transparent" />
            <div className="absolute top-6 right-6 h-20 w-20 rounded-full bg-[#C8A96B] flex items-center justify-center text-center font-serif italic text-[#5B315E] text-xs leading-tight p-2">
              Only 50<br />made
            </div>
            <div className="absolute bottom-6 left-6">
              <p className="font-script text-2xl text-[#C8A96B]">N° 001</p>
              <p className="font-serif italic text-3xl">The Heritage Box</p>
              <p className="mt-2 text-xl font-serif text-gradient-gold">₹7,499</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const items = [
    { icon: "🌸", title: "Handcrafted", desc: "Every gift packed by hand." },
    { icon: "✍️", title: "Personalized", desc: "Your photos, names, messages." },
    { icon: "🎁", title: "Premium Packaging", desc: "Keepsake-worthy presentation." },
    { icon: "💗", title: "Made with Love", desc: "Crafted with real care." },
    { icon: "🚀", title: "Fast Delivery", desc: "Pan-India in 3–5 days." },
    { icon: "🔒", title: "Secure Payments", desc: "Razorpay-secured checkout." },
  ];
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <p className="font-script text-2xl text-[#C8A96B]">The Homespun promise</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#332B32]">
            Why <span className="italic text-[#5B315E]">1000+ customers</span>
            <br /> choose us.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-3xl p-6 md:p-8 text-center card-lift"
            >
              <div className="text-4xl md:text-5xl mb-4">{it.icon}</div>
              <h3 className="font-serif text-xl md:text-2xl text-[#5B315E]">{it.title}</h3>
              <p className="mt-2 text-sm text-[#332B32]/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="relative py-12 px-4 md:px-8 bg-gradient-to-r from-[#F6C9CF]/50 via-[#DCCDF5]/40 to-[#B9E4D0]/50">
      <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
        {[
          { v: 1000, s: "+", l: "Happy Customers" },
          { v: 5000, s: "+", l: "Gifts Delivered" },
          { v: 4.9, s: "★", l: "Customer Rating" },
          { v: 100, s: "%", l: "Personalized" },
          { v: 100, s: "%", l: "Secure Payments" },
          { v: 100, s: "%", l: "Handcrafted" },
        ].map((s, i) => (
          <div key={i}>
            <p className="font-serif text-3xl md:text-4xl text-[#5B315E]">
              <CountUp to={s.v} />
              <span className="text-[#C8A96B]">{s.s}</span>
            </p>
            <p className="text-xs uppercase tracking-[0.15em] text-[#332B32]/80 mt-1">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="mx-auto max-w-4xl bg-gradient-to-br from-[#F6C9CF] via-[#FFF8F0] to-[#DCCDF5] rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-[#DCCDF5]/40 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#B9E4D0]/40 blur-3xl" />

        <div className="relative">
          <p className="font-script text-3xl text-[#5B315E]">A little love in your inbox 💌</p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#332B32] mt-3 leading-tight">
            Gifting ideas, new drops &
            <br />
            <span className="italic text-[#5B315E]">special offers</span>.
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
              setTimeout(() => setDone(false), 3000);
            }}
            className="mt-8 flex flex-col md:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-full bg-white border border-white/60 outline-none focus:border-[#5B315E]"
            />
            <button className="btn-primary">
              Join The Gift Club <Send size={14} />
            </button>
          </form>
          {done && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-sm text-[#5B315E]">
              ✓ Welcome to the club! Check your inbox soon 💗
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#332B32] text-[#FFF8F0] pt-20 pb-8 px-4 md:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent" />

      <div className="mx-auto max-w-[1400px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A96B] text-[#5B315E] font-serif text-xl italic">
                H
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-xl italic">The Homespun</span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-[#C8A96B]">Gifts · Studio</span>
              </span>
            </div>
            <p className="mt-6 text-[#FFF8F0]/85 max-w-md leading-relaxed">
              We handcraft personalized gifts that make people feel seen, loved and remembered. Based in India, shipping worldwide.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[#FFF8F0]/85">
              <p className="flex items-center gap-2"><MapPin size={14} className="text-[#C8A96B]" /> Mumbai, India</p>
              <p className="flex items-center gap-2"><Phone size={14} className="text-[#C8A96B]" /> +91 99999 99999</p>
              <p className="flex items-center gap-2"><Mail size={14} className="text-[#C8A96B]" /> hello@thehomespungifts.com</p>
            </div>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Camera, href: "/#gallery", label: "View gallery" },
                { Icon: Heart, href: "/wishlist", label: "View wishlist" },
                { Icon: Send, href: "mailto:hello@thehomespungifts.com", label: "Email us" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="h-10 w-10 rounded-full bg-[#FFF8F0]/10 flex items-center justify-center hover:bg-[#C8A96B] hover:text-[#5B315E] transition">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Shop", links: ["All Gifts", "Hampers", "Scrapbooks", "Bouquets", "Corporate"] },
            { title: "Occasions", links: ["Birthday", "Anniversary", "Wedding", "Baby", "Festive"] },
            { title: "Help", links: ["Track Order", "Shipping", "Returns", "FAQs", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96B] mb-4">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="/shop" className="text-sm text-[#FFF8F0]/85 hover:text-[#C8A96B] transition">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#FFF8F0]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-script text-xl text-[#C8A96B]">Made with love for moments that matter 💗</p>
          <div className="flex items-center gap-3 text-xs text-[#FFF8F0]/75">
            <span>Secure payments via</span>
            <div className="flex gap-2">
              {["VISA", "MC", "UPI", "PP"].map((p) => (
                <span key={p} className="px-2 py-1 rounded bg-[#FFF8F0]/10 font-mono">{p}</span>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-[#FFF8F0]/85">© 2026 The Homespun Gifts Studio. All love, all rights reserved.</p>
      </div>
    </footer>
  );
}
