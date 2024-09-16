import React from 'react';
import { User, Briefcase, Award, Book, Feather } from 'lucide-react';

const CVMockup = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-pastel-green font-inter text-dark-gray">
      {/* Header */}
      <h1 className="text-4xl font-semibold mb-6 text-pastel-coral">John Doe</h1>
      <p className="text-xl mb-8 leading-relaxed">Senior Product Manager</p>

      {/* Executive Summary */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-pastel-coral">
          <User className="mr-2" /> Executive Summary
        </h2>
        <p className="bg-white p-4 rounded-lg shadow-sm">
          Experienced product manager with 10+ years in tech, specializing in B2B SaaS products.
          Proven track record of launching successful products and driving revenue growth.
        </p>
      </section>

      {/* Career Highlights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-pastel-coral">
          <Briefcase className="mr-2" /> Career Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">Product Launch at TechCorp</h3>
            <p className="leading-relaxed mt-2">
              Led cross-functional team to launch flagship product, resulting in $5M ARR within the first year.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">Agile Transformation at StartupX</h3>
            <p className="leading-relaxed mt-2">
              Spearheaded agile transformation, increasing team velocity by 40% and reducing time-to-market by 2 months.
            </p>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-pastel-coral">
          <Award className="mr-2" /> Project Showcase
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-lg">AI-Powered Analytics Platform</h3>
          <p className="leading-relaxed mt-2">
            Led development of ML-driven analytics tool, increasing customer retention by 25%.
          </p>
          <ul className="list-disc list-inside mt-2 leading-relaxed">
            <li>Conducted extensive user research to identify pain points</li>
            <li>Collaborated with data science team to integrate AI capabilities</li>
            <li>Oversaw beta testing program with 50 key customers</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-pastel-coral">
          <Book className="mr-2" /> Education
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="leading-relaxed">MBA, Harvard Business School</p>
          <p className="leading-relaxed">BS in Computer Science, MIT</p>
        </div>
      </section>

      {/* Thought Leadership */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-pastel-coral">
          <Feather className="mr-2" /> Thought Leadership
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="leading-relaxed">"The Future of B2B SaaS" - Published in TechCrunch</p>
          <p className="leading-relaxed">Keynote Speaker at ProductCon 2023</p>
        </div>
      </section>
    </div>
  );
};

export default CVMockup;