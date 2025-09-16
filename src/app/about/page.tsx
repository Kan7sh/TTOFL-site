"use client";

import Footer from "@/components/ui/footer";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import { LineShadowText } from "@/components/ui/lineShadowText";
import { Spotlight } from "@/components/ui/Spotlight";
import { WobbleCard } from "@/components/ui/wobble-card";
import { cn } from "@/lib/utils";

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
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <GlassmorphNavBar />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="flex flex-col items-center justify-center absolute top-40">
        <div className="font-mono top-32 text-4xl md:text-5xl lg:text-7xl font-extrabold text-center text-black dark:text-white z-10">
          ABOUT US
        </div>
        <div className="max-w-3xl text-center mt-6 text-base md:text-lg lg:text-md  text-black dark:text-white z-10 px-5">
          TTOFL is a values-driven company pioneering innovation and excellence
          in mobile applications. Our focus spans auto care, education, and
          healthcare, all geared toward enhancing society. Join us on this
          transformative journey
        </div>
        <div className="text-emerald-400/90 text-3xl text-center font-mono font-extrabold drop-shadow-lg mt-10 w-300">
          WELCOME TO THE TEAM OF FUTURE LEARNING (TTOFL)
        </div>
        <div className="text-[#767676] font-mono pb-10">
          Learn more | Grow more | Spread more
        </div>

        <div className="font-mono mt-9 text-4xl md:text-5xl lg:text-4xl font-bold text-center text-black dark:text-white z-10">
          Why Choose Us?
        </div>
        <div className="p-10">
          <div className="flex flex-col gap-20">
            <div className="flex flex-row items-center gap-20 px-10">
              <WobbleCard containerClassName=" bg-emerald-900/90 min-h-[40px] lg:min-h-[300px] ">
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    For Innovation & Discovery
                  </h2>
                  <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    • Explore the Future of Smart Solutions <br />• See What's
                    Next in Tech-Driven Impact <br />• Discover The Gaps We're
                    Closing
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
                    For Product Engagement
                  </h2>
                  <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                      • Try Our Mobile First Experience now <br />• Browse our
                      Intelligent tools <br />• Experience Innovation in Action
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
            <div className="flex flex-row items-center gap-10 px-10">
              <WobbleCard containerClassName=" bg-[#005099] min-h-[40px] lg:min-h-[300px] flex-1">
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    For Thought Leadership
                  </h2>
                  <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    • Join the movement to Rethink the Industries <br />• Be the
                    Part of the Disruption <br />• Shape the Future with Us
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
                    For Business Leads
                  </h2>
                  <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    • Partner with Us to solve the real world problems <br />•
                    Lets Build Smarter Together <br />• Request a Demo.
                    Reimagine Possibilites
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
