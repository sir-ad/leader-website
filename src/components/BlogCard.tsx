import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Post } from '../data/posts';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: Post;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all group"
    >
      <Link to={`/blog/${post.id}`} className="block">
        <div className="relative h-48">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 bg-navy-600 text-white text-xs font-medium rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-navy-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-navy-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-navy-500">
            <div className="flex items-center">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="mt-4 flex items-center text-navy-600 group-hover:text-navy-800 transition-colors">
            <span className="mr-2">Read Article</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;