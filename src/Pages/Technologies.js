import React from "react";
import { skills, certifications } from "../Details";

class Technologies extends React.Component {
  render() {
    return (
      <main className="container mx-auto max-w-screen-xl py-10 px-6 lg:px-8 mt-10">
        {/* Tech Stack Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Tech Stack
            </span>
          </h1>
          <p className="text-lg text-center text-gray-400 mb-12 lg:max-w-3xl mx-auto">
            Technologies I've been working with recently
          </p>

          {/* Skills Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className=" p-0.5 rounded-lg  transition-transform duration-300 hover:scale-105"
              >
                <div className="bg-gray-800 p-6 rounded-lg h-full">
                  <p className="text-xl text-white font-semibold mb-6">
                    {skill.content}
                  </p>
                  <div className="relative pt-4">
                    <Progress completed={skill.percentage} />
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="pt-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Certifications
            </span>
          </h2>
          <p className="text-lg text-center text-gray-400 mb-12">
            My achievements and credentials
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <CertificationCard
                key={cert.id}
                title={cert.title}
                link={cert.link}
              />
            ))}
          </div>
        </section>
      </main>
    );
  }
}

// Progress Bar Component
class Progress extends React.Component {
  render() {
    const { completed } = this.props;
    return (
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${completed}%`,
            background: `linear-gradient(to right, #3b82f6, #8b5cf6)`
          }}
        ></div>
      </div>
    );
  }
}

// Certification Card Component
const CertificationCard = ({ title, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-6 cursor-pointer transition transform duration-300 hover:shadow-lg hover:border-blue-500"
      onClick={handleClick}
    >
      <div className="flex items-start mb-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-md mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex items-center text-sm text-gray-400 mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        View certificate
      </div>
    </div>
  );
};

export default Technologies;