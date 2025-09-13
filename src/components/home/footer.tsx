import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer id="contact" className="bg-background text-foreground mt-32 border-t ">
            <div className="container  mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Logo & Name */}
                <div>
                    <Link
                        href="/"
                        className="text-2xl font-bold text-primary"
                    >
                        Mouad Sadik
                    </Link>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Software Engineer & Fullstack Developer
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row md:justify-center gap-3 md:gap-6 text-sm">
                    <Link href="#about" className="hover:text-primary transition">
                        About
                    </Link>
                    <Link href="#education" className="hover:text-primary transition">
                        Education
                    </Link>
                    <Link href="#skills" className="hover:text-primary transition">
                        Skills
                    </Link>
                    <Link href="#projects" className="hover:text-primary transition">
                        Projects
                    </Link>
                    <Link href="#contact" className="hover:text-primary transition">
                        Contact
                    </Link>
                </div>

                {/* Social Links */}
                <div className="flex md:justify-end gap-4">
                    <Link href="https://www.linkedin.com/in/mouad-sadik-5b8907257/" target="_blank">
                        <Linkedin className="w-12 h-10 p-2 border rounded-full hover:bg-primary hover:text-primary-foreground transition" />
                    </Link>
                    <Link href="https://x.com/mouad15s" target="_blank">
                        <Twitter className="w-12 h-10 p-2 border rounded-full hover:bg-primary hover:text-primary-foreground transition" />
                    </Link>
                    <Link href="https://github.com/MouadSadik" target="_blank">
                        <Github className="w-12 h-10 p-2 border rounded-full hover:bg-primary hover:text-primary-foreground transition" />
                    </Link>
                    <Link href="https://www.instagram.com/mouad_sadik_?igsh=NXoyNzhjamozZTFt" target="_blank">
                        <Instagram className="w-12 h-10 p-2 border rounded-full hover:bg-primary hover:text-primary-foreground transition" />
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t py-4 px-5 md:px-8 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-2">
  <div>© {new Date().getFullYear()} Mouad Sadik. All rights reserved.</div>
  <div className="text-center md:text-right">
    Made with ❤️ using{" "}
    <span className="text-primary">Next.js</span> -{" "}
    <span className="text-primary">Tailwind CSS</span> -{" "}
    <span className="text-primary">Shadcn UI</span>
  </div>
</div>

        </footer>
    );
};

export default Footer;
