"use client";
import { useState, useEffect } from "react";

type Section = "about" | "work" | "getinvolved" | "contact";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionId = el.getAttribute("id") as Section;
        const sectionTop = el.offsetTop;
        const sectionHeight = el.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
};
