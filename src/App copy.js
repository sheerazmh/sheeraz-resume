import React from 'react';
import { User, Briefcase, Award, Book, Feather, MapPin, Phone, Mail } from 'lucide-react'; // Importing icons from lucide-react
import resumeData from './resume-data.json'; // Import the JSON file

const App = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-pastel-green font-inter text-dark-gray">
      {/* Header */}
      <h1 className="text-4xl font-semibold mb-6 text-pastel-coral">{resumeData.basics.name}</h1>
      <p className="text-xl mb-8 leading-relaxed">{resumeData.basics.label}</p>

      <div className="flex mb-10 space-x-4">
        <p className="flex items-center">
          <Mail className="mr-2" /> {resumeData.basics.email}
        </p>
        <p className="flex items-center">
          <Phone className="mr-2" /> {resumeData.basics.phone}
        </p>
        <p className="flex items-center">
          <MapPin className="mr-2" /> {resumeData.basics.location.city}, {resumeData.basics.location.country}
        </p>
      </div>

      {/* Executive Summary */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-pastel-coral">
          <User className="mr-2" /> Executive Summary
        </h2>
        <p className="bg-white p-4 rounded-lg shadow-sm">
          {resumeData.summary}
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-pastel-coral">
          <Briefcase className="mr-2" /> Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.work.map((job, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg">{job.position} - {job.company}</h3>
              <p className="leading-relaxed mt-2">
                {job.startDate} - {job.endDate} | {job.location}
              </p>
              <p className="leading-relaxed mt-2">{job.summary}</p>
              <ul className="list-disc list-inside mt-2 leading-relaxed">
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-pastel-coral">
          <Book className="mr-2" /> Education
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          {resumeData.education.map((school, index) => (
            <div key={index}>
              <p className="leading-relaxed">{school.studyType}, {school.area} - {school.institution}</p>
              <p className="leading-relaxed">{school.startDate} - {school.endDate}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-pastel-coral">
          <Award className="mr-2" /> Skills
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <ul className="list-disc list-inside leading-relaxed">
            {resumeData.skills.map((skill, index) => (
              <li key={index}>
                <strong>{skill.name}:</strong> {skill.keywords.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-pastel-coral">
          <Feather className="mr-2" /> Languages
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <ul className="list-disc list-inside leading-relaxed">
            {resumeData.languages.map((language, index) => (
              <li key={index}>
                {language.language} - {language.fluency}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-pastel-coral">
          <Feather className="mr-2" /> References
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="leading-relaxed">{resumeData.references[0].text}</p>
        </div>
      </section>

      {/* Additional Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-pastel-coral">
          <Feather className="mr-2" /> Additional Information
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="leading-relaxed">{resumeData.additionalInfo.workingRights}</p>
        </div>
      </section>
    </div>
  );
};

export default App;
