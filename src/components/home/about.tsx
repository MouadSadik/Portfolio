import React from 'react'
import { Search, Sparkles, Cpu, Code, Server, Star } from 'lucide-react'
import { GlowingEffect } from '../ui/glowing-effect'
import { Badge } from '../ui/badge'

const About = () => {
    return (
        <section id='about' className="py-20">
            <div className="container px-4">
                <div className="flex flex-col justify-center items-center">
                    <div className="mb-8">
                        <Badge
                            className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm transition-none"
                            variant="secondary"
                        >
                            <span className="text-primary mr-1">✦</span> About Me
                        </Badge>
                    </div>

                    <ul className="grid justify-items-center grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 w-full max-w-6xl">
                        <GridItem
                            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                            icon={<Cpu className="h-4 w-4 text-primary dark:text-primary" />}
                            title="Software Engineer"
                            description="Passionate about solving problems with clean and scalable code. Experienced with modern tools and software architecture."
                        />

                        <GridItem
                            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                            icon={<Code className="h-4 w-4 text-primary dark:text-primary" />}
                            title="Fullstack Web Developer"
                            description="Building responsive, user-friendly web apps using React, Next.js, Prisma, Tailwind CSS, Supabase, and PostgreSQL."
                        />

                        <GridItem
                            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                            icon={<Server className="h-4 w-4 text-primary dark:text-primary" />}
                            title="Backend Experience"
                            description="Solid grasp of API design and implementation, secure authentication strategies, and efficient database management. Experienced in server-side development using Node.js and Java, building scalable and maintainable backend systems."
                        />

                        <GridItem
                            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                            icon={<Sparkles className="h-4 w-4 text-primary dark:text-primary" />}
                            title="Clean UI Lover"
                            description="Detail-oriented about design and UX. Passionate about building interfaces that feel smooth, modern, and accessible."
                        />

                        <GridItem
                            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                            icon={<Search className="h-4 w-4 text-primary dark:text-primary" />}
                            title="Always Learning"
                            description="Curious and constantly exploring new technologies and best practices. I enjoy growing with every project I build."
                        />
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem]  list-none ${area}`}>
            <div className="relative h-full  rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                    <div className="relative flex flex-1 flex-col justify-between gap-3 background-primary">
                        <div className="w-fit rounded-lg border border-gray-600 p-2">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-primary md:text-2xl/[1.875rem] dark:text-primary">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};