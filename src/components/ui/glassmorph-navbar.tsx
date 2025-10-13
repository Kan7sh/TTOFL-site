"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import ttoflLogo from "@/assets/images/ttofl_logo.png";
import Image from "next/image";
import { InteractiveHoverButton } from "./interactiveHoverButton";
export default function GlassmorphNavBar({
  selectedTab,
}: {
  selectedTab?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed left-1/2 flex-col px-5 w-11/12 md:rounded-2xl -translate-x-1/2 top-0 z-50 flex items-center  mt-7 p-3 max-w-8xl bg-background/20 backdrop-blur-lg ${
        isOpen ? "rounded-3xl" : "rounded-full"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image src={ttoflLogo} alt={"logo"} className=" w-25 lg:w-38" />
          </Link>
          <div className="hidden gap-4 md:flex"></div>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-row  items-center  px-5 py-3">
            <Link
              href="/"
              className={`${
                selectedTab == "home" ? "text-black font-bold" : "text-white"
              } ${
                selectedTab == "home" ? "bg-white" : "bg-transparent"
              } p-2 text-center rounded-3xl ${
                selectedTab != "home" ? "hover:underline" : ""
              } w-25 `}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                selectedTab == "about" ? "text-black font-bold" : "text-white"
              } ${
                selectedTab == "about" ? "bg-white" : "bg-transparent"
              } p-2 text-center rounded-3xl ${
                selectedTab != "about" ? "hover:underline" : ""
              } w-25 `}
            >
              About
            </Link>
            <Link
              href="/products"
              className={`${
                selectedTab == "products"
                  ? "text-black font-bold"
                  : "text-white"
              } ${
                selectedTab == "products" ? "bg-white" : "bg-transparent"
              } p-2 text-center rounded-3xl ${
                selectedTab != "products" ? "hover:underline" : ""
              } w-25 `}
            >
              Products
            </Link>
            <Link href="/contact" className="ml-3">
              <InteractiveHoverButton>Contact us</InteractiveHoverButton>
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center justify-center gap-3 px-5 py-3 md:hidden">
          <Link href="/"> Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
