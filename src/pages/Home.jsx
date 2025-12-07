import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Interactive Cards Component
function InteractiveCards() {
  const [active, setActive] = useState(4);

  const cards = [
    { id: 1, img: "/rehab.png", name: "REHAB TEA" },
    { id: 2, img: "/ultra zero.png", name: "ULTRA ZERO" },
    { id: 3, img: "/ultra red.png", name: "ULTRA RED" },
    { id: 4, img: "/ultra blue.png", name: "ULTRA BLUE" },
    { id: 5, img: "/drink-photoroom.png", name: "MONSTER ORIGINAL" },
    { id: 6, img: "//pipeline punch.png", name: "PIPELINE PUNCH" },
    { id: 7, img: "/paradise-photoroom.png", name: "ULTRA PARADISE" },
    { id: 8, img: "/mango.png", name: "MANGO LOCO" },
    { id: 9, img: "/lo care-photoroom.png", name: "LO-CARB" },
    { id: 10, img: "/violet-photoroom.png", name: "ULTRA VIOLET" },
  ];

  return (
    <div className="relative flex justify-center items-center h-[450px]">
      {cards.map((card, index) => {
        const offset = index - active;
        const isActive = index === active;

        return (
          <motion.div
            key={card.id}
            onMouseEnter={() => setActive(index)}
            animate={{
              x: offset * 240,
              scale: isActive ? 1.35 : 0.9,
              zIndex: isActive ? 10 : 1,
              opacity: isActive ? 1 : 0.7,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 30,
              mass: 1.2,
            }}
            className="absolute w-[240px] h-[380px] bg-[#111] rounded-3xl p-3 shadow-2xl cursor-pointer flex flex-col items-center"
          >
            <img
              src={card.img}
              alt={card.name}
              className="w-full h-[340px] object-cover rounded-2xl"
            />
            <p className="text-white mt-2 text-center font-bold">{card.name}</p>
          </motion.div>
        );
      })}
    </div>
  );
}


