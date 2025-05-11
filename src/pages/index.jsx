import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      const loadVanta = async () => {
        const VANTA = await import('vanta/dist/vanta.globe.min');
        setVantaEffect(
          VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xff6b6b,
            backgroundColor: 0x18171d,
          })
        );
      };
      loadVanta();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div>
      {/* Vanta Background */}
      <div className="vanta-background" ref={vantaRef}></div>

      {/* Overlay Content */}
      <div className="overlay">
        <h1 className="gradient-text">Aryanshh Srivastava</h1>
        <h2 className="subtitle">Developer | Designer | Tech Innovator</h2>
        <p className="description">
          Developer and designer passionate about AI, robotics, and creating innovative digital
          experiences. Currently pursuing Computer Science at Bennett University.
        </p>
      </div>

      {/* Component Styles */}
      <style jsx>{`
        .vanta-background {
          position: fixed;
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          z-index: -1;
        }
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
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(to right,rgb(216, 215, 215), #7158e2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }
        .subtitle {
          font-size: 1.4rem;
          font-weight: 500;
          margin-top: 10px;
        }
        .description {
          max-width: 600px;
          font-size: 1rem;
          margin-top: 20px;
          line-height: 1.6;
        }
      `}</style>

      {/* Global Style to Disable Scroll */}
      <style jsx global>{`
        body {
          margin: 0;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
