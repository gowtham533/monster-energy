import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeNav, setActiveNav] = useState('HOME');

  const navItems = [
    { name: 'HOME', target: 'home' },
    { name: 'FLAVOURS', target: 'flavours' },
    { name: 'PRODUCTS', target: 'products' },
    { name: 'EVENTS', target: 'events' }
  ];

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

  const scrollToSection = (sectionId, navName) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveNav(navName);
    } else {
      console.log('Element not found:', sectionId);
    }
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
          onClick={() => scrollToSection('home', 'HOME')}
        >
          <motion.div 
            className="text-4xl font-black tracking-tighter"
            whileHover={{ scale: 1.05 }}
            style={{
              color: '#52d452',
              textShadow: '0 0 20px #52d452, 0 0 40px #52d452'
            }}
          >
            <img width={'80px'} className='ms-10' src="/public/monster logo.png" alt="" />
          </motion.div>
        </motion.div>

        {/* Navigation Pills Container with Framer Motion */}
        <motion.nav 
          className="hidden md:flex items-center gap-2 rounded-full px-4 py-3 relative"
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
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.target, item.name)}
              className="relative px-7 py-2.5 rounded-full font-bold text-sm z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                color: activeNav === item.name ? 'white' : 'rgba(255, 255, 255, 0.7)',
              }}
            >
              {/* Active background with layout animation */}
              {activeNav === item.name && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #52d452 0%, #3fb83f 100%)',
                    boxShadow: '0 4px 20px rgba(82, 212, 82, 0.5), 0 0 40px rgba(82, 212, 82, 0.3)'
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              
              <span className="relative z-10">{item.name}</span>
            </motion.button>
          ))}
        </motion.nav>

        {/* Explore Button with Framer Motion */}
        <a href='#footer'>
          <motion.button 
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
            {/* Shimmer effect with Framer Motion */}
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
            
            <span className="relative z-10 font-black tracking-wide">ABOUT</span>
          </motion.button>
        </a>
      </div>

      {/* Mobile Menu Button with Animation */}
      <div className="md:hidden absolute right-8 top-1/2 -translate-y-1/2">
        <motion.button 
          className="text-white p-3 rounded-full"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
    </motion.header>
  );
}

export default Header;