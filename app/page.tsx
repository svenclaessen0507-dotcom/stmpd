"use client";

import React, { useState } from "react";

type Service = {
  id: number;
  number: string;
  title: string;
  image: string;
};

const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Music production",
    image: "/images/brand.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Film & commercials",
    image: "/images/creative.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Dolby Atmos",
    image: "/images/content.jpg",
  },
  {
    id: 4,
    number: "04",
    title: "In-house production",
    image: "/images/digital.jpg",
  },
  {
    id: 5,
    number: "05",
    title: "Events",
    image: "/images/campaigns.jpg",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black px-16 py-32">
      <section className="max-w-5xl">
        {/* Section title */}
        <h2 className="mb-12 text-sm uppercase tracking-wider text-gray-400">
          What we do
        </h2>

        {/* Services */}
        <div className="flex flex-col gap-6">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={service.id}
                className="flex cursor-pointer items-center justify-between"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Number */}
                <span
                  className={`text-lg transition-colors duration-200 ${isActive ? "text-white" : "text-gray-500"
                    }`}
                >
                  {service.number}
                </span>

                {/* Title + arrow */}
                <h3
                  className={`text-3xl font-medium transition-colors duration-200 ${isActive ? "text-white" : "text-gray-500"
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