import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DonationWidget = ({ onDonateClick }) => {
  const [frequency, setFrequency] = useState('one-time');
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');

  const amounts = [500, 1000, 2500, 5000];

  const getImpactMessage = (amt) => {
    if (amt === 500) return "school supplies for a child";
    if (amt === 1000) return "nutritious meals for a family";
    if (amt === 2500) return "essential healthcare support";
    if (amt === 5000) return "learning resources for multiple children";
    return "meaningful impact where it's needed most";
  };

  const currentAmount = customAmount ? parseInt(customAmount) || 0 : amount;

  return (
    <section className="py-24 bg-kindora-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-kindora-accent/5 blur-[100px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-black/[0.03]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-kindora-primary mb-4">How much can you give today?</h2>
            <p className="text-kindora-text/60 font-medium">100% of your donation goes directly to the causes.</p>
          </div>

          <div className="max-w-xl mx-auto">
            {/* Frequency Toggle */}
            <div className="flex p-1 bg-kindora-bg rounded-xl mb-8">
              <button 
                className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${frequency === 'one-time' ? 'bg-white text-kindora-primary shadow-sm' : 'text-kindora-text/60 hover:text-kindora-primary'}`}
                onClick={() => setFrequency('one-time')}
              >
                One-time
              </button>
              <button 
                className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${frequency === 'monthly' ? 'bg-white text-kindora-primary shadow-sm' : 'text-kindora-text/60 hover:text-kindora-primary'}`}
                onClick={() => setFrequency('monthly')}
              >
                Monthly
              </button>
            </div>

            {/* Amounts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {amounts.map(amt => (
                <button
                  key={amt}
                  onClick={() => { setAmount(amt); setCustomAmount(''); }}
                  className={`py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 ${
                    amount === amt && !customAmount
                    ? 'border-kindora-primary bg-kindora-primary/5 text-kindora-primary scale-[1.02]' 
                    : 'border-black/5 text-kindora-text/70 hover:border-kindora-primary/30'
                  }`}
                >
                  ₹{amt.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="mb-10">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-kindora-text/50 font-bold">₹</span>
                <input 
                  type="number" 
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount(0);
                  }}
                  className="w-full py-4 pl-10 pr-4 rounded-xl border-2 border-black/5 focus:border-kindora-primary focus:outline-none transition-colors font-bold text-kindora-primary"
                />
              </div>
            </div>

            {/* Impact Message */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentAmount}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-kindora-accent/10 rounded-2xl p-6 text-center mb-8 border border-kindora-accent/20"
              >
                <p className="text-kindora-text font-medium">
                  Your <span className="font-bold text-kindora-primary text-xl">₹{currentAmount.toLocaleString()}</span> {frequency === 'monthly' ? 'a month ' : ''}can help provide
                  <br/>
                  <span className="text-kindora-secondary font-bold text-lg">{getImpactMessage(currentAmount)}</span>.
                </p>
              </motion.div>
            </AnimatePresence>

            <button 
              onClick={() => onDonateClick(currentAmount, frequency)}
              className="w-full bg-kindora-primary hover:bg-kindora-secondary text-white py-5 rounded-xl font-bold text-lg transition-all shadow-xl shadow-kindora-primary/20 transform hover:-translate-y-1"
            >
              Continue to Donate
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationWidget;
