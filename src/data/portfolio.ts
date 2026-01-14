import { Experience, Project, Skill, Education } from "@/types";

export const personalInfo = {
  name: "Austin Do",
  role: "Full-Stack Developer",
  tagline:
    `
    I am passionate about technology, innovation, and AI, all of which drive me to thrive in problem-solving. \n
    I never like to be idle and always strive to stay updated with the latest developments.
    `,
  email: "austindtg68@gmail.com",
  location: "Adelaide, Australia",
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Jung Talents",
    role: "Full-Stack Developer",
    startDate: "Oct 2024",
    endDate: "Present",
    logo: "/logos/jung-talents.png",
    description: [
      "Designed, developed, and deployed scalable, high-performance web applications using ASP.NET Core, leveraging its modular architecture by implementing Dependency Injection.",
      "Experienced with ORM using Entity Framework Core to performe database migrations and manage data access layer, utilized LINQ for querying and manipulating data collections.",
      "Deployed .NET applications to AWS using services such as EC2, S3, RDS, IAM, CloudFront, and Route 53 for scalable and secure cloud solutions.",
      "Building dynamic and interactive UI with React.js, leveraging component-based architecture for seamless user experiences.",
      "Containerized applications using Docker, improving scalability and deployment efficiency.",
      "Wrote unit test using xUnit to ensure code reliability and maintainability.",
      "Integrated authentication and authorization mechanisms using Auth0 to ensure secure access to application resources.",
      "Integrated Serilog for structured and scalable logging in .NET applications."
    ],
  },
  {
    id: "2",
    company: "OPSWAT Software Vietnam",
    role: "Software Engineer",
    startDate: "Oct 2022",
    endDate: "Apr 2024",
    logo: "/logos/opswat.png",
    description: [
      "Designed and implemented APIs and new features for Metadefender Core, the central component of OPSWAT's cybersecurity platform, using C++ and the Qt framework",
      "Optimized PostgreSQL database queries, achieving up to 10x faster data retrieval, and implemented strategic data caching to enhance system performance.",
      "Enhancing system security by implementing updated security protocols and practices.",
      "Prioritized user experience while developing and integrating new features, leading to an 80% adoption rate for key feature updates.",
      "Provided direct customer support when development team involvement was required, handling issues with professionalism and efficiency, resulting in a 98% user satisfaction rating."
    ],
  },
  {
    id: "3",
    company: "TMA Solutions",
    role: "Software Engineer",
    startDate: "Dec 2020",
    endDate: "Sep 2022",
    logo: "/logos/tma-solutions.png",
    description: [
      "Develop and maintain IMS core network which provide a SIP-based rich communication services for telecom operators. My duty is to work as a software engineer in charge of maintaining the system, investigating and fixing the issues, increasing performance by solving memory error issues, implementing new features and writing unit tests.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "FizzBuzz Game",
    description:
      "VIsualize the classic FizzBuzz game with a user-friendly interface and all the logic on the server-side only.",
    image: "/projects/fizzbuzz.png",
    tags: ["ASP.NET", "React", "TypeScript", "PostgreSQL"],
    liveUrl: "https://fizzbuzzgame.giangdo.com",
    githubUrl: "https://github.com/giangdo888/FizzBuzzGame",
  },
  {
    id: "2",
    title: "Quiz App",
    description:
      "Develop a full-stack application that enables users to manage quiz questions and engage in quiz participation.",
    image: "/projects/quizapp.png",
    tags: ["ASP.NET", "JavaScript", "PostgreSQL"],
    githubUrl: "https://github.com/giangdo888/QuizApp",
  },
  {
    id: "3",
    title: "To Do List",
    description:
      "Develop a user-friendly to-do app interface for efficient daily task management.",
    image: "/projects/todolist.png",
    tags: ["ASP.NET", "Next.js", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com/giangdo888/ToDoList",
  },
];

export const skills: Skill[] = [
  { name: "C#", category: "backend" },
  { name: ".NET", category: "backend" },
  { name: "C++", category: "backend" },
  { name: "Qt", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Docker", category: "backend" },
  { name: "AWS", category: "backend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Git", category: "tools" },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Flinders University",
    degree: "Master of Computer Science",
    startDate: "2024",
    endDate: "2026",
    logo: "/logos/flinders-university.png",
  },
  {
    id: "2",
    institution: "University of Information Technology, Vietnam National University",
    degree: "Bachelor of Computer Engineering",
    startDate: "2016",
    endDate: "2020",
    logo: "/logos/uit.png",
  },
];

export const navLinks = [
  { name: "About", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
