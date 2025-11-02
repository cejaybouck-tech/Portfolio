import type { Tech } from "~/components/home/project.vue";

interface Project {
  title: string;
  href: string;
  description: string;
  img: string;
  alt: string;
  page: string;
  techStack: Tech[];
}

export const Projects: Project[] = [
  {
    title: "Redsandsvacations.com",
    href: "https://www.redsandsvacations.com/",
    description: `Next.js + React + Tailwind + MongoDB. Deep integration with Streamline PMS, Cloudinary, and MLS Spark APIs.`,
    img: "",
    alt: "",
    page: "#redsands",
    techStack: [
      { name: "Next.js", img: "/skill-icons/nextjs.png" },
      { name: "React.js", img: "/skill-icons/react.png" },
      { name: "Tailwindcss", img: "/skill-icons/tailwindcss.svg" },
      { name: "MongoDB", img: "/skill-icons/mongodb.png" },
      { name: "Streamline PMS API", img: "" },
      { name: "Cloudinary API", img: "" },
      { name: "MLS Spark API", img: "" },
    ],
  },
  {
    title: "BuckIslandSC.com",
    href: "https://www.buckislandsc.com/",
    description: `Next.js + React + Tailwind. Integration with Lodgify PMS API for property data and availability.`,
    img: "",
    alt: "",
    page: "#buckisland",
    techStack: [
      { name: "Next.js", img: "/skill-icons/nextjs.png" },
      { name: "React.js", img: "/skill-icons/react.png" },
      { name: "Tailwindcss", img: "/skill-icons/tailwindcss.svg" },
      { name: "Lodgify PMS API", img: "" },
    ],
  },
];
