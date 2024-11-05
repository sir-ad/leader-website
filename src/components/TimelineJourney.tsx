import React from 'react';
import { motion } from 'framer-motion';
import { Book, Award, Users, Rocket, Heart, Brain, Target, Star, ArrowRight, Sparkles, Lightbulb, Medal, Briefcase, GraduationCap } from 'lucide-react';

const TimelineJourney = () => {
  // Jobs-inspired storytelling approach - focusing on transformation and impact
  const journeyStages = [
    {
      id: "upsc",
      title: "The Beginning",
      subtitle: "UPSC AIR 151",
      description: "A testament to analytical prowess and strategic thinking, ranking among India's top civil service aspirants.",
      highlights: [
        { label: "UPSC Rank", value: "151" },
        { label: "Aspirants", value: "1M+" },
        { label: "Year", value: "2019" }
      ],
      icon: <Medal className="h-8 w-8" />,
      color: "bg-gradient-to-r from-purple-500 to-indigo-600"
    },
    {
      id: "cat",
      title: "The Pivot",
      subtitle: "CAT 99.87 Percentile",
      description: "Demonstrating exceptional quantitative and analytical abilities, ranking in the top 0.13% nationwide.",
      highlights: [
        { label: "Percentile", value: "99.87" },
        { label: "Students Mentored", value: "800+" },
        { label: "Success Rate", value: "85%" }
      ],
      icon: <GraduationCap className="h-8 w-8" />,
      color: "bg-gradient-to-r from-emerald-500 to-teal-600"
    },
    {
      id: "founder",
      title: "The Entrepreneurial Spirit",
      subtitle: "Founder & Product Leader",
      description: "Built and scaled a SaaS startup serving 500+ SMEs, later transitioning to lead product innovation at top tech companies.",
      highlights: [
        { label: "Clients", value: "500+" },
        { label: "Team Size", value: "15+" },
        { label: "Growth", value: "40%" }
      ],
      icon: <Briefcase className="h-8 w-8" />,
      color: "bg-gradient-to-r from-amber-500 to-orange-600"
    },
    {
      id: "impact",
      title: "The Innovation",
      subtitle: "Leading AI Transformation",
      description: "Spearheading AI-driven innovation in HR tech, fintech, and cleantech, impacting thousands of users globally.",
      highlights: [
        { label: "Revenue Impact", value: "$8M+" },
        { label: "User Base", value: "100K+" },
        { label: "Efficiency Gain", value: "40%" }
      ],
      icon: <Brain className="h-8 w-8" />,
      color: "bg-gradient-to-r from-blue-500 to-cyan-600"
    },
    {
      id: "mentorship",
      title: "The Legacy",
      subtitle: "Author & Mentor",
      description: "Authored two influential books and mentored hundreds of aspiring product leaders, shaping the next generation.",
      highlights: [
        { label: "Books Published", value: "2" },
        { label: "Books Sold", value: "10K+" },
        { label: "Speaking Events", value: "50+" }
      ],
      icon: <Book className="h-8 w-8" />,
      color: "bg-gradient-to-r from-rose-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-6">
              A Journey of
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy-600 to-navy-400">
                Transformation
              </span>
            </h1>
            <p className="text-xl text-navy-600">
              From civil services to tech innovation, every step has been about
              pushing boundaries and creating meaningful impact.
            </p>
          </motion.div>

          {/* Journey Stages */}
          <div className="space-y-40">
            {journeyStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`grid md:grid-cols-2 gap-16 items-center ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}>
                  {/* Content Side */}
                  <div className="space-y-8">
                    <div className={`inline-flex items-center space-x-3 text-white p-3 rounded-xl ${stage.color}`}>
                      {stage.icon}
                      <span className="text-lg font-medium">{stage.subtitle}</span>
                    </div>

                    <h2 className="text-4xl font-bold text-navy-900">
                      {stage.title}
                    </h2>

                    <p className="text-xl text-navy-600 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="grid grid-cols-3 gap-6">
                      {stage.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="text-3xl font-bold text-navy-900 mb-2">
                            {highlight.value}
                          </div>
                          <div className="text-navy-600 text-sm">
                            {highlight.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Side */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative aspect-square rounded-2xl overflow-hidden shadow-2xl ${
                      index % 2 === 0 ? 'md:order-last' : ''
                    } ${stage.color}`}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                      {stage.icon && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          {React.cloneElement(stage.icon, { className: 'w-48 h-48 text-white' })}
                        </div>
                      )}
                    </div>
                    <div className="relative h-full p-8 flex flex-col justify-center items-center text-white">
                      <div className="text-center space-y-4">
                        <div className="text-6xl font-bold">
                          {stage.highlights[0].value}
                        </div>
                        <div className="text-xl opacity-80">
                          {stage.highlights[0].label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimelineJourney;