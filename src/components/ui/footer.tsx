"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import logo from "@/assets/images/ttofl_logo.png";
import Link from "next/link";

export default function Footer({ bgColor }: { bgColor?: string }) {
  return (
    <footer
      style={{ backgroundColor: bgColor ?? "#0a0a0a" }}
      className={`text-white py-12 w-full`}
    >
      <div className=" mx-auto px-6 lg:px-8  w-11/12 max-w-8xl">
        <div className=" lg:pl-14 grid grid-cols-2 md:grid-cols-5 gap-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>Education</li>
              <li>Agriculture</li>
              <li>Health and Fitness</li>
              <li>Automobile</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products">Society Cars</Link>
              </li>
              <li>EduBridgeX (soon)</li>
              <li>AgriConnect (soon)</li>
              <li>MediReview (soon)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Case Studies</li>
              <li>White Papers</li>
              <li>Videos</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center">
          <div className="flex items-center justify-center gap-3 w-full md:w-auto">
            <Image src={logo} alt="Logo" width={140} height={40} />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <span>© 2025 TTOFL</span>
            <a href="#">Privacy Policy</a>
          </div>

          <div className="flex items-center justify-center gap-3 text-2xl">
            <a href="#">
              <FaFacebook className="text-blue-500 rounded " />
            </a>
            <a href="#">
              <FaInstagram className="text-pink-500 rounded " />
            </a>
            <a href="#">
              <FaXTwitter className="text-white rounded " />
            </a>
            <a href="https://www.linkedin.com/company/ttofl/">
              <FaLinkedin className="text-cyan-600 rounded " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
