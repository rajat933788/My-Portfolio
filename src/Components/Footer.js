import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-4 bg-gray-900 border-t border-gray-800 mt-16">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm text-gray-400">
          Coded with <span className="text-red-500">❤️</span> by{" "}
          <a
            className="font-medium bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:underline"
            href="https://github.com/rajat933788"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rajat Bagh
          </a>{" "}
          | Copyright &copy;{" "}
          <span className="font-medium text-blue-400">{currentYear}</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;