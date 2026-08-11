"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/Chrome";
import { Hero, HeroPromiseStrip, Marquee } from "@/components/Hero";
import { Occasions, SignatureCollection } from "@/components/Sections";
import { BuildHamperSection } from "@/components/BuildHamper";
import {
  ScrapbookDesigner,
  CardCreator,
  HowItWorks,
  GiftFinderQuiz,
  BudgetFinder,
  OccasionReminder,
  PersonalizationShowcase,
} from "@/components/Personalize";
import {
  GiftStory,
  Gallery,
  Testimonials,
  CustomerPhotoWall,
  Trending,
  LimitedEdition,
  WhyChooseUs,
  TrustStrip,
  Newsletter,
  Footer,
} from "@/components/Emotional";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const finishLoading = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="homespun-preloader" onDone={finishLoading} />}
      </AnimatePresence>

      <main aria-busy={loading}>
        <Hero />
        <HeroPromiseStrip />
        <Marquee />
        <Occasions />
        <SignatureCollection />
        <HowItWorks />
        <BuildHamperSection />
        <PersonalizationShowcase />
        <ScrapbookDesigner />
        <CardCreator />
        <GiftStory />
        <Trending />
        <GiftFinderQuiz />
        <BudgetFinder />
        <Gallery />
        <CustomerPhotoWall />
        <Testimonials />
        <LimitedEdition />
        <OccasionReminder />
        <WhyChooseUs />
        <TrustStrip />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
