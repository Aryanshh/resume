'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Spline with no SSR
const Spline = dynamic(
  () => import('@splinetool/react-spline'),
  { ssr: false, loading: () => <div className="loading-overlay"><div className="loading-spinner"></div></div> }
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <Spline 
          scene="https://prod.spline.design/jfAtqFE6Kjlqgh-T/scene.splinecode"
          onLoad={() => setIsLoading(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.5s ease'
          }}
        />
        
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
            display: isLoading ? 'block' : 'none'
          }}
        ></iframe>
      </div>

      {/* Overlay Content */}
      <div className="overlay">
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
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          z-index: 10;
        }
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid rgba(113, 88, 226, 0.2);
          border-radius: 50%;
          border-top-color: #7158e2;
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
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