import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  author,
  role,
  image
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all"
    >
      <Quote className="h-8 w-8 text-navy-300 mb-4" />
      <p className="text-navy-700 mb-6 italic leading-relaxed text-lg">"{text}"</p>
      <div className="flex items-center border-t border-navy-100 pt-4">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-navy-900">{author}</p>
          <p className="text-navy-600 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;