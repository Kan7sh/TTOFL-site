"use client";

import { useState } from "react";
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
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    resume: File | null;
  }>({
    name: "",
    email: "",
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e:any) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        setSubmitStatus({
          type: "error",
          message: "Please upload a PDF or Word document.",
        });
        e.target.value = "";
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus({
          type: "error",
          message: "File size must be less than 5MB.",
        });
        e.target.value = "";
        return;
      }

      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
      setSubmitStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.resume) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields and upload your resume.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      // Create FormData to send file
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("resume", formData.resume);

      const response = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Application submitted successfully! We'll review your resume and get back to you soon.",
        });
        setFormData({ name: "", email: "", resume: null });
        // Reset file input
        const fileInput = document.getElementById("picture") as HTMLInputElement | null;
        if (fileInput) fileInput.value = "";
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.error || "Failed to submit application. Please try again.",
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
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
      <GlassmorphNavBar />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="flex flex-col w-full items-center justify-center absolute top-30  md:top-50 gap-5 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 w-full max-w-7xl">
          <div className="flex flex-col gap-5 w-full lg:w-auto">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl w-full lg:w-160 font-extrabold text-white z-100">
              Want to Join our creative team?
            </div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-neutral-800 h-12 w-full lg:w-140 border-gray-500"
            />

            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-neutral-800 h-12 w-full lg:w-140 border-gray-500"
            />
            <div>
              <Label htmlFor="picture" className="text-[#7e7e7f]">
                Resume (PDF or Word, max 5MB)
              </Label>
              <Input
                id="picture"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="bg-neutral-800 w-full lg:w-140 border-gray-500 justify-center text-[#7e7e7f] align-centerself center"
              />
              {formData.resume && (
                <p className="text-emerald-400 text-sm mt-2">
                  ✓ {formData.resume.name}
                </p>
              )}
            </div>

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
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full lg:w-140 rounded-xl h-10 bg-emerald-400/90 border-none text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </InteractiveHoverButton>
          </div>
          <img
            src={career1.src}
            width={650}
            alt="linear demo image"
            className="rounded-2xl w-full lg:w-auto max-w-2xl mx-auto lg:mx-0"
          />
        </div>

        <div className="mt-8 md:mt-15 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
