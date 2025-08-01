"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <Image
          src="/images/hero-about.jpg"
          alt="About Us"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold">Who We Are</h1>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              Discover our journey, our values, and the heart behind everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Description */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Founded in passion and driven by purpose, we started this journey to redefine excellence
            in the service industry. From humble beginnings, we've grown into a trusted name in
            <span className="font-semibold"> hospitality, catering, travel, and tourism</span>. Our
            team of professionals is committed to making every experience unforgettable — whether
            it's planning your next adventure, crafting a gourmet dining event, or creating
            relaxing stays.
          </p>

          <p className="text-lg leading-relaxed mt-6 text-gray-700">
            At our core, we believe in delivering value, building lasting relationships, and
            constantly evolving to meet modern demands. With every step, we uphold integrity,
            creativity, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide exceptional, personalized services in hospitality and travel while
              creating lasting memories for our clients.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the leading provider of comprehensive hospitality and travel solutions in the
              region and beyond.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>✓ Customer First</li>
              <li>✓ Innovation</li>
              <li>✓ Integrity</li>
              <li>✓ Quality Service</li>
              <li>✓ Teamwork</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { name: "Esther W.", role: "Founder & CEO", img: "/images/team1.jpg" },
              { name: "John M.", role: "Head of Travel", img: "/images/team2.jpg" },
              { name: "Mary K.", role: "Events Manager", img: "/images/team3.jpg" },
              { name: "Brian T.", role: "Hospitality Lead", img: "/images/team4.jpg" },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-center"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto object-cover shadow-lg"
                />
                <h4 className="mt-4 text-xl font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-lg mb-6">
            Whether you need a world-class catering experience, an unforgettable travel plan, or
            top-notch hospitality — we’re here to serve.
          </p>
          <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
