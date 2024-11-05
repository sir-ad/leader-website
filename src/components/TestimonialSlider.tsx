import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Himaja Nanduri",
    role: "Product Manager",
    content: "Told me the correct way to answer and articulate answers, which was extremely helpful",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 2,
    name: "Rohan Shah",
    role: "Product Lead",
    content: "Got an idea about what an actual interview would be like. The questions asked were challenging, and after the interview I rewrote all the answers to the questions making me more confident overall.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: 3,
    name: "Vinette Sequeira",
    role: "Senior PM",
    content: "It was quite an engaging interview. Glad to be part of it.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-sm p-8 md:p-12"
        >
          <div className="flex flex-col items-center text-center">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-lg md:text-xl text-navy-600 mb-6">
              "{testimonials[currentIndex].content}"
            </p>
            <div>
              <h4 className="font-semibold text-navy-900">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-navy-600">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
      >
        <ChevronLeft className="h-6 w-6 text-navy-600" />
      </button>

      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
      >
        <ChevronRight className="h-6 w-6 text-navy-600" />
      </button>
    </div>
  );
};

export default TestimonialSlider;