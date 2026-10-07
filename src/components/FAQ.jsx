import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does my donation help?",
      a: "Your donation is directly routed to verified campaigns and programs, providing tangible resources like education materials, meals, and medical supplies to those in need."
    },
    {
      q: "Can I make a monthly donation?",
      a: "Yes! You can choose to make a one-time contribution or set up a recurring monthly donation to provide sustained support."
    },
    {
      q: "Can I choose a specific campaign?",
      a: "Absolutely. You can browse our active campaigns and choose exactly where you want your contribution to go."
    },
    {
      q: "How do I know my contribution is being used responsibly?",
      a: "We believe in complete transparency. You will receive regular updates and impact reports showing exactly how your contribution is creating change."
    },
    {
      q: "Can I cancel monthly support?",
      a: "Yes, you have full control over your contributions. You can modify or cancel your monthly support at any time through your dashboard."
    },
    {
      q: "Will I receive impact updates?",
      a: "Yes! Every donor receives regular impact updates, stories, and clear reporting on the causes they have supported."
    }
  ];

  return (
    <section className="py-24 bg-kindora-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-kindora-primary mb-4 tracking-tight">Questions? We have answers.</h2>
          <p className="text-lg text-kindora-text/70">Everything you need to know about giving through Kindora.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/[0.02]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-lg text-kindora-primary pr-8">{faq.q}</span>
                <span className={`text-kindora-accent transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-kindora-text/70 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
