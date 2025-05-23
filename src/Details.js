

// Porject Images
// import projectImage1 from "./assets/projects/project1.png";
// import projectImage4 from "./assets/projects/project4.png";
// import projectImage5 from "./assets/projects/project5.png";
// import projectImage6 from "./assets/projects/project6.png";

import projectImage1 from "./assets/project1.png";
import projectImage2 from "./assets/project2.jpg";
import projectImage3 from "./assets/project3.jpg";
import projectImage4 from "./assets/project4.jpg";




// Enter your Personal Details here
export const personalDetails = {
  name: "Rajat Bagh",
  tagline: "I secure the web applications",
  about: `I'm a passionate Cloud Computing enthusiast with hands-on experience in AWS, Docker, and Kubernetes. I specialize in designing and deploying scalable, cloud-native architectures that are both resilient and efficient. With a strong foundation in containerization, infrastructure as code (IaC), and CI/CD pipelines, I’ve implemented real-world solutions using services like AWS ECS, Lambda (serverless), and Kubernetes clusters.

I enjoy working at the intersection of DevOps and MLOps, building automated workflows that drive innovation and reliability. My focus is always on creating cloud infrastructure that supports agility, performance, and long-term scalability.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/apurwa-sharma-technophile/",
  github: "https://github.com/Apurwasharma3007",
  instagram: "https://www.instagram.com/apurwa_sharma30?igsh=MTAxN2pxc2o0a3B4Mg==",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Project Intern",
    Company: `F13 Technologies`,
    Location: "Work from home",
    Type: "Internship",
    Duration: "Jan 2025 - Feb 2025",
  },
  {
    Position: "AI Trainer",
    Company: "Outlier AI",
    Type:"Freelancing",
    Location:"Work From Home",
    Duration: "Nov 2024 - Present",
  },
  {
    Position: "Cloud Engineer",
    Company: `Gokboru Tech`,
    Location: "Work from home",
    Type: "Training",
    Duration: "June 2024 - July 2024",
  },
  
];

// Enter your Education Details here
export const eduDetails = [
  {
    Course: "Bachelor of Technology (B.Tech)",
    Branch: "Computer Science and Engineering",
    Institute: "LoveLy Professional University",
    Location: "Phagwara,Punjab",
    Duration: "2022 - 2026",
  },
  {
    Course: "Senior Secondary Education",
    Branch:"CBSE",
    Institute: "Newton School of Science",
    Location: "Sambalpur, Odisha",
    Duration: "2020- 2022"
  },
  {
    Course: "Secondary Education",
    Branch:"CBSE",
    Institute: "K.C.P High School",
    Location: "Sundargarh, Odisha",
    Duration: "2020"
  }
];

export const skills = [
  // Cloud & DevOps
  { id: "Cloud_AWS", content: "AWS", percentage: 85 },
  { id: "DevOps_Docker", content: "Docker", percentage: 80 },
  { id: "DevOps_GitHubActions", content: "GitHub Actions", percentage: 75 },
  { id: "DevOps_Nginx", content: "Nginx", percentage: 70 },
  { id: "DevOps_Certbot", content: "Certbot", percentage: 65 },
  { id: "DevOps_Git", content: "Git", percentage: 90 },
  { id: "DevOps_CI_CD", content: "CI/CD", percentage: 75 },
  { id: "DevOps_Linux", content: "Linux", percentage: 80 },

  // Core CS & Programming
  { id: "DSA_skill", content: "DSA", percentage: 90 },
  { id: "C_skill", content: "C", percentage: 85 },
  { id: "Cpp_skill", content: "C++", percentage: 80 },
  { id: "Java_skill", content: "Java", percentage: 75 },
  { id: "Python_skill", content: "Python", percentage: 90 },

  // Basic Frontend
  { id: "HTML5_skill", content: "HTML5", percentage: 40 },
  { id: "CSS3_skill", content: "CSS3", percentage: 35 },
  { id: "JavaScript_skill", content: "JavaScript", percentage: 30 },
  { id: "ReactJS_skill", content: "ReactJS", percentage: 40 },
];


export const certifications = [
  {id:1, title:"Microsoft Certified: Azure Administrator Associate", link: "https://drive.google.com/file/d/1m0Y4IHpesUrt5wVT5x1p_IA83ThDJZ90/view?usp=sharing"},
  { id: 2, title: "Microsoft Azure Security Engineer Associate (AZ-500)", link: "https://drive.google.com/file/d/1E3FUaLsWO_ipjPRz4qHzlSyPbir0HzW8/view?usp=sharing" },
  { id: 3, title: "Microsoft Azure AI Fundamentals AI-900 Exam Prep Specialization (Microsoft)", link: "https://coursera.org/share/ef510a4298efd903a9e1ffe64c1c72c5" },
  { id: 4, title:"Microsoft Power Platform Fundamentals PL-900 Exam Prep Specialization (Microsoft)", link: "https://coursera.org/share/3683ff28e6dfae131f6b882993f72f18"},
  { id: 5, title: "Internet of Things - NPTEL",link:"https://drive.google.com/file/d/17qDCkR0f1fVStIs6YvylIRzlfu-B3D-6/view?usp=drivesdk"  },
  { id: 6, title:"Cloud Computing - AWS" , link: "https://drive.google.com/file/d/1kvn0gDYqj_ocr0zQ1m_CT_x93gMOysSr/view?usp=sharing"},
  { id: 7, title: "Algorithms on Strings", link: "https://coursera.org/share/a54c5311e697e06ea309c585dbc596fa" },
 
  { id: 8, title:"Introduction to Large Language Models- Google ", link: "https://coursera.org/share/417139e54db2ba08a7b456f790581c8f"},
  { id: 9,title:"Introduction to Generative AI- Google", link: "https://coursera.org/share/9eed41eb7e17f05b22272055effe2849"},
  { id: 10, title:"SQL Certificate - HackerRank", link: "https://www.hackerrank.com/certificates/iframe/adbdfa7c78cc"},


  

  // Add more certifications
];

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Portfolio",
    image: projectImage1,
    description: `Discover my portfolio—an interactive showcase of projects, skills, and contact information. Explore live project previews and GitHub repositories to see my work in action.`,
    techstack: "React.js, Node.js, Tailwind css",
    previewLink: "https://rajatbagh.site/",
    githubLink: "https://github.com/rajat933788/My-Portfolio",
  },
  
  {
    title: "Global Content Personalizer with Real-Time Location Detection",
    image: projectImage2,
    description: `a dynamic web application that delivers personalized content to users based on their real-time geographic location.`,
    techstack: "AWS Lambda, DynomoDB",
   
  },
  {
    title: "Food Delivery App",
    image: projectImage3,
    description: `Designed a user-centric food delivery app UI/UX using Figma and FigJam, emphasizing seamless interaction and intuitive navigation.`,
    techstack: "Figma",
    previewLink: "https://www.figma.com/proto/i7Pnr5CUn6cBLLm9Rguuo9/Untitled?node-id=0-70&p=f&t=XvJEd5BUGSXvFME4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    githubLink: "https://github.com/rajat933788/food-deliver-app-ui/tree/main",
  },
  {
    title: "Healthcare Website",
    image: projectImage4,
    description: `Developed a responsive healthcare website using HTML, CSS, and JavaScript, with an emphasis on clean UI, accessibility, and user engagement.`,
    techstack: "HTML, CSS , JAVASCRIPT",
    previewLink: "https://rajat933788.github.io/project/",
    githubLink: "https://github.com/rajat933788/project",
  },

  {
    title: "Docker Application Implement in ECS",
    image: "",
    description: `Deployed a Docker application on AWS ECS, leveraging ECR for image storage and enabling scalable container management.`,
    techstack: "Amazon Web Service, Docker",
    //previewLink: "",
    githubLink: "https://github.com/rajat933788/Flask-app",
  },

  {
    title: "Rock, Paper and Scissor",
    image: "",
    description: `Created a user-friendly Rock Paper Scissor Game.`,
    techstack: "Python Programming using different Tuple and Functions.",
    //previewLink: "",
    githubLink: "https://github.com/rajat933788/Rock-Paper-Scissors",
  },

  
];

