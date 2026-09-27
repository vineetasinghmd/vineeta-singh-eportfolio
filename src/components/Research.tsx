import React, { useState } from 'react';
import { BookOpen, Dna, ExternalLink, Microscope, X } from 'lucide-react';

export const Research: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'crispr' | 'springer' | null>(null);

  return (
    <div className="space-y-16 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Page Header */}
      <div className="border-b border-[#E2DDD5] pb-8 space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0F2C59] bg-[#0F2C59]/10 px-3 py-1 rounded-full">
          Scientific Inquiry & Publications
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0F2C59] tracking-tight">
          Research Experience
        </h1>
        <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
          Investigating biological mechanisms at both the cellular/molecular level through CRISPR gene editing and at the population level through environmental radiological health assessments.
        </p>
      </div>

      {/* Featured Research Card 1: FRI CRISPR Lab */}
      <div className="bg-[#F7F5F0] rounded-2xl border border-[#E2DDD5] overflow-hidden shadow-md space-y-0">
        <div className="p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DDD5] pb-6">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                <Dna className="w-3.5 h-3.5" />
                Undergraduate Molecular Genetics Research
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#0F2C59]">
                Freshman Research Initiative — CRISPR Lab / Glow Worms
              </h2>
              <p className="text-xs text-slate-600 font-medium">
                The University of Texas at Austin • January 2025 – May 2025
              </p>
            </div>
            <button
              onClick={() => setActiveModal('crispr')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0F2C59] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E3A8A] transition-colors"
            >
              <Microscope className="w-4 h-4 text-amber-300" />
              View Workflow Protocol
            </button>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed">
            Investigated embryonic development and gene regulation of <em>C17E4.20</em> in <em>Caenorhabditis elegans</em> using CRISPR-Cas9 targeted gene-editing technology. Designed and constructed expression plasmids to introduce a fluorescent gene tag via Homology-Directed Repair (HDR), resulting in visually fluorescent ("glowing") nematode lines.
          </p>

          {/* Key Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-4 rounded-lg border border-[#E2DDD5] space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#0F2C59] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h4 className="font-serif font-bold text-sm text-[#0F2C59]">Plasmid Design & PCR</h4>
              <p className="text-xs text-slate-600">
                Designed Cas9 + sgRNA plasmids in ApE software and prepared PCR primers for target sgRNA amplification.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-[#E2DDD5] space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#0F2C59] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="font-serif font-bold text-sm text-[#0F2C59]">Gibson Assembly & Cloning</h4>
              <p className="text-xs text-slate-600">
                Performed Gibson Assembly, transformed plasmids into <em>E. coli</em>, screened colonies, and verified sequences via Sanger sequencing.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-[#E2DDD5] space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#0F2C59] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="font-serif font-bold text-sm text-[#0F2C59]">HDR & Microinjection</h4>
              <p className="text-xs text-slate-600">
                Constructed repair templates with homology arms and fluorescent tags; studied microinjections into <em>C. elegans</em> gonads.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-1 rounded bg-[#EFECE6] text-[#0F2C59] text-xs font-medium border border-[#E2DDD5]">CRISPR-Cas9</span>
            <span className="px-2.5 py-1 rounded bg-[#EFECE6] text-[#0F2C59] text-xs font-medium border border-[#E2DDD5]">Gibson Assembly</span>
            <span className="px-2.5 py-1 rounded bg-[#EFECE6] text-[#0F2C59] text-xs font-medium border border-[#E2DDD5]">Sanger Sequencing</span>
            <span className="px-2.5 py-1 rounded bg-[#EFECE6] text-[#0F2C59] text-xs font-medium border border-[#E2DDD5]">C. elegans</span>
            <span className="px-2.5 py-1 rounded bg-[#EFECE6] text-[#0F2C59] text-xs font-medium border border-[#E2DDD5]">Fluorescent Tagging</span>
          </div>
        </div>
      </div>

      {/* Featured Research Card 2: Springer Publication */}
      <div className="bg-[#0F2C59] text-white rounded-2xl border border-slate-700 overflow-hidden shadow-lg space-y-0">
        <div className="p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700 pb-6">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                <BookOpen className="w-3.5 h-3.5" />
                Co-Contributed Academic Publication
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Radiation Hazards & Health Risk Assessment from Terrestrial Radionuclides
              </h2>
              <p className="text-xs text-amber-200 font-medium">
                Springer International Publishing • Published October 20, 2025
              </p>
            </div>
            <button
              onClick={() => setActiveModal('springer')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-amber-400 text-[#0F2C59] text-xs font-semibold uppercase tracking-wider hover:bg-amber-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Study Summary
            </button>
          </div>

          <p className="text-slate-200 text-sm leading-relaxed">
            Contributed to environmental health research examining naturally occurring radioactive materials (NORM) and heavy metal contaminants in soil samples from Noida and Greater Noida, India. The study evaluated radiological hazard metrics to determine population exposure risks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700 space-y-1">
              <span className="text-amber-300 font-semibold uppercase tracking-wider block">Instrumentation</span>
              <span className="text-slate-200">NaI(Tl) Gamma Scintillation Spectroscopy</span>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700 space-y-1">
              <span className="text-amber-300 font-semibold uppercase tracking-wider block">Key Metrics</span>
              <span className="text-slate-200">Absorbed Dose Rate, Ra<sub>eq</sub> Activity, Hazard Indices</span>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700 space-y-1">
              <span className="text-amber-300 font-semibold uppercase tracking-wider block">Impact</span>
              <span className="text-slate-200">Population Environmental Risk & Public Health Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Future Research Interests */}
      <div className="bg-[#F7F5F0] rounded-2xl p-8 border border-[#E2DDD5] space-y-6">
        <div className="border-b border-[#E2DDD5] pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F2C59]">
            Looking Ahead
          </span>
          <h3 className="font-serif text-3xl font-bold text-[#0F2C59]">
            Future Research Aspirations
          </h3>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed max-w-3xl">
          Moving forward, I am eager to bridge cellular genetics with clinical medicine and surgical innovation. My future interests include:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-[#E2DDD5] space-y-2">
            <h4 className="font-serif font-bold text-[#0F2C59]">Surgical & Neurosurgical Research</h4>
            <p className="text-xs text-slate-600">Investigating surgical outcomes, intraoperative imaging, and neural tissue regeneration.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E2DDD5] space-y-2">
            <h4 className="font-serif font-bold text-[#0F2C59]">Aging & Neurological Health</h4>
            <p className="text-xs text-slate-600">Exploring cellular mechanisms of neurodegeneration and stroke rehabilitation interventions.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E2DDD5] space-y-2">
            <h4 className="font-serif font-bold text-[#0F2C59]">Translational & Disparities Research</h4>
            <p className="text-xs text-slate-600">Translating laboratory findings into equitable clinical treatments for underserved patient groups.</p>
          </div>
        </div>
      </div>

      {/* Modal 1: CRISPR Workflow Protocol */}
      {activeModal === 'crispr' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FDFBF7] rounded-xl border border-[#E2DDD5] w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0F2C59]">FRI CRISPR Lab — Protocol Breakdown</h3>
                <p className="text-xs text-slate-500">UT Austin Freshman Research Initiative • <em>C. elegans</em> Gene Editing</p>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-2 rounded-md hover:bg-slate-200 text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-800 font-sans">
              <h4 className="font-serif font-bold text-[#0F2C59] border-b pb-1">Detailed Methodological Steps</h4>
              <ol className="list-decimal list-inside space-y-2.5 text-xs text-slate-700 leading-relaxed">
                <li><strong>Target Identification:</strong> Selected target gene <em>C17E4.20</em> involved in embryonic development of <em>C. elegans</em>.</li>
                <li><strong>Plasmid Design:</strong> Designed Cas9 + sgRNA expression plasmid (Plasmid 1) using A Plasmid Editor (ApE) software.</li>
                <li><strong>PCR & Gel Electrophoresis:</strong> Amplified sgRNA target sequences via PCR; verified band sizes using agarose gel electrophoresis.</li>
                <li><strong>Gibson Assembly:</strong> Assembled linearized plasmid vector and sgRNA insert into a functional expression vector.</li>
                <li><strong>Transformation & Miniprep:</strong> Transformed constructs into <em>E. coli</em> competent cells, isolated colonies, and performed miniprep DNA extractions.</li>
                <li><strong>Sanger Sequencing Verification:</strong> Submitted purified plasmids for Sanger sequencing to confirm accurate sgRNA alignment.</li>
                <li><strong>Repair Template Design:</strong> Designed Plasmid 2 repair template featuring 500bp homology arms flanking a GFP fluorescent reporter tag for Homology-Directed Repair (HDR).</li>
                <li><strong>Microinjection & Phenotype Screening:</strong> Studied gonad microinjection protocols to deliver Cas9/sgRNA and repair templates, isolating transgenic "glowing worm" progeny.</li>
              </ol>
            </div>

            <div className="pt-4 border-t flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-md bg-[#0F2C59] text-white text-xs font-semibold"
              >
                Close Protocol
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Springer Study Summary */}
      {activeModal === 'springer' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FDFBF7] rounded-xl border border-[#E2DDD5] w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0F2C59]">Springer Publication Summary</h3>
                <p className="text-xs text-slate-500">Environmental Radiology & Heavy Metal Risk Assessment (2025)</p>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-2 rounded-md hover:bg-slate-200 text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-800 font-sans">
              <h4 className="font-serif font-bold text-[#0F2C59] border-b pb-1">Abstract Highlights</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                This study investigated natural radioactivity levels arising from <sup>226</sup>Ra, <sup>232</sup>Th, and <sup>40</sup>K radionuclides alongside toxic heavy metal concentrations in soil samples collected across the Noida and Greater Noida regions of Uttar Pradesh, India.
              </p>

              <h4 className="font-serif font-bold text-[#0F2C59] border-b pb-1">Key Research Contributions</h4>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1.5">
                <li>Utilized NaI(Tl) gamma scintillation spectrometry to quantify terrestrial gamma radiation dose rates.</li>
                <li>Calculated radium equivalent activity (Ra<sub>eq</sub>), external hazard index (H<sub>ex</sub>), and annual effective dose equivalent (AEDE).</li>
                <li>Assessed potential long-term radiological exposure risks to local agricultural and urban populations.</li>
              </ul>
            </div>

            <div className="pt-4 border-t flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-md bg-[#0F2C59] text-white text-xs font-semibold"
              >
                Close Summary
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
