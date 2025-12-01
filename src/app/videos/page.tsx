import Footer from "@/components/ui/footer";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";
import Image from "next/image";
import societyCarsLogo from "@/assets/images/SC1C.png";

export default function VideosPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-neutral-950">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-neutral-950"></div>

      <GlassmorphNavBar />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="flex flex-col w-full items-center justify-center absolute top-28 md:top-40 gap-5 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl items-center justify-between">
          <div className="flex-1">
            <video
              src="/videos/society_cars_demo.mp4"
              controls
              autoPlay
              loop
              muted
              playsInline
              className=" h-130 rounded-2xl ml-30"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-2 flex-col gap-5 text-white">
            <Image
              src={societyCarsLogo}
              alt="App Logo"
              width={120}
              height={120}
              className="self-start"
            />

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Society Car at action
            </h1>

            <p className="text-neutral-300 text-lg leading-relaxed max-w-lg">
              Society Cars is an automobile service app that provides various
              services such as car cleaning, pit stop service, driver hiring,
              vehicle rentals, car repairs, and more
            </p>
          </div>
        </div>

        <div className="w-[99vw] mt-8 md:mt-12">
          <Footer bgColor="#0a0a0a" />
        </div>
      </div>
    </div>
  );
}
