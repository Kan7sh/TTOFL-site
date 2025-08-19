import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import { Yellowtail, Crimson_Text } from "next/font/google";
import footerTtoflLogo from "@/assets/images/ttofl_logo_monogram.png";
import satellite from "@/assets/images/Satellite.png";
import Image from "next/image";
const yellowtail = Yellowtail({
  variable: "--font-yellowt",
  weight: "400",
  subsets: ["latin"],
});
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const crimsonText = Crimson_Text({
  variable: "--font-crimsont",
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  const columns = 12;
  const gradients: string[] = [
    "linear-gradient(180deg, #000000, #000000, #000000, #ad056a )",
    "linear-gradient(180deg, #000000, #000000, #000000,  #912365, #fa2ba7)",
    "linear-gradient(180deg, #000000, #000000, #000000,  #912365, #fa2ba7)",
    "linear-gradient(180deg, #000000, #000000, #000000,  #912365, #fa2ba7, #fa2ba7, #fa2ba7)",
    "linear-gradient(180deg, #000000, #000000, #000000,  #912365, #fa2ba7)",
    "linear-gradient(180deg, #000000, #000000, #000000,  #912365, #fa2ba7, #fa2ba7)",
    "linear-gradient(180deg, #000000, #000000, #000000,  #912365, #fa2ba7)",
    "linear-gradient(180deg, #000000, #000000, #000000,  #912365, #fa2ba7,#fa2ba7, #fa2ba7)",
    "linear-gradient(180deg, #000000, #000000, #000000, #000000, #000000, #912365,#fa2ba7, #fa2ba7,#fa2ba7, #fa2ba7)",
    "linear-gradient(180deg, #000000, #000000, #000000, #000000, #000000, #000000,  #912365,#fa2ba7, #fa2ba7,#fa2ba7, #fa2ba7)",
    "linear-gradient(180deg, #000000, #000000, #000000,  #ad056a )",
    "linear-gradient(180deg, #000000, #000000, #000000, #ad056a )",
    "linear-gradient(180deg, #000000, #000000, #000000, #fa2ba7 )",
  ];

  const items = Array.from({ length: Math.max(1, columns) });

  return (
    <div className="relative w-full flex flex-col">
      <section className="relative w-full min-h-screen flex flex-col">
        <div className="absolute inset-0 flex h-full w-full -z-10">
          {items.map((_, index) => {
            return (
              <div
                key={index}
                className=" relative h-full flex-1"
                style={{
                  backgroundImage: gradients[index % gradients.length],
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  boxShadow:
                    "inset -40px 0 80px rgba(0,0,0,0.9), inset 3px 0 3px rgba(255,255,255,0.1)",
                }}
              />
            );
          })}
        </div>
        <header>
          <GlassmorphNavBar />
        </header>
        <div className="flex flex-col gap-5 items-start justify-center h-screen z-10 relative">
          <div className="flex justify-between w-full">
            <div className="p-18 flex flex-col items-start gap-4">
              <div
                className={`text-6xl md:text:8xl font-extrabold text-white drop-shadow-lg flex flex-row`}
              >
                <div className={`${crimsonText.className} text-7xl`}>
                  LAUNCHING
                </div>
                <div className={`${yellowtail.className} px-3 text-7xl`}>
                  SOON
                </div>
              </div>
              <div className="w-150 text-start font-mono">
                Tech made simple, innovation made accessible. At TTOFL, we're
                here to ensure technology works seamlessly for you, your
                enterprise, and your community
              </div>
              <button
                className="px-12 py-3 justify-self-center rounded-full text-black font-semibold shadow-lg hover:scale-105 duration-300 transform transition-transform"
                style={{
                  background:
                    "linear-gradient(to bottom, #ffffff,rgb(143, 143, 143))",
                }}
              >
                <div className="text-md">Learn More</div>
              </button>
            </div>
            <Image
              src={satellite}
              alt={"satellite"}
              className="w-110 h-80 py-6"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-950 text-white z-10 flex flex-col justify-center">
        <div className="flex flex-row justify-between items-center px-8 py-6">
          {/* Left Section */}
          <div className="flex flex-col items-start">
            <div className={`text-6xl font-bold font-mono `}>BUILD FOR</div>
            <p className="font-mono text-black text-9xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              2040
            </p>
          </div>

          {/* Center Section */}

          {/* Right Section - Contact */}
          <div className="flex flex-col items-start gap-3 text-sm">
            {/* Social Icons */}
            <div className="flex flex-row gap-8 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={30}
                  className="hover:text-pink-500 transition-colors"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter
                  size={30}
                  className="hover:text-pink-500 transition-colors"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={30}
                  className="hover:text-pink-500 transition-colors"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={30}
                  className="hover:text-pink-500 transition-colors"
                />
              </a>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center items-center font-mono gap-1.5">
            <Image src={footerTtoflLogo} alt={"logo"} className="w-18" />
            <div className="text-[12px]">Empowering the future</div>
            <div className="text-[12px]">© 2025 TTOFL. All rights reserved</div>
          </div>
        </div>
      </section>
    </div>
  );
}
