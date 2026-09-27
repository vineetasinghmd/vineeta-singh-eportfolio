import React, { useState } from 'react';
import { Clock, ArrowRight, X } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: 'reflection' | 'science' | 'equity';
  categoryLabel: string;
  date: string;
  readTime: string;
  snippet: string;
  fullText: string[];
}

export const Writing: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'reflection' | 'science' | 'equity'>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 'caring-beyond-diagnosis',
      title: 'Caring Beyond the Diagnosis: Reflections from Hospice & Rehabilitation',
      category: 'reflection',
      categoryLabel: 'Personal Reflection',
      date: 'Fall 2026',
      readTime: '4 min read',
      snippet: 'Healthcare is often measured in clinical outcomes and diagnostic metrics, but true service begins when we see the person behind the medical record.',
      fullText: [
        "In modern medicine, we are trained to evaluate symptoms, analyze laboratory values, and formulate clinical assessments. Yet throughout my time volunteering at Enhabit Hospice and Austin Speech Labs, I have learned that the most critical part of patient care often occurs beyond the chart.",
        "When working with stroke survivors undergoing speech therapy, I watched individuals fight to regain words they had lost overnight. Progress was rarely measured in giant leaps; it was built through patient repetition, encouragement, and holding space for frustration. In hospice care, where curative treatment gives way to palliative comfort, care meant listening to a patient's life stories, ensuring dignity, and being present when words were no longer needed.",
        "These experiences fundamentally shifted my perspective on medicine. Diagnosis identifies the condition, but care requires understanding what a person values. A patient is not simply a case of stroke or a terminal diagnosis; they are individuals with families, memories, and personal goals. As I pursue a career as a physician and surgeon, I carry this lesson with me: medicine must always honor the whole person."
      ]
    },
    {
      id: 'molecular-to-population',
      title: 'From Bench to Population: Connecting CRISPR Genetics to Environmental Health',
      category: 'science',
      categoryLabel: 'Scientific Inquiry',
      date: 'Spring 2026',
      readTime: '5 min read',
      snippet: 'Examining biological health requires exploring both ends of the spectrum—from Cas9 plasmid engineering to environmental radionuclide exposure.',
      fullText: [
        "During my time in the Freshman Research Initiative CRISPR Lab at UT Austin, I spent hours under the microscope working with Caenorhabditis elegans. We designed sgRNA plasmids, performed Gibson Assembly, and verified constructs via Sanger sequencing to engineer fluorescent 'glowing' gene tags. It was a masterclass in molecular precision.",
        "Around the same time, I contributed to research evaluating natural radionuclide hazards (radium, thorium, potassium) and heavy metal contaminants in soil samples across India. This research operated on a completely different scale: assessing radiological dose rates and population health risks.",
        "At first glance, molecular gene editing and environmental radiation analysis seem like distant fields. But together, they reveal the two crucial halves of medicine. Genetics teaches us how cellular pathways malfunction; environmental health teaches us how surroundings influence disease risk. A complete approach to medicine requires integrating both molecular discovery and population health advocacy."
      ]
    },
    {
      id: 'digital-health-equity',
      title: 'Digital Literacy as a Determinant of Modern Health Equity',
      category: 'equity',
      categoryLabel: 'Health Equity',
      date: 'Summer 2026',
      readTime: '4 min read',
      snippet: 'As healthcare migrates to digital portals and telehealth, digital literacy has become an essential bridge—or barrier—to quality care.',
      fullText: [
        "As a Digital Navigator at Austin Free-Net, I have worked with community members navigating online forms, telehealth portals, and digital resources. For many, modern technology is second nature. But for older adults or low-income residents, a lack of digital access can prevent them from accessing medical records, scheduling appointments, or finding community assistance.",
        "In healthcare discussion, we frequently talk about insurance coverage and clinic proximity as barriers to care. However, digital connectivity is rapidly becoming a major social determinant of health. If a patient cannot access their electronic health portal or navigate a telehealth link, their quality of care suffers.",
        "Promoting health equity means addressing structural barriers wherever they exist. Equipping community members with digital skills is not just a technological service—it is a vital step toward ensuring everyone can access the care they deserve."
      ]
    },
    {
      id: 'mentorship-education',
      title: 'Empowering the Next Generation: Lessons from Student Mentorship',
      category: 'reflection',
      categoryLabel: 'Mentorship & Education',
      date: 'Winter 2025',
      readTime: '3 min read',
      snippet: 'Leadership in medicine and education is rooted in creating pathways for others to succeed and believe in their potential.',
      fullText: [
        "Through my role as an Advising Fellow with Matriculate, I mentor high school students through the college application process. Navigating financial aid, college selection, and personal essays can feel overwhelming for students who are the first in their families to pursue higher education.",
        "Mentorship has shown me that leadership is rarely about holding a title or standing at the front of a room. True leadership happens in one-on-one conversations—helping a student outline an essay, reassuring them when self-doubt creeps in, and helping them realize that top academic opportunities are within their reach.",
        "As a future physician, teaching and mentorship will remain central to my career. Whether explaining a complex diagnosis to a patient or mentoring future medical students, the responsibility to empower others remains the same."
      ]
    }
  ];

  const filteredArticles = articles.filter(art => {
    if (activeFilter === 'all') return true;
    return art.category === activeFilter;
  });

  return (
    <div className="space-y-16 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#993F00] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
          Reflections & Academic Writing
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
          Writing & Personal Essays
        </h1>
        <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
          Essays on holistic medicine, molecular genetics, health equity, and the human dimensions of patient care.
        </p>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 pt-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeFilter === 'all'
                ? 'bg-[#BF5700] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-orange-50 hover:text-[#BF5700] border border-slate-200'
            }`}
          >
            All Essays ({articles.length})
          </button>
          <button
            onClick={() => setActiveFilter('reflection')}
            className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeFilter === 'reflection'
                ? 'bg-[#BF5700] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-orange-50 hover:text-[#BF5700] border border-slate-200'
            }`}
          >
            Personal & Clinical Reflections
          </button>
          <button
            onClick={() => setActiveFilter('science')}
            className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeFilter === 'science'
                ? 'bg-[#BF5700] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-orange-50 hover:text-[#BF5700] border border-slate-200'
            }`}
          >
            Scientific & Lab Essays
          </button>
          <button
            onClick={() => setActiveFilter('equity')}
            className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeFilter === 'equity'
                ? 'bg-[#BF5700] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-orange-50 hover:text-[#BF5700] border border-slate-200'
            }`}
          >
            Health Equity & Policy
          </button>
        </div>
      </div>

      {/* Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-[#BF5700] transition-all duration-300 shadow-xs space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="bg-orange-50 text-[#993F00] px-2.5 py-0.5 rounded font-semibold border border-orange-200">
                  {article.categoryLabel}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#BF5700]" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#0F172A] group-hover:text-[#BF5700] transition-colors">
                {article.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {article.snippet}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">{article.date}</span>
              <button
                onClick={() => setSelectedArticle(article)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BF5700] group-hover:translate-x-1 transition-transform"
              >
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reader Drawer / Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl border border-slate-200 w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 space-y-6 shadow-2xl relative text-left">
            
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-200 pb-4 gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#993F00] bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200">
                  {selectedArticle.categoryLabel}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] pt-2">
                  {selectedArticle.title}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  By Vineeta Singh • {selectedArticle.date} • {selectedArticle.readTime}
                </p>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-md hover:bg-slate-100 text-slate-600 transition-colors shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Article Prose */}
            <div className="space-y-4 text-slate-800 font-sans text-sm sm:text-base leading-relaxed">
              {selectedArticle.fullText.map((paragraph, i) => (
                <p key={i} className="first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:text-[#BF5700] first-letter:mr-1">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
              <span>Vineeta Singh Portfolio • Academic & Personal Reflections</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-md bg-[#BF5700] text-white font-semibold uppercase tracking-wider hover:bg-[#993F00] transition-colors"
              >
                Close Essay
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
