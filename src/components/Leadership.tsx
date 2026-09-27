import React from 'react';
import { Users, BookOpen, CheckCircle2, HeartHandshake, Shield, Sparkles } from 'lucide-react';

export const Leadership: React.FC = () => {
  const leadershipRoles = [
    {
      title: 'Teaching Assistant — Immunology Lab',
      org: 'College of Natural Sciences, The University of Texas at Austin',
      period: 'August 2026 – Present',
      category: 'STEM Education & Mentorship',
      bullets: [
        'Support undergraduate students as they learn fundamental immunology concepts and experimental laboratory techniques.',
        'Guide students through laboratory activities and foster confidence in scientific problem-solving.',
        'Translate complex scientific concepts into accessible explanations for students with varying levels of prior exposure.',
        'Develop leadership and communication skills through active teaching and academic mentorship.'
      ],
      icon: BookOpen
    },
    {
      title: 'Marketing Director — India Conference at UT Austin',
      org: 'Student Organizational Leadership',
      period: 'April 2026 – Present',
      category: 'Executive Leadership & Strategy',
      bullets: [
        'Lead marketing and publicity efforts for a major student-run conference celebrating Indian culture, scholarship, and community at UT Austin.',
        'Develop and coordinate comprehensive promotional strategies across social media, campus channels, and organizational partnerships.',
        'Collaborate with student executive leaders to plan and execute high-impact conference programming.',
        'Build experience in team management, strategic communications, event operations, and community leadership.'
      ],
      icon: Users
    },
    {
      title: 'Marketing Coordinator — India Conference at UT Austin',
      org: 'Student Organizational Leadership',
      period: 'December 2025 – April 2026',
      category: 'Event Operations & Communications',
      bullets: [
        'Supported outreach and promotional campaigns leading up to the annual India Conference.',
        'Collaborated with student team members to increase student awareness and engagement across UT Austin.',
        'Developed organizational and communication skills that led to appointment as Marketing Director.'
      ],
      icon: Users
    },
    {
      title: 'Advising Fellow — Matriculate',
      org: 'National Educational Non-Profit',
      period: 'November 2025 – Present',
      category: 'Educational Equity & Student Advocacy',
      bullets: [
        'Mentor and advise high school students from underrepresented backgrounds through the college application and decision-making process.',
        'Provide 1-on-1 guidance on college research, essay drafting, financial aid navigation, and application preparation.',
        'Empower students to take ownership of their educational goals and navigate higher education options with confidence.'
      ],
      icon: HeartHandshake
    },
    {
      title: 'Community Coordinator — Hindu YUVA',
      org: 'Student Organizational Leadership',
      period: 'August 2024 – May 2025',
      category: 'Campus Community Building',
      bullets: [
        'Fostered community among university students through cultural, educational, and social programming.',
        'Coordinated campus initiatives designed to connect students and create an inclusive environment.',
        'Worked collaboratively with executive student officers to execute events and engage student members.'
      ],
      icon: Sparkles
    },
    {
      title: 'Residence Hall Desk Assistant — UT Austin Housing & Dining',
      org: 'University Student Operations',
      period: 'November 2024 – Present',
      category: 'Residential Support & Conflict Resolution',
      bullets: [
        'Serve as a primary point of contact for hall residents, creating a welcoming, safe, and supportive residential environment.',
        'Assist students with residence questions, facility concerns, and campus safety resources.',
        'Strengthen interpersonal, crisis navigation, and communication skills through daily interactions with a diverse student population.'
      ],
      icon: Shield
    }
  ];

  return (
    <div className="space-y-16 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Header */}
      <div className="border-b border-[#E2DDD5] pb-8 space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0F2C59] bg-[#0F2C59]/10 px-3 py-1 rounded-full">
          Mentorship, Governance & Community Building
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0F2C59] tracking-tight">
          Leadership Experience
        </h1>
        <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
          Leadership is about taking responsibility for others, creating opportunities for people to succeed, and using my position to strengthen the community.
        </p>
      </div>

      {/* Leadership Philosophy Box */}
      <div className="bg-[#0F2C59] text-white rounded-2xl p-8 space-y-4 shadow-lg">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
          Philosophy on Leadership
        </span>
        <blockquote className="font-serif text-xl sm:text-2xl italic leading-relaxed text-[#FDFBF7]">
          “Leadership takes many forms. Sometimes it means leading a team or coordinating a major conference; other times, it means sitting down with one student and helping them believe that a college opportunity is possible.”
        </blockquote>
      </div>

      {/* Roles Timeline / Grid */}
      <div className="space-y-6">
        {leadershipRoles.map((role, idx) => {
          const IconComponent = role.icon;
          return (
            <div
              key={idx}
              className="bg-[#F7F5F0] rounded-xl border border-[#E2DDD5] p-6 sm:p-8 hover:border-[#0F2C59] transition-all duration-300 shadow-xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2DDD5] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0F2C59] text-amber-300 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2C59]">
                      {role.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">{role.org}</p>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs text-slate-500 font-medium">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200 mb-1 font-semibold">
                    {role.category}
                  </span>
                  <p>{role.period}</p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
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

    </div>
  );
};
