import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Utensils, HeartPulse } from 'lucide-react';

const StorySection = () => {
  const items = [
    {
      id: '01',
      title: 'Education',
      desc: 'Help a child access learning resources.',
      icon: <BookOpen size={20} className="text-kindora-accent" />,
      color: 'bg-orange-50'
    },
    {
      id: '02',
      title: 'Nourishment',
      desc: 'Provide nutritious meals to families.',
      icon: <Utensils size={20} className="text-kindora-accent" />,
      color: 'bg-green-50'
    },
    {
      id: '03',
      title: 'Healthcare',
      desc: 'Support essential medical care.',
      icon: <HeartPulse size={20} className="text-kindora-accent" />,
      color: 'bg-red-50'
    }
  ];

  return (
    <section id="mission" className="py-24 bg-kindora-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <motion.div
            className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-kindora-primary/20 mix-blend-multiply z-10"></div>
            <img 
              src="/community.jpg" 
              alt="Community storytelling" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-kindora-primary mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              Behind every number is a human story.
            </motion.h2>
            <motion.p 
              className="text-lg text-kindora-text/80 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Donations aren't just transactions. They are the seeds of opportunity that translate into real, life-changing moments for communities in need.
            </motion.p>

            <div className="space-y-6">
              {items.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white transition-all duration-300 group cursor-default"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-sm border border-black/5 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-kindora-primary flex items-center gap-3">
                      <span className="text-sm text-kindora-text/40 font-mono">{item.id}</span>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-kindora-text/70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;
