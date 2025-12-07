import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function PnfHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <motion.header 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo with Animation */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleHomeClick}
        >
          <motion.div 
            className="text-4xl font-black tracking-tighter"
            whileHover={{ scale: 1.05 }}
            style={{
              color: '#52d452',
              textShadow: '0 0 20px #52d452, 0 0 40px #52d452'
            }}
          >
            <img width={'80px'} className='ms-10' src="/monster logo.png" alt="" />
          </motion.div>
        </motion.div>

        {/* Navigation Pills Container */}
        <motion.nav 
          className="hidden md:flex items-center gap-3 rounded-full px-4 py-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Home Icon Button */}
          <motion.button
            onClick={handleHomeClick}
            className="p-3 rounded-full"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
          </motion.button>

          {/* Events Pill */}
          <motion.div
            className="px-7 py-2.5 rounded-full font-bold text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, #52d452 0%, #3fb83f 100%)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(82, 212, 82, 0.5), 0 0 40px rgba(82, 212, 82, 0.3)'
            }}
          >
            HOME
          </motion.div>
        </motion.nav>

        {/* Explore Button */}
        <motion.button 
          onClick={handleHomeClick}
          className="relative font-bold px-10 py-3.5 rounded-full overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 50px rgba(82, 212, 82, 0.8), 0 8px 30px rgba(82, 212, 82, 0.4)'
          }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: 'linear-gradient(135deg, #52d452 0%, #3fb83f 100%)',
            color: 'white',
            boxShadow: '0 0 40px rgba(82, 212, 82, 0.6), 0 8px 24px rgba(82, 212, 82, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          {/* Shimmer effect */}
          <motion.span 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            }}
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          
          <span className="relative z-10 font-black tracking-wide">EXPLORE</span>
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden absolute right-8 top-1/2 -translate-y-1/2">
        <motion.button 
          onClick={handleHomeClick}
          className="text-white p-3 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </motion.button>
      </div>
    </motion.header>
  );
}

export default PnfHeader;