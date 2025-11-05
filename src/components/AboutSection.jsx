const AboutSection = ({ about = { description: [], services: [], highlights: [] } }) => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
        <div className="text-gray-300 space-y-4">
          {about.description.map((para, idx) => (
            <p key={idx} className="leading-relaxed">{para}</p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-6">What I'm Doing</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {about.services.map((service, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Highlights</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {about.highlights.map((highlight, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
              <p className="text-gray-400 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
