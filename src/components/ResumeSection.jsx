import React from "react";

const ResumeSection = ({ resume }) => {
  return (
    <div className="space-y-12">
      {/* Education */}
      <section>
        <SectionTitle title="Education" />
        <div className="space-y-4">
          {resume.education && resume.education.map((edu, idx) => (
            <div key={idx} className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500 transition-all">
              <div className="flex gap-4">
                <div className="text-3xl w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500">
                  🎓
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                  <span className="inline-block text-yellow-500 text-xs px-3 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/30">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <SectionTitle title="Technical Skills" />
        <div className="grid md:grid-cols-2 gap-6">
          {resume.skills && Object.entries(resume.skills).map(([category, skills]) => (
            <div key={category} className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500 transition-all">
              <h3 className="text-lg font-bold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-yellow-500/50 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      {resume.achievements && resume.achievements.length > 0 && (
        <section>
          <SectionTitle title="Achievements" />
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
            <ul className="space-y-3">
              {resume.achievements.map((achievement, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="text-yellow-500 font-bold flex-shrink-0">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Certifications */}
      {resume.certifications && resume.certifications.length > 0 && (
        <section>
          <SectionTitle title="Certifications" />
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
            <ul className="space-y-3">
              {resume.certifications.map((cert, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="text-yellow-500 font-bold flex-shrink-0">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

// Helper Components
const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-6">
    {title}
  </h2>
);

export default ResumeSection;
