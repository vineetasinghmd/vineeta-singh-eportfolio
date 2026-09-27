import React, { useState } from 'react';
import { Activity, Heart, Shield, Users, Globe, Building2, CheckCircle2 } from 'lucide-react';

export const ClinicalService: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'clinical' | 'public-health' | 'community'>('all');

  const experiences = [
    {
      id: 'st-davids',
      title: "St. David's HealthCare — Student Volunteer",
      category: 'clinical',
      categoryLabel: 'Clinical & Hospital Care',
      period: 'September 2026 – Present',
      location: 'Austin, TX',
      bullets: [
        'Volunteer in an acute hospital setting, supporting patients, visiting families, and clinical care staff.',
        'Gain firsthand exposure to inpatient clinical workflow and acute hospital environments.',
        'Learn how small acts of assistance and steady compassion enhance a patient’s overall experience of hospital care.'
      ],
      icon: Activity
    },
    {
      id: 'enhabit',
      title: 'Enhabit Home Health & Hospice — Hospice Volunteer',
      category: 'clinical',
      categoryLabel: 'Hospice & Palliative Care',
      period: 'August 2026 – Present',
      location: 'Austin, TX',
      bullets: [
        'Provide end-of-life companionship and supportive presence to patients and families navigating serious illness.',
        'Develop a deep appreciation for dignity, symptom comfort, and quality of life in palliative care.',
        'Learn to honor patients as individuals whose life stories, goals, and values extend far beyond their medical diagnoses.'
      ],
      icon: Heart
    },
    {
      id: 'austin-speech',
      title: 'Austin Speech Labs — Speech Therapy Assistant',
      category: 'clinical',
      categoryLabel: 'Neurological Rehabilitation',
      period: 'January 2026 – May 2026',
      location: 'Austin, TX',
      bullets: [
        'Supported stroke survivors participating in intensive speech and cognitive communication therapy.',
        'Assisted individuals working to regain functional speech, independence, and confidence following neurological injury.',
        'Built meaningful therapeutic relationships while learning about long-term neurological recovery.'
      ],
      icon: Activity
    },
    {
      id: 'austin-freenet',
      title: 'Austin Free-Net — Digital Navigator',
      category: 'community',
      categoryLabel: 'Digital Health Equity',
      period: 'August 2026 – Present',
      location: 'Austin, TX',
      bullets: [
        'Help community members navigate digital tools to access patient portals, online health information, and essential services.',
        'Support individuals facing barriers to digital literacy and technology connectivity.',
        'Gain perspective on how digital equity directly influences access to modern healthcare resources.'
      ],
      icon: Globe
    },
    {
      id: 'texas-hhs',
      title: 'Texas Health and Human Services — Crisis Services Intern',
      category: 'public-health',
      categoryLabel: 'Crisis & Behavioral Health',
      period: '2025 – 2026',
      location: 'Texas HHS System',
      bullets: [
        'Supported public crisis service programs serving individuals during vulnerable periods of mental health distress.',
        'Gained exposure to crisis intervention frameworks, community resources, and behavioral health safety nets.',
        'Developed compassionate communication skills suited for acute crisis situations.'
      ],
      icon: Shield
    },
    {
      id: 'houston-health',
      title: 'Houston Health Department — Epidemiology Intern',
      category: 'public-health',
      categoryLabel: 'Epidemiology & Surveillance',
      period: 'January 2024 – August 2024',
      location: 'Houston, TX',
      bullets: [
        'Contributed to public health surveillance within the Public Health Science & Surveillance Division.',
        'Examined epidemiological data to identify disease trends and inform community-level interventions.',
        'Learned how public health surveillance protects populations before individual clinical crises occur.'
      ],
      icon: Building2
    },
    {
      id: 'americorps',
      title: 'AmeriCorps — Public Health Community Outreach Resource Navigator',
      category: 'community',
      categoryLabel: 'Community Health Outreach',
      period: 'Public Health Service',
      location: 'Community Service',
      bullets: [
        'Connected community members with vital health, nutrition, and social safety-net resources.',
        'Assisted individuals in navigating complex social service systems to address structural barriers to care.',
        'Strengthened my personal commitment to serving communities facing health inequities.'
      ],
      icon: Users
    }
  ];

  const filteredExperiences = experiences.filter(exp => {
    if (filter === 'all') return true;
    return exp.category === filter;
  });

  return (
    <div className="space-y-16 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Header */}
      <div className="border-b border-[#E2DDD5] pb-8 space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0F2C59] bg-[#0F2C59]/10 px-3 py-1 rounded-full">
          Bedside Care & Public Health Outreach
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0F2C59] tracking-tight">
          Clinical & Service Experience
        </h1>
        <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
          Service is the cornerstone of my premedical training. From hospital wards and hospice rooms to community health departments, I strive to serve with active empathy and respect.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 pt-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === 'all'
                ? 'bg-[#0F2C59] text-white shadow-sm'
                : 'bg-[#F7F5F0] text-slate-700 hover:bg-[#EFECE6] border border-[#E2DDD5]'
            }`}
          >
            All Service Roles ({experiences.length})
          </button>
          <button
            onClick={() => setFilter('clinical')}
            className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === 'clinical'
                ? 'bg-[#0F2C59] text-white shadow-sm'
                : 'bg-[#F7F5F0] text-slate-700 hover:bg-[#EFECE6] border border-[#E2DDD5]'
            }`}
          >
            Clinical & Hospital Care (3)
          </button>
          <button
            onClick={() => setFilter('public-health')}
            className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === 'public-health'
                ? 'bg-[#0F2C59] text-white shadow-sm'
                : 'bg-[#F7F5F0] text-slate-700 hover:bg-[#EFECE6] border border-[#E2DDD5]'
            }`}
          >
            Public Health & Epidemiology (2)
          </button>
          <button
            onClick={() => setFilter('community')}
            className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
              filter === 'community'
                ? 'bg-[#0F2C59] text-white shadow-sm'
                : 'bg-[#F7F5F0] text-slate-700 hover:bg-[#EFECE6] border border-[#E2DDD5]'
            }`}
          >
            Digital Equity & Community (2)
          </button>
        </div>
      </div>

      {/* Cards List */}
      <div className="space-y-6">
        {filteredExperiences.map((exp) => {
          const IconComponent = exp.icon;
          return (
            <div
              key={exp.id}
              className="bg-[#F7F5F0] rounded-xl border border-[#E2DDD5] p-6 sm:p-8 hover:border-[#0F2C59] transition-all duration-300 shadow-xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2DDD5] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0F2C59] text-amber-300 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2C59]">
                      {exp.title}
                    </h3>
                    <span className="text-xs font-semibold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-200 inline-block mt-1">
                      {exp.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs text-slate-500 font-medium">
                  <p>{exp.period}</p>
                  <p className="text-slate-400">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Reflection Box */}
      <div className="bg-[#0F2C59] text-white rounded-2xl p-8 space-y-4 shadow-xl">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
          Personal Reflection on Clinical Service
        </span>
        <blockquote className="font-serif text-xl sm:text-2xl italic leading-relaxed text-[#FDFBF7]">
          “Healthcare is often viewed through the lens of diagnosis and clinical outcomes, but service begins with understanding what a person needs beyond their medical record. As I pursue medicine, I hope to serve communities with humility, compassion, and awareness of the systemic factors that shape health.”
        </blockquote>
      </div>

    </div>
  );
};
