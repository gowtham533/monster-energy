import React from 'react';

function Footer() {
  return (
    <footer id='footer' className="relative bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div 
              className="text-4xl font-black tracking-tighter mb-4"
              style={{
                color: '#52d452',
                textShadow: '0 0 20px #52d452'
              }}
            >
              MONSTER
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Unleash The Beast. Monster Energy is the perfect companion for those who live life to the fullest.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">Energy Drinks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">Ultra Series</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">Java Monster</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">Juice Monster</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">Hydro</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">Store Locator</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">CONNECT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm no-underline">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © 2024 Monster Energy Company. All Rights Reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-green-400 transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-green-400 transition-colors no-underline">Terms of Use</a>
            <a href="#" className="text-gray-500 hover:text-green-400 transition-colors no-underline">Cookie Policy</a>
          </div>
        </div>

        {/* Warning Message */}
        <div className="mt-8 text-center text-gray-600 text-xs">
          <p>WARNING: Not recommended for children, pregnant or nursing women, or people sensitive to caffeine.</p>
        </div>
      </div>

      {/* Glow Effect */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #52d452 0%, transparent 70%)'
        }}
      />
    </footer>
  );
}

export default Footer;