import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Research } from './components/Research';
import { Leadership } from './components/Leadership';
import { Service } from './components/Service';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'experience', 'research', 'leadership', 'service', 'writing', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      <main className="flex-1">
        {activeTab === 'home' && <Home setActiveTab={handleTabChange} />}
        {activeTab === 'about' && <About setActiveTab={handleTabChange} />}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'research' && <Research />}
        {activeTab === 'leadership' && <Leadership />}
        {activeTab === 'service' && <Service />}
        {activeTab === 'writing' && <Writing />}
        {activeTab === 'contact' && <Contact />}
      </main>

      <Footer setActiveTab={handleTabChange} />
    </div>
  );
}

export default App;
