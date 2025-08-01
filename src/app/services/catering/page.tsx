'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const cateringServices = [
  {
    title: "Corporate Events",
    description: "Elevate your corporate gatherings with our professional catering services. From business meetings to large conferences.",
    features: [
      "Custom menu planning",
      "Professional service staff",
      "Corporate lunch boxes",
      "Conference refreshments",
      "Gala dinner service"
    ]
  },
  {
    title: "Wedding & Special Events",
    description: "Make your special day memorable with our exquisite wedding and event catering services.",
    features: [
      "Customized wedding menus",
      "Cocktail reception service",
      "Wedding cake services",
      "Buffet arrangements",
      "Full table service"
    ]
  },
  {
    title: "Private Parties",
    description: "Transform your private gatherings into extraordinary experiences with our bespoke catering solutions.",
    features: [
      "Themed menu options",
      "Personal chef services",
      "Mobile bar services",
      "Outdoor catering",
      "Live cooking stations"
    ]
  }
];

const CateringPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/catering-hero.jpg"
          alt="Emidawn Catering Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Catering Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
              Exquisite cuisine and impeccable service for your special occasions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-primary mb-6">
            Exceptional Catering Experience
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Emidawn, we bring culinary excellence to your events. Our expert team crafts 
            memorable dining experiences with attention to every detail, from menu planning 
            to execution.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cateringServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative h-48">
                <Image
                  src={`/images/catering-${index + 1}.jpg`}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-center text-primary mb-8">
            Our Culinary Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'WhatsApp Image 2025-07-31 at 12.25.00 (1).jpeg',
              'WhatsApp Image 2025-07-31 at 12.25.00 (2).jpeg',
              'WhatsApp Image 2025-07-31 at 12.25.00 (3).jpeg',
              'WhatsApp Image 2025-07-31 at 12.25.00.jpeg',
              'WhatsApp Image 2025-07-31 at 12.25.01 (1).jpeg',
              'WhatsApp Image 2025-07-31 at 12.25.01.jpeg',
              'WhatsApp Image 2025-07-31 at 12.28.32 (1).jpeg',
              'WhatsApp Image 2025-07-31 at 12.28.32.jpeg'
            ].map((image, index) => (
              <div key={image} className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src={`/images/${image}`}
                  alt={`Catering Service ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Video Showcase */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-center text-primary mb-8">
            Experience Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'WhatsApp Video 2025-07-31 at 12.06.14.mp4',
              'WhatsApp Video 2025-07-31 at 12.06.15 (1).mp4',
              'WhatsApp Video 2025-07-31 at 12.06.15 (2).mp4',
              'WhatsApp Video 2025-07-31 at 12.06.15.mp4'
            ].map((video, index) => (
              <div key={video} className="relative rounded-lg overflow-hidden aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  muted
                  loop
                  poster={`/images/WhatsApp Image 2025-07-31 at 12.25.0${index % 2}.jpeg`}
                >
                  <source src={`/images/${video}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="text-center bg-primary/5 rounded-2xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Contact us to discuss your catering needs and let us create an unforgettable experience for your guests.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CateringPage;
