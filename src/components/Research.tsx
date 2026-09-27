import React, { useState } from 'react';
import { BookOpen, Dna, ExternalLink, Microscope, X, CheckCircle2 } from 'lucide-react';

export const Research: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'crispr' | 'springer' | null>(null);

  return (
    <div className="space-y-12 py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Biomedical & Environmental Research
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A192F] tracking-tight">
          Research Experience & Projects
        </h1>
        <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed max-w-3xl">
          My research experiences have allowed me to explore health and biology at both the molecular and population levels—from investigating gene regulation using CRISPR-Cas9 in <em>C. elegans</em> to contributing to research on environmental radionuclides and heavy metals.
        </p>
      </div>

      {/* Project Card 1: FRI CRISPR Lab */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs space-y-0">
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <Dna className="w-3.5 h-3.5" />
                Undergraduate Research Stream
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A192F]">
                Freshman Research Initiative — CRISPR Lab / Glow Worms
              </h2>
              <p className="text-xs text-slate-500 font-medium font-sans">
                The University of Texas at Austin • January 2025 – May 2025
              </p>
            </div>
            <button
              onClick={() => setActiveModal('crispr')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0A192F] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A8A] transition-colors"
            >
              <Microscope className="w-4 h-4 text-amber-300" />
              View Lab Protocol
            </button>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed font-sans">
            Investigated embryonic development and gene regulation of <em>C17E4.20</em> in <em>Caenorhabditis elegans</em> using CRISPR-Cas9 gene-editing techniques.
          </p>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-sans">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Designed a Cas9 + sgRNA plasmid (Plasmid 1) using ApE software and prepared PCR primers for sgRNA amplification.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Amplified and verified sgRNA products through PCR and gel electrophoresis; performed Gibson Assembly.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Transformed plasmids into <em>E. coli</em>, screened colonies, performed minipreps, and verified sequences via Sanger sequencing.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Designed repair-template plasmid with homology arms and a fluorescent tag for homology-directed repair (HDR) microinjections into <em>C. elegans</em> gonads to produce glowing worms.</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 pt-2 text-xs font-sans">
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200">CRISPR-Cas9</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200">Gibson Assembly</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200">Sanger Sequencing</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200">C. elegans</span>
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200">Fluorescent HDR Tagging</span>
          </div>
        </div>
      </div>

      {/* Project Card 2: Springer Publication */}
      <div className="bg-[#0A192F] text-white rounded-xl border border-slate-800 overflow-hidden shadow-md space-y-0">
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700 pb-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                <BookOpen className="w-3.5 h-3.5" />
                Springer Publication (Co-Contributed)
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Radiation Hazards and Health Risk Assessment from Terrestrial Radionuclides
              </h2>
              <p className="text-xs text-slate-300 font-medium font-sans">
                Springer International Publishing • Published October 20, 2025
              </p>
            </div>
            <button
              onClick={() => setActiveModal('springer')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-400 text-[#0A192F] text-xs font-semibold uppercase tracking-wider hover:bg-amber-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Study Details
            </button>
          </div>

          <p className="text-slate-200 text-sm leading-relaxed font-sans">
            Contributed to research investigating naturally occurring radionuclides and heavy metals in soil from the Noida and Greater Noida regions of India.
          </p>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <span>Explored potential health and radiological risks associated with environmental exposure to radioactive materials and heavy metals.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <span>Utilized a NaI(Tl) detector to assess radionuclide concentrations in collected soil samples.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <span>Acknowledged as a contributor to the published research, providing an early introduction to scientific publication.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Future Research Aspirations */}
      <div className="bg-white rounded-xl p-8 border border-slate-200 space-y-6 shadow-xs">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-[#0A192F]">
            What I Hope to Explore Next
          </h2>
          <p className="text-xs text-slate-600 font-sans mt-1">
            My research experiences have given me exposure to two very different approaches to studying health: examining biological mechanisms at the cellular level and investigating environmental exposures at the population level. Moving forward, I hope to explore research that brings these perspectives together:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-sans text-slate-700">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1">
            <span className="font-bold text-[#0A192F] font-serif block text-sm">Surgical & Biomedical Research</span>
            <p className="text-slate-600">Surgical outcomes, intraoperative imaging, and neural tissue recovery.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1">
            <span className="font-bold text-[#0A192F] font-serif block text-sm">Aging & Geriatric Health</span>
            <p className="text-slate-600">Cellular mechanisms of neurodegeneration and stroke rehabilitation.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1">
            <span className="font-bold text-[#0A192F] font-serif block text-sm">Translational Medicine</span>
            <p className="text-slate-600">Translating laboratory discovery into real-world patient care improvements.</p>
          </div>
        </div>
      </div>

      {/* Research Reflection */}
      <div className="bg-slate-100 rounded-xl p-8 space-y-3 border border-slate-200 text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0A192F] font-sans">
          Reflection on Research
        </span>
        <blockquote className="font-serif text-lg sm:text-xl italic text-slate-800 leading-relaxed">
          “Research has taught me to become comfortable with not immediately knowing the answer. Whether I was troubleshooting a molecular cloning experiment or examining environmental factors that may affect human health, I learned that scientific progress depends on curiosity, patience, attention to detail, and a willingness to revise your approach when something does not work.”
        </blockquote>
      </div>

      {/* Modals */}
      {activeModal === 'crispr' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl border border-slate-200 w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-4 shadow-2xl relative text-left">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0A192F]">CRISPR Lab Protocol Breakdown</h3>
                <p className="text-xs text-slate-500 font-sans">UT Austin Freshman Research Initiative</p>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-2 rounded-md hover:bg-slate-100">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-slate-700 font-sans leading-relaxed">
              <p>1. Targeted gene <em>C17E4.20</em> involved in embryonic development of <em>C. elegans</em>.</p>
              <p>2. Designed Cas9 + sgRNA expression plasmid (Plasmid 1) using ApE software.</p>
              <p>3. Amplified sgRNA target sequences via PCR; verified sizes using gel electrophoresis.</p>
              <p>4. Assembled linearized plasmid vector and sgRNA insert via Gibson Assembly.</p>
              <p>5. Transformed constructs into <em>E. coli</em> competent cells, isolated colonies, and performed minipreps.</p>
              <p>6. Verified purified plasmids through Sanger sequencing.</p>
              <p>7. Designed repair template plasmid with homology arms & fluorescent GFP reporter for Homology-Directed Repair (HDR).</p>
              <p>8. Studied gonad microinjections to deliver Cas9/sgRNA and repair templates, generating fluorescent ("glowing") worms.</p>
            </div>
            <div className="pt-3 border-t flex justify-end">
              <button onClick={() => setActiveModal(null)} className="px-4 py-2 bg-[#0A192F] text-white text-xs font-semibold rounded">
                Close Protocol
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'springer' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl border border-slate-200 w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-4 shadow-2xl relative text-left">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0A192F]">Springer Study Details</h3>
                <p className="text-xs text-slate-500 font-sans">Published October 20, 2025</p>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-2 rounded-md hover:bg-slate-100">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-slate-700 font-sans leading-relaxed">
              <p>Investigated natural radioactivity levels arising from <sup>226</sup>Ra, <sup>232</sup>Th, and <sup>40</sup>K radionuclides alongside heavy metal concentrations in soil samples across Noida and Greater Noida, India.</p>
              <p>Utilized a NaI(Tl) gamma scintillation detector to quantify absorbed dose rates, radium equivalent activity, and external hazard indices to evaluate population exposure risk.</p>
            </div>
            <div className="pt-3 border-t flex justify-end">
              <button onClick={() => setActiveModal(null)} className="px-4 py-2 bg-[#0A192F] text-white text-xs font-semibold rounded">
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
