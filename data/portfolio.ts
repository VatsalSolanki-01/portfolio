export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  name: "Vatsal Solanki",
  role: "Hello, I am",
  intro:
    "DevOps Engineer with hands on experience in containerization using Docker and Docker Compose, CI/CD automation with Jenkins, container orchestration with Kubernetes, AWS cloud infrastructure, and monitoring with Prometheus and Grafana. Focused on building reliable, scalable, and production ready infrastructure and deployment workflows.",
  location: "Ahmedabad, Gujarat",
  email: "solanki.vatsal009@gmail.com",
  github: "https://github.com/VatsalSolanki-01/",
  linkedin: "https://www.linkedin.com/in/vatsal-solanki19/",
};

export const aboutContent = {
  paragraphs: [
    "I’m a DevOps Engineer experienced in version control systems, containerization, CI/CD workflows, container orchestration, and monitoring and observability, with these skills built through working on practical DevOps projects. These projects have helped me develop a stronger understanding of networking, operating systems, cloud infrastructure, deployment automation, and how applications and services are managed in production style environments.",
    "I hold AWS Cloud Practitioner and Google Cloud Engineering certifications, which further strengthen my foundation in cloud and infrastructure concepts.",
  ],
};

export const techStack = [
  {
    category: "Cloud & Infrastructure",
    items: [
      {
        name: "AWS Services",
        logo: "/skills/aws.svg",
      },
      {
        name: "Docker",
        logo: "/skills/docker.svg",
      },
      {
        name: "Docker Compose",
        logo: "/skills/docker.svg",
      },
      {
        name: "Docker Hub",
        logo: "/skills/docker.svg",
      },
      {
        name: "Kubernetes",
        logo: "/skills/kubernetes.svg",
      },
    ],
  },
  {
    category: "CI/CD & Version Control",
    items: [
      {
        name: "Jenkins",
        logo: "/skills/jenkins.svg",
      },
      {
        name: "Git",
        logo: "/skills/git.svg",
      },
      {
        name: "GitHub",
        logo: "/skills/github.svg",
      },
    ],
  },
  {
    category: "Monitoring & Observability",
    items: [
      {
        name: "Prometheus",
        logo: "/skills/prometheus.svg",
      },
      {
        name: "Grafana",
        logo: "/skills/grafana.svg",
      },
      {
        name: "Loki",
        logo: "/skills/loki.png",
      },
      {
        name: "Promtail",
        logo: "/skills/loki.png",
      },
      {
        name: "Node Exporter",
        logo: "/skills/prometheus.svg",
      },
      {
        name: "Alertmanager",
        logo: "/skills/prometheus.svg",
      },
    ],
  },
  {
    category: "Fundamentals & Programming",
    items: [
      {
        name: "Linux",
        logo: "/skills/linux.svg",
      },
      {
        name: "Networking",
        logo: "/skills/networking.svg",
      },
      {
        name: "Go",
        logo: "/skills/go.svg",
      },
      {
        name: "Bash Scripting",
        logo: "/skills/bash.svg",
      },
    ],
  },
];

export const foundations = [];

export const experience = [
  {
    role: "DevOps Engineering Intern",
    company: "Aries.com",
    logo: "/company-logos/aries.svg",
    duration: "Duration: 3 months",
    location: "Location: Ahmedabad",
    points: [
      "Collaborated with developers to improve release stability and maintain structured API documentation for smoother integrations.",
      "Designed and implemented an observability stack using Prometheus, Grafana, Node Exporter, Loki, and Promtail for metrics and log monitoring.",
      "Built CLI based utilities to automate parts of the API documentation workflow and reduce manual effort.",
    ],
    stack: [
      "Prometheus",
      "Grafana",
      "Node Exporter",
      "Loki",
      "Promtail",
      "CLI Automation",
    ],
  },
];

export const certifications = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    year: "13/02/2025",
    image: "/certifications/aws.png",
    credentialUrl: "",
  },
  {
    title: "Google Cloud Engineering Certificate",
    issuer: "Google Cloud",
    year: "05/09/2025",
    image: "/certifications/google-cloud-engineering-certificate.png",
    credentialUrl: "",
  },
];

export const projects = [
  {
    title: "Randomverse API",
    description:
      "A hands on DevOps project focused on Docker containerization, Jenkins CI/CD automation, Docker Hub image management, and automated Railway deployment.",
    bullets: [
      "Built a Jenkins CI/CD pipeline to build Docker images, push them to Docker Hub, and deploy the app to Railway.",
      "Containerized the application with Docker for a consistent and repeatable deployment workflow.",
      "Integrated GitHub, Jenkins, Docker Hub, and Railway into an end to end automated delivery pipeline.",
    ],
    github: "https://github.com/VatsalSolanki-01/randomverse-api",
    live: "",
    image: "/projects/Randomverse.jpeg",
    stack: ["Docker", "Jenkins", "Docker Hub", "Railway", "Go"],
  },
  {
    title: "Microservices Observability Stack",
    description:
      "This project builds a complete observability environment for a microservices based system using open source monitoring tools.",
    bullets: [
      "Built a microservices observability stack using Prometheus, Grafana, Loki, and Alertmanager for metrics, logs, dashboards, and alerting.",
      "Configured monitoring agents to collect infrastructure metrics and service logs from application nodes.",
      "Created a production style monitoring setup for faster failure detection and easier debugging across distributed services.",
    ],
    github:
      "https://github.com/VatsalSolanki-01/microservices-observability-stack",
    live: "",
    image: "/projects/microservices-observability-stack.png",
    stack: [
      "Prometheus",
      "Grafana",
      "Node Exporter",
      "Loki",
      "Promtail",
      "Alertmanager",
      "Docker Hub",
    ],
  },
  {
    title: "JobTracker",
    description:
      "JobTracker is a containerized web application consisting of a React frontend, Go backend, MySQL database, and Nginx reverse proxy.",
    bullets: [
      "Built a multi service application with React, Go, MySQL, and Nginx, containerized with Docker for consistent environments.",
      "Automated delivery with Jenkins to build images, push them to Docker Hub, and deploy the latest version to Kubernetes.",
      "Defined Kubernetes Deployments and Services to simulate a production style container orchestration setup.",
    ],
    github: "https://github.com/VatsalSolanki-01/jobtracker",
    live: "",
    image: "/projects/jobtracker.jpeg",
    stack: [
      "React",
      "Go",
      "MySQL",
      "Nginx",
      "Docker",
      "Jenkins",
      "Docker Hub",
      "Kubernetes",
      "Minikube",
    ],
  },
];

export const contactContent = {
  heading: "Let’s connect, learn and grow together.",
  description: "",
  email: "solanki.vatsal009@gmail.com",
  github: "https://github.com/VatsalSolanki-01/",
  linkedin: "https://www.linkedin.com/in/vatsal-solanki19/",
};