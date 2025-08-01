'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: 'Emidawn transformed our corporate event into an unforgettable experience. Their attention to detail and professional service was outstanding!',
    author: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Tech Innovations Inc.'
  },
  {
    quote: 'The best travel and event planning service we\'ve ever worked with. They handled everything perfectly from start to finish.',
    author: 'Michael Chen',
    role: 'CEO',
    company: 'Global Solutions'
  },
  {
    quote: 'Their catering service is exceptional. The food was incredible and the presentation was amazing. Our guests couldn\'t stop talking about it!',
    author: 'Emily Rodriguez',
    role: 'Event Coordinator',
    company: 'Creative Events'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative h-[400px] w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: current === index ? 1 : 0,
                x: current === index ? 0 : 100,
                zIndex: current === index ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg h-full flex flex-col justify-center">
                <div className="text-5xl text-primary mb-6">&ldquo;</div>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                  <div className="text-primary">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                current === index ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
