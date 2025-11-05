const ResumeSection = ({ resume }) => {
  return (
    <div className="space-y-8">
      {/* Education */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
        <div className="space-y-6">
          {resume.education.map((edu, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                  <span className="text-yellow-500 text-xs bg-yellow-500 bg-opacity-10 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
        <div className="space-y-6">
          {resume.experience.map((exp, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💼</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.position}</h3>
                  <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
                  <span className="text-yellow-500 text-xs bg-yellow-500 bg-opacity-10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <p className="text-gray-400 text-sm mt-3">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(resume.skills).map(([category, skills]) => (
            <div key={category} className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumeSection;
