import * as LucideIcons from "lucide-react";
export type Service = {
  slug: string;
  title: string;
  icon: keyof typeof LucideIcons;
  description: string;
};

export const services: Service[] = [
  {
    slug: "construction-excellence",
    title: "Construction Excellence",
    icon: "Hammer",
    description:
      "Providing excellent construction services with a strong focus on timeliness, quality, efficiency, and operational excellence from project initiation to final delivery.",
  },

  {
    slug: "mechanical-electrical-solutions",
    title: "Mechanical & Electrical Solutions",
    icon: "Zap",
    description:
      "Delivering innovative and reliable mechanical and electrical solutions including system design, implementation, integration, and maintenance for industrial infrastructure.",
  },

  {
    slug: "procurement-service",
    title: "Procurement Service",
    icon: "ShoppingCart",
    description:
      "Providing seamless procurement and supply of high-quality electrical products and industrial equipment tailored to client requirements with efficiency and reliability.",
  },

  {
    slug: "technical-support-consultation",
    title: "Technical Support & Consultation",
    icon: "LifeBuoy",
    description:
      "Delivering technical expertise and consultation services to assist clients in selecting suitable electrical devices and industrial systems for their operational needs.",
  },
];
