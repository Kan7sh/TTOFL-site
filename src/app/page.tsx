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
    <div className="relative w-full min-h-screen bg-fuchsia-200">
      <GlassmorphNavBar />
      <main className="p-6"></main>
    </div>
  );
}
