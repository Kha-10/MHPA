"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { UserPlus, Banknote, HeartHandshake } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { areaOfInterest, availability, partnerShip } from "@/helper/constant";
import { PrimaryDonateButton } from "./DonateButton";

const GetInvolved = () => {
  // Dialog state
  const [volunteerDialogOpen, setVolunteerDialogOpen] = useState(false);
  const [partnerDialogOpen, setPartnerDialogOpen] = useState(false);

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

  // Volunteer form schema
  const volunteerFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phone: z.string().min(5, { message: "Please enter a valid phone number" }),
    interest: z
      .string()
      .min(2, { message: "Please select an area of interest" }),
    availability: z
      .string()
      .min(2, { message: "Please select your availability" }),
    message: z.string().optional(),
  });

  // Partner form schema
  const partnerFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    organization: z.string().optional(),
    email: z.string().email({ message: "Please enter a valid email address" }),
    partnershipType: z
      .string()
      .min(2, { message: "Please select a partnership type" }),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters" }),
  });

  // Volunteer form
  const volunteerForm = useForm<z.infer<typeof volunteerFormSchema>>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      availability: "",
      message: "",
    },
  });

  // Partner form
  const partnerForm = useForm<z.infer<typeof partnerFormSchema>>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      partnershipType: "",
      message: "",
    },
  });

  // Handle form submissions
  const onVolunteerSubmit = (data: z.infer<typeof volunteerFormSchema>) => {
    console.log("Volunteer form submitted:", data);
    toast.success("Thank you for applying!", {
      description: "We'll be in touch soon.",
    });
    volunteerForm.reset();
    setVolunteerDialogOpen(false);
  };

  const onPartnerSubmit = (data: z.infer<typeof partnerFormSchema>) => {
    console.log("Partner form submitted:", data);
    toast.success("Thank you for reaching out!", {
      description: "We'll respond within 2–3 business days.",
    });
    partnerForm.reset();
    setPartnerDialogOpen(false);
  };

  return (
    <section
      id="getinvolved"
      ref={sectionRef}
      className="section-padding bg-white scroll-mt-[300px]"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0">
            Get Involved
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6 section-underline opacity-0"></div>
          <p className="max-w-2xl mx-auto text-gray-700 animate-on-scroll opacity-0">
            There are many ways to support our mission. Whether you can
            volunteer your time, make a donation, or help spread awareness,
            every contribution makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Volunteer Card */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 text-center animate-on-scroll opacity-0">
            <div className="bg-red-100 rounded-full p-5 inline-flex mb-6">
              <UserPlus className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Become a Volunteer</h3>
            <p className="text-gray-600 mb-6">
              Join our team of dedicated volunteers making a difference in
              people&apos;s lives. No experience needed - just a compassionate
              heart and willingness to help.
            </p>
            <Button
              className="btn-primary"
              onClick={() => setVolunteerDialogOpen(true)}
            >
              Apply Now
            </Button>
          </div>

          {/* Donate Card */}
          <div className="bg-red-600 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 text-center animate-on-scroll opacity-0">
            <div className="bg-white rounded-full p-5 inline-flex mb-6">
              <Banknote className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Make a Donation
            </h3>
            <p className="text-white text-opacity-90 mb-6">
              Your financial support helps us expand our programs and reach more
              people in need. Every contribution, no matter the size, makes an
              impact.
            </p>
            <PrimaryDonateButton primary="" />
          </div>

          {/* Partner Card */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 text-center animate-on-scroll opacity-0">
            <div className="bg-red-100 rounded-full p-5 inline-flex mb-6">
              <HeartHandshake className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Become a Partner</h3>
            <p className="text-gray-600 mb-6">
              Partner with us as an organization, business, or community group
              to amplify our impact. Together we can create meaningful change.
            </p>
            <Button
              className="btn-primary"
              onClick={() => setPartnerDialogOpen(true)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Volunteer Application Dialog */}
      <Dialog open={volunteerDialogOpen} onOpenChange={setVolunteerDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle>Volunteer Application</DialogTitle>
            <DialogDescription>
              Fill out the form below to apply as a volunteer. We&apos;ll
              contact you soon.
            </DialogDescription>
          </DialogHeader>
          <Form {...volunteerForm}>
            <form
              onSubmit={volunteerForm.handleSubmit(onVolunteerSubmit)}
              className="space-y-4"
            >
              <FormField
                control={volunteerForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={volunteerForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={volunteerForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={volunteerForm.control}
                name="interest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area of Interest</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="select">
                          <SelectValue placeholder="Select an area of interest" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="select">
                        {areaOfInterest.map((item) => (
                          <SelectItem
                            key={item.id}
                            value={item.name}
                            className="hover:bg-gray-50"
                          >
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={volunteerForm.control}
                name="availability"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Availability</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="select">
                          <SelectValue placeholder="Select your availability" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="select">
                        {availability.map((item) => (
                          <SelectItem
                            key={item.id}
                            value={item.name}
                            className="hover:bg-gray-50"
                          >
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={volunteerForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Why do you want to volunteer?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share your motivation..."
                        {...field}
                        className="select focus:ring-red-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <div className="pt-4 flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  className="btn-secondary"
                  onClick={() => setVolunteerDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Partner Dialog */}
      <Dialog open={partnerDialogOpen} onOpenChange={setPartnerDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle>Become a Partner</DialogTitle>
            <DialogDescription>
              Fill out this form to discuss partnership opportunities with our
              organization.
            </DialogDescription>
          </DialogHeader>
          <Form {...partnerForm}>
            <form
              onSubmit={partnerForm.handleSubmit(onPartnerSubmit)}
              className="space-y-4"
            >
              <FormField
                control={partnerForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={partnerForm.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your organization" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={partnerForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={partnerForm.control}
                name="partnershipType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Partnership Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="select">
                          <SelectValue placeholder="Select partnership type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="select">
                        {partnerShip.map((item) => (
                          <SelectItem
                            key={item.id}
                            value={item.name}
                            className="hover:bg-gray-50"
                          >
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={partnerForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your partnership idea..."
                        {...field}
                        className="select focus:ring-red-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <div className="pt-4 flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setPartnerDialogOpen(false)}
                  className="btn-secondary"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GetInvolved;
