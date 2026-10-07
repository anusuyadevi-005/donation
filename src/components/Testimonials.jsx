import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote: "I started with a small monthly contribution. Seeing where it goes made me realize that even a small decision can create a meaningful difference.",
      author: "Priya",
      role: "Monthly Supporter",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "Kindora made giving feel transparent and personal. I could actually understand the impact of my contribution without any jargon.",
      author: "Arjun",
      role: "Supporter",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "The regular impact updates make me feel connected to the communities I'm supporting. It's truly a rewarding experience.",
      author: "Sarah",
      role: "Monthly Supporter",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-kindora-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-kindora-primary mb-4 tracking-tight">People who chose to care.</h2>
          <div className="w-24 h-1 bg-kindora-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon Background */}
          <div className="absolute -top-10 -left-10 text-kindora-primary/5 hidden md:block">
            <Quote size={120} />
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10 min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <p className="text-xl md:text-3xl font-medium text-kindora-primary leading-relaxed mb-10 text-balance">
                  "{testimonials[current].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].author} 
                    className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-kindora-accent/20"
                  />
                  <h4 className="text-lg font-bold text-kindora-primary">{testimonials[current].author}</h4>
                  <p className="text-sm font-semibold text-kindora-text/50 uppercase tracking-wider">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-10 relative z-20">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-kindora-primary shadow-sm hover:bg-kindora-primary hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${current === idx ? 'bg-kindora-primary w-6' : 'bg-kindora-primary/20'}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-kindora-primary shadow-sm hover:bg-kindora-primary hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
