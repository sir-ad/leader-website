import React from 'react';
import { motion } from 'framer-motion';
import { Award as AwardIcon, Trophy, Target, TrendingUp, Star } from 'lucide-react';
import { Award } from '../data/experiences';

interface AwardCardProps {
  award: Award;
}

const AwardCard: React.FC<AwardCardProps> = ({ award }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-navy-900 mb-1">{award.title}</h3>
            <p className="text-navy-600 text-sm">
              {award.organization} • {award.year}
            </p>
          </div>
          <div className="p-3 bg-navy-50 rounded-lg">
            {award.icon === 'trophy' && <Trophy className="h-6 w-6 text-navy-600" />}
            {award.icon === 'award' && <AwardIcon className="h-6 w-6 text-navy-600" />}
            {award.icon === 'target' && <Target className="h-6 w-6 text-navy-600" />}
          </div>
        </div>
        
        <p className="text-navy-700 mb-4">{award.description}</p>
        
        <div className="space-y-3">
          {award.impact.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center space-x-3 text-navy-600 text-sm"
            >
              {index === 0 && <TrendingUp className="h-4 w-4 text-navy-500 flex-shrink-0" />}
              {index === 1 && <Target className="h-4 w-4 text-navy-500 flex-shrink-0" />}
              {index === 2 && <Star className="h-4 w-4 text-navy-500 flex-shrink-0" />}
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AwardCard;