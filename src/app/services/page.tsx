'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const services = [
  {
    title: "Catering Services",
    path: "/services/catering",
    description: "Professional catering for corporate events, weddings, and private parties. We deliver exceptional culinary experiences tailored to your needs.",
    features: [
      "Corporate Events",
      "Wedding Catering",
      "Private Parties",
      "Custom Menu Planning",
      "Professional Staff"
    ],
    image: "/images/WhatsApp Image 2025-07-31 at 12.25.00 (1).jpeg",
    gallery: [
      'WhatsApp Image 2025-07-31 at 12.25.00 (2).jpeg',
      'WhatsApp Image 2025-07-31 at 12.25.00 (3).jpeg'
    ],
    video: 'WhatsApp Video 2025-07-31 at 12.06.14.mp4'
  },
  {
    title: "Event Management",
    path: "/services/events",
    description: "End-to-end event planning and management services for all occasions. From concept to execution, we make your vision come to life.",
    features: [
      "Corporate Events",
      "Weddings",
      "Social Gatherings",
      "Product Launches",
      "Conferences"
    ],
    image: "/images/WhatsApp Image 2025-07-31 at 12.25.00.jpeg",
    gallery: [
      'WhatsApp Image 2025-07-31 at 12.25.01 (1).jpeg',
      'WhatsApp Image 2025-07-31 at 12.25.01.jpeg'
    ],
    video: 'WhatsApp Video 2025-07-31 at 12.06.15 (1).mp4'
  },
  {
    title: "Travel & Tourism",
    path: "/services/travel",
    description: "Curated travel experiences and tourism services. Discover the beauty of destinations with our expert guidance.",
    features: [
      "Custom Travel Packages",
      "Group Tours",
      "Business Travel",
      "Adventure Tours",
      "Luxury Experiences"
    ],
    image: "/images/WhatsApp Image 2025-07-31 at 12.28.32 (1).jpeg",
    gallery: [
      'WhatsApp Image 2025-07-31 at 12.28.32.jpeg',
      'WhatsApp Image 2025-07-31 at 12.24.59.jpeg'
    ],
    video: 'WhatsApp Video 2025-07-31 at 12.06.15 (2).mp4'
  },
  {
    title: "Hospitality Management",
    path: "/services/hospitality",
    description: "Professional hospitality management services ensuring exceptional guest experiences and operational excellence.",
    features: [
      "Hotel Management",
      "Staff Training",
      "Quality Assurance",
      "Guest Services",
      "Facility Management"
    ],
    image: "/images/WhatsApp Image 2025-07-31 at 12.25.00 (2).jpeg",
    gallery: [
      'WhatsApp Image 2025-07-31 at 12.25.00 (3).jpeg',
      'WhatsApp Image 2025-07-31 at 12.25.00.jpeg'
    ],
    video: 'WhatsApp Video 2025-07-31 at 12.06.15.mp4'
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/services-hero.jpg"
          alt="Emidawn Services"
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
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
              Comprehensive solutions for travel, events, catering, and hospitality
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
            Excellence in Every Service
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Emidawn, we offer a comprehensive suite of services designed to exceed your expectations.
            From world-class catering to expert event management, we deliver exceptional experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Gallery */}
                  <div className="grid grid-cols-2 gap-4">
                    {service.gallery.map((img, idx) => (
                      <div key={idx} className="relative h-[150px] rounded-lg overflow-hidden">
                        <Image
                          src={`/images/${img}`}
                          alt={`${service.title} Gallery ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  {/* Video */}
                  <div className="relative rounded-lg overflow-hidden aspect-video">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      muted
                      loop
                      poster={service.image}
                    >
                      <source src={`/images/${service.video}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.path}
                    className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 bg-primary/5 rounded-2xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Contact us today to discuss how we can help make your next event, travel experience, or hospitality needs exceptional.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
