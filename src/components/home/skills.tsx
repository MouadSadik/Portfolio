"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export interface Stat {
    number: string,
    label: string,
}

//  Skills Data
const skillsMain = [
    { icon: "devicon-html5-plain colored", name: "HTML5" },
    { icon: "devicon-css3-plain colored", name: "CSS3" },

    { icon: "devicon-react-original colored", name: "React.js" },
    { icon: "devicon-nextjs-original-wordmark", name: "Next.js" },
    { icon: "devicon-tailwindcss-original colored", name: "Tailwind CSS" },
    { icon: "devicon-nodejs-plain-wordmark colored", name: "Node.js" },
    { icon: "devicon-postgresql-plain-wordmark colored", name: "PostgreSQL" },
    { icon: "devicon-prisma-original colored", name: "Prisma" },
    { icon: "devicon-express-original colored", name: "Express.js" },
]

const skillsOther = [
    { icon: "devicon-git-plain colored", name: "Git" },
    { icon: "devicon-github-original colored", name: "GitHub" },
    { icon: "devicon-javascript-plain colored", name: "JavaScript" },
    { icon: "devicon-typescript-plain colored", name: "TypeScript" },
    { icon: "devicon-java-plain colored", name: "Java" },
    { icon: "devicon-c-plain colored", name: "C" },
    { icon: "devicon-mysql-plain-wordmark colored", name: "MySQL" },
    { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
    { icon: "devicon-python-plain colored", name: "Python" },
    { icon: "devicon-sqldeveloper-plain colored", name: "SQL" }, // fallback
]

const stats: Stat[] = [
    { number: '30+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies Mastered' },
    { number: '2+', label: 'Years of Experience' }
]


// Marquee Row
const MarqueeRow = ({
    items,
    reverse = false,
}: {
    items: typeof skillsMain;
    reverse?: boolean;
}) => {
    const shouldReduceMotion = useReducedMotion();
    const x = useRef(useMotionValue(0));
    const speed = shouldReduceMotion ? 0 : 20;
    const containerRef = useRef<HTMLDivElement>(null);
    const animationFrame = useRef(0);
    const lastTime = useRef(performance.now());
    const isPaused = useRef(false);
    const [duplicateCount, setDuplicateCount] = useState(2);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined" && containerRef.current) {
            const cardWidth = 200;
            const screenWidth = window.innerWidth;
            const cardsNeeded = Math.ceil(screenWidth / cardWidth) + 3;
            const loopCount = Math.ceil(cardsNeeded / items.length);
            setDuplicateCount(loopCount);

            const totalWidth = cardWidth * items.length * loopCount;
            setContainerWidth(totalWidth);
            x.current.set(reverse ? -totalWidth / 2 : 0);
        }
    }, [items.length, reverse]);

    useEffect(() => {
        if (shouldReduceMotion) return;

        const animate = (time: number) => {
            const delta = time - lastTime.current;
            lastTime.current = time;

            if (!isPaused.current && containerRef.current) {
                const direction = reverse ? 1 : -1;
                const distance = (speed * delta * direction) / 1000;
                const currentX = x.current.get();

                let newX = currentX + distance;

                if (reverse && newX >= 0) {
                    newX = -containerWidth / 2;
                } else if (!reverse && Math.abs(newX) >= containerWidth / 2) {
                    newX = 0;
                }

                x.current.set(newX);
            }

            animationFrame.current = requestAnimationFrame(animate);
        };

        animationFrame.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame.current);
    }, [containerWidth, reverse, shouldReduceMotion, speed]);

    const pause = () => (isPaused.current = true);
    const resume = () => {
        lastTime.current = performance.now();
        isPaused.current = false;
    };

    const repeatedItems = Array(duplicateCount)
        .fill(null)
        .flatMap(() => items);

    return (
        <div
            className="relative w-full overflow-hidden py-2"
            style={{
                maskImage:
                    "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
        >
            <motion.div
                ref={containerRef}
                style={{ x: x.current }}
                onMouseEnter={pause}
                onMouseLeave={resume}
                className={`flex w-max items-stretch gap-4 ${reverse ? "flex-row-reverse" : ""
                    }`}
            >
                {repeatedItems.map((skill, i) => (
                    <Card
                        key={i}
                        className="border-border/40 from-card to-card/50 group w-[200px] min-w-[200px] max-w-[200px] overflow-hidden border bg-gradient-to-b backdrop-blur transition-all hover:shadow-lg flex items-center justify-center"
                    >
                        <CardContent className="flex h-24 flex-col items-center rounded-full justify-center gap-2 p-4">
                            <i className={`${skill.icon} text-6xl`} />
                            <p className="text-foreground font-medium">{skill.name}</p>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>
        </div>
    );
};

//  Skills Section
export function Skills() {
    return (
        <section id="skills" className="relative isolate w-full py-20 md:py-32">
            
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(from_var(--primary)_r_g_b_/_0.03),transparent_70%)]" />

            <div className="container mx-auto px-4 md:px-6">
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
                        <span className="text-primary mr-1">✦</span> My Skills
                    </Badge>
                    <h2 className="from-foreground to-foreground/80 max-w-[600px] bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                        Technologies I use
                    </h2>
                    <p className="text-muted-foreground max-w-[500px] md:text-lg">
                        A quick look at the tools I work with every day.
                    </p>
                </motion.div>

                {/* Two rows like before */}
                <div className="flex flex-col gap-y-0">
                    <MarqueeRow items={skillsMain} reverse={false} />
                    <MarqueeRow items={skillsOther} reverse={true} />
                </div>

                {/*Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8"
                >
                    {stats.map(s => (
                        <motion.div
                            key={s.label}
                            whileHover={{ scale: 1.07 }}
                            className="text-center p-8 bg-muted backdrop-blur-sm rounded-xl border "
                        >
                            <div className="text-4xl font-bold text-primary mb-2">{s.number}</div>
                            <div className="text-foreground">{s.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
