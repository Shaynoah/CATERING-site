'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Motion */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10" />

        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{
            scale: imageLoaded ? 1 : 1.1,
            opacity: imageLoaded ? 1 : 0,
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/AMBOELI-1-3.png"
            alt="Amboseli Landscape - Experience the beauty of Kenya"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        </motion.div>
      </motion.div>

      {/* Foreground Content */}
      <motion.div
        className="relative z-20 h-full flex items-center justify-center text-white"
        style={{ opacity }}
      >
        <motion.div
          className="max-w-6xl mx-auto text-center px-6 sm:px-8"
          variants={containerVariants as any}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Line */}
          <motion.div variants={itemVariants as any} className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants as any}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block">Welcome to</span>
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Emidawn
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants as any}
            className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-100 font-light"
          >
            Your premier destination for{' '}
            <span className="font-medium text-white">travel</span>,{' '}
            <span className="font-medium text-white">events</span>, and{' '}
            <span className="font-medium text-white">hospitality</span> services
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants as any}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              variants={buttonVariants as any}
              whileHover="hover"
              whileTap="tap"
              className="group bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold 
                         transition-all duration-300 shadow-2xl hover:shadow-white/20 
                         border border-white/20 backdrop-blur-sm relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              variants={buttonVariants as any}
              whileHover="hover"
              whileTap="tap"
              className="group border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold 
                         transition-all duration-300 hover:bg-white hover:text-gray-900 
                         backdrop-blur-sm relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Our Story
              </span>
            </motion.button>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={itemVariants as any}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span>1000+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors duration-300">
          <span className="text-sm font-medium tracking-wider uppercase">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center relative overflow-hidden"
            animate={{
              borderColor: ['rgba(255,255,255,0.6)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0.6)'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </motion.div>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </motion.div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" />
    </div>
  );
};

export default Hero;
