import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experiences, awards } from '../data/experiences';
import { Brain, Target, Heart, Star, ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Impact', icon: Star },
    { id: 'innovation', label: 'Innovation', icon: Brain },
    { id: 'leadership', label: 'Leadership', icon: Target },
    { id: 'product', label: 'Product', icon: Rocket },
    { id: 'mentorship', label: 'Mentorship', icon: Heart }
  ];

  const filteredExperiences = experiences.filter(exp => 
    selectedCategory === 'all' || exp.tags.some(tag => 
      tag.toLowerCase().includes(selectedCategory)
    )
  );

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
            A Journey of
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Product Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-navy-200 max-w-3xl mx-auto leading-relaxed">
            From ideation to impact, crafting solutions that transform how people work and live.
          </p>
        </motion.div>
      </section>

      {/* Impact Categories */}
      <section className="bg-white py-8 sticky top-16 z-30 border-b border-navy-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-navy-900 text-white'
                      : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{category.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {filteredExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className={`grid md:grid-cols-2 gap-16 items-center ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}>
                  {/* Content Side */}
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="text-navy-600 font-medium">
                        {experience.period}
                      </div>
                      <h2 className="text-4xl font-bold text-navy-900">
                        {experience.title}
                      </h2>
                      <p className="text-xl text-navy-600">
                        {experience.company}
                      </p>
                    </div>

                    <p className="text-lg text-navy-700 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4">
                      {experience.metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white rounded-lg p-4 text-center shadow-sm"
                        >
                          <div className="text-2xl font-bold text-navy-900 mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-navy-600">
                            {metric.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {experience.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <Star className="h-5 w-5 text-navy-400 flex-shrink-0 mt-1" />
                          <span className="text-navy-700">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-navy-100 text-navy-600 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual Side */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ${
                      index % 2 === 0 ? 'md:order-last' : ''
                    }`}
                  >
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/50 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Recognition & Impact
            </h2>
            <p className="text-xl text-navy-600">
              Milestones that mark the journey of innovation and leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-navy-50 rounded-xl p-8 relative group hover:bg-navy-100 transition-colors"
              >
                <div className="mb-6">
                  <span className="inline-block p-3 bg-white rounded-lg text-navy-600 group-hover:text-navy-700 transition-colors">
                    {award.icon === 'trophy' && <Star className="h-6 w-6" />}
                    {award.icon === 'award' && <Target className="h-6 w-6" />}
                    {award.icon === 'target' && <Rocket className="h-6 w-6" />}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-navy-600 mb-1">{award.organization}</p>
                <p className="text-navy-500 text-sm mb-4">{award.year}</p>
                <p className="text-navy-700 mb-6">{award.description}</p>

                <div className="space-y-2">
                  {award.impact.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Star className="h-4 w-4 text-navy-400 flex-shrink-0 mt-1" />
                      <span className="text-sm text-navy-600">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-xl text-navy-200">
              Ready to discuss your next big product innovation?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-navy-900 rounded-lg text-lg font-medium hover:bg-navy-50 transition-colors group"
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

export default Experience;