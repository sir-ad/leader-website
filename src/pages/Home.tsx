import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Heart, Target, Compass, Star, Rocket, Users } from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';

const Home = () => {
  // Key impact metrics - focusing on transformation and scale
  const impactMetrics = [
    {
      icon: Brain,
      value: "40%",
      label: "Efficiency Gains",
      description: "in HR Operations"
    },
    {
      icon: Users,
      value: "130+",
      label: "Product Leaders",
      description: "Mentored & Guided"
    },
    {
      icon: Rocket,
      value: "$5M+",
      label: "Revenue Impact",
      description: "Through Innovation"
    },
    {
      icon: Star,
      value: "10k+",
      label: "Lives Impacted",
      description: "Across Industries"
    }
  ];

  // Innovation journey highlights
  const innovationJourney = [
    {
      year: "2024",
      title: "Leading AI Innovation",
      description: "Transforming HR tech with ONE AI, creating personalized experiences at scale",
      icon: Brain
    },
    {
      year: "2023",
      title: "Product Leadership",
      description: "Driving innovation and mentoring the next generation of product leaders",
      icon: Target
    },
    {
      year: "2022",
      title: "Fintech Revolution",
      description: "Revolutionizing retail finance through innovative EMI solutions",
      icon: Rocket
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Leading digital initiatives in renewable energy and process automation",
      icon: Compass
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Jobs-style emotional connection */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <HeroAnimation />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/95 to-navy-900/90" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Making Technology
            <br />
            <span className="bg-gradient-to-r from-blue-300 to-emerald-300 text-transparent bg-clip-text">
              Human Again
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Building products that transform how people work and live.
            Leading teams that innovate with purpose.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/experience"
              className="group inline-flex items-center px-8 py-4 text-lg font-medium text-navy-900 bg-white rounded-lg hover:bg-navy-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              See the Impact
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 text-lg font-medium text-white border-2 border-white/20 rounded-lg hover:bg-white/10 transition-all transform hover:scale-105"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/20 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Innovation Journey - Horizontal Timeline */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Innovation Journey
            </h2>
            <p className="text-xl text-navy-600">
              A timeline of transformative impact and leadership
            </p>
          </motion.div>

          <div className="flex overflow-x-auto pb-12 hide-scrollbar">
            <div className="flex space-x-8">
              {innovationJourney.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex-shrink-0 w-80 group"
                  >
                    <div className="p-8 rounded-xl bg-navy-50 text-navy-900 transform transition-transform group-hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="h-8 w-8 text-navy-600" />
                        <span className="text-lg font-medium text-navy-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-navy-600">{milestone.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Impact at Scale
            </h2>
            <p className="text-xl text-white/80">
              Creating meaningful change through innovation and leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-navy-800/50 backdrop-blur rounded-xl p-8 text-center border border-white/10"
                >
                  <Icon className="h-8 w-8 text-white/80 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-medium text-white/90 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-white/60 text-sm">
                    {metric.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
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
              className="inline-flex items-center px-8 py-4 bg-navy-900 text-white rounded-lg text-lg font-medium hover:bg-navy-800 transition-colors group"
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

export default Home;