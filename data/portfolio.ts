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
    "I’m a DevOps-focused engineer with a strong interest in cloud infrastructure, automation, backend systems, and observability.",
    "I enjoy building projects that combine practical deployment workflows with real engineering depth, whether that’s containerizing services, setting up CI/CD pipelines, deploying to Kubernetes, or creating monitoring stacks that reflect how production systems are actually operated.",
  ],
  skills: [
    "Computer Networking",
    "Operating System",
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

export const experience = [
  {
    role: "DevOps Engineering Intern",
    company: "Aries.com",
    logo: "/company-logos/aries.svg",
    duration: "3 months",
    location: "Ahmedabad",
    points: [
      "Collaborated closely with developers to improve release stability and maintain structured API documentation, enabling smoother integrations and clearer cross team communication.",
      "Designed and implemented the monitoring and observability stack using Prometheus, Grafana, Node Exporter, Loki, and Promtail to track system metrics, visualize performance data, and centralize log management.",
      "Took initiative to reduce manual effort by developing CLI based utilities to automate parts of the API documentation workflow, gaining hands on experience in real world DevOps practices within a production setup.",
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
      "A hands-on DevOps project focused on Docker containerization, Jenkins CI/CD automation, Docker Hub image management, and automated Railway deployment.",
    github: "https://github.com/VatsalSolanki-01/randomverse-api",
    live: "",
    image: "/projects/Randomverse.jpeg",
    stack: ["Docker", "Jenkins", "Docker Hub", "Railway", "Go"],
  },
  {
    title: "Microservices Observability Stack",
    description:
      "This project builds a complete observability environment for a microservices based system using open source monitoring tools. Application servers run microservices along with monitoring agents that collect metrics and logs. These signals are then sent to a centralized monitoring server where they are stored, visualized, and used for alerting. This setup simulates how real world DevOps and SRE teams monitor production systems.",
    github:
      "https://github.com/VatsalSolanki-01/microservices-observability-stack",
    live: "",
    image: "/projects/microservices-observability-stack.png",
    stack: ["Prometheus", "Grafana", "Loki", "Alertmanager", "Docker"],
  },
  {
    title: "JobTracker",
    description:
      "JobTracker is a containerized web application consisting of a React frontend, Go backend, MySQL database, and Nginx reverse proxy. The project demonstrates how modern DevOps teams automate software delivery using Jenkins pipelines and Kubernetes. Whenever code is pushed to GitHub, Jenkins automatically builds Docker images, pushes them to Docker Hub, and deploys the latest version of the application to a Kubernetes cluster.",
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