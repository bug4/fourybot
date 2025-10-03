import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Foury Logo */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-2">
            Foury
          </h1>
          <p className="text-xl text-yellow-100 font-medium">
            Your Four.meme Network Guide
          </p>
        </div>
        
        {/* Loading Animation */}
        <div className="flex items-center justify-center space-x-3">
          <Loader2 className="w-8 h-8 text-white animate-spin" />
          <span className="text-white text-lg font-medium">Loading...</span>
        </div>
        
        {/* Pulsing Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;