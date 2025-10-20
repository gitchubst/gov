import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setActivePage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="bg-campaign-dark text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold">Shantanu Tiwari for President</h2>
          <p className="mt-2 text-gray-400">Join us in building a better future for all Americans.</p>
          <div className="mt-6">
            <button 
              onClick={() => setActivePage('Contribute')}
              className="bg-campaign-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 unselectable"
            >
              Contribute Now
            </button>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Paid for by Shantanu Tiwari for President. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};