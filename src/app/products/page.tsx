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
  CheckCircle,
  Star,
} from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="relative w-full min-h-screen bg-neutral-950 text-white">
      <GlassmorphNavBar />

      {/* Hero Section */}
      <GridBeams
        className="w-full min-h-screen flex flex-col"
        backgroundColor="#020412"
      >
        <div className="flex-1 flex items-center justify-center px-6 pt-40">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <img
                src={societyCarsLogo.src}
                width={150}
                alt="Society Cars Logo"
                className="rounded-2xl"
              />
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
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
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="aspect-video bg-black rounded-2xl flex items-center justify-center shadow-lg border border-gray-800"
                >
                  <Video className="w-16 h-16 text-white" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </GridBeams>

      {/* <section className="py-20 px-6 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Key Benefits
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold">For Residents</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Convenient booking for all car services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Transparent pricing and trusted providers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Time-saving with scheduled and tracked services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Hassle-free secure payments and receipts</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <ShoppingCart className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold">For Vendors</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Verified leads from trusted communities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Guaranteed, timely digital payments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Opportunity to upsell services and accessories</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Reputation growth within residential societies</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* How It Works Section */}
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
                    className={`w-16 h-16 mx-auto rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center mb-4`}
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

      {/* Additional CTA Section */}
      {/* <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Your Community's Auto Care?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Join thousands of residents and vendors already using Society Cars
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Get Started as Resident
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Join as Vendor
            </button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
