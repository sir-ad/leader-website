import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const BuildingOneAI = () => {
  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80"
            alt="ONE AI Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/50" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Building ONE AI: The Future of HR Tech
            </h1>
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                March 15, 2024
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                5 min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-navy">
          <h2>The Challenge</h2>
          <p>
            In the ever-evolving landscape of HR technology, organizations face a common 
            challenge: managing vast amounts of employee data while providing personalized 
            experiences. Traditional HRMS solutions often fall short, requiring extensive 
            manual intervention and offering limited insights.
          </p>

          <h2>Our Approach</h2>
          <p>
            We approached this challenge by developing ONE AI, an intelligent HR assistant 
            that leverages advanced AI to automate routine tasks and provide predictive 
            insights. The development process focused on three key areas:
          </p>

          <ul>
            <li>Natural Language Processing for employee queries</li>
            <li>Predictive Analytics for workforce planning</li>
            <li>Automated compliance monitoring and reporting</li>
          </ul>

          <h2>Key Features & Impact</h2>
          <div className="grid grid-cols-2 gap-4 not-prose my-8">
            <div className="p-4 bg-navy-50 rounded-lg">
              <div className="text-2xl font-bold text-navy-900">30%</div>
              <div className="text-navy-600">Reduction in Manual Work</div>
            </div>
            <div className="p-4 bg-navy-50 rounded-lg">
              <div className="text-2xl font-bold text-navy-900">25%</div>
              <div className="text-navy-600">Increase in Engagement</div>
            </div>
          </div>

          <h2>Looking Ahead</h2>
          <p>
            The future of ONE AI involves expanding its capabilities to include more 
            advanced predictive analytics, deeper integration with other business 
            systems, and enhanced personalization through machine learning.
          </p>
        </div>

        {/* Article Actions */}
        <div className="mt-12 flex items-center justify-between border-t border-navy-100 pt-6">
          <Link 
            to="/blog"
            className="flex items-center text-navy-600 hover:text-navy-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-navy-600 hover:text-navy-800 transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="p-2 text-navy-600 hover:text-navy-800 transition-colors">
              <Bookmark className="h-5 w-5" />
            </button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-navy-100">
        <h2 className="text-2xl font-bold text-navy-900 mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Add related article cards here */}
        </div>
      </section>
    </div>
  );
};

export default BuildingOneAI;