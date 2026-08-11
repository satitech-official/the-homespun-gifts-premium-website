"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Gift,
  Heart,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  WandSparkles,
} from "lucide-react";
import { MARQUEE_ITEMS } from "@/lib/data";

const HERO_IMAGES = {
  main: "https://images.pexels.com/photos/10819195/pexels-photo-10819195.jpeg?auto=compress&cs=tinysrgb&w=1400",
  memory: "https://images.pexels.com/photos/21956560/pexels-photo-21956560.jpeg?auto=compress&cs=tinysrgb&w=900",
  chocolate: "https://images.pexels.com/photos/18434553/pexels-photo-18434553.jpeg?auto=compress&cs=tinysrgb&w=900",
  flowers: "https://images.pexels.com/photos/426905/pexels-photo-426905.jpeg?auto=compress&cs=tinysrgb&w=900",
};

const SPARKLES = [
  { top: "9%", left: "8%", size: 12, delay: 0.2, duration: 4.4 },
  { top: "18%", left: "47%", size: 9, delay: 1.1, duration: 5.1 },
  { top: "12%", left: "89%", size: 14, delay: 0.5, duration: 4.8 },
  { top: "32%", left: "4%", size: 8, delay: 1.5, duration: 5.5 },
  { top: "41%", left: "58%", size: 11, delay: 0.8, duration: 4.1 },
  { top: "52%", left: "92%", size: 10, delay: 1.9, duration: 5.2 },
  { top: "64%", left: "13%", size: 13, delay: 1.2, duration: 4.6 },
  { top: "72%", left: "51%", size: 8, delay: 0.3, duration: 5.4 },
  { top: "82%", left: "83%", size: 12, delay: 1.6, duration: 4.3 },
  { top: "91%", left: "29%", size: 9, delay: 0.9, duration: 5.0 },
];

const PROMISES = [
  { icon: Palette, title: "Made for one", text: "Names, notes & photos" },
  { icon: Gift, title: "Luxury wrapped", text: "Ready-to-gift packaging" },
  { icon: Truck, title: "Pan-India", text: "Tracked doorstep delivery" },
  { icon: ShieldCheck, title: "Safe checkout", text: "Secure payment flow" },
];

