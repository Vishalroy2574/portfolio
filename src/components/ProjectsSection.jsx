import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = ({ projects }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
            <div className="h-52 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-b border-gray-700 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 transition-all">
              <span className="text-7xl transform group-hover:scale-110 transition-transform">{project.icon}</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                {project.title}
                <ExternalLink className="w-4 h-4 inline-block ml-3 text-yellow-500 align-middle" />
              </h3>
              <p className="text-gray-400 text-base mb-5 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, tidx) => (
                  <span key={tidx} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-lg border border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-500 text-base font-semibold hover:gap-3 transition-all"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;