'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Exploring the Majestic Amboseli National Park',
    excerpt: 'Discover the breathtaking beauty of Amboseli, home to vast elephant herds and stunning views of Mount Kilimanjaro.',
    image: '/images/AMBOELI-1-3.png',
    date: 'July 25, 2025',
    author: 'Sarah Johnson',
    category: 'Travel'
  },
  {
    id: 2,
    title: 'A Journey Through Zanzibar\'s Spice Islands',
    excerpt: 'Experience the rich cultural heritage and exotic flavors of Zanzibar\'s famous spice routes.',
    image: '/images/zanzibar-5.png',
    date: 'July 20, 2025',
    author: 'Michael Chen',
    category: 'Culture'
  },
  {
    id: 3,
    title: 'Safari Adventures in Samburu',
    excerpt: 'Venture into the wild landscapes of Samburu and encounter unique wildlife in their natural habitat.',
    image: '/images/SAMBURU-11-1.png',
    date: 'July 15, 2025',
    author: 'David Kimani',
    category: 'Adventure'
  }
];

const Blog = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Travel Stories</h2>
          <p className="text-xl text-gray-600">Stay updated with our latest adventures and travel insights</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
