import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const TrustSection = () => {
  const trusts = [
    "Verified campaigns",
    "Transparent reporting",
    "Secure donations",
    "Regular impact updates"
  ];

  return (
    <section id="about" className="py-24 bg-kindora-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Giving should feel good. And transparent.</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16">
            We believe every donor deserves to know where their contribution creates change.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {trusts.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle2 size={32} className="text-kindora-accent mb-4" />
              <h3 className="text-lg font-bold text-center text-white/90">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
