"use client";

import Footer from "@/components/ui/footer";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import { LineShadowText } from "@/components/ui/lineShadowText";
import { Spotlight } from "@/components/ui/Spotlight";
import { WobbleCard } from "@/components/ui/wobble-card";
import { cn } from "@/lib/utils";
import about1 from "@/assets/images/A1.png";
import about2 from "@/assets/images/A2.png";
import aboudCard1 from "@/assets/images/AC1.png";
import aboudCard2 from "@/assets/images/AC2.png";
import aboudCard3 from "@/assets/images/AC3.png";
import aboudCard4 from "@/assets/images/AC4.png";

import { InteractiveHoverButton } from "@/components/ui/interactiveHoverButton";
import { CometCard } from "@/components/ui/comet-card";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-t from-[#020303] to-transparent">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
      <GlassmorphNavBar />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="flex flex-col w-full items-center justify-center absolute top-24 md:top-40 px-4">
        <div className="top-32 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-center text-white z-10 px-4">
          ABOUT US
        </div>
        <div className="max-w-3xl text-center mt-2 text-sm sm:text-base md:text-lg lg:text-2xl text-emerald-400/90 z-10 px-5">
          Technology with Purpose, Innovation with Impact
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center p-6 md:p-14 w-full max-w-7xl">
          <div className="text-base sm:text-lg md:text-xl w-full md:w-180 text-justify text-white/80 order-2 md:order-1">
            At TTOFL, we believe technology and innovation are not just tools,
            they are pathways to progress. Our mission is to create platforms
            that solve real-world challenges, empower graduates, support
            businesses, and deliver meaningful impact across key industries.
            We're building solutions at the intersection of technology,
            sustainability, and social good, focusing on Agriculture,
            Healthcare, Education, and Auto Care. Each initiative is designed to
            improve lives, generate employment, and create long-term value for
            communities.
          </div>
          <img
            src={about1.src}
            width={480}
            alt="linear demo image"
            className="rounded-2xl w-full md:w-auto max-w-md order-1 md:order-2"
          />
        </div>
        <div className="bg-gradient-to-t from-[#020303] to-transparent flex flex-col p-6 md:p-12 w-full">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-center text-white z-10 px-4">
            Our Story
          </div>
          <div className="text-base sm:text-lg md:text-xl text-white/80 w-full max-w-5xl mx-auto text-center mt-6 px-4">
            TTOFL was founded with a vision: to bridge gaps in critical sectors
            where technology can make a difference. We saw opportunities to
            empower skilled graduates, improve livelihoods for farmers, bring
            transparency to healthcare, and make education more accessible. From
            ideation to execution, our journey has always been about one thing,
            building human-centered innovation.
          </div>
        </div>
        <section className="py-8 px-4 md:px-6 lg:px-10 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-2 text-center text-emerald-400/90 px-4">
            Our Areas of Focus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 px-7">
            <CometCard>
              <button
                type="button"
                className="my-6 md:my-10 flex h-auto md:h-120 w-full sm:w-80 cursor-pointer flex-col rounded-[16px] border-0 bg-[#1F2121] p-3 md:p-4"
                aria-label="View invite F7RA"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div className="mx-2">
                  <div className="text-lg sm:text-xl font-bold text-emerald-400/90 text-center mb-4">
                    AGRICULTURE
                  </div>

                  <div className="relative w-full h-40 sm:h-48 mb-4">
                    <img
                      loading="lazy"
                      className="absolute inset-0 rounded-[16px] bg-[#000000] object-cover w-full h-full"
                      alt="Invite background"
                      src={aboudCard1.src}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-shrink-0 items-start p-3 md:p-4 text-white">
                  <div className="text-sm sm:text-md text-justify">
                    Agriculture Connecting fresh agri-graduates with farmers to
                    boost productivity, promote organic farming, and streamline
                    logistics — creating jobs while improving farmer incomes.
                  </div>
                </div>
              </button>
            </CometCard>
            <CometCard>
              <button
                type="button"
                className="my-6 md:my-10 flex h-auto md:h-120 w-full sm:w-80 cursor-pointer flex-col rounded-[16px] border-0 bg-[#1F2121] p-3 md:p-4"
                aria-label="View invite F7RA"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div className="mx-2">
                  <div className="text-lg sm:text-xl font-bold text-emerald-400/90 text-center mb-4">
                    MEDICINE
                  </div>

                  <div className="relative w-full h-40 sm:h-48 mb-4">
                    <img
                      loading="lazy"
                      className="absolute inset-0 rounded-[16px] bg-[#000000] object-cover w-full h-full"
                      alt="Invite background"
                      src={aboudCard2.src}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-shrink-0 items-start p-3 md:p-4 text-white">
                  <div className="text-sm sm:text-md text-justify">
                    A medicine review & feedback platform that gathers
                    real-world insights from patients and doctors, empowering
                    companies and creating opportunities for pharmacy graduates.
                  </div>
                </div>
              </button>
            </CometCard>
            <CometCard>
              <button
                type="button"
                className="my-6 md:my-10 h-auto md:h-120 flex w-full sm:w-80 cursor-pointer flex-col rounded-[16px] border-0 bg-[#1F2121] p-3 md:p-4"
                aria-label="View invite F7RA"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div className="mx-2">
                  <div className="text-lg sm:text-xl font-bold text-emerald-400/90 text-center mb-4">
                    EDUCATION
                  </div>

                  <div className="relative w-full h-40 sm:h-48 mb-4">
                    <img
                      loading="lazy"
                      className="absolute inset-0 rounded-[16px] bg-[#000000] object-cover w-full h-full"
                      alt="Invite background"
                      src={aboudCard3.src}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-shrink-0 items-start p-3 md:p-4 text-white">
                  <div className="text-sm sm:text-md text-justify">
                    A unified platform delivering affordable, high-quality
                    technology training for Tier 3 students, bridging the gap
                    between academics and employability.
                  </div>
                </div>
              </button>
            </CometCard>
            <CometCard>
              <button
                type="button"
                className="my-6 md:my-10 flex w-full sm:w-80 h-auto md:h-120 cursor-pointer flex-col rounded-[16px] border-0 bg-[#1F2121] p-3 md:p-4"
                aria-label="View invite F7RA"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div className="mx-2">
                  <div className="text-lg sm:text-xl font-bold text-emerald-400/90 text-center mb-4">
                    AUTOMOBILE
                  </div>

                  <div className="relative w-full h-40 sm:h-48 mb-4">
                    <img
                      loading="lazy"
                      className="absolute inset-0 rounded-[16px] bg-[#000000] object-cover w-full h-full"
                      alt="Invite background"
                      src={aboudCard4.src}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-shrink-0 items-start p-3 md:p-4 text-white">
                  <div className="text-sm sm:text-md text-justify">
                    Automobile – Society Cars: a one-stop automobile service
                    platform for residential communities, offering trusted,
                    verified vendors, simplified car care in a single
                    application.
                  </div>
                </div>
              </button>
            </CometCard>
          </div>
        </section>

        <div className="mt-9 mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-center text-white z-10 px-4">
          What Drives Us?
        </div>
        <div className="py-6 md:py-10 w-full">
          <div className="flex flex-col gap-8 md:gap-16">
            <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-16 px-4 md:px-12 lg:px-24">
              <WobbleCard containerClassName="bg-emerald-900/90 min-h-[200px] lg:min-h-[300px] w-full">
                <div>
                  <h2 className="text-left text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Innovation with Purpose
                  </h2>
                  <p className="mt-4 text-left text-sm sm:text-base text-neutral-200">
                    We don't innovate for innovation's sake. We explore smart,
                    user-centered solutions that solve problems, and that fit
                    into people's lives in intuitive ways.
                  </p>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName="bg-[#a82673] min-h-[200px] lg:min-h-[300px] w-full">
                <div>
                  <h2 className="text-left text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Commitment to Quality
                  </h2>
                  <p className="mt-4 text-left text-sm sm:text-base text-neutral-200">
                    From design to deployment, we obsess over detail. Usability,
                    performance, reliability, we hold ourselves to high
                    standards so our users can depend on us.
                  </p>
                </div>
              </WobbleCard>
            </div>
            <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-16 px-4 md:px-12 lg:px-24">
              <WobbleCard containerClassName="bg-[#005099] min-h-[200px] lg:min-h-[300px] flex-1 w-full">
                <div>
                  <h2 className="text-left text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Values-First Culture
                  </h2>
                  <p className="mt-4 text-left text-sm sm:text-base text-neutral-200">
                    Integrity. Empathy. Transparency. Innovation. These aren't
                    just some fancy words. Its our commitment. They guide how we
                    build, collaborate, and grow.
                  </p>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName="bg-[#b19011] min-h-[200px] lg:min-h-[300px] flex-1 w-full">
                <div>
                  <h2 className="text-left text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Continuous Learning
                  </h2>
                  <p className="mt-4 text-left text-sm sm:text-base text-neutral-200">
                    We stay curious. We listen to our users, study trends,
                    embrace feedback, and iterate quickly. Because the future
                    moves fast and so do we.
                  </p>
                </div>
              </WobbleCard>
            </div>
          </div>
          <div className="py-8 md:py-16 px-4 md:px-6 lg:px-20">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-center text-white z-10 px-4">
              Why Partner with Us?
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center mt-6 p-4 md:p-14 w-full max-w-7xl mx-auto">
              <img
                src={about2.src}
                width={480}
                alt="linear demo image"
                className="rounded-2xl w-full md:w-auto max-w-md"
              />
              <div className="text-base sm:text-lg md:text-xl text-white/80 w-full md:w-180 text-justify mt-6">
                If you're: A community leader, educator, or health professional
                wanting better tools to serve people A business seeking
                tech-driven solutions aligned with social good An investor or
                stakeholder interested in meaningful innovation Then we'd love
                to work with you. We're open to partnerships, collaborations,
                and co-creating solutions. Together, we can build smarter, more
                compassionate, more accessible products.
              </div>
            </div>
          </div>
          <div className="flex flex-col p-6 md:p-10 items-center gap-6 md:gap-8 px-4">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-center text-white z-10">
              Looking Forward
            </div>
            <div className="text-base sm:text-lg md:text-xl text-white/80 w-full max-w-5xl text-center mt-6 px-4">
              The road ahead is exciting. We plan to deepen our impact in
              existing sectors, explore new domains, and continuously evolve our
              offerings. More importantly, we're committed to staying true to
              our values, grounded in user needs, and ambitious enough to
              imagine better futures. We invite you to join us: whether as a
              user, partner, collaborator, or supporter. Let's reimagine what's
              possible. Together.
            </div>
            <InteractiveHoverButton className="w-full sm:w-60 md:w-140 rounded-xl h-11 mt-2 bg-emerald-400/90 border-none text-white">
              Join Us
            </InteractiveHoverButton>
          </div>
          <div className="w-full mt-8 md:mt-15">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
