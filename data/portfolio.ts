export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  name: "Vatsal Solanki",
  role: "Aspiring DevOps Engineer & Backend Enthusiast",
  intro:
    "I’m building toward a career in DevOps with strong backend fundamentals. I enjoy working with Kubernetes, Docker, Linux, CI/CD pipelines, and Go while learning how to design and ship reliable systems.",
};

export const aboutContent = {
  title: "About",
  paragraphs: [
    "I’m focused on becoming a DevOps engineer who also understands backend engineering deeply enough to build and operate production systems with confidence.",
    "My current learning and project work revolves around Kubernetes, Docker, Linux, GitHub based workflows, deployment automation, and backend development with Go. I like understanding how systems behave underneath the abstraction, not just how to use them at a surface level.",
    "This portfolio is being built as a real project with versioned development, Git based workflow, clean architecture, and production deployment on Vercel rather than as a one off static page.",
  ],
  skills: [
    "Kubernetes",
    "Docker",
    "Linux",
    "Git & GitHub",
    "CI/CD",
    "Go",
    "AWS Fundamentals",
    "Backend Development",
  ],
};

export const projects: Project[] = [
  {
    title: "Job Tracker",
    description:
      "A job tracking application focused on managing applications, statuses, and related workflow while exploring scalable application design and clean backend oriented architecture.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/VatsalSolanki-01/jobtracker",
  },
  {
    title: "Kubernetes Notes App Deployment",
    description:
      "A deployment focused project centered around containerizing and running an application in Kubernetes while learning services, deployments, replicas, and operational workflows.",
    stack: ["Kubernetes", "Docker", "YAML"],
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio itself is being developed as a structured engineering project with incremental versions, reusable components, and automated deployment through GitHub and Vercel.",
    stack: ["Next.js", "TypeScript", "Vercel"],
    link: "https://vatsalsolanki.vercel.app",
  },
];

export const contactContent = {
  title: "Contact",
  description:
    "If you’d like to discuss DevOps, backend engineering, projects, or opportunities, feel free to reach out.",
  email: "solanki.vatsal009@gmail.com",
  github: "https://github.com/VatsalSolanki-01",
  linkedin: "https://www.linkedin.com/",
};