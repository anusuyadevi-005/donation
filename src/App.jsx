import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import StorySection from './components/StorySection';
import Campaigns from './components/Campaigns';
import DonationWidget from './components/DonationWidget';
import HowItWorks from './components/HowItWorks';
import ImpactStory from './components/ImpactStory';
import Testimonials from './components/Testimonials';
import TrustSection from './components/TrustSection';
import Transparency from './components/Transparency';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState(null);
  const [donationFrequency, setDonationFrequency] = useState('one-time');

  const openDonationModal = (amount, frequency) => {
    if (amount) setDonationAmount(amount);
    if (frequency) setDonationFrequency(frequency);
    setIsModalOpen(true);
  };

  const closeDonationModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar onDonateClick={() => openDonationModal()} />
      <main>
        <Hero onDonateClick={() => openDonationModal()} />
        <ImpactStats />
        <StorySection />
        <Campaigns onDonateClick={() => openDonationModal()} />
        <DonationWidget onDonateClick={openDonationModal} />
        <HowItWorks />
        <ImpactStory />
        <Testimonials />
        <TrustSection />
        <Transparency />
        <FAQ />
        <FinalCTA onDonateClick={() => openDonationModal()} />
      </main>
      <Footer />
      <DonationModal 
        isOpen={isModalOpen} 
        onClose={closeDonationModal} 
        initialAmount={donationAmount}
        initialFrequency={donationFrequency}
      />
    </div>
  );
}

export default App;
