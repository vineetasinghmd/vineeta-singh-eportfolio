import React from 'react';
import { ArrowRight, Camera, Shield, Heart } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-16 py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Hero Section: Simple, Editorial, Authentic */}
      <section className="space-y-8 pt-2">
        
        {/* Scholar Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-md bg-slate-100 text-[#0A192F] text-xs font-semibold uppercase tracking-wider border border-slate-200">
            UT Austin Premedicine '27
          </span>
          <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-semibold border border-blue-200">
            Dell Scholar
          </span>
          <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-semibold border border-blue-200">
            FRI Scholar
          </span>
          <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-semibold border border-blue-200">
            WINS Scholar
          </span>
        </div>

        {/* Name & Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A192F] tracking-tight leading-tight">
              Hi, I’m Vineeta!
            </h1>
            <p className="text-xl text-slate-800 font-serif italic leading-relaxed">
              Premedical student, aspiring surgeon, and public health advocate at The University of Texas at Austin.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-xl overflow-hidden border-2 border-slate-200 shadow-md">
              <img
                src="/vineeta_portrait.png"
                alt="Vineeta Singh"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Authentic Narrative Intro */}
        <div className="prose prose-slate max-w-none text-slate-700 font-sans text-base leading-relaxed space-y-4 pt-2">
          <p>
            I’m interested in the ways medicine can extend beyond the operating room to improve patients’ lives and strengthen the communities they call home. My interests lie at the intersection of <strong>surgery, health equity, public health, and patient-centered care</strong>, with a particular passion for improving health outcomes for older adults and expanding access to quality healthcare in rural communities.
          </p>
          <p>
            My experiences in clinical care, public health, crisis support, education, and community service have allowed me to work alongside clinicians, stroke survivors, patients in crisis, students, and underserved communities. Through these experiences, I’ve learned that meaningful healthcare requires more than treating a diagnosis—it requires listening to patients, understanding their circumstances, and recognizing the experiences that shape their health.
          </p>
        </div>

      </section>

      {/* Sanskrit Guiding Principle Box */}
      <section className="bg-[#0A192F] text-white rounded-xl p-8 space-y-4 shadow-sm border border-slate-800">
        <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Heart className="w-4 h-4 text-rose-400" />
          <span>Guiding Principle</span>
        </div>
        <blockquote className="font-serif text-2xl sm:text-3xl italic text-amber-100 leading-snug">
          “Śarīram ādyam khalu dharma sādanam”
        </blockquote>
        <p className="text-sm text-slate-200 font-sans leading-relaxed">
          <em>The body is the primary instrument through which one fulfills one’s duties and higher aims.</em> To me, this reflects the idea that health is foundational to dignity, independence, and the ability to participate fully in life. As I pursue a career in medicine, I hope to combine clinical practice with public health and advocacy to address disparities and help patients and their families live healthier, more meaningful lives.
        </p>
      </section>

      {/* Military Aspiration Callout */}
      <section className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-3">
        <div className="flex items-center gap-2.5 text-[#0A192F]">
          <Shield className="w-5 h-5 text-blue-800" />
          <h3 className="font-serif text-lg font-bold">Service & Military Aspiration</h3>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed font-sans">
          I aspire to serve as a physician in the <strong>U.S. Army Reserve</strong>, supporting the health and well-being of service members while continuing to serve communities beyond the hospital.
        </p>
      </section>

      {/* Quick Navigation Cards */}
      <section className="space-y-6 pt-4">
        <h2 className="font-serif text-2xl font-bold text-[#0A192F] border-b border-slate-200 pb-3">
          Explore Portfolio Sections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Academics */}
          <div 
            onClick={() => setActiveTab('about')}
            className="p-6 rounded-lg bg-white border border-slate-200 hover:border-[#0A192F] hover:shadow-md transition-all cursor-pointer space-y-2 group"
          >
            <h3 className="font-serif font-bold text-lg text-[#0A192F] group-hover:text-blue-800 transition-colors flex items-center justify-between">
              <span>Academics</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-600">
              BSA in Organismal Biology & Physiology at UT Austin ('27). Dell, FRI & WINS Scholar.
            </p>
          </div>

          {/* Card 2: Experience */}
          <div 
            onClick={() => setActiveTab('experience')}
            className="p-6 rounded-lg bg-white border border-slate-200 hover:border-[#0A192F] hover:shadow-md transition-all cursor-pointer space-y-2 group"
          >
            <h3 className="font-serif font-bold text-lg text-[#0A192F] group-hover:text-blue-800 transition-colors flex items-center justify-between">
              <span>Experience</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-600">
              Hospital volunteer, hospice companion, crisis services, speech therapy, and epidemiology.
            </p>
          </div>

          {/* Card 3: Research */}
          <div 
            onClick={() => setActiveTab('research')}
            className="p-6 rounded-lg bg-white border border-slate-200 hover:border-[#0A192F] hover:shadow-md transition-all cursor-pointer space-y-2 group"
          >
            <h3 className="font-serif font-bold text-lg text-[#0A192F] group-hover:text-blue-800 transition-colors flex items-center justify-between">
              <span>Research</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-600">
              FRI CRISPR lab gene regulation in *C. elegans* & published Springer environmental study.
            </p>
          </div>

          {/* Card 4: Leadership */}
          <div 
            onClick={() => setActiveTab('leadership')}
            className="p-6 rounded-lg bg-white border border-slate-200 hover:border-[#0A192F] hover:shadow-md transition-all cursor-pointer space-y-2 group"
          >
            <h3 className="font-serif font-bold text-lg text-[#0A192F] group-hover:text-blue-800 transition-colors flex items-center justify-between">
              <span>Leadership</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-600">
              Immunology TA, India Conference Marketing Director, and Matriculate Advising Fellow.
            </p>
          </div>

          {/* Card 5: Service */}
          <div 
            onClick={() => setActiveTab('service')}
            className="p-6 rounded-lg bg-white border border-slate-200 hover:border-[#0A192F] hover:shadow-md transition-all cursor-pointer space-y-2 group"
          >
            <h3 className="font-serif font-bold text-lg text-[#0A192F] group-hover:text-blue-800 transition-colors flex items-center justify-between">
              <span>Service</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-600">
              St. David's HealthCare, Enhabit Hospice, Austin Free-Net, and AmeriCorps public health navigation.
            </p>
          </div>

          {/* Card 6: Writing */}
          <div 
            onClick={() => setActiveTab('writing')}
            className="p-6 rounded-lg bg-white border border-slate-200 hover:border-[#0A192F] hover:shadow-md transition-all cursor-pointer space-y-2 group"
          >
            <h3 className="font-serif font-bold text-lg text-[#0A192F] group-hover:text-blue-800 transition-colors flex items-center justify-between">
              <span>Writing</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-600">
              Reflections on health equity, stroke rehabilitation, digital access, and scientific inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Hobbies / Personal Note */}
      <section className="bg-slate-100/80 rounded-xl p-6 border border-slate-200 flex items-start gap-4 text-xs text-slate-700">
        <Camera className="w-5 h-5 text-[#0A192F] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-[#0A192F] block font-serif text-sm mb-0.5">Beyond Medicine</span>
          <p className="leading-relaxed">
            When I’m not studying medicine or working on a project, you’ll usually find me with a camera in hand, traveling somewhere new, or reading poetry.
          </p>
        </div>
      </section>

    </div>
  );
};
