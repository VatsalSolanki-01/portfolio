export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  image?: string;
};

export type Certification = {
  title: string;
  issuer: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  name: "Vatsal Solanki",
  role: "DevOps Engineer",
  intro:
    "BCA (Hons) Cloud Computing graduate with AWS and Google Cloud certifications. I build reliable cloud infrastructure and work across Docker, Jenkins, Kubernetes, Go, Linux, and observability tooling.",
  location: "Ahmedabad, Gujarat",
};

export const aboutContent = {
  title: "About",
  paragraphs: [
    "I’m a DevOps focused engineer with a strong interest in building reliable, scalable, and production oriented systems. My work is centered around containerization, CI/CD, infrastructure automation, Kubernetes, and backend aware system design.",
    "I enjoy understanding how applications move from code to production, how infrastructure should be automated, and how monitoring and observability help teams operate systems with confidence. Alongside DevOps, I also care about backend engineering fundamentals because I want to understand the systems I deploy, not just the infrastructure around them.",
    "This portfolio itself is being built incrementally as an engineering project with versioned development, Git based workflow, clean component structure, and continuous deployment through GitHub and Vercel.",
  ],
  skills: [
    "Computer Networking",
    "Operating Systems",
    "Linux",
    "Git",
    "GitHub",
    "Docker",
    "Docker Compose",
    "Jenkins",
    "Kubernetes",
    "Grafana",
    "Prometheus",
    "Loki",
    "Alertmanager",
    "Go",
  ],
};

export const projects: Project[] = [
  {
    title: "JobTracker",
    description:
      "JobTracker is a containerized web application composed of a React frontend, Go backend, MySQL database, and Nginx reverse proxy. It demonstrates an end to end DevOps workflow where GitHub pushes trigger Jenkins pipelines that build Docker images, push them to Docker Hub, and deploy the latest version to a Kubernetes cluster.",
    stack: [
      "React",
      "Go",
      "MySQL",
      "Nginx",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "Docker Hub",
    ],
    github: "https://github.com/VatsalSolanki-01/jobtracker",
    image: "/projects/jobtracker.jpeg",
  },
  {
    title: "Randomverse API",
    description:
      "A hands on DevOps project focused on Docker containerization, Jenkins based CI/CD automation, Docker Hub image management, and automated deployment using Railway. The project is designed to demonstrate practical software delivery and deployment workflow automation.",
    stack: [
      "Go",
      "Docker",
      "Jenkins",
      "Docker Hub",
      "Railway",
      "CI/CD",
    ],
    github: "https://github.com/VatsalSolanki-01/randomverse-api",
    image: "/projects/Randomverse.jpeg",
  },
  {
    title: "Microservices Observability",
    description:
      "A complete observability setup for a microservices based system using open source monitoring tools. Application servers run services alongside monitoring agents that collect metrics and logs, which are then shipped to a centralized monitoring server for storage, visualization, and alerting. The project simulates how DevOps and SRE teams monitor production systems.",
    stack: [
      "Docker",
      "Prometheus",
      "Grafana",
      "Loki",
      "Alertmanager",
      "Observability",
      "Microservices",
    ],
    github:
      "https://github.com/VatsalSolanki-01/microservices-observability-stack",
    image: "/projects/microservices-observability-stack.png",
  },
];

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    title: "Google Cloud Engineering Certificate",
    issuer: "Google Cloud",
  },
];

export const contactContent = {
  title: "Contact",
  description:
    "If you’d like to discuss DevOps, cloud infrastructure, backend systems, projects, or opportunities, feel free to reach out.",
  email: "solanki.vatsal009@gmail.com",
  github: "https://github.com/VatsalSolanki-01/",
  linkedin: "https://www.linkedin.com/in/vatsal-solanki19/",
};