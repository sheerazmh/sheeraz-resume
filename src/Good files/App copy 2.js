import React from 'react';
import { User, Briefcase, Award, Book, Feather, MapPin, Phone, Mail, Calendar, Star, DollarSign } from 'lucide-react';
import resumeData from './resume-data.json';

const App = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-b from-blue-100 to-purple-100 font-inter text-gray-800">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-4xl font-bold mb-2 text-blue-600">{resumeData.basics.name}</h1>
        <p className="text-xl mb-4 text-gray-600">{resumeData.basics.label}</p>
        <div className="flex flex-wrap gap-4">
          <p className="flex items-center text-sm">
            <Mail className="mr-2 text-blue-500" size={16} /> {resumeData.basics.email}
          </p>
          <p className="flex items-center text-sm">
            <Phone className="mr-2 text-blue-500" size={16} /> {resumeData.basics.phone}
          </p>
          <p className="flex items-center text-sm">
            <MapPin className="mr-2 text-blue-500" size={16} /> {resumeData.basics.location.city}, {resumeData.basics.location.country}
          </p>
        </div>
      </div>

      {/* Executive Summary */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-600">
          <User className="mr-2" size={24} /> Executive Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {resumeData.summary}
        </p>
      </section>

      {/* Work Experience */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-600">
          <Briefcase className="mr-2" size={24} /> Work Experience
        </h2>
        {resumeData.work.map((job, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="font-bold text-lg text-gray-800">{job.position} - {job.company}</h3>
            <p className="text-sm text-gray-600 mb-2 flex items-center">
              <Calendar className="mr-2" size={16} /> {job.startDate} - {job.endDate}
            </p>
            <p className="text-sm text-gray-600 mb-2 flex items-center">
              <MapPin className="mr-2" size={16} /> {job.location}
            </p>
            <p className="text-gray-700 mb-2">{job.summary}</p>
            <ul className="list-disc list-inside text-gray-700">
              {job.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-600">
          <Award className="mr-2" size={24} /> Skills
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.keywords.map((keyword, i) => (
                  <span key={i} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-600">
          <Book className="mr-2" size={24} /> Education
        </h2>
        {resumeData.education.map((school, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h3 className="font-bold text-lg text-gray-800">{school.institution}</h3>
            <p className="text-gray-700">{school.studyType}, {school.area}</p>
            <p className="text-sm text-gray-600 flex items-center">
              <Calendar className="mr-2" size={16} /> {school.startDate} - {school.endDate}
            </p>
          </div>
        ))}
      </section>

      {/* Languages */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-600">
          <Feather className="mr-2" size={24} /> Languages
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {resumeData.languages.map((language, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">{language.language}</h3>
              <p className="text-gray-600">{language.fluency}</p>
            </div>
          ))}
        </div>
      </section>

      {/* References */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-600">
          <Star className="mr-2" size={24} /> References
        </h2>
        <p className="text-gray-700 italic">"{resumeData.references[0].text}"</p>
      </section>

      {/* Additional Information */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-600">
          <DollarSign className="mr-2" size={24} /> Additional Information
        </h2>
        <p className="text-gray-700">{resumeData.additionalInfo.workingRights}</p>
      </section>
    </div>
  );
};

export default App;