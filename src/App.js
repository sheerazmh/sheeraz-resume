import React from 'react';
import { User, Briefcase, Award, Book, Feather } from 'lucide-react';

const CVMockup = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 font-sans">
      <h1 className="text-3xl font-bold mb-6">John Doe</h1>
      <p className="text-xl mb-8">Senior Product Manager</p>
     
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <User className="mr-2" /> Executive Summary
        </h2>
        <p className="bg-white p-4 rounded shadow">
          Experienced product manager with 10+ years in tech, specializing in B2B SaaS products.
          Proven track record of launching successful products and driving revenue growth.
        </p>
      </section>
     
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Briefcase className="mr-2" /> Career Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Product Launch at TechCorp</h3>
            <p>Led cross-functional team to launch flagship product, resulting in $5M ARR within first year.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Agile Transformation at StartupX</h3>
            <p>Spearheaded agile transformation, increasing team velocity by 40% and reducing time-to-market by 2 months.</p>
          </div>
        </div>
      </section>
     
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Award className="mr-2" /> Project Showcase
        </h2>
        <div className="bg-white p-4 rounded shadow mb-4">
          <h3 className="font-bold">AI-Powered Analytics Platform</h3>
          <p>Led development of ML-driven analytics tool, increasing customer retention by 25%.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Conducted extensive user research to identify pain points</li>
            <li>Collaborated with data science team to integrate AI capabilities</li>
            <li>Oversaw beta testing program with 50 key customers</li>
          </ul>
        </div>
      </section>
     
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Book className="mr-2" /> Education
        </h2>
        <div className="bg-white p-4 rounded shadow">
          <p>MBA, Harvard Business School</p>
          <p>BS in Computer Science, MIT</p>
        </div>
      </section>
     
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Feather className="mr-2" /> Thought Leadership
        </h2>
        <div className="bg-white p-4 rounded shadow">
          <p>"The Future of B2B SaaS" - Published in TechCrunch</p>
          <p>Keynote Speaker at ProductCon 2023</p>
        </div>
      </section>
    </div>
  );
};

export default CVMockup;