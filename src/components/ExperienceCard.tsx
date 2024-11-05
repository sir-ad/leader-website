import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../data/experiences';
import * as Icons from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons];
    return Icon ? <Icon className="h-5 w-5 mx-auto" /> : null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-navy-900">{experience.title}</h3>
            <p className="text-navy-600 font-medium">{experience.company}</p>
            <p className="text-navy-500 text-sm">{experience.period}</p>
          </div>

          <p className="text-navy-700 mb-6">{experience.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {experience.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-navy-600 mb-1">
                  {getIcon(metric.icon)}
                </div>
                <div className="font-bold text-lg text-navy-900">{metric.value}</div>
                <div className="text-sm text-navy-600">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start">
                <span className="mr-2 text-navy-400">•</span>
                <span className="text-navy-600">{achievement}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {experience.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-navy-50 text-navy-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-full min-h-[300px] md:min-h-full">
          <img
            src={experience.image}
            alt={experience.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;