import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        ref?: React.RefObject<HTMLElement>;
        style?: React.CSSProperties;
      };
    }
  }
}

interface SplineBackgroundProps {
  children?: React.ReactNode;
}

const SplineBackground: React.FC<SplineBackgroundProps> = ({ children }) => {
  const splineRef = useRef<HTMLElement>(null);
  const [isSplineViewerDefined, setIsSplineViewerDefined] = useState(false);

  useEffect(() => {
    // Load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.64/build/spline-viewer.js';
    document.head.appendChild(script);

    // Wait for the custom element to be defined
    customElements.whenDefined('spline-viewer').then(() => {
      setIsSplineViewerDefined(true);
    });

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    // Set the URL attribute imperatively when the viewer is ready
    if (isSplineViewerDefined && splineRef.current) {
      splineRef.current.setAttribute('url', 'https://prod.spline.design/M3ljZXuq3aTXGokD/scene.splinecode');
    }
  }, [isSplineViewerDefined]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-emerald-600">
      {/* Spline 3D Background - Full interactive */}
      <div className="absolute inset-0">
        {isSplineViewerDefined && (
          <spline-viewer
            ref={splineRef}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              pointerEvents: 'auto',
            }}
          />
        )}
      </div>
      
      {/* Content overlay - only when needed */}
      <div className="relative z-10 pointer-events-none">
        {children}
      </div>
    </div>
  );
};

export default SplineBackground;