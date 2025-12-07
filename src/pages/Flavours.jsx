import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Flavours() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const flavours = [
  {
    id: 1,
    name: 'Original Green',
    description: 'The flavor that started it all. Bold, refreshing, and unstoppable.',
    color: '#52d452',
    image: 'public/drink-photoroom.png',
    gradient: 'linear-gradient(135deg, #1a3300 0%, #4d9900 100%)'
  },
  {
    id: 2,
    name: 'Ultra Paradise',
    description: 'Zero sugar, maximum flavor. Tropical paradise in every sip.',
    color: '#00b4d8',
    image: 'public/paradise-photoroom.png',
    gradient: 'linear-gradient(135deg, #00334d 0%, #00b4d8 100%)'
  },
  {
    id: 3,
    name: 'Pipeline Punch',
    description: 'Passion fruit, orange, and guava. The perfect punch.',
    color: '#ff006e',
    image: 'public/pipeline punch.png',
    gradient: 'linear-gradient(135deg, #1a0000 0%, #4d0000 100%)'
  },
  {
  id: 4,
  name: 'Zero Ultra',
  description: 'Bold, deep flavor with zero sugar for the ultimate blackout.',
  color: '#ffffff', 
  image: 'public/ultra zero.png',
  gradient: 'linear-gradient(135deg, #1a1a1a 0%, #4d4d4d 100%)'
  },
  {
    id: 5,
    name: 'Ultra Violet',
    description: 'Smooth violet flavor with an energizing kick.',
    color: '#7f00ff',
    image: 'public/violet-photoroom.png',
    gradient: 'linear-gradient(135deg, #330066 0%, #7f00ff 100%)'
  },
  {
    id: 6,
    name: 'Ultra Blue',
    description: 'Refreshing blue flavor to power through your day.',
    color: '#007bff',
    image: 'public/ultra blue.png',
    gradient: 'linear-gradient(135deg, #001a33 0%, #007bff 100%)'
  },
  {
    id: 7,
    name: 'Ultra Red',
    description: 'Intense red flavor that ignites your energy.',
    color: '#ff0000',
    image: 'public/ultra red.png',
    gradient: 'linear-gradient(135deg, #330000 0%, #ff0000 100%)'
  },
  {
    id: 8,
    name: 'Ultra Sunrise',
    description: 'Orange sunrise flavor for a vibrant start.',
    color: '#ff7f00',
    image: 'public/sunrise.png',
    gradient: 'linear-gradient(135deg, #663300 0%, #ff7f00 100%)'
  },
  {
    id: 9,
    name: 'Ultra Rosa',
    description: 'Delicate pink flavor with a subtle sweetness.',
    color: '#ff66b2',
    image: 'public/ultra rosa.png',
    gradient: 'linear-gradient(135deg, #660033 0%, #ff66b2 100%)'
  },
  {
    id: 10,
    name: 'Lo Care Blue',
    description: 'Low-carb blue flavor for a refreshing boost without the sugar.',
    color: '#1E90FF', 
    image: 'public/lo care-photoroom.png',
    gradient: 'linear-gradient(135deg, #001a33 0%, #1E90FF 100%)'
  },
  {
    id: 11,
    name: 'Mango Loco',
    description: 'Tropical mango flavor with a wild twist.',
    color: '#FFD700', 
    image: 'public/mango.png',
    gradient: 'linear-gradient(135deg, #665500 0%, #FFD700 100%)'
  },
  {
    id: 12,
    name: 'Rehab Lemonade Tea',
    description: 'Refreshing lemonade tea flavor to revive your senses.',
    color: '#FACC15', 
    image: 'public/rehab.png',
    gradient: 'linear-gradient(135deg, #665500 0%, #FACC15 100%)'
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen py-32 px-8 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter" style={{ color: '#52d452' }}>
            OUR FLAVOURS
          </motion.h1>
          <motion.p className="text-2xl text-gray-400 font-light tracking-wider" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Discover Your Next Obsession
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
          {flavours.map((flavour) => (
            <motion.div
              key={flavour.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.98 }}
              className="relative rounded-3xl overflow-hidden cursor-pointer group"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300" style={{ background: flavour.gradient }} />

              <div className="relative p-8 flex flex-col items-center text-center">
                {/* Product Image */}
                <motion.img 
                  src={`/${flavour.image}`} 
                  alt={flavour.name} 
                  className="w-40 h-40 mb-6 object-contain" 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <h3 className="text-3xl font-black mb-4 tracking-tight" style={{ color: flavour.color }}>{flavour.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{flavour.description}</p>

                {/* Redirect Button */}
                <motion.button
                  className="font-bold px-8 py-3 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: `linear-gradient(135deg, ${flavour.color} 0%, ${flavour.color}dd 100%)`,
                    color: 'white',
                    boxShadow: `0 4px 20px ${flavour.color}60`
                  }}
                  onClick={() => navigate(`/product/${flavour.id}/view`)}
                >
                  TRY NOW
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Flavours;
