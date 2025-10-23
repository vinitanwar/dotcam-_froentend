"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <header className="relative left-modern-menu">
      {/* Sidebar - Left bar */}
      <div className="hidden md:flex fixed top-0 border-r border-[#18181e] left-0 h-full w-[75px] bg-black flex-col items-center justify-between py-6 z-[999]">
        {/* Logo */}
        <Link href="/" className="block text-center">
          <Image
            src="/img/camera.webp"
            alt="Logo"
            width={120}
            height={40}
            className="max-h-[40px] w-auto px-2 mx-auto"
          />
        </Link>

        {/* Toggle Button */}
        <button
          className="relative flex flex-col justify-center cursor-pointer items-center gap-1 w-6 h-6 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-[2px] w-4 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-4 bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Footer Text */}
        <div className="text-[13px] text-center font-semibold text-white opacity-80">
          © 2025
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black flex items-center justify-between px-4 py-4 z-[999]">
        <Link href="/" className="block">
          <Image
            src="/img/camera.webp"
            alt="Logo"
            width={100}
            height={30}
            className="h-[40px] lg:h-[30px] w-auto"
          />
        </Link>

        <button
          className="relative flex flex-col justify-center cursor-pointer items-center gap-1 w-6 h-6 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-[2px] w-4 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-4 bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[997]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Nav */}
      <nav
        className={`
          fixed z-[998] bg-black text-white transition-all duration-300 shadow-2xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:${isOpen ? "translate-x-[75px]" : "-translate-x-[400px]"}
          md:top-0 md:left-[75px] md:h-full top-[60px] left-0 w-full md:w-[380px] 
        `}
      >
        <div className="h-full overflow-y-auto py-10 md:py-20 scrollbar-thin scrollbar-thumb-[#e7000b] scrollbar-track-[#18181e]">
          <ul className="space-y-6 uppercase font-medium tracking-wide text-xl md:text-2xl">
            <li className="border-b pb-4 px-6 md:px-10 border-[#18181e]">
              <Link
                href="/"
                className="hover:text-[#e7000b] transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="border-b pb-4 px-6 md:px-10 border-[#18181e]">
              <button className="w-full text-left hover:text-[#e7000b] flex justify-between items-center transition">
                <Link href="/services" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
                <FaChevronDown
                  className={`text-lg transition-transform duration-300 ${
                    openServices ? "rotate-180" : "rotate-0"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation(); // stop overlay click
                    setOpenServices(!openServices);
                  }}
                />
              </button>
            </li>

            {openServices && (
              <>
                <li className="border-b pb-4 px-6 md:px-10 border-[#18181e]">
                  <Link
                    href="/cinematic-videos"
                    className="hover:text-[#e7000b] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Cinematic Videos
                  </Link>
                </li>
                <li className="border-b pb-4 px-6 md:px-10 border-[#18181e]">
                  <Link
                    href="/wedding-films"
                    className="hover:text-[#e7000b] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Wedding Films
                  </Link>
                </li>
                <li className="border-b pb-4 px-6 md:px-10 border-[#18181e]">
                  <Link
                    href="/images-and-videos"
                    className="hover:text-[#e7000b] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Images and Videos
                  </Link>
                </li>
              </>
            )}

            <li className="border-b pb-4 px-6 md:px-10 border-[#18181e]">
              <Link
                href="/blog"
                className="hover:text-[#e7000b] transition"
                onClick={() => setIsOpen(false)}
              >
                Our Blog
              </Link>
            </li>
            {/* <li className="border-b pb-4 px-6 md:px-10 border-[#18181e]">
              <Link
                href="/pricing"
                className="hover:text-[#e7000b] transition"
                onClick={() => setIsOpen(false)}
              >
                Pricing Package
              </Link>
            </li> */}
            <li className="border-b pb-4 px-6 md:px-10 border-[#18181e]">
              <Link
                href="/auth"
                className="hover:text-[#e7000b] transition"
                onClick={() => setIsOpen(false)}
              >
                Login / Sign Up
              </Link>
            </li>
            <li className="border-b pb-4 px-6 md:px-10 border-[#18181e]">
              <Link
                href="/contact"
                className="hover:text-[#e7000b] transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
