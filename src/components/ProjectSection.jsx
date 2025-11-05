const ProjectsSection = ({ projects }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform"
          >
            <div className="h-48 bg-gray-800 flex items-center justify-center">
              <span className="text-6xl">{project.icon}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tidx) => (
                  <span
                    key={tidx}
                    className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 text-sm hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
