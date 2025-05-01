"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import BubbleBackground from "./BubbleBackground"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 overflow-y-auto"
          >
            {/* Bubble Background */}
            <BubbleBackground />

            <div className="relative z-10">
              <div className="flex justify-end p-6">
                <button
                  onClick={onClose}
                  className="text-white bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* What we do */}
                <div className="space-y-6">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-light text-white"
                  >
                    What we do
                  </motion.h2>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3"
                  >
                    <Link href="/what-we-do" className="block text-white hover:underline">
                      Mission & Vision
                    </Link>
                    <Link href="/what-we-do" className="block text-white hover:underline">
                      Video president
                    </Link>
                    <Link href="/what-we-do" className="block text-white hover:underline">
                      Fast Facts
                    </Link>
                  </motion.div>

                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-light text-white mt-8"
                  >
                    What do we support
                  </motion.h3>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3"
                  >
                    <Link href="/what-we-do" className="block text-white hover:underline">
                      ICF Clinical Unit Visits Programme
                    </Link>
                    <Link href="/what-we-do" className="block text-white hover:underline">
                      Cancer Control & Care Projects
                    </Link>
                    <Link href="/what-we-do" className="block text-white hover:underline">
                      Training & Exchange
                    </Link>
                    <Link href="/what-we-do" className="block text-white hover:underline">
                      Patient Advocacy & Empowerment
                    </Link>
                    <Link href="/what-we-do" className="block text-white hover:underline">
                      Questionnaire
                    </Link>
                  </motion.div>
                </div>

                {/* Who we are + Our Projects */}
                <div className="space-y-6">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl font-light text-white"
                  >
                    Who we are
                  </motion.h2>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-3"
                  >
                    <Link href="/who-we-are" className="block text-white hover:underline">
                      Our Focus
                    </Link>
                    <Link href="/who-we-are" className="block text-white hover:underline">
                      Leadership & Government
                    </Link>
                    <Link href="/who-we-are" className="block text-white hover:underline">
                      Board Members
                    </Link>
                  </motion.div>

                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-4xl font-light text-white mt-12"
                  >
                    Our Projects
                  </motion.h2>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-3"
                  >
                    <Link href="/our-projects" className="block text-white hover:underline">
                      World map
                    </Link>
                    <Link href="/our-projects" className="block text-white hover:underline">
                      Projects around the world
                    </Link>
                  </motion.div>
                </div>

                {/* Contact + Action buttons */}
                <div className="space-y-6">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-4xl font-light text-white"
                  >
                    Contact
                  </motion.h2>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="space-y-3"
                  >
                    <Link href="#" className="block text-white hover:underline">
                      Address
                    </Link>
                    <Link href="#" className="block text-white hover:underline">
                      Contact Form
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="mt-12"
                  >
                    <Link href="#" className="block text-4xl font-light text-white hover:underline mb-8">
                      Donate now
                    </Link>
                    <Link href="#" className="block text-4xl font-light text-white hover:underline mb-8">
                      Get support
                    </Link>
                    <Link href="#" className="block text-4xl font-light text-white hover:underline mb-4">
                      Get involved
                    </Link>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="space-y-3 ml-4"
                    >
                      <Link href="#" className="block text-white hover:underline">
                        Sharing your Expertise
                      </Link>
                      <Link href="#" className="block text-white hover:underline">
                        Looking for Partnership
                      </Link>
                      <Link href="#" className="block text-white hover:underline">
                        Corporate Social Responsibility
                      </Link>
                      <Link href="#" className="block text-white hover:underline">
                        Willing to support
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}