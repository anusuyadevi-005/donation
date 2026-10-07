import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Book, Utensils, HeartPulse } from 'lucide-react';

const CampaignCard = ({ campaign, index, onDonateClick }) => {
  return (
    <motion.div 
      className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.02] group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
          {campaign.icon}
          <span className="text-xs font-bold text-kindora-primary uppercase tracking-wider">{campaign.category}</span>
        </div>
        <img 
          src={campaign.image} 
          alt={campaign.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-kindora-primary mb-3">{campaign.title}</h3>
        <p className="text-kindora-text/70 mb-6 line-clamp-2">{campaign.desc}</p>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm font-semibold mb-2">
            <span className="text-kindora-text">Raised: {campaign.raised}</span>
            <span className="text-kindora-text/50">Goal: {campaign.goal}</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-kindora-accent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${campaign.progress}%` }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        <button 
          onClick={onDonateClick}
          className="w-full py-4 rounded-xl border-2 border-kindora-primary/10 text-kindora-primary font-bold hover:bg-kindora-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          {campaign.btnText}
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const Campaigns = ({ onDonateClick }) => {
  const campaigns = [
    {
      title: "Education for Every Child",
      desc: "Help children access books, school supplies and the opportunity to learn.",
      goal: "₹5,00,000",
      raised: "₹3,72,500",
      progress: 74,
      category: "Education",
      icon: <Book size={14} className="text-kindora-primary" />,
      btnText: "Support Education",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop"
    },
    {
      title: "A Meal Can Change a Day",
      desc: "Provide nutritious meals to families facing food insecurity.",
      goal: "₹3,00,000",
      raised: "₹2,28,000",
      progress: 76,
      category: "Nourishment",
      icon: <Utensils size={14} className="text-kindora-primary" />,
      btnText: "Feed a Family",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" // Placeholder, maybe use another
    },
    {
      title: "Healthcare Within Reach",
      desc: "Help provide essential healthcare to communities that need it most.",
      goal: "₹7,00,000",
      raised: "₹4,48,000",
      progress: 64,
      category: "Healthcare",
      icon: <HeartPulse size={14} className="text-kindora-primary" />,
      btnText: "Support Healthcare",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
    }
  ];

  return (
    <section id="campaigns" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-kindora-primary mb-4 tracking-tight">Choose where your kindness begins.</h2>
            <p className="text-lg text-kindora-text/70">Support a cause that matters to you.</p>
          </motion.div>
          <motion.button 
            className="text-kindora-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            View All Campaigns <ArrowRight size={20} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((camp, i) => (
            <CampaignCard key={i} campaign={camp} index={i} onDonateClick={onDonateClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
