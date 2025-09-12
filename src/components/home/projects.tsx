"use client";

import { Github, Globe } from "lucide-react";
import { FollowerPointerCard } from "../ui/following-pointer";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";

export function Projects() {
  return (
    <div>
      {/*Header */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
>
  <Badge
    className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
    variant="secondary"
  >
    <span className="text-primary mr-1">✦</span> My Projects
  </Badge>
  <h2 className="from-foreground to-foreground/80 max-w-[600px] bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
    A showcase of my work
  </h2>
  <p className="text-muted-foreground max-w-[500px] md:text-lg">
    Here are some of the fullstack and desktop applications I’ve built — ranging from commercial management platforms to portfolio websites.
  </p>
</motion.div>


      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 px-5 md:px-14 ">
      {projects.map((project) => (
        <FollowerPointerCard
          key={project.slug}
        >
          <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background transition duration-200 hover:shadow-xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-muted">
              <img
                src={project.image}
                alt="thumbnail"
                className="h-full w-full object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
              />
            </div>
            <div className="p-4 flex flex-col h-full">
              <h2 className="my-2 text-lg font-bold text-foreground">
                {project.title}
              </h2>
              <p className="mb-4 text-sm text-muted-foreground">
                {project.description}
              </p>

              {/* Logos des technologies */}
              <div className="mb-4 flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <i
                    key={idx}
                    className={`${tech} text-2xl`}
                  ></i>
                ))}
              </div>

              {/* Boutons */}
              <div className="mt-5 justify-around flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  <Globe className="h-4 w-4" />
                  Browse Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-medium text-foreground transition hover:bg-muted"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </FollowerPointerCard>
      ))}
    </div>
    </div>
  );
}

const projects = [
  {
    slug: "commercial-management",
    author: "Mouad Sadik",
    authorAvatar: "/about.svg",
    title: "Commercial Management Platform",
    description:
      "A fullstack web platform for managing clients, products, orders, invoices, and payments. Features include authentication, role-based access, dashboards, and automated invoice generation. Built to streamline business workflows with real-time tracking.",
    image: "/1.png",
    technologies: [
      "devicon-typescript-original colored",
      "devicon-nextjs-original-wordmark",
      "devicon-react-original colored",
      "devicon-tailwindcss-plain colored",
      "devicon-prisma-original",
      "devicon-supabase-plain",
      "devicon-postgresql-plain colored",
    ],
    github: "https://github.com/MouadSadik/Electronic-Shop-Management-System",
    demo: "https://electro-shop-one.vercel.app/",
  },
  {
    slug: "todo-app",
    author: "Mouad Sadik",
    authorAvatar: "/about.svg",
    title: "Fullstack To-Do App",
    description:
      "A collaborative task management app with user authentication, real-time data sync, and project categorization. Built using Next.js, Supabase, and TailwindCSS, it allows users to organize tasks efficiently and share progress across devices.",
    image: "/2.png",
    technologies: [
      "devicon-javascript-plain colored",
      "devicon-nextjs-original-wordmark",
      "devicon-supabase-plain",
      "devicon-tailwindcss-plain colored",
      "devicon-react-original colored",
    ],
    github: "https://github.com/MouadSadik/todo-app",
    demo: "https://todo-app-lake-one-55.vercel.app/",
  },
  {
    slug: "code",
    author: "Mouad Sadik",
    authorAvatar: "/about.svg",
    title: "Code Club",
    description:
      "I have collaborated on CODE Website such as a frontend developer, it's the official platform of a university coding club, designed to centralize communication, event management, and member engagement.",
    image: "/3.png",
    technologies: [
      "devicon-typescript-original colored",
      "devicon-nextjs-original-wordmark",
      "devicon-tailwindcss-plain colored",
      "devicon-react-original colored",],
    github: "#",
    demo: "https://code.sefault.com/",
  },
  {
    slug: "portfolio",
    author: "Mouad Sadik",
    authorAvatar: "/4.png",
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website to showcase projects, skills, and experience. Built with React, TailwindCSS, and Framer Motion, it features smooth animations and a clean UI for an engaging user experience.",
    image: "/4.png",
    technologies: [
      "devicon-typescript-original colored",
      "devicon-react-original colored",
      "devicon-tailwindcss-plain colored",
      "devicon-framermotion-plain",
    ],
    github: "#",
    demo: "#",
  },
  {
    slug: "recruitment-agency",
    author: "Mouad Sadik",
    authorAvatar: "/about.svg",
    title: "Recruitment Agency Desktop App",
    description:
      "A Java Swing desktop application to manage recruitment processes, candidates, job offers, and hiring history. Integrated with a MySQL database, it helps agencies streamline operations and maintain structured records.",
    image: "/5.png",
    technologies: [
      "devicon-java-plain colored",
      "devicon-mysql-original colored",
    ],
    github: "https://github.com/MouadSadik/recrutement",
    demo: "#",
  },


  {
    slug: "event-booking-backend",
    author: "Mouad Sadik",
    authorAvatar: "/about.svg",
    title: "Event Booking Backend",
    description:
      "A RESTful API built with Express.js for managing event bookings. The backend handles user authentication, event creation, and ticket reservations. Ideal for powering event management platforms with scalable and maintainable code.",
    image: "/projects/event-booking.png",
    technologies: [
      "devicon-javascript-plain colored",
      "devicon-express-original",
      "devicon-mongodb-plain colored",
      "devicon-nodejs-plain colored",

    ],
    github: "https://github.com/MouadSadik/event-booking-system",
    demo: "#",
  },
];
