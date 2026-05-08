export interface Project {
  title: string;
  slug: string;
  image: string;
  location: string;
}

export const projects: Project[] = [
  {
    title: "Pipeline Installation Project",
    slug: "pipeline-installation",
    image: "/globe.svg",
    location: "East Kalimantan",
  },
  {
    title: "Boiler Maintenance & Overhaul",
    slug: "boiler-maintenance",
    image: "/window.svg",
    location: "Java",
  },
  {
    title: "Mechanical Construction",
    slug: "mechanical-construction",
    image: "/file.svg",
    location: "Sumatra",
  },
];
