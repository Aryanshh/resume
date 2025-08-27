'use client';

import { useState, useEffect } from 'react';

// We'll use a different approach since dynamic imports are causing issues
let Spline;
if (typeof window !== 'undefined') {
  // We'll import it only on the client side
  import('@splinetool/react-spline').then(module => {
    Spline = module.Spline;
  });
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    // Check if mobile device
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
    // Load Spline component
    if (typeof window !== 'undefined') {
      import('@splinetool/react-spline').then(module => {
        Spline = module.Spline;
        setSplineLoaded(true);
      }).catch(error => {
        console.error('Failed to load Spline:', error);
        setIsLoading(false);
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSplineLoad = () => {
    console.log('Spline loaded successfully');
    setIsLoading(false);
  };

  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aryanshh_Srivastava_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Spline Background */}
      <div className="spline-background">
        {splineLoaded && Spline && (
          <Spline 
            scene="https://prod.spline.design/jfAtqFE6Kjlqgh-T/scene.splinecode"
            onLoad={handleSplineLoad}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: -1,
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.5s ease',
              visibility: isLoading ? 'hidden' : 'visible'
            }}
          />
        )}
        
        {/* Spline iframe as fallback */}
        <iframe 
          src='https://my.spline.design/fnxbotrobotcharacterconcept-tjEKqCZERu0FuLEk62zx7vhu/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -2,
            display: isLoading ? 'none' : 'block'
          }}
          onLoad={() => {
            console.log('Fallback iframe loaded');
            setIsLoading(false);
          }}
        ></iframe>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="rolling-loader">
            <div className="rolling-circle"></div>
          </div>
        </div>
      )}

      {/* Overlay Content */}
      <div className="overlay" style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <h1 className="gradient-text" aria-label="Aryanshh Srivastava">
          Aryanshh Srivastava
        </h1>
        <h2 className="gradient-subtitle" aria-label="Developer, Designer">
          Developer | Designer 
        </h2>
        <p className="description" aria-label="About Aryanshh">
          
        </p>
        <button 
          className="resume-button" 
          onClick={handleDownloadResume}
          aria-label="Download Resume"
        >
          Download Resume
        </button>
      </div>

      {/* Component Styles */}
      <style jsx>{`
        .overlay {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
          padding: 0 20px;
          color: white;
          font-family: 'Segoe UI', sans-serif;
        }
        .gradient-text {
          font-size: ${isMobile ? '2rem' : '3rem'};
          font-weight: 800;
          background: linear-gradient(to right, rgb(249, 249, 249),rgb(148, 192, 255));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }
        .gradient-subtitle {
          font-size: ${isMobile ? '1.1rem' : '1.4rem'};
          font-weight: 500;
          margin-top: 10px;
          background: linear-gradient(to right, rgb(206, 226, 233),rgb(126, 206, 255));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .description {
          max-width: 600px;
          font-size: ${isMobile ? '0.9rem' : '1rem'};
          margin-top: 20px;
          line-height: 1.6;
          padding: 0 20px;
        }
        .resume-button {
          margin-top: 30px;
          padding: 12px 30px;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          background: transparent;
          border: 2px solid #BFE5F0;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }
        .resume-button:hover {
          background: #BFE5F0;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(113, 88, 226, 0.4);
        }
        .resume-button:active {
          transform: translateY(0);
        }
        
        /* Loading Overlay Styles */
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.85);
          z-index: 10;
          backdrop-filter: blur(5px);
        }
        
        /* Rolling Loader */
        .rolling-loader {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .rolling-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top: 3px solid white;
          border-right: 3px solid white;
          animation: roll 1.2s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite;
        }
        
        /* Animation */
        @keyframes roll {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Global Style */}
      <style jsx global>{`
        body {
          margin: 0;
          overflow: hidden;
          font-family: 'Segoe UI', sans-serif;
        }
      `}</style>
    </div>
  );
}