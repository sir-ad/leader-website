import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PhilosophyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-navy-50 rounded-lg text-navy-600">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="ml-4 text-lg font-semibold text-navy-900">{title}</h3>
      </div>
      <p className="text-navy-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default PhilosophyCard;