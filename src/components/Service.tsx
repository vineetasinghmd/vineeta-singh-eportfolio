import React from 'react';
import { Activity, Heart, Shield, Building2, Globe, Users, CheckCircle2 } from 'lucide-react';

export const Service: React.FC = () => {
  const serviceRoles = [
    {
      title: "St. David's HealthCare — Student Volunteer",
      period: 'September 2026 – Present',
      location: 'Austin, TX',
      category: 'Healthcare Service | Clinical Volunteering',
      bullets: [
        'Volunteer in a hospital setting and support patients, families, and healthcare staff.',
        'Gain firsthand exposure to the patient experience within a hospital environment.',
        'Learn how small acts of assistance and compassion can contribute to a patient\'s overall experience of care.'
      ],
      icon: Activity
    },
    {
      title: 'Enhabit Home Health & Hospice — Hospice Volunteer',
      period: 'August 2026 – Present',
      location: 'Austin, TX',
      category: 'Hospice Service | Patient Support',
      bullets: [
        'Support patients and families receiving hospice and end-of-life care.',
        'Provide companionship and a supportive presence for individuals navigating serious illness.',
        'Develop a deeper understanding of dignity, comfort, and quality of life in patient care.',
        'Learn to appreciate patients as individuals whose goals and experiences extend beyond their medical conditions.'
      ],
      icon: Heart
    },
    {
      title: 'Austin Free-Net — Digital Navigator',
      period: 'August 2026 – Present',
      location: 'Austin, TX',
      category: 'Community Service | Health Equity | Digital Access',
      bullets: [
        'Help community members navigate digital technology and access online resources.',
        'Support individuals who may face barriers to digital access and literacy.',
        'Gain perspective on how technology and connectivity can influence access to essential services, information, and opportunities.'
      ],
      icon: Globe
    },
    {
      title: 'Austin Speech Labs — Speech Therapy Assistant',
      period: 'January 2026 – May 2026',
      location: 'Austin, TX',
      category: 'Patient Support | Rehabilitation | Clinical Service',
      bullets: [
        'Supported stroke survivors participating in speech and communication therapy.',
        'Assisted individuals working toward improved communication and greater independence following stroke.',
        'Built meaningful relationships with patients while learning about the long-term effects of neurological illness.',
        'Developed a deeper appreciation for rehabilitation, patience, and quality of life in healthcare.'
      ],
      icon: Activity
    },
    {
      title: 'Texas Health and Human Services — Crisis Services Intern',
      period: 'August 2026 – Present',
      location: 'Austin, TX',
      category: 'Community Service | Crisis Support | Public Health',
      bullets: [
        'Support work within a public crisis services environment serving individuals during vulnerable periods.',
        'Gain exposure to crisis intervention, community resources, and systems of support.',
        'Develop a greater understanding of the importance of accessible behavioral health services and compassionate communication.'
      ],
      icon: Shield
    },
    {
      title: 'Houston Health Department — Epidemiology Intern',
      period: 'January 2024 – August 2024',
      location: 'Houston, TX',
      category: 'Public Health Service | Epidemiology | Community Health',
      bullets: [
        'Contributed to public health work within the Public Health Science & Surveillance Division.',
        'Learned how surveillance and epidemiological data can help identify health concerns and inform community-level interventions.',
        'Developed an understanding of how public health professionals work to protect communities before health problems become individual clinical crises.'
      ],
      icon: Building2
    },
    {
      title: 'AmeriCorps — Public Health Community Outreach Resource Navigator',
      period: 'January 2024 – August 2024',
      location: 'Houston, TX',
      category: 'Community Outreach | Health Equity | Public Health Service',
      bullets: [
        'Connected community members with health and social resources.',
        'Helped individuals navigate available services and identify resources that could address their needs.',
        'Developed an understanding of how social and structural barriers can influence access to healthcare.',
        'Strengthened my commitment to serving communities that experience barriers to quality care.'
      ],
      icon: Users
    }
  ];

  return (
    <div className="space-y-12 py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Patient Advocacy & Public Service
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A192F] tracking-tight">
          Service Experience
        </h1>
        <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed max-w-3xl">
          Service has been one of the most consistent themes throughout my experiences in healthcare and public health. I have had the opportunity to serve patients, families, stroke survivors, community members, and individuals navigating difficult circumstances. These experiences have shown me that service does not always look like a traditional volunteer role—it can mean listening to someone, helping them access a resource, making healthcare more understandable, or simply being present when someone needs support.
        </p>
      </div>

      {/* Service Roles Grid */}
      <div className="space-y-6">
        {serviceRoles.map((role, idx) => {
          const IconComponent = role.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 hover:border-[#0A192F] transition-all shadow-xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0A192F] text-white flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-sky-300" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A192F]">
                      {role.title}
                    </h3>
                    <span className="text-xs font-semibold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200 inline-block mt-1">
                      {role.category}
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs text-slate-500 font-medium font-sans">
                  <p className="font-semibold text-slate-800">{role.period}</p>
                  <p>{role.location}</p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-700 font-sans">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Service Reflection Box */}
      <div className="bg-[#0A192F] text-white rounded-xl p-8 space-y-4 shadow-md text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-300 font-sans">
          Reflection on Service
        </span>
        <blockquote className="font-serif text-lg sm:text-xl italic text-slate-100 leading-relaxed">
          “My service experiences have changed the way I think about what it means to care for someone. Healthcare is often viewed through the lens of diagnosis, treatment, and clinical outcomes, but service begins with understanding what a person needs beyond their diagnosis. A stroke survivor may need encouragement and patience during rehabilitation. A hospice patient may value companionship and dignity. A community member may need help navigating a resource before they can even begin addressing a health concern.”
        </blockquote>
        <p className="text-xs text-slate-300 font-sans leading-relaxed">
          These experiences have reinforced my belief that medicine should recognize the whole person—not simply the condition being treated. As I pursue medicine, I hope to continue serving communities with humility, compassion, and an awareness of the social and systemic factors that shape health.
        </p>
      </div>

    </div>
  );
};
