"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { PrimaryDonateButton } from "./DonateButton";

export default function Navbar() {
  const [selectedNav, setSelectedNav] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);


  // Animated hamburger menu icon
  const MenuIcon = () => (
    <button
      aria-label="Menu"
      className="p-1 relative z-50"
      onClick={() => setMenuOpen(true)}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: menuOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Menu className="h-6 w-6 text-red-500" />
      </motion.div>
    </button>
  );

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center"
            >
              <div className="text-red-500 font-bold text-lg">
                {/* <svg viewBox="0 0 100 100" className="h-full w-full">
                  <polygon
                    points="50,0 100,30 100,70 50,100 0,70 0,30"
                    fill="#6b21a8"
                  />
                  <polygon points="30,30 70,30 70,70 30,70" fill="#ea580c" />
                </svg> */}
                MHPA
              </div>
              {/* <div>
                <div className="text-purple-900 font-bold text-lg leading-tight">
                  INTERNATIONAL
                  <br />
                  CANCER FOUNDATION
                </div>
                <div className="text-sm text-gray-700">
                  Bridging the global divide in cancer care
                </div>
              </div> */}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {[
                { name: "About Us", href: "/about-us" },
                { name: "Our Work", href: "/our-work" },
                { name: "Get Involved", href: "/get-involved" },
                { name: "Contact Us", href: "/contact-us" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-black hover:border-b-2 hover:text-red-500 hover:pb-1 transition-all ${
                    selectedNav === item.name
                      ? "border-b-2 border-red-500 pb-1"
                      : ""
                  }`}
                  onClick={() => setSelectedNav(item.name)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <PrimaryDonateButton primary="primary" />
            </div>

            <div className="flex items-center space-x-4">
              {/* <button aria-label="Search" className="p-1">
                <Search className="h-6 w-6" />
              </button> */}
              <MenuIcon />
            </div>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            {/* <button aria-label="Search" className="p-1">
              <Search className="h-6 w-6" />
            </button> */}
            <MenuIcon />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
