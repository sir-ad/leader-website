import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const LeadershipTestimonials = () => {
  const testimonials = [
    {
      category: "Leadership Impact",
      testimonials: [
        {
          quote: "Adarsh's product vision and leadership have transformed how we approach HR tech. His ability to blend innovation with practical solutions is exceptional.",
          author: "Sanjay Singh",
          role: "CEO, HROne",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          quote: "Working with Adarsh has been transformative for our product team. His strategic thinking and mentorship have elevated our entire approach.",
          author: "Priya Sharma",
          role: "Product Director",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
        }
      ]
    },
    {
      category: "Mentorship Impact",
      testimonials: [
        {
          quote: "Adarsh's mentorship was pivotal in my journey to becoming a PM at Google. His structured approach and insights are invaluable.",
          author: "Rahul Verma",
          role: "PM at Google",
          image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          quote: "The clarity and depth of product thinking I gained through Adarsh's mentorship completely changed my career trajectory.",
          author: "Neha Gupta",
          role: "Senior PM at Microsoft",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
        }
      ]
    },
    {
      category: "Innovation Impact",
      testimonials: [
        {
          quote: "Adarsh's innovative approach to HR tech has set new industry standards. His products have revolutionized how we think about employee experience.",
          author: "Rajesh Kumar",
          role: "HR Director, Fortune 500",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Impact Across Dimensions
          </h2>
          <p className="text-xl text-navy-600">
            Creating ripples of transformation through leadership, mentorship, and innovation
          </p>
        </motion.div>

        <div className="space-y-20">
          {testimonials.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-2xl font-bold text-navy-900 text-center">
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {category.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-navy-50 rounded-xl p-8 relative"
                  >
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-navy-200" />
                    
                    <p className="text-lg text-navy-700 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-navy-900">
                          {testimonial.author}
                        </div>
                        <div className="text-navy-600 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTestimonials;