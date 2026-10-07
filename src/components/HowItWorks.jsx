import React from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, LineChart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: '01',
      title: 'Choose a cause',
      desc: 'Find a campaign that connects with you.',
      icon: <Search size={24} className="text-kindora-primary" />
    },
    {
      id: '02',
      title: 'Make your contribution',
      desc: 'Give once or become a monthly supporter.',
      icon: <Heart size={24} className="text-kindora-primary" />
    },
    {
      id: '03',
      title: 'See the impact',
      desc: 'Receive updates showing how your support helps.',
      icon: <LineChart size={24} className="text-kindora-primary" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-kindora-primary mb-6 tracking-tight">Your kindness travels further than you think.</h2>
          <div className="w-24 h-1 bg-kindora-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100">
            <motion.div 
              className="h-full bg-kindora-primary/20"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-24 h-24 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/[0.02] flex items-center justify-center mb-8 relative group">
                  <div className="absolute inset-0 bg-kindora-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>
                </div>
                <div className="text-sm font-bold text-kindora-text/40 mb-2 font-mono">STEP {step.id}</div>
                <h3 className="text-2xl font-bold text-kindora-primary mb-3">{step.title}</h3>
                <p className="text-kindora-text/70">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
