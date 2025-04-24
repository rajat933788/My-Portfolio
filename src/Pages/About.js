import React from "react";
import { personalDetails, workDetails, eduDetails } from "../Details";
import LeetCodeCalendar from "../Components/LeetCodeCalender";

function About() {
  return (
    <main className="container mx-auto max-w-screen-xl py-10 px-6 lg:px-8 mt-10">
      {/* About Me Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </span>
        </h1>
        <div className="bg-neutral-800 rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed">
            {personalDetails.about}
          </p>
        </div>
      </section>

      {/* LeetCode Calendar Section */}
      <section className="mb-16">
        <div className="rounded-lg p-8 shadow-lg">
          
          <LeetCodeCalendar />
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Work Experience
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workDetails.map((work, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-500 to-purple-600 p-0.5 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-gray-800 p-6 rounded-lg h-full">
                <h2 className="text-xl font-bold text-white mb-2">
                  {work.Position}
                </h2>
                <h3 className="text-lg font-medium text-blue-400 mb-4">
                  {work.Company}
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center">
                    <span className="mr-2">📍</span> {work.Location}
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">💼</span> {work.Type}
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">🗓️</span> {work.Duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Education
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eduDetails.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-xl font-bold text-white mb-2">
                {edu.Course}
              </h2>
              <h3 className="text-lg font-medium text-purple-400 mb-4">
                {edu.Branch}
              </h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <span className="mr-2">🏛️</span> {edu.Institute}
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📍</span> {edu.Location}
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🗓️</span> {edu.Duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;