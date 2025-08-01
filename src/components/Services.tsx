'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Travel & Tourism',
    description: 'Discover amazing destinations with our curated travel experiences and expert guides.',
    icon: '🌍',
  },
  {
    title: 'Events Management',
    description: 'Professional planning and execution of corporate events, weddings, and special occasions.',
    icon: '🎉',
  },
  {
    title: 'Catering Services',
    description: 'Exquisite culinary experiences with custom menus for any event or occasion.',
    icon: '🍽️',
  },
  {
    title: 'Hospitality Services',
    description: 'Premium hospitality staffing, training, and management solutions.',
    icon: '🏨',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Discover what we can do for you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
