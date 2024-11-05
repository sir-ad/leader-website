import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Users, Star, Heart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductMentorship = () => {
  const impactMetrics = [
    {
      icon: Users,
      value: "130+",
      label: "PMs Mentored"
    },
    {
      icon: Star,
      value: "4.7/5",
      label: "Average Rating"
    },
    {
      icon: Heart,
      value: "100+",
      label: "Success Stories"
    },
    {
      icon: Target,
      value: "85%",
      label: "Placement Rate"
    }
  ];

  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=1920&q=80"
            alt="Mentorship Hero"
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
              The Art of Product Mentorship
            </h1>
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                February 15, 2024
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                6 min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-navy">
          <h2>The Journey of Mentorship</h2>
          <p>
            Over the years, I've had the privilege of mentoring more than 130 product managers 
            through various programs at ISB Executive Education and Upraised. This journey has 
            not only helped shape the careers of aspiring product leaders but has also enriched 
            my own understanding of product management.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose my-12">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 bg-navy-50 rounded-lg text-center"
              >
                <metric.icon className="h-6 w-6 text-navy-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-navy-900">{metric.value}</div>
                <div className="text-sm text-navy-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <h2>Key Mentorship Principles</h2>
          <p>
            My approach to mentorship is built on several core principles that have proven 
            effective in helping aspiring product managers succeed:
          </p>
          <ul>
            <li>Focus on practical, real-world problem-solving</li>
            <li>Encourage structured thinking and systematic approaches</li>
            <li>Develop strong product sense through case studies</li>
            <li>Build confidence through mock interviews and feedback</li>
          </ul>

          <blockquote>
            "The best product managers aren't just skilled at execution—they understand the 
            'why' behind every decision and can articulate it clearly."
          </blockquote>

          <h2>Impact Stories</h2>
          <p>
            The most rewarding aspect of mentorship is seeing mentees grow into confident 
            product leaders. From securing roles at top tech companies to driving innovation 
            in their organizations, their success stories validate the effectiveness of our 
            mentorship approach.
          </p>

          <h2>Looking Forward</h2>
          <p>
            As the product management landscape evolves, our mentorship programs continue to 
            adapt, incorporating new technologies, methodologies, and industry best practices 
            to prepare the next generation of product leaders.
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

export default ProductMentorship;