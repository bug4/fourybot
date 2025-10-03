import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-green-400 drop-shadow-lg glow-text">
        FOURY
      </h1>
      <p className="text-white text-base md:text-xl mt-3 drop-shadow-md">
        Ask anything, Foury will guide!
      </p>
      <style jsx>{`
        .glow-text {
          text-shadow: 
            0 0 10px rgba(74, 222, 128, 0.8),
            0 0 20px rgba(74, 222, 128, 0.6),
            0 0 30px rgba(74, 222, 128, 0.4),
            0 0 40px rgba(74, 222, 128, 0.2);
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          from {
            text-shadow: 
              0 0 10px rgba(74, 222, 128, 0.8),
              0 0 20px rgba(74, 222, 128, 0.6),
              0 0 30px rgba(74, 222, 128, 0.4),
              0 0 40px rgba(74, 222, 128, 0.2);
          }
          to {
            text-shadow: 
              0 0 15px rgba(74, 222, 128, 1),
              0 0 25px rgba(74, 222, 128, 0.8),
              0 0 35px rgba(74, 222, 128, 0.6),
              0 0 45px rgba(74, 222, 128, 0.4);
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;