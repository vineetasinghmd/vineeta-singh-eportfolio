import React, { useState } from 'react';
import { Menu, X, BookOpen, User, Award, Activity, Users, PenTool, Mail, FileText } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: BookOpen },
    { id: 'research', label: 'Research', icon: Award },
    { id: 'clinical', label: 'Clinical & Service', icon: Activity },
    { id: 'leadership', label: 'Leadership', icon: Users },
    { id: 'writing', label: 'Writing', icon: PenTool },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E2DDD5]">
      {/* Top Banner */}
      <div className="bg-[#0F2C59] text-white py-1.5 px-4 text-xs font-medium text-center tracking-wide">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Premedical Student & TA at The University of Texas at Austin • Aspiring Surgeon & Clinical Researcher
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-[#0F2C59] text-[#FDFBF7] flex items-center justify-center font-serif text-xl font-bold group-hover:scale-105 transition-transform duration-300 shadow-sm">
              VS
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-[#0F2C59] tracking-tight block group-hover:text-[#1E3A8A] transition-colors">
                Vineeta Singh
              </span>
              <span className="text-xs tracking-wider uppercase text-slate-500 font-semibold block">
                UT Austin Premed
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0F2C59] text-white shadow-sm font-semibold'
                      : 'text-slate-700 hover:text-[#0F2C59] hover:bg-[#F7F5F0]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button: CV */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('about')}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#0F2C59] text-[#0F2C59] hover:bg-[#0F2C59] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-300 shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              View Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md text-slate-700 hover:text-[#0F2C59] hover:bg-[#F7F5F0] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E2DDD5] bg-[#FDFBF7] px-4 pt-2 pb-6 space-y-2 animate-fade-in shadow-xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#0F2C59] text-white font-semibold'
                    : 'text-slate-700 hover:bg-[#F7F5F0] hover:text-[#0F2C59]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                {item.label}
              </button>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => handleNavClick('about')}
              className="w-full flex items-center justify-center gap-2 py-3 border border-[#0F2C59] text-[#0F2C59] hover:bg-[#0F2C59] hover:text-white rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors"
            >
              <FileText className="w-4 h-4" />
              View Complete Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
