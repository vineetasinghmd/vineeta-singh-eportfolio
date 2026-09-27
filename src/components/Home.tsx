import React from 'react';
import { ArrowRight, BookOpen, Award, Activity, Users, Sparkles, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-4 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2C59]/10 text-[#0F2C59] text-xs font-semibold uppercase tracking-wider border border-[#0F2C59]/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                The University of Texas at Austin • College of Natural Sciences
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2C59] tracking-tight leading-[1.12]">
                Medicine beyond the operating room, rooted in discovery and service.
              </h1>

              <p className="text-lg text-slate-700 leading-relaxed font-sans max-w-2xl">
                Hi, I’m <strong className="text-[#0F2C59] font-semibold">Vineeta Singh</strong>. I am a premedical student, aspiring surgeon, and public health advocate interested in how medicine extends beyond clinical intervention to strengthen patients’ lives, health equity, and community resilience.
              </p>

              {/* Badges Pill Row */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F7F5F0] text-[#0F2C59] text-xs font-medium border border-[#E2DDD5]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  FRI CRISPR Researcher
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F7F5F0] text-[#0F2C59] text-xs font-medium border border-[#E2DDD5]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Springer Published Co-Author
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F7F5F0] text-[#0F2C59] text-xs font-medium border border-[#E2DDD5]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Immunology Lab TA
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F7F5F0] text-[#0F2C59] text-xs font-medium border border-[#E2DDD5]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Hospice & Clinical Volunteer
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setActiveTab('research')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0F2C59] text-white font-medium text-sm hover:bg-[#1E3A8A] transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <span>Explore Research</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setActiveTab('clinical')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#F7F5F0] text-[#0F2C59] font-medium text-sm border border-[#E2DDD5] hover:bg-[#EFECE6] transition-all duration-300"
                >
                  <Activity className="w-4 h-4 text-emerald-700" />
                  <span>Clinical & Service Work</span>
                </button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#0F2C59] to-[#1E3A8A] opacity-20 blur-lg transform rotate-2"></div>
                
                <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-[#F7F5F0]">
                  <img
                    src="/vineeta_portrait.png"
                    alt="Vineeta Singh — UT Austin Premedical Student"
                    className="w-full h-[440px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0F2C59]/90 via-[#0F2C59]/50 to-transparent p-6 text-white text-left">
                    <p className="font-serif text-lg font-bold">Vineeta Singh</p>
                    <p className="text-xs text-amber-200 font-sans tracking-wide">
                      B.S. Candidate • UT Austin Premedical Track
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Quote / Philosophy Statement */}
      <section className="bg-[#0F2C59] text-white py-14 px-6 rounded-2xl max-w-6xl mx-auto shadow-xl relative overflow-hidden text-center sm:text-left">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded bg-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            Philosophy of Care
          </span>
          <blockquote className="font-serif text-2xl sm:text-3xl italic leading-relaxed text-amber-50">
            “Healthcare is often viewed through the lens of diagnosis, treatment, and clinical outcomes, but service begins with understanding what a person needs beyond their diagnosis. A stroke survivor may need encouragement during rehabilitation. A hospice patient may value companionship. A community member may need help navigating a resource before they can even address a health concern.”
          </blockquote>
          <div className="pt-2 text-sm text-slate-300 font-sans font-medium flex items-center justify-center sm:justify-start gap-2">
            <span className="w-6 h-px bg-amber-400"></span>
            <span>Vineeta Singh • Premedical Student & Service Advocate</span>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#0F2C59]">Core Academic & Service Pillars</h2>
          <p className="text-slate-600 text-sm">
            Bridging fundamental scientific discovery with compassionate patient care and community advocacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            onClick={() => setActiveTab('research')}
            className="bg-[#F7F5F0] rounded-xl p-6 border border-[#E2DDD5] hover:border-[#0F2C59] hover:shadow-md transition-all duration-300 cursor-pointer space-y-4 text-left group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#0F2C59] text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0F2C59] group-hover:text-[#1E3A8A] transition-colors">
              Molecular & CRISPR Research
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Investigated *C. elegans* embryonic development and gene regulation using CRISPR-Cas9, Gibson assembly, and fluorescent tagging in the FRI CRISPR Lab.
            </p>
            <span className="inline-flex items-center text-xs font-semibold text-[#0F2C59] group-hover:translate-x-1 transition-transform">
              View Research <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </div>

          <div 
            onClick={() => setActiveTab('research')}
            className="bg-[#F7F5F0] rounded-xl p-6 border border-[#E2DDD5] hover:border-[#0F2C59] hover:shadow-md transition-all duration-300 cursor-pointer space-y-4 text-left group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#0F2C59] text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0F2C59] group-hover:text-[#1E3A8A] transition-colors">
              Environmental Radiology
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Co-contributed to published research on radionuclide hazards and heavy metal risk assessments in *Springer International Publishing* (2025).
            </p>
            <span className="inline-flex items-center text-xs font-semibold text-[#0F2C59] group-hover:translate-x-1 transition-transform">
              View Publication <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </div>

          <div 
            onClick={() => setActiveTab('clinical')}
            className="bg-[#F7F5F0] rounded-xl p-6 border border-[#E2DDD5] hover:border-[#0F2C59] hover:shadow-md transition-all duration-300 cursor-pointer space-y-4 text-left group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#0F2C59] text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0F2C59] group-hover:text-[#1E3A8A] transition-colors">
              Clinical & Hospice Care
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hospital volunteer at St. David’s HealthCare, end-of-life hospice companion at Enhabit Hospice, and speech rehabilitation assistant at Austin Speech Labs.
            </p>
            <span className="inline-flex items-center text-xs font-semibold text-[#0F2C59] group-hover:translate-x-1 transition-transform">
              View Clinical Roles <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </div>

          <div 
            onClick={() => setActiveTab('leadership')}
            className="bg-[#F7F5F0] rounded-xl p-6 border border-[#E2DDD5] hover:border-[#0F2C59] hover:shadow-md transition-all duration-300 cursor-pointer space-y-4 text-left group"
          >
            <div className="w-12 h-12 rounded-lg bg-[#0F2C59] text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0F2C59] group-hover:text-[#1E3A8A] transition-colors">
              Teaching & Leadership
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Immunology Lab TA at UT Austin, Marketing Director for the India Conference, Matriculate Advising Fellow, and Residence Hall Desk Assistant.
            </p>
            <span className="inline-flex items-center text-xs font-semibold text-[#0F2C59] group-hover:translate-x-1 transition-transform">
              View Leadership <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </div>
        </div>
      </section>

      {/* Brief Highlight Banner */}
      <section className="bg-[#F7F5F0] border border-[#E2DDD5] rounded-xl p-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F2C59]">
            Academic & Clinical Portfolio
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#0F2C59]">
            Interested in reviewing Vineeta's complete credentials?
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Read detailed breakdowns of lab cloning protocols, epidemiological surveillance projects, teaching experiences, and personal essays on medicine and ethics.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('about')}
            className="px-5 py-2.5 rounded-md bg-[#0F2C59] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A8A] transition-colors"
          >
            Read Full Bio & CV
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className="px-5 py-2.5 rounded-md border border-[#0F2C59] text-[#0F2C59] text-xs font-semibold uppercase tracking-wider hover:bg-[#0F2C59] hover:text-white transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};
