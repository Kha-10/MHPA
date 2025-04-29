import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-red-50 to-white relative">
      <div className="container-custom py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column: Text content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Together We Can{" "}
              <span className="text-red-600">Make A Difference</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
              Joining hands to provide health support, resources, and community
              for those in need. Every volunteer makes a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">Join Us Today</Button>
              <Button className="btn-secondary group">
                Donate Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right column: Image */}
          <div className="relative h-full min-h-[300px] md:min-h-[480px]">
            <div className="w-full h-full bg-[url('/logo.png')] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
