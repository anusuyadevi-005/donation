import React from 'react';
import { Heart, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f2c22] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.jpg" alt="Kindora" className="w-10 h-10 rounded-full shadow-sm" />
              <span className="text-3xl font-bold text-white tracking-tight">Kindora</span>
            </div>
            <p className="text-white/60 text-lg mb-8 max-w-sm">
              "Small acts. Big futures."
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-kindora-accent hover:text-kindora-primary transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-kindora-accent hover:text-kindora-primary transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white/90">Explore</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><a href="#" className="hover:text-kindora-accent transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-kindora-accent transition-colors">Campaigns</a></li>
              <li><a href="#" className="hover:text-kindora-accent transition-colors">Impact</a></li>
              <li><a href="#" className="hover:text-kindora-accent transition-colors">Stories</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white/90">Get Involved</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><a href="#" className="hover:text-kindora-accent transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-kindora-accent transition-colors">Sponsor</a></li>
              <li><a href="#" className="hover:text-kindora-accent transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-kindora-accent transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white/90">Contact</h4>
            <p className="text-white/90 font-semibold mb-1 text-lg">Anusuyadevi N</p>
            <a href="tel:7550399820" className="text-white/60 hover:text-kindora-accent transition-colors block mb-4">Phone: 7550399820</a>
            <a href="mailto:hello@kindora.org" className="text-kindora-accent font-medium hover:underline block mb-2">hello@kindora.org</a>
            <p className="text-white/60">
              123 Hope Street,<br />
              New Delhi, India 110001
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-medium">
          <p>© 2026 Kindora. Demo project created for portfolio/interview purposes.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
