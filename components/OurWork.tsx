import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const OurWork: React.FC = () => {
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
    <section id="work" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Through our various programs and initiatives, we&apos;re making a real difference
            in the lives of individuals and families facing health challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </CardContent>
              <CardFooter className="pt-2 pb-6">
                <a href="#getinvolved" className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center">
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

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center font-semibold text-red-600 hover:text-red-700">
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