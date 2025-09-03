"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";

// Replace with image URLs later
const slides = ["#01c980", "#0186fe", "#f87171", "#fbbf24", "#0f0f0f"];

export default function Home() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const imageIndex = ((page % slides.length) + slides.length) % slides.length;

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  // ✅ Auto-slide that keeps running
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      zIndex: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <GlassmorphNavBar />

      {/* Carousel */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: slides[imageIndex].startsWith("#")
                ? slides[imageIndex]
                : `url(${slides[imageIndex]}) center/cover no-repeat`,
            }}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay content */}
      <main className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">
          Drag or Wait for Auto-Slide
        </h1>
      </main>
    </div>
  );
}
