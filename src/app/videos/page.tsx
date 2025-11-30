import Footer from "@/components/ui/footer";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";

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
      <div className="flex flex-col w-full items-center justify-center absolute top-30  md:top-50 gap-5 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 w-full max-w-7xl">
          <div></div>
          <div></div>
        </div>

        <div className="w-[99vw] mt-8 md:mt-15">
          <Footer bgColor="#0a0a0a" />
        </div>
      </div>
    </div>
  );
}
