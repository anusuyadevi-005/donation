import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ImpactStory = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id="stories" className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img 
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" 
          alt="Impact cinematic" 
          className="w-full h-[120%] object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-kindora-primary/70 z-10 mix-blend-multiply"></div>
      
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-balance">
            "She wanted to become a teacher.<br/>Today, she is one step closer."
          </h2>
          <p className="text-xl md:text-2xl font-medium text-white/80 mb-12 max-w-2xl mx-auto">
            Your support helped provide the learning resources she needed.
          </p>
          <button className="bg-transparent border border-white hover:bg-white hover:text-kindora-primary text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 mx-auto group">
            Read Her Story
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStory;
