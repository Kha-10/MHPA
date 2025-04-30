"use client";
import { Button } from "./ui/button";
import { useDonationModal } from "../context/DonationModalContext";
import { ArrowRight } from "lucide-react";

export const PrimaryDonateButton = ({ primary }: { primary: string }) => {
  const { openDonationModal } = useDonationModal();
  return (
    <Button
      className={
        primary
          ? "btn-primary"
          : "bg-white hover:bg-gray-100 text-red-600 transition-colors duration-300"
      }
      onClick={openDonationModal}
    >
      Donate Now
    </Button>
  );
};

export const SecondaryDonateButton = () => {
  const { openDonationModal } = useDonationModal();
  return (
    <Button className="btn-secondary group" onClick={openDonationModal}>
      Donate Now
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );
};
