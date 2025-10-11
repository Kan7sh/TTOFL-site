import Footer from "@/components/ui/footer";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import { Input } from "@/components/ui/input";
import { InteractiveHoverButton } from "@/components/ui/interactiveHoverButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import career1 from "@/assets/images/CR1.png";
import { Label } from "@radix-ui/react-label";

export default function CareersPage() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-neutral-950">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
      <GlassmorphNavBar />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="flex flex-col  items-center justify-center absolute top-50 gap-5">
        <div className="flex flex-row-reverse items-center gap-20">
          <div className="flex flex-col gap-5">
            <div className="text-2xl md:text-3xl lg:text-4xl w-160 font-extrabold  text-white z-100">
                Want to Join our creative team? 
            </div>
            <Input
              type="Name"
              placeholder="Name"
              className="bg-neutral-800 h-12 w-140 border-gray-500"
            />

            <Input
              type="email"
              placeholder="Email"
              className="bg-neutral-800 h-12 w-140 border-gray-500"
            />
            <div>
              <Label htmlFor="picture" className="text-[#7e7e7f]">Resume</Label>
              <Input
                id="picture"
                type="file"
                className="bg-neutral-800 w-140 border-gray-500 justify-center text-[#7e7e7f] align-centerself center"
              />
            </div>

            <InteractiveHoverButton className="w-140 rounded-xl h-10 bg-emerald-400/90 border-none text-white ">
              Sumbit
            </InteractiveHoverButton>
          </div>
          <img
            src={career1.src}
            width={650}
            alt="linear demo image"
            className="rounded-2xl"
          />
        </div>

        <div className="w-full mt-15">
          <Footer />
        </div>
      </div>
    </div>
  );
}
