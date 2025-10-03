import React from 'react';
import { Twitter, ShoppingCart } from 'lucide-react';

const NavigationButtons: React.FC = () => {
  return (
    <>
      {/* X Community Button - Top Left */}
      <a 
        href="https://x.com/fouryai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed top-6 left-6 z-20 bg-green-500 hover:bg-green-400 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group border-2 border-green-400 hover:border-green-300"
      >
        <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Follow Foury</span>
      </a>

      {/* Buy Foury Button - Top Right */}
      <a 
        href="https://four.meme" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed top-6 right-6 z-20 bg-green-500 hover:bg-green-400 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group border-2 border-green-400 hover:border-green-300"
      >
        <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span>Buy Foury</span>
      </a>
    </>
  );
};

export default NavigationButtons;