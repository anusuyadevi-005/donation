import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

const FinalCTA = ({ onDonateClick }) => {
  return (
    <section className="relative py-32 overflow-hidden bg-kindora-primary flex items-center justify-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
          alt="Children smiling" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kindora-primary/80 to-kindora-primary"></div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-20 text-kindora-accent/30 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={64} fill="currentColor" />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-20 text-kindora-secondary/40 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={48} fill="currentColor" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Someone's future could begin with you.
          </h2>
          <p className="text-xl md:text-2xl font-medium text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            You don't have to change the whole world.<br className="hidden md:block" />
            You just have to change one life.
          </p>
          <button 
            onClick={onDonateClick}
            className="bg-kindora-accent hover:bg-yellow-400 text-kindora-primary px-10 py-5 rounded-full font-extrabold text-xl transition-all shadow-2xl flex items-center gap-3 mx-auto group transform hover:-translate-y-1 hover:scale-105"
          >
            Make an Impact
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
