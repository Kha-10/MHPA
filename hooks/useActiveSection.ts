"use client";
import { useState, useEffect } from "react";

type Section = "about" | "work" | "getinvolved" | "contact";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      // Check if we're at the very top of the page
      if (scrollPosition <= 100) {
        setActiveSection(null);
        return;
      }

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") as Section;
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
};
