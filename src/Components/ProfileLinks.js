import React from 'react';
import { FaGithub, FaLinkedin, FaHackerrank, FaStackOverflow, FaFigma } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const profileLinks = [
  { name: 'GitHub', icon: 'FaGithub', url: 'https://github.com/rajat933788' },
  { name: 'LinkedIn', icon: 'FaLinkedin', url: 'https://www.linkedin.com/in/rajatt27/' },
  { name: 'Figma', icon: 'FaFigma', url: 'https://www.figma.com/@rajat18' },
  { name: 'HackerRank', icon: 'FaHackerrank', url: 'https://www.hackerrank.com/profile/apurwasharma2002' },
  { name: 'StackOverflow', icon: 'FaStackOverflow', url: 'https://stackoverflow.com/users/yourprofile' },
  { name: 'LeetCode', icon: 'SiLeetcode', url: 'https://leetcode.com/u/IwYM3o08s6/' },
  { name: 'GeeksforGeeks', icon: 'SiGeeksforgeeks', url: 'https://www.geeksforgeeks.org/user/rajat_xd/' },
  { name: 'Email', icon: 'MdEmail', url: 'mailto:rajatbagh037@gmail.com' },
];

const ProfileLinks = () => {
  const iconMap = {
    FaGithub,
    FaLinkedin,
    FaFigma,
    FaHackerrank,
    FaStackOverflow,
    SiLeetcode,
    SiGeeksforgeeks,
    MdEmail,
  };

  return (
    <main className="container mx-auto max-w-screen-xl pb-20 m-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-red-400 font-bold mb-8 text-center">
        You Can Find Me On
      </h1>
      <div className="p-6 rounded-lg">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profileLinks.map((link) => {
            const IconComponent = iconMap[link.icon];

            return (
              <div key={link.name} className="flex flex-col items-center space-y-4 transition-transform transform hover:scale-105">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-700">
                    <IconComponent size={40} className="text-white" />
                  </div>
                  <span className="text-lg text-white font-semibold hover:underline">{link.name}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ProfileLinks;
