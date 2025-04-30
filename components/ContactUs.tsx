"use client";
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

const ContactUs: React.FC = () => {
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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-gray-50 scroll-mt-[300px]"
    >
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-on-scroll opacity-0">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-3 section-underline opacity-0"></div>
          <p className="max-w-2xl mx-auto text-gray-700 animate-on-scroll opacity-0">
            Have questions or want to learn more about our programs? Get in
            touch with our team. We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white p-4 rounded-lg shadow-md animate-on-scroll opacity-0">
            <h3 className="text-2xl font-semibold mb-3">Send Us a Message</h3>
            <form className="space-y-3">
              <div className="grid grid-cols-1 ">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-gray-700 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-gray-700 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  required
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="subject" className="text-gray-700 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="btn-primary w-full mt-2">
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex flex-col gap-4">
            <div
              className="bg-white p-4 rounded-lg shadow-md mb-0 animate-on-scroll opacity-0"
              style={{ transitionDelay: "0.1s" }}
            >
              <h3 className="text-xl font-semibold mb-3">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600">123 Main Street, Suite 456</p>
                    <p className="text-gray-600">Anytown, CA 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">info@redheartcollective.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Office Hours</p>
                    <p className="text-gray-600">Monday-Friday: 9am - 5pm</p>
                    <p className="text-gray-600">Saturday-Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div
              className="bg-white p-4 rounded-lg shadow-md flex-1 animate-on-scroll opacity-0"
              style={{ transitionDelay: "0.2s" }}
            >
              <h3 className="text-xl font-semibold mb-2">Find Us</h3>
              <div className="rounded-lg overflow-hidden shadow-sm h-[200px] mb-3">
                <iframe
                  title="Red Heart Collective Location"
                  className="w-full h-full border-none"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0456448805366!2d-122.42083568441772!3d37.77492957975886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1682398114252!5m2!1sen!2sus"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Social media links */}
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <p className="text-gray-600 mb-2">
                Stay connected with us on social media for updates.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-red-100 hover:bg-red-200 p-2 rounded-full transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5 text-red-600" />
                </a>
                <a
                  href="#"
                  className="bg-red-100 hover:bg-red-200 p-2 rounded-full transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5 text-red-600" />
                </a>
                <a
                  href="#"
                  className="bg-red-100 hover:bg-red-200 p-2 rounded-full transition-colors duration-300"
                >
                  <Twitter className="h-5 w-5 text-red-600" />
                </a>
                <a
                  href="#"
                  className="bg-red-100 hover:bg-red-200 p-2 rounded-full transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5 text-red-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
