import React from "react";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <div className="max-w-sm bg-dark-card rounded-lg shadow-md overflow-hidden mx-auto">
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
        loading="lazy"
      />

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-white font-semibold text-lg">{title}</h2>
        <p className="text-gray-400 mt-2 text-sm leading-relaxed">
          {description}
        </p>
        <p className="text-gray-500 mt-4 text-xs font-medium">
          <span className="font-semibold">Tech Stack:</span> {techstack}
        </p>

        {/* Button Section */}
        <div className="flex items-center justify-between mt-6">
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-medium underline flex items-center"
          >
            Preview →
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-dark-card text-sm px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
