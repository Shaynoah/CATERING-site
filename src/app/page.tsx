'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Import components
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="h-screen bg-gray-100 animate-pulse" />}>
        <Hero />
      </Suspense>
      <Features />
      <Services />
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <Gallery />
      </Suspense>
      <Blog />
      <Testimonials />
      <CTA />
    </main>
  );
}
