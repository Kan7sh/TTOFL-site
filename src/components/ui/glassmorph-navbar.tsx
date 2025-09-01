"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import ttoflLogo from "@/assets/images/ttofl_logo.png";
import Image from "next/image";
export default function GlassmorphNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed left-1/2 flex-col px-5 w-11/12 md:rounded-2xl -translate-x-1/2 top-0 z-50 flex items-center  mt-7 p-3 max-w-8xl bg-background/20 backdrop-blur-lg ${
        isOpen ? "rounded-3xl" : "rounded-full"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <Image src={ttoflLogo} alt={"logo"} className="w-38" />
          <div className="hidden gap-4 md:flex"></div>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-row  gap-10 px-5 py-3 font-mono">
            <Link href="/"> Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
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
        </div>
      )}
    </nav>
  );
}
