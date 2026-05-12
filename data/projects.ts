export type Project = {
  slug: string;
  title: string;
  location: string;
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "pln-electrical-procurement",
    title: "Electrical Utility Procurement",
    location: "PT PLN (Persero) • Indonesia",
    image: "/images/projects/project-pln.jpg",
    description:
      "Procurement of utility and electrical equipment including testing instruments, mobile units, communication systems, thermovision devices, smart distribution components, and ultrasonic detectors for PT PLN (Persero) and regional entities.",
  },

  {
    slug: "smart-distribution-system",
    title: "Smart Distribution Components",
    location: "Power Distribution Sector",
    image: "/images/projects/project-smart-grid.jpg",
    description:
      "Supply and deployment of smart electrical distribution components to improve reliability, operational monitoring, and system efficiency.",
  },

  {
    slug: "thermovision-maintenance",
    title: "Thermovision Inspection System",
    location: "Industrial Maintenance",
    image: "/images/projects/project-thermal.jpg",
    description:
      "Thermovision apparatus procurement and implementation for preventive maintenance and electrical infrastructure safety monitoring.",
  },
];
