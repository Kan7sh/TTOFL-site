"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import banner1 from "@/assets/images/B1.png";
import banner2 from "@/assets/images/B2.png";
import banner3 from "@/assets/images/B3.png";
import banner4 from "@/assets/images/B4.png";
import Footer from "@/components/ui/footer";
import card1 from "@/assets/images/C1.png";
import card2 from "@/assets/images/C2.png";
import card3 from "@/assets/images/C3.png";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Cover } from "@/components/ui/cover";
import { WobbleCard } from "@/components/ui/wobble-card";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

// Each slide has an image + text
const slides = [
  {
    image: banner1.src,
    content: (
      <div className="space-y-4 flex flex-col items-start content-start">
        <div className="text-emerald-400/90 text-6xl font-extrabold drop-shadow-lg ">
          Reimagining Industries
        </div>
        <div className="pb-10 text-5xl">One Smart Solution at a Time</div>
        <ul className="list-disc pl-6 text-white justify-self-start">
          <button className="relative inline-flex w-58 h-22 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400/90 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#02c085_0%,#393BB2_50%,#02c085_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-2xl font-medium text-white backdrop-blur-3xl">
              Explore Products
            </span>
          </button>
        </ul>
      </div>
    ),
  },
  {
    image: banner2.src,
    content: (
      <div className="space-y-4 flex flex-col items-start content-start">
        <div className="text-emerald-400/90 text-6xl font-extrabold drop-shadow-lg ">
          Driven by Technology
        </div>
        <div className="pb-10 text-5xl">Inspired by Insight</div>
        <ul className="list-disc pl-6 text-white justify-self-start"></ul>
      </div>
    ),
  },
  {
    image: banner3.src,
    content: (
      <div className="space-y-4 flex flex-col items-start content-start">
        <div className="text-emerald-400/90 text-6xl font-extrabold drop-shadow-lg ">
          Empowering Industries
        </div>
        <div className="pb-10 text-5xl">with innovative solutions</div>
        <ul className="list-disc pl-6 text-white justify-self-start"></ul>
      </div>
    ),
  },
  {
    image: banner4.src,
    content: (
      <div className="space-y-4 flex flex-col items-start content-start">
        <div className="text-emerald-400/90 text-6xl font-extrabold drop-shadow-lg ">
          Smart Solutions
        </div>
        <div className="pb-10 text-5xl">for Smart Tomorrow</div>
        <ul className="list-disc pl-6 text-white justify-self-start">
          <button className="relative inline-flex w-58 h-22 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400/90 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#02c085_0%,#393BB2_50%,#02c085_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-2xl font-medium text-white backdrop-blur-3xl">
              About Us
            </span>
          </button>
        </ul>
      </div>
    ),
  },
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
    }, 4000);
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
    <div className="relative w-full min-h-screen overflow-hidden bg-neutral-950">
      <GlassmorphNavBar />

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

        <div className="absolute inset-0 flex items-center pl-12 z-20">
          <motion.h1
            key={page + "-text"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl font-bold max-w-200 drop-shadow-lg"
          >
            {slides[imageIndex].content}
          </motion.h1>
        </div>
      </div>
      <div className="py-40">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center gap-10 px-10">
            <WobbleCard containerClassName=" bg-emerald-900/90 min-h-[40px] lg:min-h-[300px] ">
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Innovation at its Best
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Our team of tech-savvy individuals is driven by innovation,
                  devoted to making your life easier and more efficient, and
                  committed to creating top-tier mobile applications for you.
                </p>
              </div>
              <img
                src={card1.src}
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName=" bg-[#0] min-h-[40px] lg:min-h-[300px] ">
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Quality Matters{" "}
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  We understand that quality is paramount. That's why we're
                  devoted to providing you with a top-tier mobile application,
                  crafted with precision and care.
                </p>
              </div>
              <img
                src={card2.src}
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
          </div>
          <div className="flex flex-row-reverse items-center px-10">
            <WobbleCard containerClassName=" bg-[#005099] min-h-[40px] lg:min-h-[300px] flex-1">
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Our Promise{" "}
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  At TTOFL, we're not just creating apps; we're crafting
                  experiences. Experiences that will make your life easier, more
                  enjoyable, and more rewarding, all while contributing to a
                  better society.
                </p>
              </div>
              <img
                src={card3.src}
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white flex-1 p-5">
              Building amazing Products <br />
              for <Cover>Future Generation</Cover>
            </h1>
          </div>
        </div>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="mb-20"
      />
      <Footer />
    </div>
  );
}
