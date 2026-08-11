"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Send } from "lucide-react";
import { BUDGET_TIERS } from "@/lib/data";
import { useStore } from "@/lib/store";

export function ScrapbookDesigner() {
  const [theme, setTheme] = useState("Romantic");
  const [pages, setPages] = useState(20);
  const [name, setName] = useState("");

  const themes: { name: string; tint: string; accent: string }[] = [
    { name: "Romantic", tint: "from-[#F6C9CF] to-[#EFA7B5]", accent: "#EFA7B5" },
    { name: "Birthday", tint: "from-[#B9E4D0] to-[#C7E8F6]", accent: "#B9E4D0" },
    { name: "Best Friends", tint: "from-[#DCCDF5] to-[#F6C9CF]", accent: "#DCCDF5" },
    { name: "Baby", tint: "from-[#C7E8F6] to-[#FFF8F0]", accent: "#C7E8F6" },
    { name: "Wedding", tint: "from-[#F4E4D4] to-[#C8A96B]/60", accent: "#C8A96B" },
    { name: "Vintage", tint: "from-[#F4E4D4] to-[#EFA7B5]/40", accent: "#8B7355" },
  ];
  const current = themes.find((t) => t.name === theme) || themes[0];

  return (
    <section id="personalize" className="relative py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-[#FFF8F0] to-[#F6C9CF]/20">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <p className="font-script text-2xl text-[#C8A96B] mb-2">Your memories, bound forever</p>
            <h2 className="font-serif text-4xl md:text-6xl text-[#332B32] leading-tight">
              Personalized <span className="italic text-[#5B315E]">scrapbook</span>
              <br /> designer.
            </h2>
            <p className="mt-6 text-[#332B32]/80 max-w-md">
              Upload your favorite photos, pick a theme and watch us craft a keepsake that tells your story — page by page.
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C8A96B] mb-3">Choose a theme</p>
              <div className="flex flex-wrap gap-2">
                {themes.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => setTheme(t.name)}
                    className={`px-4 py-2 rounded-full text-sm border transition ${
                      theme === t.name ? "bg-[#5B315E] text-white border-[#5B315E]" : "bg-white border-[#F4E4D4] hover:border-[#C8A96B]"
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C8A96B] mb-3">Number of pages: {pages}</p>
              <input
                type="range"
                min={10}
                max={50}
                value={pages}
                onChange={(e) => setPages(parseInt(e.target.value))}
                className="w-full accent-[#5B315E]"
              />
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C8A96B] mb-2">Scrapbook title</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Our Love Story"
                className="w-full px-4 py-3 rounded-full bg-white border border-[#F4E4D4] outline-none focus:border-[#5B315E]"
              />
            </div>

            <Link href="#build" className="btn-primary mt-8 inline-flex">
              Design Your Scrapbook <ArrowRight size={16} className="arrow" />
            </Link>
          </div>

          {/* Live preview */}
          <div className="relative h-[560px] flex items-center justify-center">
            <div className={`relative w-full max-w-md aspect-[3/4] rounded-3xl bg-gradient-to-br ${current.tint} shadow-2xl p-8 rotate-[-3deg]`}>
              <div className="absolute -top-3 left-8 h-6 w-16 bg-[#C8A96B] opacity-70 rotate-[-8deg]" />
              <div className="absolute -top-3 right-10 h-6 w-16 bg-[#C8A96B] opacity-70 rotate-[6deg]" />
              <div className="h-full flex flex-col justify-between">
                <div>
                  <p className="font-script text-xl text-white/90">A keepsake of</p>
                  <h3 className="font-serif italic text-4xl md:text-5xl text-white mt-1">{name || "memories"}</h3>
                  <p className="mt-2 text-sm text-white/90">{pages} pages · {theme} theme</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className={`aspect-square bg-white/50 rounded-lg ${i === 1 ? "row-span-2" : ""}`}>
                      {i === 0 && <div className="h-full w-full rounded-lg flex items-center justify-center text-2xl">📸</div>}
                      {i === 1 && <div className="h-full w-full rounded-lg flex items-center justify-center text-3xl">💗</div>}
                      {i === 2 && <div className="h-full w-full rounded-lg flex items-center justify-center text-2xl">🌸</div>}
                      {i === 3 && <div className="h-full w-full rounded-lg flex items-center justify-center text-2xl">✨</div>}
                      {i === 4 && <div className="h-full w-full rounded-lg flex items-center justify-center text-2xl">💌</div>}
                    </div>
                  ))}
                </div>
                <p className="font-script text-center text-white/90 text-lg mt-4">Made with love ✦</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 sticker">Live Preview ✨</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CardCreator() {
  const [name, setName] = useState("you");
  const [message, setMessage] = useState("Wishing you the happiest of birthdays!");
  const [design, setDesign] = useState<"blush" | "mint" | "lav" | "gold">("blush");

  const designs = {
    blush: "bg-gradient-to-br from-[#F6C9CF] to-[#EFA7B5]",
    mint: "bg-gradient-to-br from-[#B9E4D0] to-[#C7E8F6]",
    lav: "bg-gradient-to-br from-[#DCCDF5] to-[#F6C9CF]",
    gold: "bg-gradient-to-br from-[#F4E4D4] to-[#C8A96B]/60",
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
        <div className="order-2 lg:order-1 flex justify-center">
          <motion.div
            whileHover={{ rotate: 0, scale: 1.03 }}
            className={`${designs[design]} w-full max-w-md aspect-[3/4] rounded-[2rem] shadow-2xl p-10 flex flex-col justify-between rotate-[3deg] relative`}
          >
            <div className="absolute top-6 left-6 font-script text-white/90">For</div>
            <div>
              <p className="font-script text-3xl text-white/90">To {name},</p>
              <h3 className="font-serif italic text-3xl md:text-4xl text-white mt-6 leading-tight">
                {message || "Say something beautiful."}
              </h3>
            </div>
            <div className="flex items-end justify-between">
              <p className="font-serif italic text-white/85 text-sm">With all my love</p>
              <Sparkles className="text-white" />
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-script text-2xl text-[#C8A96B] mb-2">Say it beautifully</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#332B32] leading-tight">
            Personalized <span className="italic text-[#5B315E]">cards</span>
          </h2>
          <p className="mt-6 text-[#332B32]/80">
            Choose a design, write from the heart, and we'll print it on premium textured card — sealed with a wax stamp.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[#C8A96B]">Recipient</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="their name"
                className="mt-2 w-full px-4 py-3 rounded-full bg-white border border-[#F4E4D4] outline-none focus:border-[#5B315E]"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[#C8A96B]">Your message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="mt-2 w-full px-4 py-3 rounded-2xl bg-white border border-[#F4E4D4] outline-none focus:border-[#5B315E] resize-none"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[#C8A96B]">Design</label>
              <div className="mt-2 flex gap-3">
                {(["blush", "mint", "lav", "gold"] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDesign(d)}
                    className={`h-12 w-12 rounded-full ${designs[d]} ring-4 transition ${
                      design === d ? "ring-[#5B315E]" : "ring-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button className="btn-primary mt-6">
            Create My Card <ArrowRight size={16} className="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { n: "01", title: "Choose Your Gift", desc: "Browse our curated collection or build one from scratch.", icon: "🎁" },
    { n: "02", title: "Personalize It", desc: "Add photos, names, messages and make it truly theirs.", icon: "✍️" },
    { n: "03", title: "We Handcraft It", desc: "Our artisans lovingly pack every detail by hand.", icon: "🌸" },
    { n: "04", title: "Delivered With Love", desc: "Beautifully wrapped and delivered to their door.", icon: "💌" },
  ];

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-[#F4E4D4]/40 to-[#FFF8F0]">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <p className="font-script text-2xl text-[#C8A96B] mb-2">Simple, magical, seamless</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#332B32]">
            How it <span className="italic text-[#5B315E]">works</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Dotted curve connector */}
          <svg className="hidden md:block absolute top-20 left-0 right-0 w-full h-40 pointer-events-none" viewBox="0 0 1000 160" preserveAspectRatio="none">
            <path
              d="M 50 80 Q 250 20, 350 80 T 650 80 T 950 80"
              fill="none"
              stroke="#C8A96B"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
          </svg>

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative mx-auto h-40 w-40 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[#F6C9CF]">
                <span className="text-5xl">{s.icon}</span>
                <span className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-[#5B315E] text-white font-serif flex items-center justify-center italic">
                  {s.n}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#5B315E] mt-6">{s.title}</h3>
              <p className="mt-2 text-sm text-[#332B32]/80 max-w-[240px] mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GiftFinderQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    { q: "Who is it for?", options: ["Partner", "Best Friend", "Parent", "Sibling", "Colleague"] },
    { q: "What's the occasion?", options: ["Birthday", "Anniversary", "Just Because", "Wedding", "Festive"] },
    { q: "Your budget?", options: ["Under ₹999", "₹1000 – ₹1999", "₹2000 – ₹3999", "₹4000+"] },
    { q: "They love…", options: ["Chocolate", "Memories", "Self-care", "Fun stuff", "Luxury"] },
  ];

  const select = (opt: string) => {
    const next = { ...answers, [step]: opt };
    setAnswers(next);
    if (step < questions.length - 1) setStep(step + 1);
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-script text-2xl text-[#C8A96B]">Take our little quiz</p>
        <h2 className="font-serif text-4xl md:text-5xl text-[#332B32]">
          Not sure what to <span className="italic text-[#5B315E]">gift?</span>
        </h2>
        <p className="mt-4 text-[#332B32]/80">Answer 4 quick questions — we'll find their perfect gift.</p>

        <div className="mt-10 glass rounded-3xl p-8 md:p-10 text-left">
          <div className="flex gap-1 mb-8">
            {questions.map((_, i) => (
              <div key={i} className={`flex-1 h-1.5 rounded-full ${i <= step ? "bg-[#C8A96B]" : "bg-[#F4E4D4]"}`} />
            ))}
          </div>

          {step < questions.length ? (
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <p className="font-serif text-2xl text-[#5B315E] mb-4">{questions[step].q}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {questions[step].options.map((o) => (
                  <button
                    key={o}
                    onClick={() => select(o)}
                    className={`p-4 rounded-2xl border-2 text-left transition ${
                      answers[step] === o ? "bg-[#5B315E] text-white border-[#5B315E]" : "bg-white border-[#F4E4D4] hover:border-[#C8A96B]"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="font-serif text-3xl text-[#5B315E]">We've got some ideas!</h3>
              <p className="mt-2 text-[#332B32]/80">Based on your answers, we'd love to recommend the perfect gift.</p>
              <Link href="/shop" className="btn-primary mt-6 inline-flex">
                Find Their Perfect Gift <ArrowRight size={16} className="arrow" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export function BudgetFinder() {
  return (
    <section className="relative py-20 md:py-24 px-4 md:px-8 bg-gradient-to-b from-[#FFF8F0] to-[#F6C9CF]/20">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <p className="font-script text-2xl text-[#C8A96B]">Gifts for every budget</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#332B32]">
            Shop by <span className="italic text-[#5B315E]">price</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {BUDGET_TIERS.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-cursor="view"
            >
              <Link
                href="/shop"
                className={`block ${t.tint} rounded-3xl p-6 h-48 md:h-56 card-lift relative overflow-hidden group`}
              >
                <div className="text-4xl mb-2">{t.emoji}</div>
                <h3 className="font-serif text-xl md:text-2xl text-[#5B315E] group-hover:text-[#332B32]">{t.label}</h3>
                <p className="mt-2 text-xs md:text-sm text-[#332B32]/80">{t.range}</p>
                <ArrowRight className="absolute bottom-4 right-4 text-[#5B315E] group-hover:translate-x-1 transition" size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OccasionReminder() {
  const [title, setTitle] = useState("");
  const [person, setPerson] = useState("");
  const [date, setDate] = useState("");
  const [remindDays, setRemindDays] = useState<7 | 14 | 30>(7);
  const [saved, setSaved] = useState(false);
  const addReminder = useStore((s) => s.addReminder);

  const save = () => {
    if (!title || !date) return;
    addReminder({ id: `r-${Date.now()}`, title, date, person, remindDays });
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setTitle("");
      setPerson("");
      setDate("");
    }, 2500);
  };

  return (
    <section className="relative py-20 md:py-24 px-4 md:px-8">
      <div className="mx-auto max-w-4xl glass rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#F6C9CF]/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#DCCDF5]/40 blur-3xl" />

        <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="font-script text-2xl text-[#C8A96B]">Never miss a moment</p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#332B32] leading-tight">
              Never forget a <span className="italic text-[#5B315E]">special day</span>.
            </h2>
            <p className="mt-4 text-[#332B32]/80">
              Save birthdays, anniversaries and special occasions — we'll remind you in time to craft the perfect gift.
            </p>
          </div>
          <Calendar className="hidden md:block text-[#5B315E] opacity-30" size={120} />
        </div>

        <div className="relative mt-8 grid md:grid-cols-3 gap-3">
          <input
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            placeholder="Person's name"
            className="px-4 py-3 rounded-full bg-white border border-[#F4E4D4] outline-none focus:border-[#5B315E]"
          />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Occasion (e.g. Mom's birthday)"
            className="px-4 py-3 rounded-full bg-white border border-[#F4E4D4] outline-none focus:border-[#5B315E]"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-3 rounded-full bg-white border border-[#F4E4D4] outline-none focus:border-[#5B315E]"
          />
        </div>

        <div className="relative mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C8A96B]">Remind me:</span>
          {([7, 14, 30] as const).map((d) => (
            <button
              key={d}
              onClick={() => setRemindDays(d)}
              className={`px-3 py-1.5 rounded-full text-xs transition ${
                remindDays === d ? "bg-[#5B315E] text-white" : "bg-white border border-[#F4E4D4]"
              }`}
            >
              {d} days before
            </button>
          ))}
          <button onClick={save} className="ml-auto btn-primary !py-2">
            <Send size={14} /> Create Reminder
          </button>
        </div>

        {saved && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mt-4 p-3 rounded-full bg-[#B9E4D0] text-[#332B32] text-sm text-center"
          >
            ✓ We'll remind you! Check your dashboard soon.
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function PersonalizationShowcase() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-[#FFF8F0] to-[#F4E4D4]/30">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <p className="font-script text-2xl text-[#C8A96B]">From ordinary to unforgettable</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#332B32]">
            The <span className="italic text-[#5B315E]">Homespun</span> touch.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { from: "A normal photo 📷", to: "https://images.pexels.com/photos/21956560/pexels-photo-21956560.jpeg?auto=compress&cs=tinysrgb&w=1400", after: "A handbound scrapbook" },
            { from: "A simple name ✍️", to: "https://images.pexels.com/photos/10819195/pexels-photo-10819195.jpeg?auto=compress&cs=tinysrgb&w=1400", after: "A personalized keepsake box" },
            { from: "A plain message 💬", to: "https://images.pexels.com/photos/7754232/pexels-photo-7754232.jpeg?auto=compress&cs=tinysrgb&w=1400", after: "A luxury love card" },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-5 border border-[#F4E4D4]">
                <div className="bg-[#FFF8F0] rounded-2xl p-6 text-center border border-dashed border-[#F4E4D4]">
                  <p className="text-sm text-[#332B32]/75">Before</p>
                  <p className="font-serif text-xl text-[#5B315E] mt-2">{t.from}</p>
                </div>
                <div className="my-4 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-[#5B315E] flex items-center justify-center text-white text-xl">↓</div>
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src={t.to} alt={t.after} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <p className="mt-4 font-serif italic text-center text-lg text-[#5B315E]">{t.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
