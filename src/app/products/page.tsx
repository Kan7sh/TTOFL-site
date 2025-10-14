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
import productSocietyCars1 from "@/assets/images/PSC1.png";
import productSocietyCars2 from "@/assets/images/PSC2.png";
import productSocietyCars3 from "@/assets/images/PSC3.png";
import productSocietyCars4 from "@/assets/images/PSC4.png";
import productCardImg1 from "@/assets/images/PC1.png";
import productCardImg2 from "@/assets/images/PC2.png";
import societyCarsBanner from "@/assets/images/SCM1.png";
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

export default function ProductsPage() {
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
          className="w-35 h-35"
        />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-gray-300">{label}</p>
      </div>
    </div>
  );

  return (
    <div className="relative w-full min-h-screen bg-neutral-950 text-white">
      <GlassmorphNavBar selectedTab={"products"} />

      <GridBeams className="w-full min-h-screen flex flex-col">
        <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-black to-transparent  z-10" />

        <div className="flex-1 flex items-center justify-center px-6 ">
          <div className="max-w-6xl min-h-screen  mx-auto text-center pt-32">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-12">
              <img
                src={societyCarsLogo.src}
                width={130}
                alt="Society Cars Logo"
                className="rounded-2xl"
              />
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                  SOCIETY CARS
                </h1>
                <p className="text-lg md:text-xl max-w-3xl">
                  One-Stop Auto Care Platform for Residential Communities
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-left">
                <h2 className="text-3xl font-bold mb-6">
                  See Society Cars in Action
                </h2>
                <p className="text-lg mb-6">
                  Watch how Society Cars transforms everyday automobile services
                  within residential communities - from booking to fulfillment.
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
                <img
                  src={societyCarsBanner.src}
                  alt="Society Cars Banner"
                />
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="aspect-video h-100 bg-black rounded-2xl flex items-center justify-center shadow-lg border border-gray-800"
                >
                  <Video className="w-16 h-16 text-white" />
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </GridBeams>

      <section className="py-20 px-6 bg-gradient-to-b from-[#000000] via-neutral-800 to-[#00000000] text-white -mt-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-8"
          >
            Why Society Cars?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-lg text-gray-300 mb-16 max-w-4xl mx-auto"
          >
            Unlike fragmented apps offering only a single service, Society Cars
            provides a complete ecosystem for residents and societies. From
            daily car cleaning to service bookings and payment tracking, we
            bring all automobile services under one roof with transparency and
            trust.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Verified Vendors",
                description:
                  "Society-approved service providers with secure validation processes.",
                color: "text-blue-400",
                bgColor: "bg-blue-500/10",
                img: productSocietyCars1,
              },
              {
                icon: ShoppingCart,
                title: "One-Stop Platform",
                description:
                  "Car wash, maintenance, repairs, and advertisements — all in one application.",
                color: "text-green-400",
                bgColor: "bg-green-500/10",
                img: productSocietyCars2,
              },
              {
                icon: Shield,
                title: "Transparent Process",
                description:
                  "Track schedules, payments, and service history with complete clarity.",
                color: "text-yellow-400",
                bgColor: "bg-yellow-500/10",
                img: productSocietyCars3,
              },
              {
                icon: ShoppingCart,
                title: "Secure Payments",
                description:
                  "Seamless digital transactions with no delays or withheld amounts.",
                color: "text-red-400",
                bgColor: "bg-red-500/10",
                img: productSocietyCars4,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#434343] rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  loading="lazy"
                  className="rounded-2xl w-60 mb-4 mx-auto"
                  alt="Invite background"
                  src={feature.img.src}
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                    opacity: 1,
                  }}
                />
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className=" mt-9 mb-15 text-3xl md:text-5xl lg:text-4xl font-extrabold text-center text-white z-10">
          Key Benefits
        </div>
        <div className="flex flex-col  gap-16">
          <div className="flex flex-col lg:flex-row items-center gap-16 px-8 lg:px-24">
            <WobbleCard containerClassName=" bg-emerald-900/90 lg:h-90">
              <div className="flex flex-col-reverse gap-3 items-center  lg:flex-row">
                <div>
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    For Residents
                  </h2>
                  <p className="mt-4 text-left lg:text-md text-neutral-200">
                    <ul>
                      <li> • Convenient booking for all car services</li>
                      <li> • Transparent pricing and trusted providers</li>
                      <li>
                        {" "}
                        • Time-saving with scheduled and tracked services
                      </li>
                      <li> • Hassle-free secure payments and receipts</li>
                    </ul>
                  </p>
                </div>
                <img
                  loading="lazy"
                  className="rounded-2xl w-50 h-50 object-cover mb-4 mx-auto"
                  alt="Invite background"
                  src={productCardImg1.src}
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                    opacity: 1,
                  }}
                />
              </div>
            </WobbleCard>
            <WobbleCard containerClassName=" bg-[#005099] lg:h-90">
              <div className="flex flex-col-reverse gap-3 items-center  lg:flex-row">
                <div>
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    For Vendors
                  </h2>
                  <p className="mt-4 text-left  lg:text-md text-neutral-200">
                    <ul>
                      <li> • Verified leads from trusted communities</li>
                      <li> • Guaranteed, timely digital payments</li>
                      <li> • Opportunity to upsell services and accessories</li>
                      <li> • Reputation growth within residential societies</li>
                    </ul>
                  </p>
                </div>
                <img
                  loading="lazy"
                  className="rounded-2xl w-50 h-50 object-cover mb-4 mx-auto"
                  alt="Invite background"
                  src={productCardImg2.src}
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                    opacity: 1,
                  }}
                />
              </div>
            </WobbleCard>
          </div>
        </div>
      </section>
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
                title: "Register & Join Society",
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
                title: "Track Realtime updates",
                icon: Shield,
                color: "text-purple-400",
              },
              {
                step: "5",
                title: "Secure & Share Feedback",
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
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400/90 to-emerald-800/90 flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {item.step}
                  </div>
                </div>
                <h3 className="text-md font-semibold mb-2">{item.title}</h3>
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

      <section>
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
          <Link href="/contact">
            <button className="px-6 py-3 rounded-2xl bg-white text-black font-semibold shadow-md hover:scale-105 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
