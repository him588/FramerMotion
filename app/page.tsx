"use client";
import Section1 from "@/components/parallex/section1";
import Section2 from "@/components/parallex/section2";
import { useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  return (
    <main ref={containerRef} className=" h-[200vh] flex flex-col bg-[#181818]">
      <Section1 motionValue={scrollYProgress} />
      <Section2 motionValue={scrollYProgress} />
    </main>
  );
}
