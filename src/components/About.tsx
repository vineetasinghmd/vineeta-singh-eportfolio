import React, { useState } from 'react';
import { BookOpen, FileText, Download, CheckCircle2, X, GraduationCap, Compass } from 'lucide-react';

interface AboutProps {
  setActiveTab: (tab: string) => void;
}

export const About: React.FC<AboutProps> = ({ setActiveTab }) => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="space-y-16 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Header Banner */}
      <div className="border-b border-[#E2DDD5] pb-8 space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0F2C59] bg-[#0F2C59]/10 px-3 py-1 rounded-full">
          About Vineeta Singh
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0F2C59] tracking-tight">
          Premedical Student, Researcher & Service Advocate
        </h1>
        <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
          Driven by a desire to understand human health at the molecular level, advocate for health equity in communities, and serve patients with empathy and dedication.
        </p>
      </div>

      {/* Main Narrative & Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Biography Column */}
        <div className="lg:col-span-8 space-y-8">
          <div className="prose prose-slate max-w-none space-y-5 text-slate-800 leading-relaxed font-sans text-base">
            <h2 className="font-serif text-2xl font-bold text-[#0F2C59] border-l-4 border-[#0F2C59] pl-3">
              My Academic & Premedical Journey
            </h2>
            <p>
              I am a premedical student in the <strong>College of Natural Sciences at The University of Texas at Austin</strong>. My path toward medicine has been shaped by a deep curiosity about biological mechanisms, a commitment to patient advocacy, and a recognition of the social factors that influence health.
            </p>
            <p>
              My academic interests center on <strong>neuroscience, neurosurgery, clinical research, and public health service</strong>. Through hands-on wet lab research, hospital and hospice volunteering, and public health service roles, I have sought to connect scientific discovery with the human realities of clinical care.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[#0F2C59] border-l-4 border-[#0F2C59] pl-3 pt-4">
              Connecting Molecular Science & Population Health
            </h2>
            <p>
              My research experiences span both ends of the biological spectrum. In the <strong>Freshman Research Initiative (FRI) CRISPR Lab</strong> at UT Austin, I investigated gene regulation in <em>Caenorhabditis elegans</em> using CRISPR-Cas9 gene editing, plasmid engineering, and fluorescent tagging. This introduced me to the power of molecular genetics in deciphering disease mechanisms.
            </p>
            <p>
              Simultaneously, my co-contributed research published in <strong>Springer International Publishing (2025)</strong> examined environmental radionuclide and heavy metal exposure in soil samples, assessing population-level radiological health risks. Together, these experiences taught me that a physician must understand not only the cellular process causing illness, but also the environmental and social context in which a patient lives.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[#0F2C59] border-l-4 border-[#0F2C59] pl-3 pt-4">
              Service as the Core of Patient Care
            </h2>
            <p>
              Beyond the laboratory, my most meaningful experiences have occurred at the bedside and in the community. Whether serving as a student volunteer at <strong>St. David’s HealthCare</strong>, offering end-of-life companionship at <strong>Enhabit Hospice</strong>, assisting stroke survivors with speech therapy at <strong>Austin Speech Labs</strong>, or navigating digital resources for community members at <strong>Austin Free-Net</strong>, I have learned that care begins with active listening and humility.
            </p>
            <p className="italic bg-[#F7F5F0] p-4 rounded-lg border border-[#E2DDD5] text-[#0F2C59]">
              “Medicine is not merely the diagnosis and treatment of disease; it is the art of recognizing the whole person and standing with patients during their most vulnerable moments.”
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#0F2C59] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A8A] transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              View Complete Resume
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#0F2C59] text-[#0F2C59] text-xs font-semibold uppercase tracking-wider hover:bg-[#0F2C59] hover:text-white transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Explore Research Projects
            </button>
          </div>
        </div>

        {/* Sidebar Info Card */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Quick Details Card */}
          <div className="bg-[#F7F5F0] rounded-xl p-6 border border-[#E2DDD5] space-y-6 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#0F2C59] border-b border-[#E2DDD5] pb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-amber-600" />
              Academic Snapshot
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-slate-500 uppercase font-semibold block tracking-wider">Institution</span>
                <span className="text-slate-900 font-medium text-sm">The University of Texas at Austin</span>
              </div>

              <div>
                <span className="text-slate-500 uppercase font-semibold block tracking-wider">College</span>
                <span className="text-slate-900 font-medium text-sm">College of Natural Sciences</span>
              </div>

              <div>
                <span className="text-slate-500 uppercase font-semibold block tracking-wider">Track & Role</span>
                <span className="text-slate-900 font-medium text-sm">Premedical Track • Immunology Lab TA</span>
              </div>

              <div>
                <span className="text-slate-500 uppercase font-semibold block tracking-wider">Career Interest</span>
                <span className="text-[#0F2C59] font-semibold text-sm">Surgeon (Neurosurgery Interest), Clinical Researcher & Educator</span>
              </div>
            </div>
          </div>

          {/* Key Competencies Card */}
          <div className="bg-[#0F2C59] text-white rounded-xl p-6 space-y-4 shadow-md">
            <h3 className="font-serif text-lg font-bold text-amber-300 flex items-center gap-2">
              <Compass className="w-5 h-5" />
              Key Competencies
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>CRISPR-Cas9 & Plasmid Design:</strong> ApE software, PCR, Gel Electrophoresis, Gibson Assembly, Sanger Sequencing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Environmental Radiology:</strong> Gamma Spectroscopy using NaI(Tl) detectors & risk modeling</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Clinical & Hospice:</strong> In-hospital patient navigation, end-of-life care, stroke speech therapy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Public Health:</strong> Epidemiological surveillance, crisis intervention, digital health equity</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Teaching & Mentorship:</strong> Undergraduate Immunology lab instruction, 1-on-1 college advising</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Resume Modal */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FDFBF7] rounded-xl border border-[#E2DDD5] w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0F2C59]">Vineeta Singh — Curriculum Vitae</h3>
                <p className="text-xs text-slate-500">UT Austin Premedical Track • Research & Service Credentials</p>
              </div>
              <button
                onClick={() => setResumeModalOpen(false)}
                className="p-2 rounded-md hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6 text-sm text-slate-800 font-sans">
              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-[#0F2C59] uppercase tracking-wider border-b border-[#E2DDD5] pb-1">
                  Education & Academic Appointments
                </h4>
                <div className="space-y-1">
                  <div className="flex justify-between font-semibold">
                    <span>The University of Texas at Austin — Premedical Track</span>
                    <span className="text-xs text-slate-500">Austin, TX</span>
                  </div>
                  <p className="text-xs text-slate-600">College of Natural Sciences • Biology / Pre-Medicine Concentration</p>
                </div>
                <div className="space-y-1 pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Teaching Assistant — Immunology Lab (CNS)</span>
                    <span className="text-xs text-slate-500">Aug 2026 – Present</span>
                  </div>
                  <p className="text-xs text-slate-600">Guides undergraduate students through laboratory concepts, assays, and scientific problem-solving.</p>
                </div>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-[#0F2C59] uppercase tracking-wider border-b border-[#E2DDD5] pb-1">
                  Research Experience & Publications
                </h4>
                <div>
                  <div className="flex justify-between font-semibold">
                    <span>Freshman Research Initiative — Undergraduate Researcher (CRISPR Lab)</span>
                    <span className="text-xs text-slate-500">Jan 2025 – May 2025</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Investigated embryonic development & gene regulation of C17E4.20 in <em>C. elegans</em> using CRISPR-Cas9, Gibson Assembly, and Sanger sequencing.
                  </p>
                </div>
                <div className="pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Co-Author / Contributor — Springer International Publishing</span>
                    <span className="text-xs text-slate-500">Published Oct 20, 2025</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    "Radiation Hazards and Health Risk Assessment from Exposure to Terrestrial Radionuclides and Heavy Metals in Noida and Greater Noida, India."
                  </p>
                </div>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-[#0F2C59] uppercase tracking-wider border-b border-[#E2DDD5] pb-1">
                  Clinical & Public Health Service
                </h4>
                <ul className="list-disc list-inside text-xs space-y-1 text-slate-700">
                  <li><strong>St. David’s HealthCare Student Volunteer:</strong> In-hospital patient & clinical support (Sept 2026–Present).</li>
                  <li><strong>Enhabit Home Health & Hospice Volunteer:</strong> End-of-life companionship & patient support (Aug 2026–Present).</li>
                  <li><strong>Austin Speech Labs Speech Therapy Assistant:</strong> Stroke rehabilitation support (Jan 2026–May 2026).</li>
                  <li><strong>Austin Free-Net Digital Navigator:</strong> Community digital health equity & resource access (Aug 2026–Present).</li>
                  <li><strong>Houston Health Department Epidemiology Intern:</strong> Public Health Science & Surveillance Division (Jan 2024–Aug 2024).</li>
                  <li><strong>AmeriCorps Public Health Navigator:</strong> Connecting underserved families with health resources.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-[#0F2C59] uppercase tracking-wider border-b border-[#E2DDD5] pb-1">
                  Leadership & Outreach
                </h4>
                <ul className="list-disc list-inside text-xs space-y-1 text-slate-700">
                  <li><strong>India Conference at UT Austin:</strong> Marketing Director (Apr 2026–Present) & Marketing Coordinator (Dec 2025–Apr 2026).</li>
                  <li><strong>Matriculate Advising Fellow:</strong> 1-on-1 college application mentor for high school students (Nov 2025–Present).</li>
                  <li><strong>Hindu YUVA Community Coordinator:</strong> Campus programming & inclusivity (Aug 2024–May 2025).</li>
                  <li><strong>UT Austin Housing & Dining:</strong> Residence Hall Desk Assistant (Nov 2024–Present).</li>
                </ul>
              </section>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#E2DDD5]">
              <span className="text-xs text-slate-500">Document generated from verified portfolio record.</span>
              <button
                onClick={() => {
                  alert("Resume download triggered (Draft PDF format).");
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0F2C59] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A8A] transition-colors"
              >
                <Download className="w-4 h-4 text-amber-300" />
                Download PDF Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
