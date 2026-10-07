import React from 'react';
import { motion } from 'framer-motion';

const Transparency = () => {
  const breakdown = [
    { label: "Programs & Community Support", percent: 78, color: "bg-kindora-primary" },
    { label: "Operations", percent: 12, color: "bg-kindora-secondary" },
    { label: "Technology & Platform", percent: 6, color: "bg-kindora-accent" },
    { label: "Fundraising", percent: 4, color: "bg-gray-300" }
  ];

  return (
    <section className="py-24 bg-white border-b border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-kindora-primary mb-2">Where your contribution goes.</h2>
          <p className="text-kindora-text/50 font-medium text-sm">*Illustrative platform example</p>
        </motion.div>

        <div className="space-y-6">
          {breakdown.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm font-bold text-kindora-text mb-2">
                <span>{item.label}</span>
                <span>{item.percent}%</span>
              </div>
              <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full ${item.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percent}%` }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transparency;
