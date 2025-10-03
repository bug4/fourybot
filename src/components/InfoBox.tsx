import React from 'react';
import { MessageCircle, Volume2 } from 'lucide-react';

const InfoBox: React.FC = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 max-w-xs">
      <div className="bg-gradient-to-br from-green-400 to-green-500 p-6 rounded-2xl shadow-2xl border-2 border-green-300">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-white bg-opacity-20 p-2 rounded-full">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-white font-bold text-lg">Meet Foury</h3>
        </div>
        
        <p className="text-white text-sm leading-relaxed mb-4">
          Your intelligent Four.meme guide. Ask Foury anything about blockchain, 
          DeFi, or trading - and get instant voice responses!
        </p>
        
        <div className="flex items-center space-x-2 text-white text-xs bg-white bg-opacity-20 px-3 py-2 rounded-full">
          <Volume2 className="w-4 h-4" />
          <span className="font-medium">Voice-enabled responses</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;