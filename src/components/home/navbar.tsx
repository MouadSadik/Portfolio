"use client";

import { Button } from "@/components/ui/button";
import { useGithubStars } from "@/hooks/use-github";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ModeToggle } from "../mode-toogle";
import { Github } from "lucide-react";


interface HeaderProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const navbarItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export function Header({ isScrolled, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const { stargazersCount } = useGithubStars("mouadSadik");

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.slice(1);
    if (!targetId) return;

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-lg",
        isScrolled ? "bg-background/90 border-border/20 border-b shadow-xs" : "bg-transparent"
      )}
    >


      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/">
          <div className="flex items-center gap-2 font-bold">
            {/*<Logo className="size-6" />*/}
            <span className="">Mouad_SADIK.</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-4 md:flex lg:gap-8">
          {navbarItems.map((item, i) => (
            <motion.a
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              href={item.href}
              onClick={item.href.startsWith("#") ? handleScrollToSection : undefined}
              className=" hover:text-foreground group relative text-xs font-medium transition-colors lg:text-sm"
            >
              {item.label}
              <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>
        <div className="hidden cursor-pointer items-center gap-1 md:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.45 }}
          >
            <Button variant="ghost" asChild>
              <a
                href="https://github.com/mouadSadik"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                <Github />
                {stargazersCount}
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {/*<ThemeToggle
              variant="secondary"
              size="icon"
              className="rounded-full transition-transform hover:scale-105"
            />*/}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <ModeToggle />
          </motion.div>
        </div>



        <div className="flex items-center gap-2 md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex-1 border-border/30  "
          >
            <div className="flex justify-center items-center gap-2">
              <Button variant="ghost" asChild>
                <a
                  href="https://github.com/mouadSadik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold flex items-center gap-1"
                >
                  <Github />
                  {stargazersCount}
                </a>
              </Button>

              <ModeToggle />
            </div>
          </motion.div>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>


      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-background/95 absolute inset-x-0 top-16 border-b backdrop-blur-lg md:hidden"
        >
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navbarItems.map((item, i) => (
              <motion.a
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                href={item.href}
                onClick={(e) => {
                  handleScrollToSection(e);
                  setMobileMenuOpen(false);
                }}
                className="group relative overflow-hidden py-2 text-sm font-medium"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}

          </div>
        </motion.div>
      )}
    </header>
  );
}