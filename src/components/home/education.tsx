"use client";

import React from 'react';
import { Timeline } from '../ui/timeline';
import { CardSpotlight } from '../ui/card-spotlight';
import { Badge } from '../ui/badge';
import { motion } from 'framer-motion';

const Step = ({ title }: { title: string }) => {
    return (
        <li className="flex gap-2 items-start">
            <CheckIcon />
            <p className="text-white">{title}</p>
        </li>
    );
};

const CheckIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-primary mt-1 shrink-0"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                fill="currentColor"
                strokeWidth="0"
            />
        </svg>
    );
};

const data = [
    {
        title: "2022–2024",
        content: (
            <CardSpotlight className=" w-full">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    DEUST Diploma – FST Settat
                </p>

                <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    I completed a two-year DEUST diploma in Mathematics, Physics, and Computer Science at FST Settat. This program helped me build a solid scientific foundation, combining logic, analytical thinking, and computational problem-solving. It laid the groundwork for my engineering studies and fueled my passion for software development.
                </p>
                <div className="text-neutral-200 mt-4 relative z-20">
                    Specialized in:
                    <ul className="list-none mt-2">
                        <Step title="Mathematics" />
                        <Step title="Physics" />
                        <Step title="Computer Science" />
                    </ul>
                </div>
            </CardSpotlight>
        ),
    },
    {
        title: "2024–Present",
        content: (
            <CardSpotlight className=" w-full">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    Engineering Cycle – Computer Engineering
                </p>

                <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    Currently pursuing an engineering degree in Computer Engineering, I’m deepening my understanding of advanced topics such as software design, networks, system architecture, and algorithmic optimization. This cycle is not only strengthening my technical expertise but also sharpening my collaboration, project management, and innovation skills.
                </p>

                <div className="text-neutral-200 mt-4 relative z-20">
                    Focused on:
                    <ul className="list-none mt-2">
                        <Step title="Software Architecture & Design" />
                        <Step title="Networks & Security" />
                        <Step title="Algorithms & Optimization" />
                        <Step title="Fullstack Projects & Team Work" />
                    </ul>
                </div>
            </CardSpotlight>
        ),
    },
    {
        title: "2025–Present",
        content: (
            <CardSpotlight className=" w-full">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    Self-Learning – Fullstack Development
                </p>

                <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    Alongside my formal education, I’ve committed to becoming a fullstack developer through self-learning. I’ve built real-world projects using technologies like React, Next.js, Tailwind CSS, Prisma, and Supabase. This autonomous journey reflects my curiosity, consistency, and ability to learn fast and apply knowledge in practical contexts.
                </p>

                <div className="text-neutral-200 mt-4 relative z-20">
                    Learning through hands-on projects:
                    <ul className="list-none mt-2">
                        <Step title="React, Next.js, Tailwind, ShadCN UI" />
                        <Step title="Node.js, Prisma, Supabase, PostgreSQL" />
                        <Step title="Authentication with Clerk & NextAuth" />
                        <Step title="Performance, Responsive UI, Caching" />
                    </ul>
                </div>
            </CardSpotlight>
        ),
    },
];

const Education = () => {
    return (
        <div id='education' className="mt-20 container">
            

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
            <span className="text-primary mr-1">✦</span>Learning
          </Badge>
          <h2 className="from-foreground to-foreground/80 max-w-[600px] bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            Education
          </h2>
          <p className="text-muted-foreground max-w-[500px] md:text-lg">
A collection of academic and self-taught achievements built through curiosity and continuous learning.          </p>
        </motion.div>

            <div className="relative w-full overflow-clip">
                <Timeline data={data} />
            </div>
        </div>
    );
};

export default Education;
