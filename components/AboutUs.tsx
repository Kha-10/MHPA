import React from "react";
import { Heart, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6">
              Red Heart Collective was founded in 2010 with a simple yet
              powerful mission: to create a community of volunteers dedicated to
              improving health outcomes and providing support for those facing
              medical challenges.
            </p>
            <p className="text-gray-700 mb-6">
              We believe that everyone deserves access to quality healthcare,
              emotional support, and the resources needed to navigate health
              challenges. Through the power of volunteering and community
              action, we&apos;re making healthcare more accessible and supportive for
              all.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Compassionate Care
                  </h4>
                  <p className="text-gray-600">
                    We lead with empathy and understanding in everything we do.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Community First
                  </h4>
                  <p className="text-gray-600">
                    Building connections that strengthen our collective impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-red-100 absolute inset-0 rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative z-10 bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600">5,000+</p>
                  <p className="text-gray-600">Volunteers</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600">20+</p>
                  <p className="text-gray-600">Programs</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600">100K+</p>
                  <p className="text-gray-600">People Helped</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600">15</p>
                  <p className="text-gray-600">Communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
