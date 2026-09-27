import React from 'react';
import { Mail, ArrowUpRight, Heart, Stethoscope } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'clinical', label: 'Clinical & Service' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'writing', label: 'Writing' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#0B2545] text-sky-100 pt-16 pb-12 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="md:col-span-6 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-500 text-white flex items-center justify-center font-serif text-lg font-bold">
                VS
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Vineeta Singh</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Premedical Student at The University of Texas at Austin dedicated to neuroscience, clinical research, patient advocacy, and public health service.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 text-sky-200 text-xs font-mono border border-slate-700">
                <Stethoscope className="w-3.5 h-3.5 text-sky-400" />
                College of Natural Sciences • UT Austin
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-300 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActiveTab(link.id);
                      scrollToTop();
                    }}
                    className="hover:text-sky-300 transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-sky-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-300 font-sans">
              Academic Contact
            </h4>
            <p className="text-xs text-slate-300">
              For research collaboration, academic inquiries, or student advising:
            </p>
            <a
              href="mailto:v.singh@utexas.edu"
              className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-sky-300 transition-colors bg-slate-800/90 px-3.5 py-2 rounded-md border border-slate-700"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              v.singh@utexas.edu
            </a>
            <p className="text-xs text-slate-400 pt-1">
              Austin, Texas • UT Austin Campus
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Vineeta Singh. Built for academic & professional presentation.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 flex items-center gap-1">
              Dedicated to healthcare service <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> & scientific discovery
            </span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors underline"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
