import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ value, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/[^0-9]/g, ''));
      const duration = 2000;
      const incrementTime = Math.max(16, duration / end);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / 16));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-kindora-primary">
      {prefix}{value.includes('L') ? (count / 100).toFixed(0) + 'L' : count.toLocaleString()}{value.includes('K') ? 'K' : ''}{suffix}
    </span>
  );
};

const ImpactStats = () => {
  const stats = [
    { value: '24L', prefix: '₹', suffix: '+', label: 'Raised' },
    { value: '18K', suffix: '+', label: 'Lives impacted' },
    { value: '42', label: 'Active campaigns' },
    { value: '27', label: 'Communities reached' },
  ];

  return (
    <section id="impact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-kindora-primary mb-4 tracking-tight">
            Your kindness becomes measurable impact.
          </h2>
          <div className="w-24 h-1 bg-kindora-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="mt-3 text-sm md:text-base font-semibold text-kindora-text/60 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
