import Footer from "@/components/ui/footer";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import { Input } from "@/components/ui/input";
import { InteractiveHoverButton } from "@/components/ui/interactiveHoverButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { Textarea } from "@/components/ui/textarea";
import contact1 from "@/assets/images/CU1.png";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-neutral-950">
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
      <div className="flex flex-col w-full items-center justify-center absolute top-30  md:top-50 gap-5 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-20 w-full max-w-7xl">
          <div className="flex flex-col gap-5 w-full lg:w-auto">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl w-full lg:w-160 font-extrabold text-white z-100">
              Got an idea, feedback, or just want to say hi? Our inbox is always
              open
            </div>
            <Input
              type="Name"
              placeholder="Name"
              className="bg-neutral-800 h-12 w-full lg:w-140 border-gray-500"
            />

            <Input
              type="email"
              placeholder="Email"
              className="bg-neutral-800 h-12 w-full lg:w-140 border-gray-500"
            />
            <Textarea
              placeholder="Type your message here."
              className="bg-neutral-800 h-30 w-full lg:w-140 border-gray-500"
            />
            <InteractiveHoverButton className="w-full lg:w-140 rounded-xl h-10 bg-emerald-400/90 border-none text-white">
              Get In Touch
            </InteractiveHoverButton>
          </div>
          <img
            src={contact1.src}
            width={650}
            alt="linear demo image"
            className="grayscale rounded-2xl w-full lg:w-auto max-w-2xl mx-auto lg:mx-0"
          />
        </div>

        <div className="w-full mt-8 md:mt-15">
          <Footer />
        </div>
      </div>
    </div>
  );
}
