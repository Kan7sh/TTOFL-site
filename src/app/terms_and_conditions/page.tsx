"use client";

import { useState } from "react";
import Footer from "@/components/ui/footer";
import GlassmorphNavBar from "@/components/ui/glassmorph-navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import societyCarsLogo from "@/assets/society_cars/SocietyCarsLogo.png";
import { cn } from "@/lib/utils";

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function TermsAndConditions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
                Terms and Conditions
              </div>
            </div>
            <div className="text-justify">
              By using Society Cars (“we”, “our”, “us”) services, mobile
              applications, website, or any associated platform, you agree to
              the following Terms & Conditions. Please read them carefully.
            </div>
            <div className="font-extrabold">1. Service Usage</div>
            <ul className="list-disc list-inside text-white marker:text-white">
              <li>
                Users must provide accurate personal, vehicle, and society
                details.
              </li>
              <li>
                Service availability depends on vendor availability and
                operational feasibility.
              </li>
              <li>
                We reserve the right to accept or reject any subscription or
                service request.
              </li>
            </ul>
            <div className="font-extrabold">2. Subscription & Payments</div>
            <ul className="list-disc list-inside text-white marker:text-white">
              <li>
                All subscription payments must be completed on or before the due
                date.
              </li>
              <li>
                Late or missed payments may lead to suspension or cancellation
                of services.
              </li>
              <li>
                Users must ensure their payment method is valid and up to date.
              </li>
              <li>
                Pricing or subscription adjustments may be made with prior
                notice.
              </li>
            </ul>
            <div className="font-extrabold">
              3. Refund & Compensation Policy
            </div>
            <ul className="list-disc list-inside text-white marker:text-white">
              <li>
                We do <strong>not</strong> provide refunds for any subscription
                or payment.
              </li>
              <li>
                In cases of inconvenience or missed service, we may issue a
                coupon or service credit.
              </li>
              <li>
                Coupons are non-refundable, non-transferable, and usable only
                within Society Cars.
              </li>
              <li>Compensation decisions are made at our discretion.</li>
            </ul>
            <div className="font-extrabold">4. Service Conditions</div>
            <ul className="list-disc list-inside text-white marker:text-white">
              <li>
                Service times may vary due to weather or society access
                restrictions.
              </li>
              <li>
                Users must keep their vehicle accessible at the scheduled time.
              </li>
              <li>
                Repeated vehicle unavailability may lead to cancellation without
                compensation.
              </li>
            </ul>
            <div className="font-extrabold">5. User Responsibilities</div>
            <ul className="list-disc list-inside text-white marker:text-white">
              <li>
                Users must not misuse the platform for fraudulent or false
                complaints.
              </li>
              <li>
                Damage claims must be reported within 24 hours with proper
                evidence.
              </li>
              <li>Respectful behavior toward staff/vendors is mandatory.</li>
            </ul>
            <div className="font-extrabold">6. Vendor Responsibilities</div>
            <ul className="list-disc list-inside text-white marker:text-white">
              <li>
                Vendors must maintain service quality, professionalism, and
                safety standards.
              </li>
              <li>
                App usage must be accurate for logging service completion.
              </li>
              <li>
                Misconduct or negligence may result in removal from the
                platform.
              </li>
            </ul>
            <div className="font-extrabold">7. Account & Access</div>
            <ul className="list-disc list-inside text-white marker:text-white">
              <li>Users are responsible for their account credentials.</li>
              <li>
                Unauthorized access or system misuse may lead to legal action.
              </li>
              <li>Accounts may be suspended for violations of these terms.</li>
            </ul>
            <div className="font-extrabold">8. Limitation of Liability</div>
            <ul className="list-disc list-inside text-white marker:text-white">
              <li>
                We are not liable for delays caused by external or unavoidable
                circumstances.
              </li>
              <li>
                We are not responsible for losses resulting from incorrect
                information provided by users.
              </li>
              <li>
                Our maximum liability, if any, is limited to the subscription
                fee for that cycle.
              </li>
            </ul>
            <div className="font-extrabold">9. Data Usage & Privacy</div>
            <div>
              All data is handled according to our Privacy Policy. By using the
              app, you consent to our communication via SMS, calls, or push
              notifications.
            </div>
            <div className="font-extrabold">10. Service Modifications</div>
            We may modify, pause, or discontinue services at any time with prior
            notice. Continued use implies acceptance of updated terms.
            <div className="font-extrabold">11. Governing Law</div>
            These terms are governed by the laws of India. Any disputes will
            fall under relevant judicial jurisdiction.
            <div className="font-extrabold">12. Contact Us</div>
            <div className="font-bold">TTOFL</div>
            <div>
              <span className="font-bold">Email: </span>
              <span className="text-[#ff8753]">contact@ttofl.com</span>
              <br />
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
