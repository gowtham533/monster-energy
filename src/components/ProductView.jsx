import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

// products array
const products = [
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

function ProductView() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="text-center py-40 text-white">Product not found</div>;

  const nutritionFacts = [
    { label: 'Calories', value: '210' },
    { label: 'Total Fat', value: '0g' },
    { label: 'Sodium', value: '370mg' },
    { label: 'Total Carbs', value: '54g' },
    { label: 'Sugars', value: '54g' },
    { label: 'Caffeine', value: '160mg' }
  ];

  return (
    <div className="min-h-screen py-32 px-8 relative bg-black text-white">
      {/* Product Hero */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <motion.img
            src={`/${product.image}`}
            alt={product.name}
            className="w-80 h-80 object-contain"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: `radial-gradient(circle, ${product.color}20 0%, transparent 70%)` }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <h1 className="text-6xl font-black" style={{ color: product.color }}>{product.name}</h1>
          <p className="text-gray-400">{product.description}</p>
        </motion.div>
      </div>

      {/* Nutrition Facts */}
      <motion.div className="mt-20 p-8 rounded-3xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <h2 className="text-3xl font-black mb-6" style={{ color: product.color }}>NUTRITION FACTS</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {nutritionFacts.map(fact => (
            <div key={fact.label} className="p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="text-gray-400 text-sm">{fact.label}</div>
              <div className="text-xl font-black" style={{ color: product.color }}>{fact.value}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ProductView;
