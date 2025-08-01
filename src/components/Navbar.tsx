'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleServices = () => {
    setServicesOpen(prev => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 py-3' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Logo Circle with Dynamic Background */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:shadow-lg ${
                scrolled 
                  ? 'bg-gradient-to-br from-slate-800 to-slate-900 shadow-md' 
                  : 'bg-gradient-to-br from-slate-700/90 to-slate-900/90 backdrop-blur-sm'
              }`}>
                {/* Enhanced Sun Icon */}
                <div className="relative">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {/* Animated Sun rays */}
                    <motion.div 
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-0.5 h-2 bg-orange-500 rounded-full opacity-80"
                          style={{
                            top: '0px',
                            left: '50%',
                            transformOrigin: '50% 12px',
                            transform: `translateX(-50%) rotate(${i * 30}deg)`,
                          }}
                        />
                      ))}
                    </motion.div>
                    {/* Sun center with pulse */}
                    <motion.div 
                      className="w-2 h-2 bg-orange-500 rounded-full relative z-10"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Brand Text with Enhanced Typography */}
            <div className="flex flex-col">
              <motion.span 
                className={`text-xl font-bold tracking-tight transition-all duration-500 ${
                  scrolled ? 'text-slate-800' : 'text-white drop-shadow-lg'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                EMIDAWN
              </motion.span>
              <span className={`text-xs font-medium tracking-widest transition-all duration-500 ${
                scrolled ? 'text-slate-600' : 'text-white/90'
              }`}>
               
              </span>
            </div>
          </Link>

          {/* Enhanced Navigation Links */}
          <div className="hidden md:flex space-x-1 items-center relative">
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <motion.button
                onClick={toggleServices}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-1 ${
                  scrolled
                    ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Services</span>
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>

              {/* Enhanced Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ 
                  opacity: servicesOpen ? 1 : 0, 
                  y: servicesOpen ? 0 : -10,
                  scale: servicesOpen ? 1 : 0.95
                }}
                transition={{ duration: 0.2 }}
                className={`absolute top-12 left-0 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-gray-200/20 p-2 space-y-1 z-50 min-w-[220px] ${
                  servicesOpen ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
              >
                {[
                  { href: '/services/catering', label: 'Catering Services', icon: '🍽️' },
                  { href: '/services/tourism', label: 'Tourism & Travel', icon: '✈️' },
                  { href: '/services/hospitality', label: 'Hospitality', icon: '🏨' }
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: servicesOpen ? 1 : 0, x: servicesOpen ? 0 : -10 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center space-x-3 text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 px-4 py-3 rounded-lg font-medium transition-all duration-200 group"
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Other Navigation Links */}
            {[
              { href: '/destinations', label: 'Destinations' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/about', label: 'About' }
            ].map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href={item.href} 
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    scrolled
                      ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Enhanced CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  scrolled
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
                    : 'bg-white text-slate-800 hover:bg-gray-50 backdrop-blur-sm'
                }`}
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button 
            onClick={toggleMobileMenu}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <motion.span 
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                } ${scrolled ? 'bg-slate-700' : 'bg-white'}`}
                animate={{ 
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 6 : 0 
                }}
              />
              <motion.span 
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-slate-700' : 'bg-white'
                }`}
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              />
              <motion.span 
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                } ${scrolled ? 'bg-slate-700' : 'bg-white'}`}
                animate={{ 
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -6 : 0 
                }}
              />
            </div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: mobileMenuOpen ? 'auto' : 0, 
            opacity: mobileMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className={`py-6 space-y-2 border-t mt-4 ${
            scrolled ? 'border-gray-200/20' : 'border-white/20'
          }`}>
            {/* Mobile Services */}
            <div className="space-y-2">
              <button
                onClick={toggleServices}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${
                  scrolled
                    ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>Services</span>
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="pl-4 space-y-1"
                >
                  {[
                    { href: '/services/catering', label: 'Catering Services' },
                    { href: '/services/tourism', label: 'Tourism & Travel' },
                    { href: '/services/hospitality', label: 'Hospitality' }
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setServicesOpen(false);
                      }}
                      className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        scrolled
                          ? 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Other Mobile Links */}
            {[
              { href: '/destinations', label: 'Destinations' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/about', label: 'About' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  scrolled
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
                    : 'bg-white text-slate-800 hover:bg-gray-50'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient line */}
      <motion.div 
        className="h-0.5 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.nav>
  );
};

export default Navbar;