import React from 'react';

const AboutSection = ({ about }) => {
  return (
    <div className="space-y-10">
      <section className="animate-fade-in">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-8">About Me</h2>
        <div className="text-gray-300 space-y-5 text-lg leading-relaxed">
          {about.description.map((para, idx) => (
            <p key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-yellow-500/30 transition-all">
              {para}
            </p>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-8">What I'm Doing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {about.services.map((service, idx) => (
            <div key={idx} className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-yellow-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-8">Highlights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {about.highlights.map((highlight, idx) => (
            <div key={idx} className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-yellow-500 transition-all hover:shadow-xl hover:shadow-yellow-500/10">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors">{highlight.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutSection;