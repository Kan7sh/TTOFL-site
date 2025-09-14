"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import banner1 from "@/assets/images/B1.png";
import banner2 from "@/assets/images/B2.png";
import banner3 from "@/assets/images/B3.png";
import Footer from "@/components/ui/footer";

// Each slide has an image + text
const slides = [
  { image: banner1.src, text: "Welcome to Slide One 🚀" },
  { image: banner2.src, text: "Discover Amazing Features ✨" },
  { image: banner3.src, text: "" },
];

export default function Home() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const imageIndex = ((page % slides.length) + slides.length) % slides.length;

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

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
              background: `url(${slides[imageIndex].image}) center/cover no-repeat`,
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

        {/* ✅ Text Overlay (custom per slide) */}
        <div className="absolute inset-0 flex items-center pl-12 z-20">
          <motion.h1
            key={page + "-text"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl font-bold max-w-lg drop-shadow-lg"
          >
            {slides[imageIndex].text}
          </motion.h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
