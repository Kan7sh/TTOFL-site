"use client";

import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import { GridBeams } from "@/components/ui/gridBeans";
import societyCarsLogo from "@/assets/images/SC1.png";
import { motion } from "framer-motion";
import {
  Video,
  Users,
  ShoppingCart,
  Clock,
  Shield,
  Star,
  Smartphone,
  Download,
} from "lucide-react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Footer from "@/components/ui/footer";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

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


export default function ProductsPage() {
  // QR Code component using qr-server.com API
  const QRCode = ({
    url,
    label,
    type,
  }: {
    url: any;
    label: string;
    type: string;
  }) => (
    <div className="flex flex-col items-center space-y-3">
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
            url
          )}`}
          alt={`${label} QR Code`}
          className="w-40 h-40"
        />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-gray-300">{label}</p>
        {/* <div className="flex items-center justify-center mt-1 text-xs text-gray-400">
          <Download className="w-3 h-3 mr-1" />
          {type}
        </div> */}
      </div>
    </div>
  );

  return (
    <div className="relative w-full min-h-screen bg-neutral-950 text-white">
      <GlassmorphNavBar />

      <GridBeams
        className="w-full min-h-screen flex flex-col"
        backgroundColor="#020412"
      >
        <div className="flex-1 flex items-center justify-center px-6 pt-32">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <img
                src={societyCarsLogo.src}
                width={130}
                alt="Society Cars Logo"
                className="rounded-2xl"
              />
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-3xl md:text-6xl font-extrabold mb-4">
                  SOCIETY CARS
                </h1>
                <p className="text-lg md:text-xl max-w-3xl">
                  One-Stop Auto Care Platform for Residential Communities
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-3xl font-bold mb-6">
                  See Society Cars in Action
                </h2>
                <p className="text-lg mb-6">
                  Watch how Society Cars transforms everyday automobile services
                  within residential communities — from booking to fulfillment.
                </p>

                <div className="mt-2">
                  <div className="flex items-center mb-4">
                    <Smartphone className="w-5 h-5 text-emerald-400 mr-2" />
                    <h3 className="text-lg font-semibold">Download Our App</h3>
                  </div>
                  <div className="flex gap-6 justify-start">
                    <QRCode
                      url="https://play.google.com/store/apps/details?id=com.societycars.app"
                      label="Play Store"
                      type="Android"
                    />
                    <QRCode
                      url="https://apps.apple.com/app/society-cars/id123456789"
                      label="App Store"
                      type="iOS"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="aspect-video h-100 bg-black rounded-2xl flex items-center justify-center shadow-lg border border-gray-800"
                >
                  <Video className="w-16 h-16 text-white" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </GridBeams>

      <section className="py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Register / Join Society",
                icon: Users,
                color: "text-blue-400",
              },
              {
                step: "2",
                title: "Browse Services",
                icon: ShoppingCart,
                color: "text-green-400",
              },
              {
                step: "3",
                title: "Choose Vendor & Schedule",
                icon: Clock,
                color: "text-yellow-400",
              },
              {
                step: "4",
                title: "Track Real-Time Updates",
                icon: Shield,
                color: "text-purple-400",
              },
              {
                step: "5",
                title: "Pay Securely & Share Feedback",
                icon: Star,
                color: "text-pink-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-neutral-800 border-2 border-gray-700 flex items-center justify-center mb-4`}
                  >
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400/90 to-emerald-800/90 flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <div className="w-full h-1 bg-gray-800 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-full bg-gradient-to-r from-emerald-400/90 to-emerald-800/90 rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="font-mono mt-9 mb-15 text-3xl md:text-5xl lg:text-4xl font-extrabold text-center text-white z-10">
          Key Benefits
        </div>
        <div className="flex flex-col  gap-16">
          <div className="flex flex-row items-center gap-16 px-24">
            <WobbleCard containerClassName=" bg-emerald-900/90 min-h-[40px] lg:min-h-[300px] ">
              <div>
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  For Residents
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  <ul>
                    <li> • Convenient booking for all car services</li>
                    <li> • Transparent pricing and trusted providers</li>
                    <li> • Time-saving with scheduled and tracked services</li>
                    <li> • Hassle-free secure payments and receipts</li>
                  </ul>
                </p>
              </div>
            </WobbleCard>
            <WobbleCard containerClassName=" bg-[#005099] min-h-[40px] lg:min-h-[300px] ">
              <div>
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  For Vendors
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  <ul>
                    <li> • Verified leads from trusted communities</li>
                    <li> • Guaranteed, timely digital payments</li>
                    <li> • Opportunity to upsell services and accessories</li>
                    <li> • Reputation growth within residential societies</li>
                  </ul>
                </p>
              </div>
            </WobbleCard>
          </div>
        </div>
      </section>
       <section >
                <div className="font-mono mt-9 mb-15 text-3xl md:text-5xl lg:text-4xl font-extrabold text-center text-white z-10">
          What Our Users Say
        </div>
         <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                className="mb-20"
              />
      </section>
      <section className="w-full bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-950 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Bring Society Cars to Your Community
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Join us in redefining auto care with trust, transparency, and
            convenience for every resident.
          </p>
          <button className="px-6 py-3 rounded-2xl bg-white text-black font-semibold shadow-md hover:scale-105 transition">
            Contact Us
          </button>
        </div>
      </section>
     
      <Footer/>
    </div>
  );
}
