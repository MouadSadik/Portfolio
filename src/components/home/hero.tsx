"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Download, Github, Instagram, Linkedin, Twitter, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Spotlight } from "../effects/spotlight";
import Image from "next/image";
import CircularText from "../CircularText";
import { Squares } from "../ui/shadcn-io/squares-background";


export function Hero() {
    return (
        <section className="relative isolate container mx-auto w-full py-10 ">
            {/* Animated squares background */}
            <Squares
                direction="diagonal"
                speed={0.5}
                squareSize={40}
                borderColor="rgba(0, 0, 0, 0.1)"
                hoverFillColor="rgba(59, 130, 246, 0.1)"
                className="absolute inset-0 dark:hidden"
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Spotlight
                    className="top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-50"
                    fill="white"
                />
            </motion.div>

            <div className="relative z-10 px-4 md:px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Column - Text Content */}
                    <div className="mx-auto max-w-2xl text-left lg:mx-0">
                        <div className="flex items-center md:justify-between flex-col md:flex-row">
                            <div>
                                <Badge
                                    className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm transition-none"
                                    variant="secondary"
                                >
                                    <span className="text-primary mr-1">✦</span> Who is Mouad ?
                                </Badge>
                            </div>
                            <div className="flex justify-between gap-4">
                                <Link href="https://www.linkedin.com/in/mouad-sadik-5b8907257/">
                                    <Linkedin className="w-10 h-7 border rounded-full p-1" />
                                </Link>
                                <Link href="https://x.com/mouad15s">
                                    <Twitter className="w-10 h-7 border rounded-full p-1" />
                                </Link>
                                <Link href="https://github.com/MouadSadik">
                                    <Github className="w-10 h-7 border rounded-full p-1" />
                                </Link>
                                <Link href="https://www.instagram.com/mouad_sadik_?igsh=NXoyNzhjamozZTFt">
                                    <Instagram className="w-10 h-7 border rounded-full p-1" />
                                </Link>
                            </div>
                        </div>

                        <h1 className="from-foreground via-foreground/90 to-foreground/70 mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
                            Software Engineer -{" "}
                            <span className="font-serif font-light italic">Fullstack Developer</span>{" "}
                            <span className="text-primary inline-flex items-baseline gap-1">
                                <div className="bg-primary/10 flex items-center justify-center rounded-full p-1 md:p-2">
                                    <Image src="/about.svg" alt="developer" height={50} width={50} />
                                </div>
                                <span>Building Projects</span>
                            </span>{" "}
                            with Passion
                        </h1>

                        <p className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl">
                            I craft modern, performant, and user-friendly web applications using{" "}
                            <span className="font-medium text-foreground">Next.js, React, TailwindCSS</span>,
                            and fullstack tools like{" "}
                            <span className="font-medium text-foreground">Supabase, Prisma, and PostgreSQL</span>.
                            Always curious, I love learning new technologies and bringing ideas to life.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="#projects">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-primary/20 w-full hover:border-primary/50 h-12 cursor-pointer rounded-full px-8 text-base transition-transform duration-300 hover:translate-y-[-2px]"
                                >
                                    Download My CV
                                    <Download className="ml-2 size-4" />
                                </Button>
                            </Link>
                            <Link href="/blog">
                                <Button
                                    size="lg"
                                    className="h-12 w-full cursor-pointer rounded-full px-8 text-base shadow-md transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                                >
                                    View My Blog
                                    <ArrowRight className="ml-2 size-4" />
                                </Button>

                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-6">
                            <div className="text-muted-foreground flex items-center gap-2 text-sm">
                                <Check className="text-primary size-5" />
                                <span>Fullstack Development</span>
                            </div>
                            <div className="text-muted-foreground flex items-center gap-2 text-sm">
                                <Check className="text-primary size-5" />
                                <span>Clean & Scalable Code</span>
                            </div>
                            <div className="text-muted-foreground flex items-center gap-2 text-sm">
                                <Check className="text-primary size-5" />
                                <span>Modern UI/UX Design</span>
                            </div>
                        </div>
                    </div>


                    {/* Right Column - Image svg */}
                    <div className="flex flex-col">
                        <CircularText
                            text="SOFTWARE*ENGINEER*"
                            onHover="pause"
                            spinDuration={20}
                            className="custom-class md:block hidden"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="md:flex justify-center hidden"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image className="md:block hidden" src="/hero.svg" alt="coco" height={1000} width={500} />
                            </motion.div>
                        </motion.div>
                    </div>


                </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_30%,var(--muted),transparent_35%)] blur-3xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_70%,var(--muted),transparent_10%)] blur-3xl"></div>
        </section>
    );
}