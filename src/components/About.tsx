import React, { useState } from 'react';
import { BookOpen, GraduationCap, Award, FileText, Download, X, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  setActiveTab: (tab: string) => void;
}

export const About: React.FC<AboutProps> = ({ setActiveTab }) => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="space-y-12 py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Academic Foundation
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A192F] tracking-tight">
          Academics & Education
        </h1>
        <p className="text-lg text-slate-700 font-serif italic max-w-3xl leading-relaxed">
          Bachelor of Science and Arts in Organismal Biology & Physiology • Pre-Health Professions Certificate
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Academic Essay */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="prose prose-slate max-w-none text-slate-800 font-sans text-base leading-relaxed space-y-4">
            <p>
              I am pursuing a <strong>Bachelor of Science and Arts in Organismal Biology & Physiology</strong> with a <strong>Pre-Health Professions Certificate</strong> at The University of Texas at Austin (Anticipated Graduation: <strong>May 2027</strong>). My academic interests center on understanding the human body from both a biological and physiological perspective while preparing for a future career in medicine.
            </p>
            <p>
              Through my coursework, I am building a strong foundation in biology, physiology, anatomy, and the sciences that inform clinical medicine. As I continue my undergraduate education, I hope to connect what I learn in the classroom with my interests in surgery, geriatrics, health equity, and public health, particularly as they relate to improving quality of life and access to care.
            </p>
            <p>
              Outside of my coursework, I am grateful to be part of the <strong>Dell Scholars, FRI, and WINS</strong> communities, which have provided opportunities to grow as a student, researcher, and future healthcare professional. These experiences have encouraged me to explore questions beyond the classroom and think critically about how scientific knowledge can translate into meaningful improvements in patient care.
            </p>
            <p>
              On this page, I highlight my academic journey at UT Austin, including my coursework, research experiences, scholarly programs, and the ways my education continues to shape my goals in medicine and public health.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0A192F] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A8A] transition-colors shadow-xs"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              View Complete Resume (CV)
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-300 text-[#0A192F] text-xs font-semibold uppercase tracking-wider hover:bg-slate-100 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Explore Research
            </button>
          </div>

        </div>

        {/* Right Column: Key Details Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-5">
            <h3 className="font-serif text-xl font-bold text-[#0A192F] border-b border-slate-200 pb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-900" />
              Degree Overview
            </h3>

            <div className="space-y-4 text-xs font-sans">
              <div>
                <span className="text-slate-500 uppercase font-semibold block tracking-wider">Institution</span>
                <span className="text-slate-900 font-medium text-sm">The University of Texas at Austin</span>
              </div>

              <div>
                <span className="text-slate-500 uppercase font-semibold block tracking-wider">Degree</span>
                <span className="text-slate-900 font-medium text-sm">B.S.A. Organismal Biology & Physiology</span>
              </div>

              <div>
                <span className="text-slate-500 uppercase font-semibold block tracking-wider">Certificate</span>
                <span className="text-slate-900 font-medium text-sm">Pre-Health Professions Certificate</span>
              </div>

              <div>
                <span className="text-slate-500 uppercase font-semibold block tracking-wider">Anticipated Graduation</span>
                <span className="text-[#0A192F] font-bold text-sm">May 2027</span>
              </div>
            </div>
          </div>

          {/* Scholars & Honors Box */}
          <div className="bg-[#0A192F] text-white rounded-xl p-6 space-y-3 shadow-md">
            <h3 className="font-serif text-lg font-bold text-amber-300 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Scholarly Communities
            </h3>
            <ul className="space-y-2 text-xs text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Dell Scholars:</strong> Academic excellence & community engagement support.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>FRI Scholar:</strong> Freshman Research Initiative CRISPR genetics research stream.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>WINS Scholar:</strong> Women in Natural Sciences leadership community at UT Austin.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Resume Modal */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl border border-slate-200 w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative text-left">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0A192F]">Vineeta Singh — Curriculum Vitae</h3>
                <p className="text-xs text-slate-500">UT Austin Premedical Track • Class of 2027</p>
              </div>
              <button
                onClick={() => setResumeModalOpen(false)}
                className="p-2 rounded-md hover:bg-slate-100 text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6 text-sm text-slate-800 font-sans">
              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-[#0A192F] uppercase tracking-wider border-b border-slate-200 pb-1">
                  Education & Honors
                </h4>
                <div className="flex justify-between font-semibold">
                  <span>The University of Texas at Austin — B.S.A. Organismal Biology & Physiology</span>
                  <span className="text-xs text-slate-500">May 2027</span>
                </div>
                <p className="text-xs text-slate-600">Pre-Health Professions Certificate • Dell Scholar • FRI Scholar • WINS Scholar</p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-[#0A192F] uppercase tracking-wider border-b border-slate-200 pb-1">
                  Healthcare & Clinical Experience
                </h4>
                <ul className="list-disc list-inside text-xs space-y-1 text-slate-700">
                  <li><strong>St. David’s HealthCare Student Volunteer:</strong> Hospital-based clinical care (Sept 2026–Present).</li>
                  <li><strong>Enhabit Hospice Volunteer:</strong> Hospice & end-of-life patient support (Aug 2026–Present).</li>
                  <li><strong>Texas HHS Crisis Services Intern:</strong> Crisis intervention & mental health access (Aug 2026–Present).</li>
                  <li><strong>UT Austin CNS Immunology Lab TA:</strong> Teaching assistant & mentorship (Aug 2026–Present).</li>
                  <li><strong>Austin Free-Net Digital Navigator:</strong> Community digital health equity (Aug 2026–Present).</li>
                  <li><strong>Austin Speech Labs Speech Therapy Assistant:</strong> Stroke rehabilitation support (Jan 2026–May 2026).</li>
                  <li><strong>Houston Health Dept Epidemiology Intern:</strong> Public Health Science & Surveillance (Jan 2024–Aug 2024).</li>
                  <li><strong>AmeriCorps Public Health Navigator:</strong> Resource navigation & health outreach (Jan 2024–Aug 2024).</li>
                </ul>
              </section>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500">Document generated from verified portfolio credentials.</span>
              <button
                onClick={() => alert("Resume download triggered (Draft PDF format).")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0A192F] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A8A] transition-colors"
              >
                <Download className="w-4 h-4 text-amber-300" />
                Download Resume PDF
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
