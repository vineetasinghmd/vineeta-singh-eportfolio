import React, { useState } from 'react';
import { Mail, MapPin, Building2, Send, CheckCircle2, GraduationCap, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Research Collaboration',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#993F00] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
          Get In Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
          Contact & Academic Inquiries
        </h1>
        <p className="text-lg text-slate-700 max-w-3xl leading-relaxed">
          For research collaborations, student mentorship, academic inquiries, or community outreach, feel free to reach out.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] border-b border-slate-200 pb-3">
              Send a Message
            </h3>

            {submitted ? (
              <div className="bg-orange-50 border border-orange-200 text-[#993F00] rounded-lg p-6 space-y-3 animate-fade-in">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#BF5700]" />
                  <h4 className="font-serif text-lg font-bold text-[#0F172A]">Message Received!</h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Thank you for reaching out, {formData.name}. Your message has been submitted to Vineeta's academic inbox. You will receive a response at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Research Collaboration', message: '' });
                  }}
                  className="px-4 py-2 bg-[#BF5700] text-white text-xs font-semibold uppercase rounded hover:bg-[#993F00] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Sarah Jenkins"
                    className="w-full px-4 py-2.5 rounded-md border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-[#BF5700] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. s.jenkins@utexas.edu"
                    className="w-full px-4 py-2.5 rounded-md border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-[#BF5700] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-[#BF5700] focus:bg-white"
                  >
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="Immunology TA / Student Advising">Immunology TA / Student Advising</option>
                    <option value="Clinical & Community Outreach">Clinical & Community Outreach</option>
                    <option value="General Academic Inquiry">General Academic Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please enter your message or inquiry details..."
                    className="w-full px-4 py-2.5 rounded-md border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-[#BF5700] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-md bg-[#BF5700] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#993F00] transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4 text-amber-200" />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#BF5700]" />
              Academic Contact Info
            </h3>

            <div className="space-y-4 text-xs font-sans">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#BF5700] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-500 uppercase block tracking-wider">Email</span>
                  <a href="mailto:v.singh@utexas.edu" className="text-[#BF5700] font-semibold text-sm hover:underline">
                    v.singh@utexas.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-[#BF5700] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-500 uppercase block tracking-wider">Academic Department</span>
                  <p className="text-slate-800 text-sm font-medium">College of Natural Sciences</p>
                  <p className="text-slate-500 text-xs">The University of Texas at Austin</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#BF5700] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-500 uppercase block tracking-wider">Location</span>
                  <p className="text-slate-800 text-sm font-medium">Austin, Texas • UT Austin Campus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Student Advising Notice */}
          <div className="bg-[#0F172A] text-white rounded-xl p-6 space-y-3 shadow-md border border-slate-800">
            <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-base">
              <Clock className="w-5 h-5 text-[#BF5700]" />
              UT Austin Student & Advising Support
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              If you are a student in the <strong>Immunology Lab</strong> or working through college applications via <strong>Matriculate</strong>, please send a message above or email directly for office hours availability.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
