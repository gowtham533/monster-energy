import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Pnf() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black py-28">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Floating M's */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-9xl font-black opacity-5 pointer-events-none"
          style={{
            left: `${20 * i}%`,
            top: `${15 * i}%`,
            color: '#52d452'
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
        >
          M
        </motion.div>
      ))}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #52d452 0%, transparent 70%)',
          left: '20%',
          top: '30%'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity
        }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #00b4d8 0%, transparent 70%)',
          right: '20%',
          bottom: '30%'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 2
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-8">
        {/* 404 Text with Parallax */}
        <motion.div
          style={{
            x: mousePosition.x,
            y: mousePosition.y
          }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <motion.h1
            className="text-[15rem] font-black leading-none"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 100, 
              damping: 15,
              delay: 0.2 
            }}
            style={{
              background: 'linear-gradient(135deg, #52d452 0%, #00b4d8 50%, #ff006e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 80px rgba(82, 212, 82, 0.5)'
            }}
          >
            404
          </motion.h1>
        </motion.div>

        {/* Broken Can Animation */}
        <motion.div
          className="flex justify-center items-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="text-8xl"
            animate={{
              rotate: [-5, 5, -5],
              x: [-10, 0, -10]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            <img width={'150px'} className='mt-20' src="/public/ultra zero.png" alt="" />

          </motion.div>
          
          <motion.div
            className="text-6xl font-black text-red-500"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            ⚠️
          </motion.div>

          <motion.div
            className="text-8xl"
            animate={{
              rotate: [5, -5, 5],
              x: [10, 0, 10]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            <img width={'200px'} className='mt-20' src="/public/drink-photoroom.png" alt="" />

          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 
            className="text-6xl font-black mb-6 tracking-tight"
            style={{
              color: '#52d452',
              textShadow: '0 0 40px #52d452, 0 0 80px #52d452'
            }}
          >
            PAGE NOT FOUND
          </h2>
          
          <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Looks like this page ran out of energy! The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-6 justify-center flex-wrap">
            
          </div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              background: i % 2 === 0 ? '#52d452' : '#00b4d8',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 20px ${i % 2 === 0 ? '#52d452' : '#00b4d8'}`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}

        {/* Error Code Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <div 
            className="inline-block px-8 py-4 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <p className="text-gray-500 text-sm font-mono">
              ERROR CODE: <span className="text-green-400 font-bold">404_ENERGY_NOT_FOUND</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Glitch Effect on Hover */}
      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Pnf;