"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import banner1 from "@/assets/images/B1.png";
import banner2 from "@/assets/images/B2.png";
import banner3 from "@/assets/images/B3.png";
import banner4 from "@/assets/images/B4.png";
import comingSoon from "@/assets/images/CS1.png";
import banner9 from "@/assets/images/B9.png";
import Footer from "@/components/ui/footer";
import card1 from "@/assets/images/C1.png";
import card2 from "@/assets/images/C2.png";
import card3 from "@/assets/images/C3.png";
import home1 from "@/assets/images/H1.png";
import { Cover } from "@/components/ui/cover";
import { WobbleCard } from "@/components/ui/wobble-card";
import societyCarsLogo from "@/assets/images/SC1C.png";
import { InteractiveHoverButton } from "@/components/ui/interactiveHoverButton";
import Link from "next/link";

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

const slides = [
  {
    image: banner1.src,
    content: (
      <div className="space-y-4 pl-10 flex flex-col items-start content-start">
        <div className="text-emerald-400/90 text-3xl lg:text-6xl font-extrabold drop-shadow-lg ">
          Reimagining real-world challenges
        </div>
        <div className="pb-5 text-2xl lg:text-5xl">
          with powerful mobile solutions
        </div>
        <ul className="list-disc lg:pl-6 text-white justify-self-start">
          <Link href="/products">
            <button className="relative inline-flex w-58 h-20 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400/90 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#02c085_0%,#393BB2_50%,#02c085_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl lg:text-2xl font-medium text-white backdrop-blur-3xl">
                Explore Products
              </span>
            </button>
          </Link>
        </ul>
      </div>
    ),
  },
  {
    image: banner2.src,
    content: (
      <div className="space-y-4 pl-10 flex flex-col items-start content-start">
        <div className="text-emerald-400/90 text-3xl lg:text-6xl font-extrabold drop-shadow-lg ">
          Driven by Technology
        </div>
        <div className="pb-5 text-2xl lg:text-5xl">Inspired by Insight</div>
        <ul className="list-disc lg:pl-6 text-white justify-self-start"></ul>
        <Link href="/about">
          <button className="relative inline-flex w-58 h-20 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400/90 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#02c085_0%,#393BB2_50%,#02c085_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl lg:text-2xl font-medium text-white backdrop-blur-3xl">
              About Us
            </span>
          </button>
        </Link>
      </div>
    ),
  },
  {
    image: banner3.src,
    content: (
      <div className="space-y-4 pl-10 flex flex-col items-start content-start">
        <div className="text-emerald-400/90 text-3xl lg:text-6xl font-extrabold drop-shadow-lg ">
          Empowering Industries
        </div>
        <div className="pb-5 text-2xl lg:text-5xl">
          with innovative solutions
        </div>
        <ul className="list-disc lg:pl-6 text-white justify-self-start"></ul>
        <Link href="/about">
          <button className="relative inline-flex w-58 h-20 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400/90 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#02c085_0%,#393BB2_50%,#02c085_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl lg:text-2xl font-medium text-white backdrop-blur-3xl">
              Know Us
            </span>
          </button>
        </Link>
      </div>
    ),
  },
  {
    image: banner4.src,
    content: (
      <div className="space-y-4 pl-10 flex flex-col items-start content-start">
        <div className="text-emerald-400/90 text-3xl lg:text-6xl font-extrabold drop-shadow-lg ">
          Smart Solutions
        </div>
        <div className="pb-5 text-2xl lg:text-5xl">
          nurturing growth and powering a sustainable tomorrow
        </div>
        <ul className="list-disc lg:pl-6 text-white justify-self-start">
          <Link href="/about">
            <button className="relative inline-flex w-58 h-20 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400/90 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#02c085_0%,#393BB2_50%,#02c085_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl lg:text-2xl font-medium text-white backdrop-blur-3xl">
                Explore Us
              </span>
            </button>
          </Link>
        </ul>
      </div>
    ),
  },
  {
    image: banner9.src,
    content: (
      <div className="space-y-4 pl-10 flex flex-col items-start content-start">
        <div className="text-emerald-400/90 text-3xl lg:text-6xl font-extrabold drop-shadow-lg ">
          Solutions that Protect
        </div>
        <div className="pb-5 text-2xl lg:text-5xl">
          empowers, and shapes tomorrow
        </div>
        <ul className="list-disc lg:pl-6 text-white justify-self-start">
          <Link href="/about">
            <button className="relative inline-flex w-58 h-20 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400/90 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#02c085_0%,#393BB2_50%,#02c085_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl lg:text-2xl font-medium text-white backdrop-blur-3xl">
                About Us
              </span>
            </button>
          </Link>
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

  const goToSlide = (index: number) => {
    const currentIndex = imageIndex;
    const direction = index > currentIndex ? 1 : -1;
    const pageDiff = index - currentIndex;
    setPage(([prevPage]) => [prevPage + pageDiff, direction]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 6000);
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
      <GlassmorphNavBar selectedTab="home" />

      <div className="relative w-full h-screen flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `url(${slides[imageIndex].image}) 65% center/cover no-repeat`,
              backgroundPosition: "65% center",
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

        <div className="absolute inset-0 flex items-center lg:pl-12 z-20">
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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === imageIndex
                  ? "w-12 h-3 bg-emerald-400"
                  : "w-3 h-3 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="pt-35 pb-28 lg:flex lg:items-center lg:justify-center">
        <div className="flex flex-col-reverse gap-10 lg:max-w-8xl lg:px-5 lg:w-11/12">
          <div className="flex flex-col lg:flex-row items-stretch gap-10 px-10">
            <WobbleCard containerClassName=" bg-emerald-900/90 min-h-[330px] 2xl:min-h-[400px] ">
              <div className="flex flex-col lg:flex-row gap-10 h-full items-center justify-center">
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-2xl md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                    Innovation at Best
                  </h2>
                  <p className="mt-4 text-justify md:text-xs 2xl:text-sm  text-sm text-neutral-200">
                    Our team of tech individuals is driven by innovation,
                    devoted to making your life easier and more efficient,
                    committed to creating top-tier mobile applications for you
                  </p>
                </div>
                <img
                  src={card1.src}
                  alt="linear demo image"
                  className="w-60 2xl:w-75 grayscale filter object-contain rounded-2xl"
                />
              </div>
            </WobbleCard>
            <WobbleCard containerClassName=" bg-[#0]  min-h-[330px] 2xl:min-h-[400px]">
              <div className="flex flex-col lg:flex-row gap-10 h-full items-center justify-center">
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-2xl md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                    Quality Matters
                  </h2>
                  <p className="mt-4 text-justify md:text-xs 2xl:text-sm  text-sm text-neutral-200">
                    We understand that quality is paramount. That's why we're
                    devoted to providing you with a top-tier mobile application,
                    crafted with precision and care
                  </p>
                </div>
                <img
                  src={card2.src}
                  alt="linear demo image"
                  className="w-60 2xl:w-83   grayscale filter  object-contain rounded-2xl"
                />
              </div>
            </WobbleCard>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center px-10">
            <WobbleCard containerClassName=" bg-[#005099] min-h-[330px]   flex-1 ">
              <div className="flex flex-col lg:flex-row gap-7 2xl:gap-10 h-hull items-center justify-centerr">
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-2xl md:text-xl 2xl:text-2xl font-semibold tracking-[-0.015em] text-white">
                    Our Promise
                  </h2>
                  <p className="mt-4 text-justify  text-sm md:text-xs 2xl:text-sm text-neutral-200">
                    At TTOFL, we're not just creating apps; we're crafting
                    experiences. Experiences that will make your life easier,
                    more enjoyable, and more rewarding, all while contributing
                    to a better society
                  </p>
                </div>
                <img
                  src={card3.src}
                  alt="linear demo image"
                  className="w-60 2xl:w-83  grayscale filter  object-contain rounded-2xl"
                />
              </div>
            </WobbleCard>
            <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex-1 p-5">
              Building amazing Products <br />
              for <Cover className="dark">Future Generation</Cover>
            </h1>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <img src={home1.src} alt="linear demo image" />
      </div>

      <section className="py-20 px-8 lg:px-25 bg-gradient-to-b from-[#000000] via-neutral-800 to-[#0a0a0a] text-white">
        <div className=" mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-10"
          >
            OUR PRODUCTS
          </motion.h2>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Society Cars",
                description:
                  "All automobile services under one roof with transparency and trust for Societies.",
                img: societyCarsLogo,
                btnTxt: "Explore now",
                link: "/products",
              },
              {
                title: "EduBridgeX",
                description:
                  "Unified, affordable tech training platform for Tier 3 students",
                img: comingSoon,
                btnTxt: "Coming soon",
                link: "",
              },
              {
                title: "AgriConnect",
                description:
                  "Connecting agri-graduates with farmers to promote organic farming and logistics support",
                img: comingSoon,
                btnTxt: "Coming soon",
                link: "",
              },
              {
                title: "MediReview",
                description:
                  "Medicine review & feedback platform enabling transparency in pharma",
                img: comingSoon,
                btnTxt: "Coming soon",
                link: "",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#01192558] border-white/20 border-1 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 flex flex-col "
              >
                <div className=" h-35 flex items-center justify-center mb-4">
                  <img
                    loading="lazy"
                    className="rounded-2xl w-35 mx-auto"
                    alt="Invite background"
                    src={feature.img.src}
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white h-14 flex items-center justify-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm text-center leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>
                <div className="mt-auto">
                  <Link href={feature.link}>
                    <InteractiveHoverButton
                      className={`w-40 rounded-xl h-11 ${
                        feature.btnTxt === "Coming soon"
                          ? "bg-gray-400"
                          : "bg-emerald-400/90"
                      } border-none text-white`}
                    >
                      {feature.btnTxt}
                    </InteractiveHoverButton>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
