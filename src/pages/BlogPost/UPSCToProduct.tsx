import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Award, Target, Brain, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const UPSCToProduct = () => {
  const milestones = [
    {
      icon: Award,
      title: "UPSC AIR 151",
      description: "Demonstrated analytical prowess and strategic thinking"
    },
    {
      icon: Target,
      title: "CAT 99.87%ile",
      description: "Showcased quantitative and logical reasoning abilities"
    },
    {
      icon: Brain,
      title: "Product Leadership",
      description: "Transitioned skills to drive product innovation"
    },
    {
      icon: Heart,
      title: "Mentorship",
      description: "Sharing knowledge with aspiring product leaders"
    }
  ];

  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
            alt="Journey Hero"
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
              From UPSC to Product Leadership
            </h1>
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                March 1, 2024
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                8 min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-navy">
          <h2>The Journey Begins</h2>
          <p>
            My journey from UPSC preparation to product leadership might seem unconventional, 
            but the skills and mindset developed during those intense years of civil services 
            preparation laid the foundation for my success in product management.
          </p>

          <div className="grid md:grid-cols-2 gap-6 not-prose my-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-navy-50 rounded-lg"
              >
                <milestone.icon className="h-6 w-6 text-navy-600 mb-3" />
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-navy-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>

          <h2>Transferable Skills</h2>
          <p>
            The rigorous UPSC preparation instilled valuable skills that directly translate 
            to product management:
          </p>
          <ul>
            <li>Analytical thinking and problem-solving abilities</li>
            <li>Understanding complex systems and their interconnections</li>
            <li>Strategic planning and execution</li>
            <li>Stakeholder management and communication</li>
          </ul>

          <h2>The Transition</h2>
          <p>
            Moving from civil services to product management wasn't just a career change—it 
            was a natural evolution of applying these skills in a different context. The 
            ability to understand user needs, analyze data, and make strategic decisions 
            became invaluable in my product journey.
          </p>

          <blockquote>
            "The most valuable skill from UPSC preparation wasn't just the knowledge gained, 
            but the ability to learn, adapt, and think systematically about complex problems."
          </blockquote>

          <h2>Impact in Product Management</h2>
          <p>
            Today, these experiences shape my approach to product leadership at HROne, where 
            we're building AI-powered solutions that transform HR operations. The systematic 
            thinking and user-centric approach learned during UPSC preparation continue to 
            influence our product strategy and execution.
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

export default UPSCToProduct;