export function Hero() {
  return (
    <section className="hero-section relative min-h-[100svh] overflow-hidden pt-24 pb-12 sm:pt-28 md:pt-36 md:pb-20">
      <div className="absolute inset-0 hero-mesh" />
      <div className="hero-motion-bg absolute inset-0" aria-hidden="true">
        <div className="hero-aurora hero-aurora-one" />
        <div className="hero-aurora hero-aurora-two" />
        <div className="hero-light-beam hero-light-beam-one" />
        <div className="hero-light-beam hero-light-beam-two" />

        <div className="hero-orbit hero-orbit-one">
          <span>✦</span>
        </div>
        <div className="hero-orbit hero-orbit-two">
          <span>♡</span>
        </div>

        <div className="hero-kinetic-line hero-kinetic-line-one">
          <div className="hero-kinetic-track">
            <span>PERSONALISED</span><b>✦</b><span>HANDCRAFTED</span><b>♡</b><span>MEMORIES</span><b>✦</b><span>CELEBRATE</span><b>♡</b>
            <span>PERSONALISED</span><b>✦</b><span>HANDCRAFTED</span><b>♡</b><span>MEMORIES</span><b>✦</b><span>CELEBRATE</span><b>♡</b>
          </div>
        </div>
        <div className="hero-kinetic-line hero-kinetic-line-two">
          <div className="hero-kinetic-track hero-kinetic-track-reverse">
            <span>WRAPPED WITH LOVE</span><b>✦</b><span>JUST FOR YOU</span><b>♡</b><span>ONE OF ONE</span><b>✦</b><span>MADE TO KEEP</span><b>♡</b>
            <span>WRAPPED WITH LOVE</span><b>✦</b><span>JUST FOR YOU</span><b>♡</b><span>ONE OF ONE</span><b>✦</b><span>MADE TO KEEP</span><b>♡</b>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 grain opacity-35" />
      <div className="absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-[#F6C9CF]/55 blur-[90px] animate-blob" />
      <div className="absolute top-1/4 -right-24 h-[30rem] w-[30rem] rounded-full bg-[#DCCDF5]/55 blur-[100px] animate-blob" />
      <div className="absolute -bottom-24 left-[28%] h-[24rem] w-[24rem] rounded-full bg-[#B9E4D0]/40 blur-[100px] animate-blob" />

      {SPARKLES.map((item, i) => (
        <motion.span
          key={i}
          className="absolute z-[1] text-[#C8A96B]/75"
          style={{ top: item.top, left: item.left, fontSize: item.size }}
          animate={{ opacity: [0.15, 1, 0.15], scale: [0.7, 1.25, 0.7], rotate: [0, 180, 360] }}
          transition={{ duration: item.duration, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          ✦
        </motion.span>
      ))}

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="hero-grid grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-8">
          <div className="hero-copy-shell max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/65 px-4 py-2 shadow-[0_14px_45px_-24px_rgba(91,49,94,.55)] backdrop-blur-xl"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5B315E] text-[#F6C9CF]">
                <Sparkles size={13} />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5B315E] md:text-xs">
                Personalized gifting, reimagined
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title mt-6 font-serif text-[2.85rem] leading-[0.98] tracking-[-0.045em] text-[#332B32] min-[380px]:text-[3.15rem] sm:text-6xl md:text-7xl lg:text-[5.35rem]"
            >
              Turn a gift into a
              <span className="relative mt-2 block w-fit pr-6 italic text-[#5B315E]">
                feeling they keep.
                <motion.svg
                  className="absolute -bottom-3 left-1 h-3 w-[92%]"
                  viewBox="0 0 420 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M3 11C105 2 260 2 416 9"
                    stroke="#C8A96B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.9 }}
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="hero-readable-copy mt-8 max-w-xl text-[15px] leading-7 md:text-lg md:leading-8"
            >
              Curated hampers, memory boxes, scrapbooks and little luxuries designed around their name, your story and the moment you want to make unforgettable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.58 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Link href="#build" className="btn-primary justify-center sm:justify-start">
                <WandSparkles size={16} /> Build Your Gift
                <ArrowRight className="arrow" size={16} />
              </Link>
              <Link href="/shop" className="btn-outline justify-center sm:justify-start">
                Explore Collection <ArrowRight className="arrow" size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.72 }}
              className="mt-8 grid max-w-[590px] grid-cols-2 gap-3 sm:grid-cols-3"
            >
              <div className="hero-stat-card">
                <strong>4.9/5</strong>
                <span className="flex items-center gap-1"><Star size={11} fill="currentColor" /> loved gifting</span>
              </div>
              <div className="hero-stat-card">
                <strong>1000+</strong>
                <span>happy moments</span>
              </div>
              <div className="hero-stat-card col-span-2 sm:col-span-1">
                <strong>100%</strong>
                <span>made to feel personal</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hero-visual-stage relative mx-auto h-[455px] w-full max-w-[680px] min-[390px]:h-[500px] sm:h-[620px] lg:h-[680px]"
            data-cursor="explore"
          >
            <div className="absolute left-[8%] top-[6%] h-[86%] w-[78%] rounded-[52%_48%_44%_56%/40%_44%_56%_60%] border border-[#C8A96B]/35 bg-white/30 backdrop-blur-sm" />
            <div className="absolute left-[16%] top-[10%] h-[80%] w-[72%] rounded-[48%_52%_42%_58%/44%_48%_52%_56%] bg-gradient-to-br from-[#F6C9CF]/65 via-white/70 to-[#DCCDF5]/75 shadow-[inset_0_0_0_1px_rgba(255,255,255,.75),0_40px_80px_-35px_rgba(91,49,94,.45)]" />

            <motion.div
              animate={{ y: [0, -12, 0], rotate: [-1.2, 1.2, -1.2] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[24%] top-[16%] h-[67%] w-[58%] overflow-hidden rounded-[2rem] border-[8px] border-white shadow-[0_35px_80px_-28px_rgba(51,43,50,.5)] sm:rounded-[2.5rem]"
            >
              <Image src={HERO_IMAGES.main} alt="Luxury personalized gift hamper" fill loading="eager" fetchPriority="high" sizes="(max-width: 1024px) 70vw, 40vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#332B32]/25 via-transparent to-white/10" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/76 p-3 backdrop-blur-xl sm:p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C8A96B]">Signature edit</p>
                    <p className="mt-1 font-serif text-base text-[#5B315E] sm:text-lg">The “Just For You” Box</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5B315E] text-white"><Heart size={16} fill="currentColor" /></span>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -9, 0], rotate: [-7, -4, -7] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
              className="hero-memory-card absolute left-[1%] top-[22%] w-[31%] overflow-hidden rounded-[1.5rem] border-4 border-white bg-white shadow-2xl"
            >
              <div className="relative aspect-[4/5]">
                <Image src={HERO_IMAGES.memory} alt="Personalized memory scrapbook" fill loading="eager" sizes="220px" className="object-cover" />
              </div>
              <div className="p-2.5 text-center font-script text-base text-[#5B315E]">your story, bound ♡</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [5, 2, 5] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="hero-chocolate-card absolute right-[0%] top-[31%] w-[28%] overflow-hidden rounded-[1.5rem] border-4 border-white bg-white shadow-2xl"
            >
              <div className="relative aspect-square">
                <Image src={HERO_IMAGES.chocolate} alt="Artisan chocolate gift box" fill sizes="200px" className="object-cover" />
              </div>
              <div className="px-2 py-2 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-[#C8A96B]">Sweetest add-on</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="hero-handcrafted-card absolute bottom-[5%] right-[8%] flex items-center gap-3 rounded-2xl border border-white/80 bg-white/82 p-3 pr-4 shadow-xl backdrop-blur-xl"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                <Image src={HERO_IMAGES.flowers} alt="Gift box with flowers" fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5B315E]"><BadgeCheck size={12} /> handcrafted</div>
                <p className="mt-1 text-[11px] text-[#332B32]/75">Wrapped like an experience</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 7, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="hero-love-badge absolute right-[8%] top-[7%] rounded-full border border-[#C8A96B]/40 bg-[#5B315E] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFF8F0] shadow-lg"
            >
              Made with love ✦
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#occasions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[#5B315E]/55 xl:flex"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.28em]">Discover</span>
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.7, repeat: Infinity }} className="h-8 w-px bg-gradient-to-b from-[#5B315E]/50 to-transparent" />
      </motion.a>
    </section>
  );
}

