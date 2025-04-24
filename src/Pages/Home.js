import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name } = personalDetails;
  const roles = [
    "Cloud Engineer",
    "UI/UX Designer",
    "Coder",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const h11 = useRef();
  const h12 = useRef();
  const roleRef = useRef();
  const buttonRef = useRef();
  const backgroundRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    const fadeInFromTop = (ref, delay) => {
      tl.from(ref.current, {
        y: "-50px",
        opacity: 0,
        delay,
        duration: 1.2,
        ease: "power4.out",
      });
    };

    fadeInFromTop(h11, 0.5);
    fadeInFromTop(h12, 0.8);
    fadeInFromTop(roleRef, 1.1);
    fadeInFromTop(buttonRef, 1.4);

    // Animate background gradients
    gsap.to(backgroundRef.current, {
      backgroundPosition: "200% 200%",
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const totalRoles = roles.length;
    const roleChangeInterval = setInterval(() => {
      // Fade out current role
      gsap.to(roleRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          setCurrentRoleIndex((prevIndex) =>
            prevIndex === totalRoles - 1 ? 0 : prevIndex + 1
          );
          // Fade in new role
          gsap.to(roleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
          });
        }
      });
    }, 3000);

    return () => clearInterval(roleChangeInterval);
  }, [roles.length]);

  return (
    <main
      ref={backgroundRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 bg-size-200 animate-gradient"
    >
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container relative w-full h-full opacity-20">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-3xl z-10 mt-16 sm:mt-24 md:mt-32 lg:mt-20">
        <div className="backdrop-blur-sm bg-black/30 rounded-2xl p-8 shadow-2xl">
          <h1
            ref={h11}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight"
          >
            Hello, <br />
            I am
          </h1>
          <h1
            ref={h12}
            className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text font-extrabold mt-4 tracking-tight"
          >
            {name}
          </h1>
          <div className="h-16 flex items-center justify-center">
            <h2
              ref={roleRef}
              className="text-xl md:text-2xl lg:text-3xl text-gray-100 font-medium mt-4"
            >
              {roles[currentRoleIndex]}
            </h2>
          </div>
          <div ref={buttonRef} className="mt-12">
            <a
              href="/CV_Rajatrecent.pdf"
              download="rajat_cv.pdf"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 font-bold text-white"
            >
              <span className="relative rounded-md bg-black bg-opacity-30 px-8 py-3 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                <span className="flex items-center">
                  <span>Download CV</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Add custom keyframes for floating particles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-50px) translateX(20px);
          }
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </main>
  );
}

export default Home;