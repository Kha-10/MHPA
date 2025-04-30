import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CreditCard, Heart } from "lucide-react";

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ open, onOpenChange }) => {
  const donationAmounts = [25, 50, 100, 250, 500];
  const [selectedAmount, setSelectedAmount] = React.useState<number | null>(null);
  const [customAmount, setCustomAmount] = React.useState("");

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement actual payment processing
    const amount = selectedAmount || Number(customAmount);
    console.log(`Processing donation of $${amount}`);
    
    // Close the modal after successful donation (or would be replaced with redirect to payment)
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-600" />
            Make a Donation
          </DialogTitle>
          <DialogDescription>
            Your support helps us provide essential services to those in need.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleDonationSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Select an amount</label>
            <div className="grid grid-cols-3 gap-2">
              {donationAmounts.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={selectedAmount === amount ? "default" : "outline"}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                  className="h-12 select"
                >
                  ${amount}
                </Button>
              ))}
              <div className="col-span-3 mt-2">
                <label htmlFor="custom-amount" className="block text-sm font-medium mb-1">
                  Or enter custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    id="custom-amount"
                    type="number"
                    min="1"
                    step="1"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="pl-7 w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Other amount"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name (Optional)</label>
            <input
              id="name"
              type="text"
              className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email (Optional)</label>
            <input
              id="email"
              type="email"
              className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="your.email@example.com"
            />
          </div>

          <DialogFooter className="sm:justify-start flex flex-col sm:flex-row gap-2">
            <Button type="submit" className="w-full sm:w-auto flex gap-2 items-center btn-primary" disabled={!selectedAmount && !customAmount}>
              <CreditCard className="h-4 w-4" />
              Donate Now
            </Button>
            <Button type="button" variant="outline" className="w-full sm:w-auto btn-secondary" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;