export function HeroPromiseStrip() {
  return (
    <section className="relative z-20 -mt-1 px-4 md:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-3 rounded-[2rem] border border-white/80 bg-white/72 p-3 shadow-[0_25px_60px_-35px_rgba(91,49,94,.45)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
        {PROMISES.map(({ icon: Icon, title, text }) => (
          <div key={title} className="group flex items-center gap-3 rounded-[1.35rem] px-4 py-3.5 transition hover:bg-[#FFF8F0]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F6C9CF] to-[#DCCDF5] text-[#5B315E] shadow-sm transition group-hover:-rotate-3 group-hover:scale-105">
              <Icon size={17} />
            </span>
            <span>
              <strong className="block text-sm font-semibold text-[#332B32]">{title}</strong>
              <span className="mt-0.5 block text-[11px] text-[#332B32]/75">{text}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Marquee() {
  return (
    <div className="relative mt-8 overflow-hidden border-y border-[#F4E4D4] bg-gradient-to-r from-[#F6C9CF]/35 via-[#FFF8F0] to-[#DCCDF5]/35 py-7 md:py-8">
      <div className="marquee-track">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-6 px-6">
            <span className="whitespace-nowrap font-serif text-2xl italic text-[#5B315E] md:text-3xl">{item}</span>
            <span className="text-xl text-[#C8A96B]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
