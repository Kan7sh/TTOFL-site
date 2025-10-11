"use client";

import { useState } from "react";
import Footer from "@/components/ui/footer";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import { Input } from "@/components/ui/input";
import { InteractiveHoverButton } from "@/components/ui/interactiveHoverButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { Textarea } from "@/components/ui/textarea";
import contact1 from "@/assets/images/CU1.png";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 w-full max-w-7xl">
          
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full lg:w-auto"
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl w-full lg:w-160 font-extrabold text-white z-100">
              Got an idea, feedback, or just want to say hi? Our inbox is always
              open
            </div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-neutral-800 h-12 w-full lg:w-140 border-gray-500"
            />

            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-neutral-800 h-12 w-full lg:w-140 border-gray-500"
            />
            <Textarea
              name="message"
              placeholder="Type your message here."
              value={formData.message}
              onChange={handleInputChange}
              required
              className="bg-neutral-800 h-30 w-full lg:w-140 border-gray-500"
            />

            {submitStatus.message && (
              <div
                className={`p-3 rounded-lg text-sm ${
                  submitStatus.type === "success"
                    ? "bg-emerald-900/50 text-emerald-300 border border-emerald-500 w-full lg:w-140"
                    : "bg-red-900/50 text-red-300 border border-red-500 w-full lg:w-140"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <InteractiveHoverButton
              type="submit"
              disabled={isSubmitting}
              className="w-full lg:w-140 rounded-xl h-10 bg-emerald-400/90 border-none text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Get In Touch"}
            </InteractiveHoverButton>
          </form>
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
