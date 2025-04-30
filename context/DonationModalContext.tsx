'use client'
import React, { createContext, useContext, useState } from 'react';
import DonationModal from '@/components/DonatioModal';

interface DonationModalContextType {
  openDonationModal: () => void;
}

const DonationModalContext = createContext<DonationModalContextType | undefined>(undefined);

export const useDonationModal = () => {
  const context = useContext(DonationModalContext);
  if (!context) {
    throw new Error('useDonationModal must be used within a DonationModalProvider');
  }
  return context;
};

export const DonationModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDonationModal = () => {
    setIsModalOpen(true);
  };

  return (
    <DonationModalContext.Provider value={{ openDonationModal }}>
      {children}
      <DonationModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </DonationModalContext.Provider>
  );
};