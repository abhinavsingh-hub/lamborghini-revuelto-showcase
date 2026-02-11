"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import NavvScrollCanvas from "@/components/NavvScrollCanvas";
import NavvExperience from "@/components/NavvExperience";
import SpecsGrid from "@/components/SpecsGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

  // MASTER SCROLL SOURCE
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-revuelto-black min-h-screen">
      <Navbar scrollYProgress={scrollYProgress} />

      {/* SCROLLYTELLING CONTAINER */}
      <section ref={containerRef} className="h-[500vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <NavvScrollCanvas scrollYProgress={scrollYProgress} />
          <NavvExperience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* POST-SCROLL CONTENT */}
      <div className="relative z-20 bg-revuelto-black">
        <SpecsGrid />
        <Features />
        <Footer />
      </div>
    </main>
  );
}