function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a4d1a 100%)',
      title: 'UNLEASH THE BEAST',
      subtitle: 'Original Green Monster Energy',
      accent: '#52d452'
    },
    {
      bg: 'linear-gradient(135deg, #000814 0%, #001d3d 100%)',
      title: 'ULTRA PARADISE',
      subtitle: 'Zero Sugar. Maximum Flavor.',
      accent: '#00b4d8'
    },
    {
      bg: 'linear-gradient(135deg, #1a0000 0%, #4d0000 100%)',
      title: 'PIPELINE PUNCH',
      subtitle: 'The Perfect Blend of Passion Fruit',
      accent: '#ff006e'
    },
    {
      bg: 'linear-gradient(135deg, #1a0a00 0%, #4d2600 100%)',
      title: 'JAVA MONSTER',
      subtitle: 'Coffee + Energy',
      accent: '#ff9500'
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* Intro Page - Monster Splash */}
      <div id="home" className="relative h-screen overflow-hidden bg-gradient-to-b from-black via-cyan-950 to-black">
        {/* Water Effect Background */}
        <div className="absolute inset-0">
          {/* Animated water ripples */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-cyan-400/30 rounded-full"
              style={{
                width: `${300 + i * 200}px`,
                height: `${300 + i * 200}px`,
                animation: `ripple ${3 + i * 0.5}s ease-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          {/* Monster Can Dropping Animation */}
          <div className="relative mb-12 flex mt-10">
            <div
              className="text-9xl transform"
              style={{
                animation: 'canDrop 2s ease-out forwards',
                filter: 'drop-shadow(0 0 40px rgba(82, 212, 82, 0.8))'
              }}
            >
              <img width={'90px'} className='mt-20 me-20' src="/ultra zero.png" alt="" />
            </div>
            <div
              className="text-9xl transform"
              style={{
                animation: 'canDrop 1s ease-out forwards',
                filter: 'drop-shadow(0 0 40px rgba(82, 212, 82, 0.8))'
              }}
            >
              <img width={'250px'} className='mt-20' src="/drink-photoroom.png" alt="" />
            </div>
            <div
              className="text-9xl transform"
              style={{
                animation: 'canDrop 2.5s ease-out forwards',
                filter: 'drop-shadow(0 0 40px rgba(82, 212, 82, 0.8))'
              }}
            >
              <img width={'200px'} className='mt-20' src="/ultra red.png" alt="" />
            </div>
            
            {/* Splash Effect */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
              <div 
                className="w-64 h-32"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
                  animation: 'splash 2s ease-out 1.5s forwards',
                  opacity: 0
                }}
              />
            </div>

            {/* Water Droplets */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-full left-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  animation: `droplet 1.5s ease-out ${1.5 + i * 0.1}s forwards`,
                  opacity: 0,
                  left: `${50 + (i - 4) * 15}%`
                }}
              />
            ))}
          </div>

          {/* Title */}
          <h1 
            className="text-6xl md:text-8xl font-black mb-6 text-center"
            style={{
              color: '#52d452',
              textShadow: '0 0 40px #52d452, 0 0 80px #52d452',
              animation: 'fadeInUp 1s ease-out 2s forwards',
              opacity: 0
            }}
          >
            DIVE INTO ENERGY
          </h1>
          
          <p 
            className="text-xl md:text-3xl text-cyan-300 font-light tracking-wider mb-12 text-center"
            style={{
              animation: 'fadeInUp 1s ease-out 2.3s forwards',
              opacity: 0
            }}
          >
            Refreshing. Powerful. Unstoppable.
          </p>

          {/* CTA Button */}
          <button 
            className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-bold px-12 py-4 rounded-full text-lg transition-all hover:scale-105"
            style={{
              boxShadow: '0 0 40px rgba(82, 212, 82, 0.6)',
              animation: 'fadeInUp 1s ease-out 2.6s forwards',
              opacity: 0
            }}
          >
            EXPERIENCE THE SPLASH
          </button>
        </div>

        {/* Bubbles Animation */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              animation: `bubble ${5 + Math.random() * 5}s ease-in infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes canDrop {
            0% {
              transform: translateY(-1000px) rotate(0deg);
              opacity: 0;
            }
            60% {
              transform: translateY(0) rotate(360deg);
              opacity: 1;
            }
            75% {
              transform: translateY(-30px) rotate(380deg);
            }
            100% {
              transform: translateY(0) rotate(360deg);
              opacity: 1;
            }
          }

          @keyframes splash {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.5);
              opacity: 0.8;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          @keyframes droplet {
            0% {
              transform: translateY(0) translateX(0);
              opacity: 1;
            }
            100% {
              transform: translateY(100px) translateX(${Math.random() * 50 - 25}px);
              opacity: 0;
            }
          }

          @keyframes ripple {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0;
            }
          }

          @keyframes bubble {
            0% {
              transform: translateY(0) scale(0);
              opacity: 0;
            }
            10% {
              opacity: 0.5;
            }
            90% {
              opacity: 0.5;
            }
            100% {
              transform: translateY(-100vh) scale(1);
              opacity: 0;
            }
          }

          @keyframes fadeInUp {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>
      </div>

      {/* Hero Slider Section */}
      <div id="flavours" className="relative h-screen overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-all duration-1000 ease-in-out"
            style={{
              background: slide.bg,
              opacity: currentSlide === idx ? 1 : 0,
              transform: currentSlide === idx ? 'scale(1)' : 'scale(1.1)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center z-10 px-4">
                <h1 
                  className="text-7xl md:text-9xl font-black mb-6 tracking-tighter"
                  style={{
                    textShadow: `0 0 40px ${slide.accent}, 0 0 80px ${slide.accent}`,
                    color: slide.accent,
                    transform: currentSlide === idx ? 'translateY(0)' : 'translateY(50px)',
                    opacity: currentSlide === idx ? 1 : 0,
                    transition: 'all 1s ease-out 0.3s'
                  }}
                >
                  {slide.title}
                </h1>
                <p 
                  className="text-2xl md:text-4xl font-light tracking-wider"
                  style={{
                    transform: currentSlide === idx ? 'translateY(0)' : 'translateY(50px)',
                    opacity: currentSlide === idx ? 1 : 0,
                    transition: 'all 1s ease-out 0.6s'
                  }}
                >
                  <p className="text-2xl md:text-4xl font-light tracking-wider text-gray-400">
                    {slide.subtitle}
                  </p>

                </p>
              </div>
            </div>

            {/* Animated Can Silhouette */}
            <div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
              style={{
                width: '400px',
                height: '600px',
                background: `radial-gradient(ellipse at center, ${slide.accent}40 0%, transparent 70%)`,
                transform: currentSlide === idx 
                  ? 'translateX(-50%) translateY(0) rotate(0deg)' 
                  : 'translateX(-50%) translateY(100px) rotate(10deg)',
                opacity: currentSlide === idx ? 0.6 : 0,
                transition: 'all 1.5s ease-out'
              }}
            />
          </div>
        ))}

        {/* Slider Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all"
        >
          <ChevronRight size={32} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className="transition-all duration-300"
              style={{
                width: currentSlide === idx ? '48px' : '12px',
                height: '12px',
                borderRadius: '6px',
                background: currentSlide === idx ? slides[idx].accent : 'white',
                opacity: currentSlide === idx ? 1 : 0.5
              }}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* Parallax Section 1  */}
      <section
        id="products"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20"
      >
        {/* Background Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #000000 0%, #0a3d0a 50%, #001500 100%)",
            transform: `translateY(${scrollY * 0.25}px)`,
          }}
        />

        {/* Floating M */}
        <div
          className="absolute top-20 right-20 text-9xl font-black opacity-10 pointer-events-none"
          style={{
            transform: `rotate(${scrollY * 0.1}deg) translateY(${scrollY * 0.3}px)`,
            color: "#52d452",
          }}
        >
          M
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6">

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-green-500 drop-shadow-lg">
            FUEL YOUR FIRE
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-10">
            Monster Energy is way more than an energy drink. Led by our athletes, musicians,
            employees, distributors and fans, Monster is a lifestyle in a can!
          </p>

          {/* Button */}
          <Link to={'/flavours'} className="bg-green-500 hover:bg-green-400 text-black font-bold px-12 py-4 rounded-full text-lg transition-all hover:scale-105 mb-24 shadow-xl">
            EXPLORE PRODUCTS
          </Link>

          {/* Glow Can */}
          <div
            className="relative flex justify-center mb-24"
            style={{
              transform: `translateY(${scrollY * 0.15}px) scale(${1 + scrollY * 0.0002})`,
            }}
          >
            <div className="w-72 h-72 bg-green-500/30 rounded-full blur-3xl absolute" />
            <div className="text-8xl opacity-30">🥤</div>
          </div>

          {/* Cards Slider */}
          <InteractiveCards />
        </div>
      </section>




      {/* Parallax Section 2 */}
      <div id="athletes" className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black"
          style={{
            transform: `translateY(${(scrollY - 1000) * 0.4}px)`
          }}
        />
        <div 
          className="absolute bottom-20 left-20 text-9xl font-black opacity-10"
          style={{
            transform: `rotate(${-scrollY * 0.05}deg)`,
            color: '#00b4d8'
          }}
        >
          ULTRA
        </div>
        <div className="container mx-auto px-8 z-10 relative">
          <div className="grid md:grid-cols-3 gap-8">
  {[
    { name: 'DRAGON', image: '/dragon.png', colorClass: 'text-pink-400' },
    { name: 'COTTON CANDY', image: '/cotton.png', colorClass: 'text-blue-400' },
    { name: 'RIO', image: '/rio.png', colorClass: 'text-yellow-400' },
  ].map((flavor, idx) => (
    <div
      key={idx}
      className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all cursor-pointer border border-white/10"
      style={{
        transform: `translateY(${(scrollY - 1200) * (0.05 * (idx + 1))}px)`,
      }}
    >
      <img
        src={flavor.image}
        alt={flavor.name}
        className="w-24 h-24 mb-4 object-contain"
      />
      <h3 className={`text-3xl font-bold mb-3 ${flavor.colorClass}`}>
        {flavor.name}
      </h3>
      <p className="text-gray-400">Experience the legendary taste and energy boost.</p>
    </div>
  ))}
</div>


        </div>
      </div>

      {/* Final CTA Section */}
      <div id="events" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, #1a4d1a 0%, #0a0a0a 100%)',
            transform: `scale(${1 + scrollY * 0.0001})`
          }}
        />
        
        <div className="text-center z-10 px-4">
          <h2 
            className="text-8xl font-black mb-8"
            style={{
              textShadow: '0 0 60px #52d452',
              color: '#52d452'
            }}
          >
            JOIN THE TEAM
          </h2>
          <p className="text-2xl mb-12 text-gray-300">Follow us and stay connected with Monster Energy</p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="bg-white text-black font-bold px-10 py-4 rounded-full hover:bg-gray-200 transition-all hover:scale-105">
              INSTAGRAM
            </button>
            <button className="bg-white text-black font-bold px-10 py-4 rounded-full hover:bg-gray-200 transition-all hover:scale-105">
              YOUTUBE
            </button>
            <button className="bg-white text-black font-bold px-10 py-4 rounded-full hover:bg-gray-200 transition-all hover:scale-105">
              TWITTER
            </button>
          </div>
          
        </div>
        <Link to="/events">
      <motion.button
        className="flex items-center gap-3 px-6 py-3 rounded-full font-bold text-white"
        style={{
          background: 'linear-gradient(135deg, #52d452 0%, #3fb83f 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <span>Explore Events</span>
        {/* Continuously animated arrow */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8" style={{marginRight:'-150px'}}
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </motion.svg>
      </motion.button>
        </Link>
            <div>
              
            </div>
      </div>
    </>
  );
}

export default Home;