import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <a href="#" className="flex items-center">
                <span className="text-red-400 font-bold text-2xl font-heading">MHPA</span>
              </a>
            </div>
            <p className="text-gray-400 mb-6">
              Together we can make a difference in the lives of those facing health challenges.
            </p>
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-red-400 mr-2" />
              <span className="text-gray-300">Join us in our mission</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Programs</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  Hospital Companion Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  Health Education Workshops
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  Medical Transportation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  Support Groups
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  Care Packages
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#work" className="text-gray-400 hover:text-red-400 transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#getinvolved" className="text-gray-400 hover:text-red-400 transition-colors">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on our programs and events.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Red Heart Collective. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-red-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-red-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;