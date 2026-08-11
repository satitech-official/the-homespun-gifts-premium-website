"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Check, X, Plus, Trash2 } from "lucide-react";
import { BUILDER_BOXES, BUILDER_ITEMS } from "@/lib/data";
import { useStore } from "@/lib/store";

const STEPS = ["Box", "Products", "Personalize", "Message", "Preview", "Order"];

export function BuildHamperSection() {
  const [step, setStep] = useState(0);
  const [boxId, setBoxId] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("Romantic");
  const [message, setMessage] = useState("");
  const addToCart = useStore((s) => s.addToCart);
  const setCartOpen = useStore((s) => s.setCartOpen);

  const box = BUILDER_BOXES.find((b) => b.id === boxId);
  const items = BUILDER_ITEMS.filter((i) => selected.includes(i.id));
  const total = useMemo(
    () => (box?.price || 0) + items.reduce((s, i) => s + i.price, 0),
    [box, items],
  );

  const toggleItem = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const next = () => setStep((s) => Math.min(STEPS.length - 1, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  const submit = () => {
    const boxName = box?.name || "Custom Hamper";
    addToCart({
      productId: `custom-${Date.now()}`,
      name: `Custom: ${boxName}${name ? ` for ${name}` : ""}`,
      image: "https://images.pexels.com/photos/10819195/pexels-photo-10819195.jpeg?auto=compress&cs=tinysrgb&w=1400",
      price: total,
      recipient: name,
      message,
    });
    setCartOpen(true);
  };

  return (
    <section id="build" className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6C9CF]/30 via-[#FFF8F0] to-[#DCCDF5]/30" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#B9E4D0]/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#DCCDF5]/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="text-center mb-10">
          <p className="font-script text-2xl text-[#C8A96B]">Design it your way</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#332B32] leading-tight">
            Build a gift as <span className="italic text-[#5B315E]">unique</span>
            <br />
            as the person receiving it.
          </h2>
        </div>

        {/* Stepper */}
        <div className="mx-auto mb-10 max-w-3xl">
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-[#F4E4D4] -translate-y-1/2" />
            <div
              className="absolute left-0 top-1/2 h-0.5 bg-[#C8A96B] -translate-y-1/2 transition-all duration-700"
              style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
            />
            {STEPS.map((label, i) => (
              <button
                key={label}
                onClick={() => setStep(i)}
                className="relative z-10 flex flex-col items-center gap-2"
              >
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${
                    i <= step ? "bg-[#5B315E] text-white shadow-lg" : "bg-white text-[#5B315E] border border-[#F4E4D4]"
                  }`}
                >
                  {i < step ? <Check size={16} /> : <span className="text-sm font-semibold">{i + 1}</span>}
                </div>
                <span className={`text-[10px] md:text-xs font-medium ${i <= step ? "text-[#5B315E]" : "text-[#332B32]/80"}`}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* LEFT — Steps */}
          <div className="glass rounded-3xl p-6 md:p-10 min-h-[480px]">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#5B315E] mb-6">Step 1 — Choose your box</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {BUILDER_BOXES.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setBoxId(b.id)}
                        className={`relative rounded-2xl overflow-hidden aspect-square ${b.tint} border-2 transition-all ${
                          boxId === b.id ? "border-[#5B315E] scale-105 shadow-xl" : "border-transparent hover:scale-105"
                        }`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-20 w-20 md:h-28 md:w-28 rounded-xl bg-white/40 shadow-inner" />
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 text-left">
                          <p className="font-serif text-sm md:text-base text-[#5B315E]">{b.name}</p>
                          <p className="text-xs text-[#332B32]/80">₹{b.price}</p>
                        </div>
                        {boxId === b.id && (
                          <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-[#5B315E] flex items-center justify-center">
                            <Check size={14} className="text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div key="products" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#5B315E] mb-6">Step 2 — Add items ({selected.length})</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {BUILDER_ITEMS.map((it) => {
                      const active = selected.includes(it.id);
                      return (
                        <button
                          key={it.id}
                          onClick={() => toggleItem(it.id)}
                          className={`relative p-4 rounded-2xl text-left border-2 transition-all ${
                            active ? "border-[#5B315E] bg-[#5B315E]/5" : "border-[#F4E4D4] bg-white hover:border-[#C8A96B]"
                          }`}
                        >
                          <div className="text-3xl mb-2">{it.emoji}</div>
                          <p className="font-medium text-sm text-[#332B32]">{it.name}</p>
                          <p className="text-xs text-[#C8A96B] mt-0.5">{it.cat} · ₹{it.price}</p>
                          {active && (
                            <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-[#5B315E] flex items-center justify-center">
                              <Check size={14} className="text-white" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="personalize" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#5B315E] mb-6">Step 3 — Make it personal</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs uppercase tracking-[0.2em] text-[#C8A96B]">Recipient Name</label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Priya"
                        className="mt-2 w-full px-4 py-3 rounded-full bg-white border border-[#F4E4D4] outline-none focus:border-[#5B315E]"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-[0.2em] text-[#C8A96B]">Theme</label>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {["Romantic", "Birthday", "Vintage", "Minimal", "Luxury", "Festive"].map((t) => (
                          <button
                            key={t}
                            onClick={() => setTheme(t)}
                            className={`px-4 py-2 rounded-full text-sm border transition ${
                              theme === t ? "bg-[#5B315E] text-white border-[#5B315E]" : "bg-white border-[#F4E4D4] hover:border-[#C8A96B]"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-[#C8A96B]">Upload a photo (optional)</label>
                      <label className="mt-2 flex items-center justify-center gap-2 py-8 rounded-2xl border-2 border-dashed border-[#F4E4D4] bg-white cursor-pointer hover:border-[#C8A96B]">
                        <Plus size={18} className="text-[#5B315E]" />
                        <span className="text-sm text-[#332B32]/80">Drop your favorite photo here</span>
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="message" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#5B315E] mb-6">Step 4 — Write a little note</h3>
                  <div className="bg-white rounded-3xl p-6 shadow-inner border border-[#F4E4D4]">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      maxLength={200}
                      placeholder="Write a message they'll keep forever..."
                      className="w-full resize-none outline-none font-script text-xl text-[#332B32] placeholder:text-[#332B32]/75"
                    />
                    <p className="text-right text-xs text-[#332B32]/80">{message.length}/200</p>
                  </div>
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#C8A96B] mb-2">Suggestions</p>
                    <div className="flex flex-wrap gap-2">
                      {["Happy Birthday, sunshine!", "Forever grateful for you.", "To our next adventure 💫", "With all my love, always."].map((s) => (
                        <button
                          key={s}
                          onClick={() => setMessage(s)}
                          className="px-3 py-1.5 rounded-full bg-[#F6C9CF]/40 text-xs text-[#5B315E] hover:bg-[#F6C9CF] transition"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="preview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#5B315E] mb-6">Step 5 — Your gift preview</h3>
                  <div className={`relative rounded-3xl p-8 ${box?.tint || "bg-[#F6C9CF]"} shadow-xl`}>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#5B315E] text-white text-xs">
                      {box?.name || "Your hamper"}
                    </div>
                    <div className="grid grid-cols-4 gap-3 mt-4">
                      {items.length > 0 ? (
                        items.map((it) => (
                          <div key={it.id} className="aspect-square rounded-2xl bg-white/60 backdrop-blur flex items-center justify-center text-3xl">
                            {it.emoji}
                          </div>
                        ))
                      ) : (
                        <p className="col-span-4 text-center text-sm text-[#332B32]/75 py-10">Add some items to see your hamper ✨</p>
                      )}
                    </div>
                    {name && (
                      <div className="mt-6 text-center">
                        <p className="font-script text-2xl text-[#5B315E]">For {name}</p>
                      </div>
                    )}
                    {message && (
                      <div className="mt-4 bg-white/60 rounded-2xl p-4">
                        <p className="font-script text-lg text-[#332B32]">"{message}"</p>
                      </div>
                    )}
                    <div className="mt-6 flex items-center justify-between text-sm">
                      <span className="text-[#332B32]/80">Theme: {theme}</span>
                      <span className="font-serif text-2xl text-[#5B315E]">₹{total.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div key="order" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#5B315E] mb-6">Step 6 — Ready to order?</h3>
                  <div className="bg-white rounded-3xl p-6 border border-[#F4E4D4]">
                    <div className="flex items-center gap-4 pb-4 border-b border-[#F4E4D4]">
                      <div className="h-16 w-16 rounded-2xl bg-[#F6C9CF] flex items-center justify-center text-3xl">🎁</div>
                      <div className="flex-1">
                        <p className="font-serif text-xl text-[#332B32]">{box?.name || "Custom Hamper"}</p>
                        <p className="text-xs text-[#332B32]/75">{items.length} items · Theme: {theme}{name ? ` · For ${name}` : ""}</p>
                      </div>
                      <span className="font-serif text-2xl text-[#5B315E]">₹{total.toLocaleString()}</span>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between"><span>Box</span><span>₹{(box?.price || 0).toLocaleString()}</span></div>
                      <div className="flex justify-between"><span>Items ({items.length})</span><span>₹{items.reduce((s, i) => s + i.price, 0).toLocaleString()}</span></div>
                      <div className="flex justify-between"><span>Wrapping</span><span className="text-[#B9E4D0]">Free</span></div>
                      <div className="flex justify-between pt-2 border-t border-[#F4E4D4] font-semibold"><span>Total</span><span>₹{total.toLocaleString()}</span></div>
                    </div>
                    <button onClick={submit} className="btn-primary w-full mt-6 justify-center">
                      Order This Gift <ArrowRight size={16} className="arrow" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 flex justify-between">
              <button onClick={back} disabled={step === 0} className="btn-outline disabled:opacity-40 disabled:cursor-not-allowed">
                Back
              </button>
              {step < STEPS.length - 1 && (
                <button onClick={next} className="btn-primary">
                  Next <ArrowRight size={16} className="arrow" />
                </button>
              )}
            </div>
          </div>

          {/* RIGHT — Live Summary */}
          <div className="glass rounded-3xl p-6 sticky top-28">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C8A96B]">Your hamper</p>
            <h4 className="font-serif text-2xl text-[#5B315E] mt-1">{box?.name || "Pick a box"}</h4>
            <div className="mt-4 space-y-2">
              {items.map((it) => (
                <div key={it.id} className="flex items-center justify-between bg-white rounded-xl px-3 py-2 border border-[#F4E4D4]">
                  <div className="flex items-center gap-2">
                    <span>{it.emoji}</span>
                    <span className="text-sm text-[#332B32]">{it.name}</span>
                  </div>
                  <button onClick={() => toggleItem(it.id)} className="text-[#332B32]/80 hover:text-[#5B315E]">
                    <X size={14} />
                  </button>
                </div>
              ))}
              {items.length === 0 && <p className="text-sm text-[#332B32]/80 italic">No items yet ✨</p>}
            </div>
            <div className="mt-6 pt-4 border-t border-[#F4E4D4] flex items-center justify-between">
              <span className="text-sm text-[#332B32]/80">Total</span>
              <span className="font-serif text-2xl text-[#5B315E]">₹{total.toLocaleString()}</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-[#C8A96B]">
              <Sparkles size={12} /> Handcrafted in 3-5 days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
