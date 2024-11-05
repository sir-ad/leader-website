import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface TimelineEventProps {
  year: string;
  company: string;
  role: string;
  description: string;
  achievements: string[];
  link?: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  year,
  company,
  role,
  description,
  achievements,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-12 border-l-2 border-navy-200 last:border-l-0 hover:border-navy-400 transition-colors"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-navy-600 rounded-full shadow-lg" />
      
      <div className="mb-1 text-sm font-medium text-navy-500">{year}</div>
      
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-bold text-navy-900 hover:text-navy-700 transition-colors">
          {company}
        </h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-600 hover:text-navy-700 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
      
      <div className="text-lg font-medium text-navy-700 mb-2">{role}</div>
      
      <p className="text-navy-600 mb-4 leading-relaxed">{description}</p>
      
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start group"
          >
            <span className="mr-2 text-navy-400 group-hover:text-navy-600 transition-colors">•</span>
            <span className="text-navy-600 group-hover:text-navy-700 transition-colors">
              {achievement}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TimelineEvent;