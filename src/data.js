// Portfolio content is centralized here for straightforward updates.
export const profile = {
  name: "Om Khot",
  initials: "OK",
  role: "Software Engineer",
  focus: "Full-Stack Developer",
  location: "IIT Hyderabad, India",
  tagline: "Engineering reliable backend systems and building products with thoughtful user experiences.",
  about:
    "I am a final-year B.Tech student at IIT Hyderabad, interested in software engineering and building reliable, scalable applications. My experience spans backend development, distributed systems, full-stack applications and applied AI. I enjoy understanding how products work end to end — from clean interfaces to the systems powering them.",
  photo: "/images/image.png",
  resume: "#", // Add your resume PDF to public/ and update this path before publishing.
  github: "https://github.com/omkhot",
  linkedin: "https://www.linkedin.com/in/om-khot-372474282"
};

const githubProfile = "https://github.com/omkhot";

export const projects = [
  {
    number: "01",
    name: "ConnectMe",
    category: "Full-Stack Development",
    description:
      "An Instagram-inspired social platform built around the core experience of connecting with people and sharing content. Explore the repository for its implementation and feature details.",
    stack: ["Full-Stack", "Social Platform", "Web Application"],
    github: `${githubProfile}?tab=repositories`,
    accent: "pink",
    visual: "connectme",
    featured: true
  },
  {
    number: "02",
    name: "LiteQueue",
    category: "Distributed Systems",
    description:
      "A Redis-backed distributed job queue in Java and Spring Boot, exploring worker pools, retry handling, dead-letter queues and crash-safe job recovery.",
    stack: ["Java", "Spring Boot", "Redis", "Distributed Systems"],
    github: `${githubProfile}/LiteQueue`,
    accent: "violet",
    visual: "queue"
  },
  {
    number: "03",
    name: "Smart API Gateway",
    category: "Backend Engineering",
    description:
      "A gateway project focused on request routing, authentication, resilience patterns and observability across backend services.",
    stack: ["Java", "Spring Boot", "Redis", "JWT", "Resilience4j", "Docker"],
    github: githubProfile,
    accent: "cyan",
    visual: "gateway"
  },
  {
    number: "04",
    name: "AutoCalendar AI",
    category: "AI / Automation",
    description:
      "An AI-assisted workflow concept for extracting scheduling information from emails and coordinating calendar actions through connected services.",
    stack: ["Python", "MongoDB", "OAuth 2.0", "LLM APIs"],
    github: githubProfile,
    accent: "blue",
    visual: "calendar"
  },
  {
    number: "05",
    name: "Developer Portfolio",
    category: "Frontend Development",
    description:
      "A responsive personal portfolio built with reusable React components, motion, accessible navigation and a cohesive visual system.",
    stack: ["React", "JavaScript", "CSS", "Framer Motion", "Vite"],
    github: githubProfile,
    accent: "pink",
    visual: "portfolio"
  }
];

export const experience = [
  {
    role: "Software Development Engineer Intern",
    company: "Kotak Mahindra Bank",
    period: "Jan 2026 — Jun 2026",
    location: "India",
    points: [
      "Contributed to the Bill-Fetch and notification workflows for the bank's digital platform.",
      "Worked on backend service components and data layers, including DTO/DAO and schema-related implementation.",
      "Worked with scheduled producer workflows and event-driven components involving AWS EventBridge and SQS.",
      "Participated in testing and engineering workflows across development and deployment environments."
    ],
    stack: ["Java", "Spring Boot", "AWS", "EventBridge", "SQS", "Docker", "Kubernetes"]
  }
];

export const skills = [
  {
    group: "Programming Languages & Fundamentals",
    items: ["C++", "Java", "Python", "SQL", "OOP", "Operating Systems", "Data Structures & Algorithms"]
  },
  {
    group: "Backend & System Design",
    items: ["Spring Boot", "REST APIs", "Microservices", "Redis", "Rate Limiting", "Caching", "Reverse Proxy", "Distributed Systems", "Producer–Consumer Architecture", "Executor Design Pattern"]
  },
  {
    group: "Cloud, DevOps & Tools",
    items: ["AWS S3", "AWS Lambda", "DynamoDB", "EventBridge", "SQS", "Athena", "Docker", "Git", "GitHub", "Postman"]
  },
  {
    group: "Observability & Testing",
    items: ["Kibana", "Grafana", "JUnit 5", "Mockito", "Unit Testing", "Integration Testing"]
  },
  {
    group: "Machine Learning & Data",
    items: ["Supervised Learning", "Unsupervised Learning", "ANN", "RNN", "Transformers", "NLP", "EDA", "Model Evaluation", "NumPy", "Pandas"]
  },
  {
    group: "LLM & AI Engineering",
    items: ["LLM APIs", "Prompt Engineering", "Embeddings", "Semantic Search", "Vector Search (FAISS)", "Cross-Encoder Verification", "sentence-transformers"]
  }
];

export const education = [
  {
    degree: "B.Tech — Mechanical Engineering",
    institution: "Indian Institute of Technology Hyderabad",
    period: "2023 — 2027",
    detail: "CGPA: 8.55 / 10"
  },
  {
    degree: "Class XII",
    institution: "Shraddha Junior College, Ichalkaranji",
    period: "2023",
    detail: "90.00%"
  },
  {
    degree: "Class X",
    institution: "Shri. Yashawantarao Ghatage Highschool, Kagal",
    period: "2021",
    detail: "99.60%"
  }
];

export const interests = ["Technology", "Problem Solving", "Sanskrit Language"];
