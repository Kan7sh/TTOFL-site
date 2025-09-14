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

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Digital Business</li>
              <li>Platform Modernization</li>
              <li>AI/GenAI</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>BFSI</li>
              <li>Life Sciences</li>
              <li>Retail & CPG</li>
              <li>Automotive</li>
              <li>Manufacturing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Capabilities</h3>
            <ul className="space-y-2">
              <li>Site Reliability Engineering (SRE)</li>
              <li>Cloud Engineering</li>
              <li>DevSecOps</li>
              <li>Information Security</li>
              <li>Agile</li>
              <li>Quality Engineering</li>
              <li>Salesforce</li>
              <li>Data Engineering</li>
              <li>Digital Engineering</li>
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
              <li>About Us</li>
              <li>Press</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Logo" width={140} height={40} />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <span>© 2025 Altimetrik Corp.</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="#">Transparency in Coverage Rule</a>
          </div>

          <div className="flex items-center gap-6 text-xl">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
