import React from 'react';
import { motion } from 'framer-motion';
import TimelineJourney from '../components/TimelineJourney';
import LeadershipTestimonials from '../components/LeadershipTestimonials';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Jobs-inspired impact statement */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-800/50" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Building Products That
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Transform Lives
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-navy-200 max-w-3xl mx-auto leading-relaxed">
            Leading innovation in HR tech, mentoring future leaders, and creating impact at scale.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <Link
              to="/experience"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg text-lg font-medium transition-all group"
            >
              Explore My Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/30 rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats - Applying Law of Common Region */}
      <section className="py-12 bg-white relative -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 bg-white rounded-xl shadow-xl p-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-900 mb-2">40%</div>
              <div className="text-navy-600">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-900 mb-2">130+</div>
              <div className="text-navy-600">Leaders Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-900 mb-2">10k+</div>
              <div className="text-navy-600">Books Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-900 mb-2">$5M+</div>
              <div className="text-navy-600">Revenue Impact</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline - Horizontal scroll for latest achievements */}
      <TimelineJourney />

      {/* Leadership Impact - Showcasing testimonials from different perspectives */}
      <LeadershipTestimonials />

      {/* Call to Action - Jobs' principle of creating desire */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-navy-900">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-xl text-navy-600">
              Let's create products that don't just meet expectations—they redefine them.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-navy-600 text-white rounded-lg text-lg font-medium hover:bg-navy-700 transition-colors group"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;