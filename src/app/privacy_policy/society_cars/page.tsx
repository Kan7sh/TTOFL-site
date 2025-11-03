"use client";

import { useState } from "react";
import Footer from "@/components/ui/footer";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import { Input } from "@/components/ui/input";
import { InteractiveHoverButton } from "@/components/ui/interactiveHoverButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { Textarea } from "@/components/ui/textarea";
import contact1 from "@/assets/images/CU1.png";
import societyCarsLogo from "@/assets/society_cars/SocietyCarsLogo.png";
import societyCarsBusinessLogo from "@/assets/society_cars/SocietyCarsBusinessLogo.png";
import { cn } from "@/lib/utils";

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function SocietyCarsPrivacyPolicy() {
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
    if (!validateEmail(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

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
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-neutral-950"></div>
      <GlassmorphNavBar />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="flex flex-col w-full items-center justify-center absolute top-30  md:top-50 gap-5 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 w-full max-w-7xl">
          <div className="flex flex-col gap-5 lg:w-auto">
            <div>
              <div className="text-lg text-[#ff8753]">Society Cars</div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl w-full lg:w-160 font-extrabold text-white z-100">
                Privacy Policy
              </div>
            </div>
            <div className="text-justify">
              TTOFL (“we”, “our”, “us”) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our website, SocietyCars
              mobile applications (“Customer App” and “Vendor App”), and other
              digital services.
            </div>
            By using our services, you agree to this Privacy Policy.
            <br />
            <div className="font-extrabold">1. Information We Collect</div>
            We may collect the following types of information:
            <br />
            <div className="font-bold">A. Personal Information</div>
            <ul className="list-disc list-inside text-white marker:text-white">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Address / Society name</li>
              <li>Vehicle details (model, number, photos)</li>
              <li>
                Vendor/Service provider information (business name, ID proof,
                profile details)
              </li>
            </ul>
            <div className="font-bold">B. Device & Access</div>
            Permissions With your permission, our apps may access:
            <table className="border border-white border-collapse w-full">
              <thead>
                <tr className="text-start font-bold border border-white">
                  <th className="text-start p-4 border border-white">
                    Permission
                  </th>
                  <th className="text-start border border-white p-4">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-start p-4 font-bold border border-white">
                    Camera
                  </td>
                  <td className="border border-white p-4">
                    Capture profile photo, vehicle photos, and verification
                    evidence
                  </td>
                </tr>
                <tr>
                  <td className="text-start p-4 font-bold border border-white">
                    Gallery/Photos
                  </td>
                  <td className="border border-white p-4">
                    Upload images for profile and vehicle
                  </td>
                </tr>
                <tr>
                  <td className="text-start p-4 font-bold border border-white">
                    Microphone
                  </td>
                  <td className="border border-white p-4">
                    Voice notes for request/service communication (if
                    applicable)
                  </td>
                </tr>
                <tr>
                  <td className="text-start p-4 font-bold border border-white">
                    Location (if requested in future updates)
                  </td>
                  <td className="border border-white p-4">
                    To verify service areas and assign vendors
                  </td>
                </tr>
                <tr>
                  <td className="text-start p-4 font-bold border border-white">
                    Push Notification
                  </td>
                  <td className="border border-white p-4">
                    Service updates, reminders, booking notifications
                  </td>
                </tr>
              </tbody>
            </table>
            We do not access these features without permission.
            <div className="font-bold">C. Usage Data</div>
            We automatically collect:
            <ul className="list-disc list-inside text-white marker:text-white">
              <li>Device information (model, OS, unique device ID)</li>
              <li>IP address</li>
              <li>App usage statistics</li>
              <li>Crash logs/analytics</li>
            </ul>
            <div className="font-bold">D. Cookies (Website Only)</div>
            We may use cookies to improve website experience.
            <div className="font-extrabold">2. How We Use Your Information</div>
            We use collected data to:
            <ul className="list-disc list-inside text-white marker:text-white">
              <li>Create and manage user accounts</li>
              <li>Enable subscription, booking, and vendor operations</li>
              <li>Process payments and manage billing</li>
              <li>Provide customer support</li>
              <li>
                Verify identity of users and vendorsVerify identity of users and
                vendors
              </li>
              <li>Operate, maintain, and improve our services</li>
              <li>Ensure community and platform safety</li>
              <li>Send service and transaction notifications</li>
              <li>Comply with legal obligations</li>
            </ul>
            We never sell personal data to advertisers or third parties.
            <div className="font-extrabold">3. How We Share Information</div>
            We may share your information with:
            <table className="border border-white border-collapse w-full">
              <thead>
                <tr className="text-start font-bold border border-white">
                  <th className="text-start p-4 border border-white">Type</th>
                  <th className="text-start border border-white p-4">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-start p-4 font-bold border border-white">
                    Vendors/Service Providers
                  </td>
                  <td className="border border-white p-4">
                    To fulfil service bookings
                  </td>
                </tr>
                <tr>
                  <td className="text-start p-4 font-bold border border-white">
                    Technology & Infrastructure providers
                  </td>
                  <td className="border border-white p-4">
                    Cloud hosting, analytics, SMS/OTP services
                  </td>
                </tr>
                <tr>
                  <td className="text-start p-4 font-bold border border-white">
                    Payment gateways
                  </td>
                  <td className="border border-white p-4">
                    Secure payment processing
                  </td>
                </tr>
                <tr>
                  <td className="text-start p-4 font-bold border border-white">
                    Government/Legal authorities
                  </td>
                  <td className="border border-white p-4">
                    Only when required by law
                  </td>
                </tr>
                <tr>
                  <td className="text-start p-4 font-bold border border-white">
                    Internal employees/partners
                  </td>
                  <td className="border border-white p-4">
                    Strictly for operational requirements
                  </td>
                </tr>
              </tbody>
            </table>
            All third-party providers are required to adhere to data-protection
            standards.
            <div className="font-extrabold">4. Data Security</div>
            We implement encryption, secure servers, and access control to
            protect your data. However, no electronic transmission is 100%
            secure — use at your discretion.
            <div className="font-extrabold">5. Data Retention</div>
            We retain your information as long as:
            <ul className="list-disc list-inside text-white marker:text-white">
              <li>Your account is active, or</li>
              <li>Required for business/legal purposes</li>
            </ul>
            You may request account deletion anytime (see Section 8).
            <div className="font-extrabold">6. Children’s Privacy</div>
            Our services are not intended for children under 13. We do not
            knowingly collect information from children.
            <div>7. International Users</div>
            If you access our service from outside India, your data may be
            stored and processed in India or other jurisdictions where we
            operate.
            <div className="font-extra">8. Your Rights</div>
            You may request to:
            <ul className="list-disc list-inside text-white marker:text-white">
              <li>Access your data</li>
              <li>Update/Correct information</li>
              <li>Delete your account and personal data</li>
              <li>
                Withdraw permissions (camera, gallery, notifications, etc.)
              </li>
            </ul>
            <div>
              <span className="font-bold">Contact: </span>
              <span className="text-[#ff8753]">contact@ttofl.com</span>
              <br />
              After deletion, some data may remain for legal or fraud-prevention
              purposes.
            </div>
            <div className="font-extrabold">
              9. Third-Party Links & Integrations
            </div>
            Our platform may include links to third-party services (payment
            gateways, messaging APIs, etc.). We are not responsible for their
            privacy practices.
            <div className="font-extrabold"> 10. Changes to this Policy</div>
            We may update this policy occasionally. Updates will be posted on
            our website and within our apps. Continued use means acceptance of
            the new terms.
            <div className="font-extrabold">11. Contact Us</div>
            For privacy questions or requests, contact:
            <div className="font-bold">TTOFL</div>
            <div>
              <span className="font-bold">Email: </span>
              <span className="text-[#ff8753]">contact@ttofl.com</span>
              <br />
            </div>{" "}
            <div>
              <span className="font-bold">Website: </span>
              <span className="text-[#ff8753]">https://www.ttofl.com</span>
              <br />
            </div>
          </div>
          <div>
            <img
              src={societyCarsLogo.src}
              width={1500}
              height={600}
              alt="linear demo image"
              className=""
            />
          </div>
        </div>

        <div className="w-[99vw] mt-8 md:mt-15">
          <Footer bgColor="#0a0a0a" />
        </div>
      </div>
    </div>
  );
}
