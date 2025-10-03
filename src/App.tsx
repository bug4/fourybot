import React from 'react';
import { useState, useEffect } from 'react';
import SplineBackground from './components/SplineBackground';
import LoadingScreen from './components/LoadingScreen';
import Logo from './components/Logo';
import NavigationButtons from './components/NavigationButtons';
import CopyButton from './components/CopyButton';
import InfoBox from './components/InfoBox';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the 3D scene
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <SplineBackground />
          
          {/* UI Overlay */}
          <div className="pointer-events-none">
            <Logo />
            <InfoBox />
            
            {/* Navigation buttons have pointer-events-auto */}
            <div className="pointer-events-auto">
              <NavigationButtons />
            </div>
            
            {/* Copy button at bottom center */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto">
              <CopyButton />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;