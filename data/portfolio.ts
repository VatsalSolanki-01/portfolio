export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  name: "Vatsal Solanki",
  role: "DevOps Engineer",
  intro:
    "BCA (Hons) Cloud Computing Graduate AWS & Google Cloud Certified | DevOps Engineer skilled in Docker, Jenkins, Go, Linux, and cloud infrastructure. I build reliable, scalable systems with a strong focus on automation, observability, and backend engineering.",
  location: "Ahmedabad, Gujarat",
  email: "solanki.vatsal009@gmail.com",
  github: "https://github.com/VatsalSolanki-01/",
  linkedin: "https://www.linkedin.com/in/vatsal-solanki19/",
};

export const aboutContent = {
  paragraphs: [
    "I’m a DevOps focused engineer with a strong interest in cloud infrastructure, automation, backend systems, and observability.",
    "I enjoy building projects that combine practical deployment workflows with real engineering depth, whether that means containerizing services, setting up CI/CD pipelines, deploying to Kubernetes, or building monitoring stacks that reflect how production systems are actually operated.",
  ],
};

export const techStack = [
  {
    category: "Cloud & Infrastructure",
    items: [
      {
        name: "AWS",
        logo: "/skills/aws.svg",
      },
      {
        name: "Linux",
        logo: "/skills/linux.svg",
      },
      {
        name: "Docker",
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
    category: "Observability",
    items: [
      {
        name: "Prometheus",
        logo: "/skills/prometheus.svg",
      },
      {
        name: "Grafana",
        logo: "/skills/grafana.svg",
      },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      {
        name: "Go",
        logo: "/skills/go.svg",
      },
      {
        name: "MySQL",
        logo: "/skills/mysql.svg",
      },
    ],
  },
];

export const foundations = [
  "Docker Compose",
  "Loki",
  "Alertmanager",
  "Computer Networking",
  "Operating System",
];

export const experience = [
  {
    role: "DevOps Engineering Intern",
    company: "Aries.com",
    logo: "/company-logos/aries.svg",
    duration: "3 months",
    location: "Ahmedabad",
    points: [
      "Improved release stability and API documentation workflows by collaborating closely with developers.",
      "Built an observability stack with Prometheus, Grafana, Node Exporter, Loki, and Promtail for metrics and logs.",
      "Automated parts of the API documentation workflow using CLI utilities to reduce manual effort.",
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
      "A DevOps focused CI/CD project for automating Docker image builds, registry pushes, and Railway deployments using Jenkins.",
    bullets: [
      "Built a Jenkins pipeline to automate Docker build, push, and deployment flow.",
      "Used Docker Hub as the image registry for versioned container delivery.",
      "Deployed the containerized application to Railway for automated releases.",
    ],
    github: "https://github.com/VatsalSolanki-01/randomverse-api",
    live: "",
    image: "/projects/Randomverse.jpeg",
    stack: ["Docker", "Jenkins", "Docker Hub", "Railway", "Go"],
  },
  {
    title: "Microservices Observability Stack",
    description:
      "A complete observability setup for monitoring microservices using metrics, logs, dashboards, and alerting tools.",
    bullets: [
      "Collected system metrics with Node Exporter and scraped them using Prometheus.",
      "Centralized application logs with Promtail and Loki for easier debugging.",
      "Built Grafana dashboards and configured Alertmanager for service health alerts.",
    ],
    github:
      "https://github.com/VatsalSolanki-01/microservices-observability-stack",
    live: "",
    image: "/projects/microservices-observability-stack.png",
    stack: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Alertmanager",
      "Promtail",
      "Docker",
    ],
  },
  {
    title: "JobTracker",
    description:
      "A containerized multi service application deployed through a Jenkins driven CI/CD pipeline to Kubernetes.",
    bullets: [
      "Built a CI/CD pipeline to build Docker images and deploy them to Kubernetes.",
      "Containerized a React frontend, Go backend, MySQL database, and Nginx reverse proxy.",
      "Configured Kubernetes Deployments and Services for rollout based application delivery.",
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
      "Kubernetes",
    ],
  },
];

export const contactContent = {
  heading: "Let’s build something reliable and scalable.",
  description:
    "If you want to discuss DevOps, backend engineering, cloud infrastructure, or potential opportunities, feel free to reach out.",
  email: "solanki.vatsal009@gmail.com",
  github: "https://github.com/VatsalSolanki-01/",
  linkedin: "https://www.linkedin.com/in/vatsal-solanki19/",
};