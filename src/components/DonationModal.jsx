import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

const DonationModal = ({ isOpen, onClose, initialAmount, initialFrequency }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: initialAmount || 1000,
    frequency: initialFrequency || 'one-time'
  });

  const [amount, setAmount] = useState(initialAmount || 1000);
  const [frequency, setFrequency] = useState(initialFrequency || 'one-time');

  React.useEffect(() => {
    if (isOpen) {
      setStep(1);
      setAmount(initialAmount || 1000);
      setFrequency(initialFrequency || 'one-time');
    }
  }, [isOpen, initialAmount, initialFrequency]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep(2);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          className="absolute inset-0 bg-kindora-primary/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        ></motion.div>
        
        <motion.div 
          className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md relative z-10 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-kindora-text/40 hover:text-kindora-primary transition-colors z-20 bg-white/50 rounded-full p-1"
          >
            <X size={24} />
          </button>

          {step === 1 ? (
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-kindora-primary mb-2">Make an Impact</h3>
                <p className="text-kindora-text/60 text-sm">Your kindness helps us build better futures.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="flex p-1 bg-kindora-bg rounded-xl mb-6">
                  <button 
                    type="button"
                    className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${frequency === 'one-time' ? 'bg-white text-kindora-primary shadow-sm' : 'text-kindora-text/60'}`}
                    onClick={() => setFrequency('one-time')}
                  >
                    One-time
                  </button>
                  <button 
                    type="button"
                    className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${frequency === 'monthly' ? 'bg-white text-kindora-primary shadow-sm' : 'text-kindora-text/60'}`}
                    onClick={() => setFrequency('monthly')}
                  >
                    Monthly
                  </button>
                </div>

                <div className="mb-6 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-kindora-text/50 font-bold">₹</span>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full py-4 pl-10 pr-4 rounded-xl border-2 border-black/5 focus:border-kindora-primary focus:outline-none transition-colors font-bold text-kindora-primary text-lg"
                    required
                    min="1"
                  />
                </div>

                <div className="space-y-4 mb-8">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full py-3 px-4 rounded-xl border-2 border-black/5 focus:border-kindora-primary focus:outline-none transition-colors font-medium text-kindora-text placeholder:text-kindora-text/40"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full py-3 px-4 rounded-xl border-2 border-black/5 focus:border-kindora-primary focus:outline-none transition-colors font-medium text-kindora-text placeholder:text-kindora-text/40"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-kindora-primary hover:bg-kindora-secondary text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-kindora-primary/20 transform hover:-translate-y-0.5 flex justify-center items-center"
                >
                  Confirm Donation of ₹{amount.toLocaleString()}
                </button>
              </form>
            </div>
          ) : (
            <motion.div 
              className="p-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 size={48} className="text-green-500" />
              </motion.div>
              <h3 className="text-2xl font-bold text-kindora-primary mb-3">Thank you!</h3>
              <p className="text-kindora-text/70 mb-8 font-medium">Your donation of ₹{amount.toLocaleString()} has been successfully processed.</p>
              <button 
                onClick={onClose}
                className="w-full border-2 border-kindora-primary/10 text-kindora-primary hover:bg-kindora-primary hover:text-white py-3 rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DonationModal;
