'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const eventServices = [
  {
    title: "Event Management",
    description: "Professional event planning and coordination for all occasions.",
    features: [
      "Corporate Events",
      "Weddings",
      "Social Gatherings",
      "Product Launches",
      "Conferences"
    ]
  },
  {
    title: "Catering Services",
    description: "Exquisite culinary experiences tailored to your event needs.",
    features: [
      "Custom Menu Planning",
      "Professional Service Staff",
      "Wedding Catering",
      "Corporate Catering",
      "Private Parties"
    ]
  }
];

const EventsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/WhatsApp Image 2025-07-31 at 12.25.00 (1).jpeg"
          alt="Event Management & Catering Services"
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
              Event Management & Catering
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
              Creating memorable experiences with exceptional service
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {eventServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg shadow-lg p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Featured Showcase */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Exceptional Moments
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 h-[800px]">
            {/* Main Feature Image */}
            <div className="col-span-12 md:col-span-8 h-96 md:h-full relative rounded-2xl overflow-hidden group">
              <Image
                src="/images/WhatsApp Image 2025-07-31 at 12.25.00 (1).jpeg"
                alt="Luxury Event Setup"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Luxury Event Setups</h3>
                  <p className="text-white/90">Creating enchanting atmospheres for unforgettable celebrations</p>
                </div>
              </div>
            </div>
            
            {/* Side Gallery */}
            <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-4 md:gap-6 h-96 md:h-full">
              <div className="relative rounded-2xl overflow-hidden group">
                <Image
                  src="/images/WhatsApp Image 2025-07-31 at 12.25.00 (2).jpeg"
                  alt="Exquisite Catering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Exquisite Catering</h3>
                    <p className="text-sm text-white/90">Culinary excellence in every detail</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group">
                <Image
                  src="/images/WhatsApp Image 2025-07-31 at 12.25.00 (3).jpeg"
                  alt="Elegant Decor"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Elegant Decor</h3>
                    <p className="text-sm text-white/90">Transforming spaces into magical settings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Showcase */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Our Portfolio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                image: 'WhatsApp Image 2025-07-31 at 12.25.00.jpeg',
                title: 'Corporate Events',
                description: 'Professional gatherings with impeccable service'
              },
              {
                image: 'WhatsApp Image 2025-07-31 at 12.25.01 (1).jpeg',
                title: 'Wedding Celebrations',
                description: 'Making your special day perfect'
              },
              {
                image: 'WhatsApp Image 2025-07-31 at 12.25.01.jpeg',
                title: 'Gourmet Catering',
                description: 'Exceptional culinary experiences'
              },
              {
                image: 'WhatsApp Image 2025-07-31 at 12.28.32.jpeg',
                title: 'Theme Events',
                description: 'Customized experiences for every occasion'
              }
            ].map((item, index) => (
              <motion.div
                key={item.image}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={`/images/${item.image}`}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Showcase */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Experience the Magic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                video: 'WhatsApp Video 2025-07-31 at 12.06.14.mp4',
                title: 'Grand Celebrations',
                description: 'Witness the grandeur of our event productions'
              },
              {
                video: 'WhatsApp Video 2025-07-31 at 12.06.15 (1).mp4',
                title: 'Culinary Excellence',
                description: 'Behind the scenes of our catering mastery'
              }
            ].map((item, index) => (
              <div key={item.video} className="space-y-4">
                <div className="relative rounded-xl overflow-hidden aspect-video group">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    muted
                    loop
                    poster={`/images/WhatsApp Image 2025-07-31 at 12.25.0${index}.jpeg`}
                  >
                    <source src={`/images/${item.video}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
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
            Contact us to discuss how we can make your next event extraordinary.
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

export default EventsPage;
