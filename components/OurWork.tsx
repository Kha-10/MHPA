"use client";
import React, { useRef, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const OurWork: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");

            // Animate underline if it's the underline element
            if (entry.target.classList.contains("section-underline")) {
              entry.target.classList.add("animate-underline");
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe all animatable elements
    const animatableElements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animatableElements?.forEach((el) => {
      observer.observe(el);
    });

    // Observe the underline element
    const underline = sectionRef.current?.querySelector(".section-underline");
    if (underline) {
      observer.observe(underline);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const programs = [
    {
      id: 1,
      title: "Hospital Companion Program",
      description:
        "Our volunteers provide companionship and support to patients during hospital stays, helping to reduce anxiety and improve recovery outcomes.",
      image: "/tzm.jpg",
    },
    {
      id: 2,
      title: "Health Education Workshops",
      description:
        "Free workshops on various health topics, bringing vital health information to underserved communities.",
      image: "/eka.jpg",
    },
    {
      id: 3,
      title: "Medical Transportation Assistance",
      description:
        "Volunteer drivers help patients get to and from medical appointments, ensuring consistent access to healthcare.",
      image: "/ygn.jpg",
    },
  ];

  return (
    <section id="work" ref={sectionRef} className="section-padding bg-gray-50 scroll-mt-[300px]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
            Our Work
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6 section-underline opacity-0"></div>
          <p className="max-w-2xl mx-auto text-gray-700 animate-on-scroll opacity-0">
            Through our various programs and initiatives, we&apos;re making a real
            difference in the lives of individuals and families facing health
            challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.id}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll opacity-0"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <Image
                  width={800}
                  height={600}
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {program.title}
                </h3>
                <p className="text-gray-600">{program.description}</p>
              </CardContent>
              <CardFooter className="pt-2 pb-6">
                <a
                  href="#getinvolved"
                  className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center"
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div
          className="mt-16 text-center animate-on-scroll opacity-0"
          style={{ transitionDelay: "0.3s" }}
        >
          <a
            href="#"
            className="inline-flex items-center font-semibold text-red-600 hover:text-red-700"
          >
            View All Programs
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
