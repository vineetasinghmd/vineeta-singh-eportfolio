import React from 'react';
import { Users, BookOpen, HeartHandshake, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export const Leadership: React.FC = () => {
  const roles = [
    {
      title: 'Matriculate — Advising Fellow',
      period: 'November 2025 – Present',
      category: 'Mentorship | Education | Student Advocacy',
      bullets: [
        'Mentor and advise a high school student through the college application and decision-making process.',
        'Help students navigate the often complicated process of researching colleges, identifying opportunities, and preparing competitive applications.',
        'Provide individualized guidance while encouraging students to take ownership of their educational goals.',
        'Develop mentorship, communication, and advising skills through consistent one-on-one support.'
      ],
      icon: HeartHandshake
    },
    {
      title: 'India Conference at UT Austin — Marketing Director',
      period: 'April 2026 – Present',
      category: 'Organizational Leadership | Marketing | Community Building',
      bullets: [
        'Lead marketing efforts for a student-run conference celebrating Indian culture, scholarship, and community at UT Austin.',
        'Develop and coordinate promotional strategies to increase awareness and engagement with conference programming.',
        'Collaborate with student leaders and organizational members to support the planning and execution of conference initiatives.',
        'Build experience in team coordination, communications, event planning, and organizational leadership.'
      ],
      icon: Users
    },
    {
      title: 'India Conference at UT Austin — Marketing Coordinator',
      period: 'December 2025 – April 2026',
      category: 'Teamwork | Communications | Event Planning',
      bullets: [
        'Supported marketing and outreach efforts leading up to the annual India Conference.',
        'Collaborated with fellow students to promote events and engage the UT Austin community.',
        'Developed communication and organizational skills that prepared me to take on a larger leadership role as Marketing Director.'
      ],
      icon: Users
    },
    {
      title: 'Hindu YUVA — Community Coordinator',
      period: 'August 2024 – May 2025',
      category: 'Community Leadership | Cultural Engagement',
      bullets: [
        'Helped foster community among students through cultural, educational, and social programming.',
        'Assisted with organizing initiatives designed to connect students and create an inclusive campus community.',
        'Worked collaboratively with other student leaders to coordinate events and engage members.'
      ],
      icon: Sparkles
    },
    {
      title: 'College of Natural Sciences, UT Austin — Teaching Assistant, Immunology Lab',
      period: 'August 2026 – Present',
      category: 'Teaching | Mentorship | STEM Education',
      bullets: [
        'Support undergraduate students as they learn immunology concepts and laboratory techniques.',
        'Guide students through laboratory activities and help them build confidence in scientific problem-solving.',
        'Translate complex scientific concepts into accessible explanations for students with different levels of understanding.',
        'Develop my own leadership and communication skills through teaching and mentorship.'
      ],
      icon: BookOpen
    },
    {
      title: 'UT Austin Housing & Dining — Residence Hall Desk Assistant',
      period: 'November 2024 – Present',
      category: 'Residential Leadership | Community Building | Student Support',
      bullets: [
        'Serve as a point of contact for residents and help create a welcoming, safe, and supportive residential community.',
        'Assist students with questions, concerns, and campus resources.',
        'Communicate with residents and university staff to help address issues and maintain effective residence hall operations.',
        'Develop conflict-resolution, communication, and interpersonal skills through daily interactions with a diverse student community.'
      ],
      icon: Shield
    }
  ];

  return (
    <div className="space-y-12 py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Mentorship & Governance
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A192F] tracking-tight">
          Leadership Experience
        </h1>
        <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed max-w-3xl">
          Leadership, to me, is not simply holding a title. It is about taking responsibility for others, creating opportunities for people to succeed, and using my position to make a community stronger.
        </p>
      </div>

      {/* Leadership Philosophy Callout */}
      <div className="bg-[#0A192F] text-white rounded-xl p-8 space-y-3 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-300 font-sans">
          Philosophy on Leadership
        </span>
        <blockquote className="font-serif text-xl sm:text-2xl italic text-slate-100 leading-relaxed">
          “My leadership experiences have taught me that leadership can take many forms. Sometimes it means organizing an event or leading a team; other times, it means sitting down with one student and helping them believe that a particular opportunity is possible.”
        </blockquote>
      </div>

      {/* Roles Grid */}
      <div className="space-y-6">
        {roles.map((role, idx) => {
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

      {/* Leadership Reflection */}
      <div className="bg-slate-100 rounded-xl p-8 space-y-3 border border-slate-200 text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0A192F] font-sans">
          Reflection
        </span>
        <p className="text-sm text-slate-700 font-sans leading-relaxed">
          Across these roles, I have become more comfortable communicating with people from different backgrounds, taking initiative, and being someone others can rely on. As I continue toward a career in medicine, I hope to carry these lessons into the way I work with patients, colleagues, students, and the communities I serve.
        </p>
      </div>

    </div>
  );
};
