"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "../hooks/useActiveSection";
import { PrimaryDonateButton } from "./DonateButton";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const getLinkClass = (sectionId: string) => {
    const baseClass = "transition-colors duration-300";
    const normalClass = "text-gray-700 hover:text-red-600";
    const activeClass =
      "text-red-600 font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[2px] after:bg-red-600";

    return `${baseClass} ${
      activeSection === sectionId ? activeClass : normalClass
    }`;
  };

  const getMobileLinkClass = (sectionId: string) => {
    const baseClass =
      "block px-3 py-2 rounded-md text-base font-medium hover:bg-red-50";
    const normalClass = "text-gray-700 hover:text-red-600";
    const activeClass = "text-red-600 font-semibold bg-red-50";

    return `${baseClass} ${
      activeSection === sectionId ? activeClass : normalClass
    }`;
  };

  const resetActiveSection = () => {
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                resetActiveSection();
              }}
            >
              <span className="text-red-600 font-bold text-2xl font-heading">
                MHPA
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="#about"
                className={getLinkClass("about")}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About Us
              </a>
              <a
                href="#work"
                className={getLinkClass("work")}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("work");
                }}
              >
                Our Work
              </a>
              <a
                href="#getinvolved"
                className={getLinkClass("getinvolved")}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("getinvolved");
                }}
              >
                Get Involved
              </a>
              <a
                href="#contact"
                className={getLinkClass("contact")}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
              <PrimaryDonateButton primary="primary" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          <a
            href="#about"
            className={getMobileLinkClass("about")}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About Us
          </a>
          <a
            href="#work"
            className={getMobileLinkClass("work")}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("work");
            }}
          >
            Our Work
          </a>
          <a
            href="#getinvolved"
            className={getMobileLinkClass("getinvolved")}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("getinvolved");
            }}
          >
            Get Involved
          </a>
          <a
            href="#contact"
            className={getMobileLinkClass("contact")}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
          <div className="mt-4 px-3">
            <Button className="btn-primary w-full">Donate Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
