
import React from 'react';

const SmokeEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 z-0">
      <style>{`
        @keyframes smoke {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.4; }
          100% { transform: translateY(-30vh) scale(2.5); opacity: 0; }
        }
        .smoke-particle {
          position: absolute;
          bottom: -10%;
          left: 50%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(20,20,20,0.8) 0%, rgba(5,5,5,0) 70%);
          border-radius: 50%;
          filter: blur(40px);
          animation: smoke 8s infinite linear;
        }
      `}</style>
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="smoke-particle"
          style={{
            animationDelay: `${i * 0.7}s`,
            left: `${40 + Math.random() * 20}%`,
            width: `${200 + Math.random() * 200}px`,
            height: `${200 + Math.random() * 200}px`,
          }}
        />
      ))}
    </div>
  );
};

export default SmokeEffect;
