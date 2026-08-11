import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, Leaf, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-28 md:pt-32 pb-20">
      <section className="px-4 md:px-8 mb-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <div>
              <p className="font-script text-2xl text-[#C8A96B] mb-2">Our little story</p>
              <h1 className="font-serif text-4xl md:text-6xl text-[#332B32] leading-tight">
                Started with <span className="italic text-[#5B315E]">creativity</span>.
                <br />
                Growing with your <span className="italic text-[#5B315E]">memories</span>.
              </h1>
              <p className="mt-6 text-[#332B32]/80 leading-relaxed">
                The Homespun Gifts began in a small studio with one big dream — to make gifting feel personal again.
                Every box we pack carries a story, every ribbon ties a memory, every handwritten note whispers
                something only the recipient would understand.
              </p>
              <p className="mt-4 text-[#332B32]/80 leading-relaxed">
                Today, we're a studio of artisans, designers and dreamers, crafting thousands of gifts for
                birthdays, weddings, anniversaries and all the quiet, beautiful moments in between.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { v: "5000+", l: "Gifts Delivered" },
                  { v: "1000+", l: "Happy Hearts" },
                  { v: "4.9★", l: "Customer Rating" },
                  { v: "100%", l: "Handmade" },
                ].map((s) => (
                  <div key={s.l} className="p-5 rounded-2xl bg-gradient-to-br from-[#F6C9CF]/30 to-[#DCCDF5]/30 border border-white/60">
                    <p className="font-serif text-3xl text-[#5B315E]">{s.v}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#332B32]/80 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px]">
              <div className="absolute top-0 left-0 w-3/4 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl rotate-[-3deg]">
                <Image src="https://images.pexels.com/photos/34586900/pexels-photo-34586900.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Our workshop" fill sizes="(max-width: 1024px) 75vw, 38vw" className="object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-[4deg]">
                <Image src="https://images.pexels.com/photos/10819195/pexels-photo-10819195.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Crafting gifts" fill sizes="(max-width: 1024px) 66vw, 34vw" className="object-cover" />
              </div>
              <div className="absolute top-1/2 right-8 sticker rotate-[8deg]">Handmade ✨</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 py-20 bg-gradient-to-b from-[#FFF8F0] to-[#F6C9CF]/20">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-12">
            <p className="font-script text-2xl text-[#C8A96B]">What we believe</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#332B32]">
              Our little <span className="italic text-[#5B315E]">principles</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { icon: Heart, title: "Love first", desc: "Every gift starts with care." },
              { icon: Sparkles, title: "Personal touch", desc: "Nothing feels off-the-shelf." },
              { icon: Leaf, title: "Thoughtful materials", desc: "Premium, sustainable, kind." },
              { icon: Award, title: "Craftsmanship", desc: "Handmade by real artisans." },
            ].map((p) => (
              <div key={p.title} className="glass rounded-3xl p-6 text-center card-lift">
                <p.icon size={28} className="text-[#C8A96B] mx-auto" />
                <h3 className="font-serif text-2xl text-[#5B315E] mt-4">{p.title}</h3>
                <p className="mt-2 text-sm text-[#332B32]/80">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-script text-2xl text-[#C8A96B]">Come say hello</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#332B32] mt-2">
            Let's make a gift <span className="italic text-[#5B315E]">together</span>
          </h2>
          <p className="mt-4 text-[#332B32]/80">Have a wild idea? A tricky occasion? A last-minute panic? We love a good challenge.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/shop" className="btn-primary">Explore the Collection</Link>
            <a href="https://wa.me/919999999999" className="btn-outline">Chat with us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
