import { Experience, Project, Skill, Education } from "@/types";

export const personalInfo = {
  name: "John Doe",
  role: "UI/UX Designer & Developer",
  tagline:
    "I craft beautiful, user-centered digital experiences that bridge the gap between design and development.",
  email: "hello@johndoe.com",
  location: "San Francisco, CA",
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Company Inc.",
    role: "Senior UI/UX Designer",
    startDate: "Jan 2022",
    endDate: "Present",
    description: [
      "Led design system development for enterprise applications",
      "Collaborated with cross-functional teams to deliver user-centered solutions",
      "Increased user engagement by 40% through strategic UX improvements",
    ],
  },
  {
    id: "2",
    company: "Creative Agency",
    role: "Product Designer",
    startDate: "Mar 2020",
    endDate: "Dec 2021",
    description: [
      "Designed and prototyped mobile and web applications for diverse clients",
      "Conducted user research and usability testing sessions",
      "Mentored junior designers and established design processes",
    ],
  },
  {
    id: "3",
    company: "Startup Studio",
    role: "Junior Designer",
    startDate: "Jun 2018",
    endDate: "Feb 2020",
    description: [
      "Created visual designs for marketing campaigns and digital products",
      "Assisted in developing brand identities for early-stage startups",
      "Built responsive websites using modern front-end technologies",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with intuitive navigation, seamless checkout flow, and personalized recommendations.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Healthcare Dashboard",
    description:
      "Patient management dashboard designed for healthcare professionals with real-time data visualization.",
    image: "/projects/healthcare.jpg",
    tags: ["TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "Mobile Banking App",
    description:
      "A secure and user-friendly mobile banking application with biometric authentication and smart budgeting tools.",
    image: "/projects/banking.jpg",
    tags: ["React Native", "Firebase", "Figma"],
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Design System",
    description:
      "Comprehensive design system and component library built for scalability and consistency across products.",
    image: "/projects/designsystem.jpg",
    tags: ["Storybook", "React", "CSS Variables", "Documentation"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const skills: Skill[] = [
  { name: "Figma", category: "design" },
  { name: "Adobe XD", category: "design" },
  { name: "Sketch", category: "design" },
  { name: "Prototyping", category: "design" },
  { name: "User Research", category: "design" },
  { name: "Wireframing", category: "design" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Jira", category: "tools" },
  { name: "Notion", category: "tools" },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University of Design",
    degree: "Master of Fine Arts",
    field: "Interaction Design",
    startDate: "2016",
    endDate: "2018",
  },
  {
    id: "2",
    institution: "State University",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2012",
    endDate: "2016",
  },
];

export const navLinks = [
  { name: "About", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
