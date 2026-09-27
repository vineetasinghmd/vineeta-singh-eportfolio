import React, { useState } from 'react';
import { Menu, X, BookOpen, User, Award, Activity, Users, PenTool, Mail, GraduationCap } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'Academics', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Activity },
    { id: 'research', label: 'Research', icon: Award },
    { id: 'leadership', label: 'Leadership', icon: Users },
    { id: 'service', label: 'Service', icon: BookOpen },
    { id: 'writing', label: 'Writing', icon: PenTool },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top UT Austin Academic Bar */}
      <div className="bg-[#BF5700] text-white py-1.5 px-4 text-xs font-sans text-center tracking-wide flex items-center justify-center gap-2 font-medium shadow-xs">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-300 animate-pulse"></span>
        <span>The University of Texas at Austin • Organismal Biology & Physiology (B.S.A.) • Class of 2027</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#BF5700] text-white flex items-center justify-center font-serif text-xl font-bold shadow-xs group-hover:bg-[#993F00] transition-colors">
              VS
            </div>
            <div className="text-left">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight block group-hover:text-[#BF5700] transition-colors">
                Vineeta Singh
              </span>
              <span className="text-[11px] tracking-wider uppercase text-slate-500 font-semibold block">
                Premedical Student • Aspiring Surgeon
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#BF5700] text-white shadow-xs font-semibold'
                      : 'text-slate-700 hover:text-[#BF5700] hover:bg-orange-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:bg-orange-50 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#BF5700]" /> : <Menu className="w-6 h-6 text-[#BF5700]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-1.5 animate-fade-in shadow-lg">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#BF5700] text-white font-semibold'
                    : 'text-slate-700 hover:bg-orange-50 hover:text-[#BF5700]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
