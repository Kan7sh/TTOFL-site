import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import { GridBeams } from "@/components/ui/gridBeans";
import societyCarsLogo from "@/assets/images/SC1.png";
import { motion } from "framer-motion";
import { Video } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-neutral-950 text-white">
      <GlassmorphNavBar />
      <GridBeams
        className="w-screen h-screen flex flex-col "
        backgroundColor="bg-[#005099]"
      >
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 text-6xl font-extrabold">
          <div className="flex row justify-center items-center">
            <img
              src={societyCarsLogo.src}
              width={150}
              alt="linear demo image"
              className="rounded-2xl"
            />
            <div className="flex flex-col items-start">
              <div>SOCIETY CARS</div>
              <div className="max-w-3xl mt-2 text-base md:text-lg lg:text-lg   z-10">
                One-Stop Auto Care Platform for Residential Communities
              </div>
            </div>
          </div>
        </div>
      </GridBeams>
    </div>
  );
}
