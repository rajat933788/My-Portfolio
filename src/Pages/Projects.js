import React from "react";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto px-6 lg:px-8 py-12 mt-10">
      {/* Projects Section */}
      <section>
        {/* Section Header */}
        <h1 className="text-center text-4xl font-extrabold text-white mb-16">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectDetails.map((project, index) => (
            <div
              key={index}
              className="bg-black border border-gray-700 rounded-lg overflow-hidden shadow-md p-4"
            >
              {/* Project Title and Description */}
              <div className="mb-4">
                <h2 className="text-xl font-bold text-white text-center mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  {project.description}
                </p>
              </div>

              {/* Image Section */}
              <div className="h-48 bg-gray-900 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div>
                {/* Tech Stack */}
                <p className="text-gray-500 text-sm mb-4">
                  <span className="font-semibold text-gray-300">Tech Stack:</span> {project.techstack}
                </p>

                {/* Links Section */}
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm font-medium"
                  >
                    Preview →
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 text-sm px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-all"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
