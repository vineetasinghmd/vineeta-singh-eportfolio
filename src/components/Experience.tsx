import React, { useState } from 'react';
import { Activity, Heart, Shield, Users, Building2, Globe, CheckCircle2, Clock } from 'lucide-react';

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const experiences = [
    {
      id: 'st-davids',
      title: "St. David's HealthCare — Student Volunteer",
      category: 'clinical',
      categoryLabel: 'Clinical Care & Hospital Volunteering',
      period: 'September 2026 – Present',
      location: 'Austin, TX',
      bullets: [
        'Volunteer in a healthcare setting and gain firsthand exposure to hospital operations and patient-centered care.',
        'Support patients, families, and healthcare staff while learning how different members of a care team contribute to the patient experience.',
        'Continue developing my understanding of hospital-based medicine and the importance of compassionate, respectful patient interactions.'
      ],
      icon: Activity
    },
    {
      id: 'enhabit',
      title: 'Enhabit Home Health & Hospice — Hospice Volunteer',
      category: 'hospice',
      categoryLabel: 'Hospice & Patient Support',
      period: 'August 2026 – Present',
      location: 'Austin, TX',
      bullets: [
        'Support patients and families receiving hospice and end-of-life care.',
        'Learn from patients\' experiences with serious illness and the physical, emotional, and social dimensions of healthcare.',
        'Develop a deeper appreciation for dignity, independence, and quality of life as important components of patient-centered care.'
      ],
      icon: Heart
    },
    {
      id: 'texas-hhs',
      title: 'Texas Health and Human Services — Crisis Services Intern',
      category: 'crisis',
      categoryLabel: 'Crisis Services & Public Health',
      period: 'August 2026 – Present',
      location: 'Austin, TX',
      bullets: [
        'Gain experience within a public behavioral health and crisis services setting.',
        'Learn how crisis intervention, community resources, and coordinated services support individuals during vulnerable moments.',
        'Explore the intersection of healthcare, mental health, public systems, and access to care.'
      ],
      icon: Shield
    },
    {
      id: 'ta-immunology',
      title: 'College of Natural Sciences, UT Austin — Teaching Assistant, Immunology Lab',
      category: 'education',
      categoryLabel: 'Health Education',
      period: 'August 2026 – Present',
      location: 'Austin, TX',
      bullets: [
        'Assist students with laboratory activities and reinforce foundational concepts in immunology.',
        'Help create an environment where students can develop confidence with scientific concepts and laboratory techniques.',
        'Strengthen my own understanding of immunology while developing communication, mentorship, and teaching skills.'
      ],
      icon: Users
    },
    {
      id: 'austin-freenet',
      title: 'Austin Free-Net — Digital Navigator',
      category: 'equity',
      categoryLabel: 'Health Equity & Community Outreach',
      period: 'August 2026 – Present',
      location: 'Austin, TX',
      bullets: [
        'Help community members navigate digital resources and technology.',
        'Develop an understanding of how digital access can influence an individual\'s ability to connect with essential services and information.',
        'Explore the relationship between technology, accessibility, and broader social determinants of health.'
      ],
      icon: Globe
    },
    {
      id: 'austin-speech',
      title: 'Austin Speech Labs — Speech Therapy Assistant',
      category: 'clinical',
      categoryLabel: 'Hands-on Patient Support',
      period: 'January 2026 – May 2026',
      location: 'Austin, TX',
      bullets: [
        'Supported stroke survivors participating in speech and communication therapy.',
        'Worked with individuals navigating the effects of stroke and observed the role of rehabilitation in restoring communication and independence.',
        'Developed a deeper interest in neurological recovery, aging, and the ways healthcare can support quality of life after acute illness.'
      ],
      icon: Activity
    },
    {
      id: 'houston-epidemiology',
      title: 'Houston Health Department — Epidemiology Intern',
      category: 'public-health',
      categoryLabel: 'Public Health Science & Surveillance',
      period: 'January 2024 – August 2024',
      location: 'Houston, TX',
      bullets: [
        'Worked within the Public Health Science & Surveillance Division and gained exposure to epidemiological methods and public health surveillance.',
        'Learned how population-level data can be used to identify health trends and inform community health interventions.',
        'Developed an appreciation for the role of public health in preventing disease and addressing health disparities before patients enter the clinical setting.'
      ],
      icon: Building2
    },
    {
      id: 'americorps',
      title: 'AmeriCorps — Public Health Community Outreach Resource Navigator',
      category: 'public-health',
      categoryLabel: 'Public Health Outreach',
      period: 'January 2024 – August 2024',
      location: 'Houston, TX',
      bullets: [
        'Connected community members with health and social resources through outreach and navigation efforts.',
        'Learned how barriers such as limited resources, access, and awareness can affect health outcomes.',
        'Strengthened my interest in addressing the systemic factors that influence whether individuals can receive quality care.'
      ],
      icon: Users
    }
  ];

  const filtered = experiences.filter(exp => {
    if (filter === 'all') return true;
    return exp.category === filter;
  });

  return (
    <div className="space-y-16 py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Clinical, Public Health & Community Experience
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A192F] tracking-tight">
          My Healthcare Journey
        </h1>
        <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed max-w-3xl">
          My interest in healthcare has developed through experiences across clinical care, public health, patient support, hospice, crisis services, and health education. Rather than limiting my understanding of healthcare to one setting, I have intentionally sought opportunities that allow me to see how patients interact with different parts of the healthcare system.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
              filter === 'all'
                ? 'bg-[#0A192F] text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Experiences ({experiences.length})
          </button>
          <button
            onClick={() => setFilter('clinical')}
            className={`px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
              filter === 'clinical'
                ? 'bg-[#0A192F] text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Clinical Care & Rehabilitation
          </button>
          <button
            onClick={() => setFilter('hospice')}
            className={`px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
              filter === 'hospice'
                ? 'bg-[#0A192F] text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Hospice & Patient Support
          </button>
          <button
            onClick={() => setFilter('public-health')}
            className={`px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
              filter === 'public-health'
                ? 'bg-[#0A192F] text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Public Health & Epidemiology
          </button>
          <button
            onClick={() => setFilter('crisis')}
            className={`px-3.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${
              filter === 'crisis'
                ? 'bg-[#0A192F] text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Crisis Services
          </button>
        </div>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {filtered.map((exp) => {
          const IconComponent = exp.icon;
          return (
            <div
              key={exp.id}
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 hover:border-[#0A192F] transition-all shadow-xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0A192F] text-white flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-sky-300" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A192F]">
                      {exp.title}
                    </h3>
                    <span className="text-xs font-semibold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200 inline-block mt-1">
                      {exp.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs text-slate-500 font-medium font-sans">
                  <p className="font-semibold text-slate-800">{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-700 font-sans">
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

      {/* What I Hope to Explore Next Section */}
      <section className="bg-white rounded-xl border border-slate-200 p-8 space-y-6 shadow-xs">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-[#0A192F]">
            What I Hope to Explore Next
          </h2>
          <p className="text-xs text-slate-600 font-sans mt-1">
            My healthcare experiences have given me exposure to many different parts of the healthcare system, but I see my undergraduate years as an opportunity to keep asking questions and exploring where I can make the greatest impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 font-sans">
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
            <h3 className="font-serif font-bold text-sm text-[#0A192F]">Clinical Care</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Continue volunteering in hospitals and clinical settings.</li>
              <li>Seek opportunities that provide meaningful interaction with patients and healthcare professionals.</li>
              <li>Gain greater exposure to different specialties, particularly surgery and medicine involving older adults.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
            <h3 className="font-serif font-bold text-sm text-[#0A192F]">Physician Shadowing</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Shadow physicians across different specialties and practice environments.</li>
              <li>Learn how physicians approach clinical decision-making, patient communication, and interdisciplinary care.</li>
              <li>Explore how healthcare delivery differs between urban, rural, inpatient, outpatient, and community settings.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
            <h3 className="font-serif font-bold text-sm text-[#0A192F]">Research</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Continue developing my biomedical research skills.</li>
              <li>Explore research questions related to surgery, aging, physiology, health disparities, and patient outcomes.</li>
              <li>Seek opportunities to connect laboratory and clinical research with real-world patient needs.</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
            <h3 className="font-serif font-bold text-sm text-[#0A192F]">Public Health & Health Equity</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Continue working with communities that experience barriers to healthcare access.</li>
              <li>Learn more about rural healthcare and the structural factors contributing to disparities in health outcomes.</li>
              <li>Explore how public health interventions can complement clinical medicine.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white rounded-xl border border-slate-200 p-8 space-y-6 shadow-xs">
        <h2 className="font-serif text-2xl font-bold text-[#0A192F] border-b border-slate-200 pb-3 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-900" />
          Timeline & Future Directions
        </h2>

        <div className="space-y-6 font-sans text-xs text-slate-700">
          <div className="border-l-2 border-[#0A192F] pl-4 space-y-1">
            <span className="font-bold text-sm text-[#0A192F] font-serif block">Fall 2026 – Spring 2027</span>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Continue clinical, hospice, crisis services, and community-based experiences.</li>
              <li>Grow in my role as an Immunology Lab Teaching Assistant.</li>
              <li>Continue exploring different areas of medicine through shadowing and mentorship.</li>
              <li>Reflect on how experiences shape my understanding of patient-centered care.</li>
              <li>Build meaningful relationships with physicians, researchers, patients, and community organizations.</li>
            </ul>
          </div>

          <div className="border-l-2 border-blue-600 pl-4 space-y-1">
            <span className="font-bold text-sm text-[#0A192F] font-serif block">Summer 2027</span>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Pursue a clinical, biomedical research, or public health opportunity that deepens my interests.</li>
              <li>Continue exploring medicine outside of the traditional classroom environment.</li>
              <li>Seek experiences that challenge me to think about healthcare from both individual and population levels.</li>
            </ul>
          </div>

          <div className="border-l-2 border-emerald-600 pl-4 space-y-1">
            <span className="font-bold text-sm text-[#0A192F] font-serif block">Beyond 2027</span>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Continue building clinical and research experience before medical school.</li>
              <li>Develop a clearer understanding of the specialty and communities I hope to serve.</li>
              <li>Integrate my interests in medicine, surgery, public health, and health equity into my future career.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reflection Box */}
      <section className="bg-[#0A192F] text-white rounded-xl p-8 space-y-4 shadow-md text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
          Reflection on Healthcare
        </span>
        <blockquote className="font-serif text-lg sm:text-xl italic leading-relaxed text-slate-100">
          “What I have come to appreciate most about healthcare is that there is no single way to care for a patient. A physician may treat a disease, but a patient's health is also shaped by their family, community, access to resources, ability to communicate, mental well-being, and sense of independence.”
        </blockquote>
        <p className="text-xs text-slate-300 font-sans leading-relaxed">
          Working with stroke survivors has shown me the importance of rehabilitation and quality of life. Public health experiences have shown me the systems and barriers that influence health before a patient ever enters a clinic. Hospice has reminded me that good healthcare is not always about extending life, but also about preserving dignity. Crisis services have shown me the importance of meeting people where they are during some of their most vulnerable moments.
        </p>
      </section>

    </div>
  );
};
