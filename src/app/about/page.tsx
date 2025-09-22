"use client";

import Footer from "@/components/ui/footer";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import { LineShadowText } from "@/components/ui/lineShadowText";
import { Spotlight } from "@/components/ui/Spotlight";
import { WobbleCard } from "@/components/ui/wobble-card";
import { cn } from "@/lib/utils";
import about1 from "@/assets/images/A1.png";
import { Card, CardContent } from "@/components/ui/card";
import { Car, GraduationCap, Leaf, Pill } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-neutral-950">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
      <GlassmorphNavBar />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="flex flex-col items-center justify-center absolute top-40">
        <div className="font-mono top-32 text-4xl md:text-5xl lg:text-7xl font-extrabold text-center text-white z-10">
          ABOUT US
        </div>
        <div className="max-w-3xl text-center mt-6 text-base md:text-lg lg:text-md  text-white z-10 px-5">
          Technology with Purpose. Innovation with Impact
        </div>
        {/* <div className="text-emerald-400/90 text-3xl text-center font-mono font-extrabold drop-shadow-lg mt-10 w-300">
            WELCOME TO THE TEAM OF FUTURE LEARNING (TTOFL)
          </div>
          <div className="text-[#767676] font-mono pb-10">
            Learn more | Grow more | Spread more
          </div> */}
        <div className="flex flex-row gap-10 justify-between items-center p-10">
          <div className="text-2xl w-150 text-justify">
            At TTOFL, we believe technology and innovation are not just tools.
            they are pathways to progress. Our mission is to create platforms
            that solve real-world challenges, empower graduates, support
            businesses, and deliver meaningful impact across key industries.
          </div>
          <img
            src={about1.src}
            width={450}
            alt="linear demo image"
            className="grayscale   rounded-2xl"
          />
        </div>
        <div className="flex flex-col p-10">
          <div className="font-mono top-32 text-4xl md:text-5xl lg:text-7xl font-extrabold text-center text-white z-10">
            Our Story
          </div>
          <div className="text-2xl w-250 text-center mt-6">
            TTOFL was founded with a vision: to bridge gaps in critical sectors where technology can make a difference. We saw opportunities to empower skilled graduates, improve livelihoods for farmers, bring transparency to healthcare, and make education more accessible. From ideation to execution, our journey has always been about one thing — building human-centered innovation.
          </div>
        </div>
          <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Areas of Focus</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-md border-1 ">
            <CardContent className="p-6 text-center">
              <Leaf className="w-10 h-10 mx-auto mb-4 text-green-600" />
              <h3 className="font-semibold text-xl mb-2">Agriculture</h3>
              <p className="text-sm">Connecting agri-graduates with farmers to promote organic farming, streamline logistics, and boost incomes.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 text-center">
              <Pill className="w-10 h-10 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold text-xl mb-2">Healthcare (B2B)</h3>
              <p className="text-sm">Medicine review & feedback platform delivering real-world insights for pharma companies and jobs for graduates.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 text-center">
              <GraduationCap className="w-10 h-10 mx-auto mb-4 text-yellow-600" />
              <h3 className="font-semibold text-xl mb-2">Education</h3>
              <p className="text-sm">EduBridgeX — affordable, unified training for Tier 3 students bridging academics and employability.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 text-center">
              <Car className="w-10 h-10 mx-auto mb-4 text-red-600" />
              <h3 className="font-semibold text-xl mb-2">Automobile</h3>
              <p className="text-sm">Society Cars — a one-stop auto service platform for communities, ensuring trusted vendors and simple car care.</p>
            </CardContent>
          </Card>
        </div>
      </section>

        <div className="font-mono mt-9 text-4xl md:text-5xl lg:text-4xl font-bold text-center text-white z-10">
          Why Choose Us?
        </div>
        <div className="py-10">
          <div className="flex flex-col h-screen gap-16">
            <div className="flex flex-row items-center gap-16 px-7">
              <WobbleCard containerClassName=" bg-emerald-900/90 min-h-[40px] lg:min-h-[300px] ">
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Innovation with Purpose
                  </h2>
                  <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    We explore smart, user-centered solutions that solve real
                    problems.
                  </p>
                </div>
                {/* <img
                src={card1.src}
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              /> */}
              </WobbleCard>
              <WobbleCard containerClassName=" bg-[#a82673] min-h-[40px] lg:min-h-[300px] ">
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Commitment to Quality
                  </h2>
                  <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                      From design to deployment, we obsess over usability and
                      reliability.
                    </p>
                  </p>
                </div>
                {/* <img
                src={card2.src}
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              /> */}
              </WobbleCard>
            </div>
            <div className="flex flex-row items-center gap-16 px-7">
              <WobbleCard containerClassName=" bg-[#005099] min-h-[40px] lg:min-h-[300px] flex-1">
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Values-First Culture
                  </h2>
                  <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    Integrity, empathy, and transparency guide everything we do.
                  </p>
                </div>
                {/* <img
                src={card3.src}
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              /> */}
              </WobbleCard>
              <WobbleCard containerClassName=" bg-[#b19011] min-h-[40px] lg:min-h-[300px] flex-1">
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Continuous Learning
                  </h2>
                  <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    We stay curious, listen to feedback, and adapt quickly.
                  </p>
                </div>
                {/* <img
                src={card3.src}
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              /> */}
              </WobbleCard>
            </div>
          </div>
          <div className="w-screen mt-15">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
