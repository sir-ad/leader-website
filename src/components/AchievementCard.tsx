import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AchievementCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  color?: 'default' | 'success' | 'warning';
  delay?: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  icon: Icon,
  title,
  value,
  description,
  color = 'default',
  delay = 0
}) => {
  const colorClasses = {
    default: 'bg-navy-50 text-navy-600',
    success: 'bg-green-50 text-green-600',
    warning: 'bg-yellow-50 text-yellow-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="flex items-center mb-4">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className={`p-3 rounded-lg ${colorClasses[color]} group-hover:scale-110 transition-transform`}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <h3 className="ml-4 text-lg font-semibold text-navy-900 group-hover:text-navy-600 transition-colors">
          {title}
        </h3>
      </div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-3xl font-bold text-navy-900 mb-2"
      >
        {value}
      </motion.div>
      <p className="text-navy-600 leading-relaxed group-hover:text-navy-700 transition-colors">
        {description}
      </p>
    </motion.div>
  );
};

export default AchievementCard;