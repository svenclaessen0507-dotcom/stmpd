"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";

type Service = {
  id: number;
  number: string;
  title: string;
  image: string;
};

const services: Service[] = [
  { id: 1, number: "01", title: "Music production", image: "/images/stmpd.png" },
  { id: 2, number: "02", title: "Film & commercials", image: "/images/stmpd.png" },
  { id: 3, number: "03", title: "Dolby Atmos", image: "/images/stmpd.png" },
  { id: 4, number: "04", title: "In-house production", image: "/images/stmpd.png" },
  { id: 5, number: "05", title: "Events", image: "/images/stmpd.png" },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cursorImageRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cursorImageRef.current) return;

    gsap.to(cursorImageRef.current, {
      left: e.clientX,
      top: e.clientY,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  return (
    <main
      className="min-h-screen bg-black px-16 py-32"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor image */}
      <img
        ref={cursorImageRef}
        src={activeIndex !== null ? services[activeIndex].image : ""}
        alt=""
        className={`pointer-events-none fixed left-0 top-0 z-10 h-[400px] w-[400px]
        -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-200
        ${activeIndex !== null ? "opacity-100" : "opacity-0"}`}
      />

      <section className="max-w-5xl">
        <h2 className="mb-12 text-sm uppercase tracking-wider text-gray-400">
          What we do
        </h2>

        <div className="flex flex-col gap-6">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={service.id}
                className={`flex cursor-pointer items-center justify-between transition-colors ${
                  isActive ? "relative z-20" : "relative z-0"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <span
                  className={`text-lg transition-colors duration-200 ${
                    isActive ? "text-white" : "text-gray-500"
                  }`}
                >
                  {service.number}
                </span>

                <h3
                  className={`text-3xl font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-gray-500"
                  }`}
                >
                  {service.title}
                  {isActive && <span className="ml-2">→</span>}
                </h3>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
