import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

function Events() {
  const [scrollY, setScrollY] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const events = [
    {
      id: 1,
      title: 'Monster Energy MotoGP',
      category: 'MOTORSPORTS',
      date: 'March 15, 2025',
      location: 'Circuit of the Americas, Austin',
      image: '/carousel 1.jpeg',
      color: '#52d452',
      description: 'Experience the thrill of MotoGP racing with Monster Energy. Watch as the worlds best riders compete at breakneck speeds.'
    },
    {
      id: 2,
      title: 'Monster Energy Supercross',
      category: 'MOTORSPORTS',
      date: 'April 8, 2025',
      location: 'MetLife Stadium, New Jersey',
      image: '/carousel 2.jpeg',
      color: '#00b4d8',
      description: 'The most competitive supercross championship returns. Witness incredible jumps and intense racing action.'
    },
    {
      id: 3,
      title: 'Monster Energy Music Festival',
      category: 'MUSIC',
      date: 'May 20, 2025',
      location: 'Hollywood Bowl, Los Angeles',
      image: '/carousel 3.jpeg',
      color: '#ff006e',
      description: 'Live performances from top artists. Experience the ultimate music festival powered by Monster Energy.'
    },
    {
      id: 4,
      title: 'Monster Energy NASCAR',
      category: 'MOTORSPORTS',
      date: 'June 5, 2025',
      location: 'Daytona International Speedway',
      image: '/carousel 4.jpeg',
      color: '#ff9500',
      description: 'High-speed NASCAR action sponsored by Monster. Feel the roar of engines and the thrill of competition.'
    },
    {
      id: 5,
      title: 'Monster Energy Gaming Tournament',
      category: 'GAMING',
      date: 'July 12, 2025',
      location: 'Online & Las Vegas Convention Center',
      image: '/carousel 5.jpeg',
      color: '#52d452',
      description: 'Elite gaming competition with massive prizes. Watch pro gamers battle for glory and Monster Energy glory.'
    },
    {
      id: 6,
      title: 'Monster Energy BMX Championship',
      category: 'EXTREME',
      date: 'August 18, 2025',
      location: 'Venice Beach, California',
      image: '/carousel 6.jpeg',
      color: '#00b4d8',
      description: 'Watch the best BMX riders compete for glory. Incredible tricks, massive air, pure adrenaline.'
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = events.length - 1;
      if (nextIndex >= events.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <div className="min-h-screen py-32 px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />

      {/* Floating Background Elements */}
      <motion.div 
        className="absolute top-40 left-20 text-9xl font-black opacity-5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{ color: '#52d452' }}
      >
        M
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-black mb-6 tracking-tighter"
            style={{
              color: '#52d452',
              textShadow: '0 0 40px #52d452, 0 0 80px #52d452'
            }}
            animate={{
              textShadow: [
                '0 0 40px #52d452, 0 0 80px #52d452',
                '0 0 60px #52d452, 0 0 120px #52d452',
                '0 0 40px #52d452, 0 0 80px #52d452'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            EVENTS
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-400 font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join the Monster Energy Experience
          </motion.p>
        </motion.div>

        {/* Card Slider Container */}
        <div className="relative h-[600px] flex items-center justify-center mb-20">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="absolute left-0 z-30 p-6 rounded-full"
            style={{
              background: 'rgba(82, 212, 82, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(82, 212, 82, 0.5)',
              boxShadow: '0 0 30px rgba(82, 212, 82, 0.3)'
            }}
          >
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="absolute right-0 z-30 p-6 rounded-full"
            style={{
              background: 'rgba(82, 212, 82, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(82, 212, 82, 0.5)',
              boxShadow: '0 0 30px rgba(82, 212, 82, 0.3)'
            }}
          >
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Cards */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                rotateY: { duration: 0.5 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-4xl cursor-grab active:cursor-grabbing"
              style={{
                perspective: '1000px'
              }}
            >
              <div 
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: `0 20px 60px ${events[currentIndex].color}40`
                }}
              >
                {/* Event Image */}
                <div className="relative h-96 overflow-hidden">
                  <motion.img
                    src={events[currentIndex].image}
                    alt={events[currentIndex].title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 opacity-60"
                    style={{
                      background: `linear-gradient(180deg, transparent 0%, ${events[currentIndex].color}60 100%)`
                    }}
                  />

                  {/* Category Badge */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="absolute top-6 right-6 px-6 py-3 rounded-full text-sm font-black"
                    style={{
                      background: events[currentIndex].color,
                      color: 'white',
                      boxShadow: `0 4px 20px ${events[currentIndex].color}80`
                    }}
                  >
                    {events[currentIndex].category}
                  </motion.div>
                </div>

                {/* Event Details */}
                <div className="p-8">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl font-black mb-4"
                    style={{
                      color: events[currentIndex].color,
                      textShadow: `0 0 30px ${events[currentIndex].color}60`
                    }}
                  >
                    {events[currentIndex].title}
                  </motion.h2>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-6 mb-6"
                  >
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="text-2xl">📅</span>
                      <span className="text-lg font-semibold">{events[currentIndex].date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="text-2xl">📍</span>
                      <span className="text-lg font-semibold">{events[currentIndex].location}</span>
                    </div>
                  </motion.div>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-300 text-lg leading-relaxed mb-8"
                  >
                    {events[currentIndex].description}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-4 rounded-full font-black text-lg"
                      style={{
                        background: `linear-gradient(135deg, ${events[currentIndex].color} 0%, ${events[currentIndex].color}dd 100%)`,
                        color: 'white',
                        boxShadow: `0 4px 30px ${events[currentIndex].color}60`
                      }}
                    >
                      GET TICKETS
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-full font-bold text-lg"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        color: 'white'
                      }}
                    >
                      LEARN MORE
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
            {events.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className="rounded-full transition-all"
                animate={{
                  width: currentIndex === index ? 48 : 12,
                  height: 12,
                }}
                style={{
                  background: currentIndex === index ? events[currentIndex].color : 'rgba(255, 255, 255, 0.3)',
                  boxShadow: currentIndex === index ? `0 0 20px ${events[currentIndex].color}` : 'none'
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="font-black px-16 py-5 rounded-full text-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 60px rgba(82, 212, 82, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #52d452 0%, #3fb83f 100%)',
              color: 'white',
              boxShadow: '0 0 40px rgba(82, 212, 82, 0.6)'
            }}
          >
            VIEW ALL EVENTS
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Events;