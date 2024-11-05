import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories, posts } from '../data/posts';
import BlogCard from '../components/BlogCard';
import { Search, Filter, Brain, Target, Heart, Star, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryIcons: { [key: string]: any } = {
    'Innovation': Brain,
    'Product Leadership': Target,
    'Team Building': Heart,
    'Personal Growth': Star,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Jobs-style impact statement */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-navy-900 to-navy-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Insights That
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Shape Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-navy-200 max-w-3xl mx-auto leading-relaxed">
            Exploring product leadership, innovation, and the future of work
          </p>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-8 sticky top-16 z-30 border-b border-navy-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <div className="flex overflow-x-auto gap-4 w-full md:w-auto hide-scrollbar">
              {['All', ...categories].map((category) => {
                const Icon = categoryIcons[category] || Filter;
                return (
                  <motion.button
                    key={category}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? 'bg-navy-900 text-white'
                        : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{category}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === 'All' && searchQuery === '' && (
        <section className="py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/50 to-transparent" />
              </div>
              
              <div className="space-y-6">
                <span className="inline-block px-4 py-2 bg-navy-100 text-navy-600 rounded-full text-sm font-medium">
                  {posts[0].category}
                </span>
                <h2 className="text-4xl font-bold text-navy-900">{posts[0].title}</h2>
                <p className="text-lg text-navy-600">{posts[0].excerpt}</p>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center text-navy-600 hover:text-navy-800 transition-colors group"
                >
                  <Link to={`/blog/${posts[0].id}`} className="flex items-center">
                    Read Article
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-navy-600">No articles found matching your criteria.</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Stay Ahead of the Curve</h2>
            <p className="text-xl text-navy-200">
              Get weekly insights on product leadership and innovation
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-navy-900 rounded-lg font-medium hover:bg-navy-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;