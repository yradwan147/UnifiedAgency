"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, ArrowRight, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "GitHub", href: "#github", icon: Github },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent"
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl heading-display">
                    U
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight heading-display">
                UNI-FIED
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors duration-200 text-sm font-medium"
                >
                  {link.icon && <link.icon className="w-4 h-4" />}
                  {link.label}
                </a>
              ))}
            </div>

            {/* Theme Toggle & CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-lg bg-[var(--background-tertiary)] border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-[var(--foreground-muted)]" />
                  ) : (
                    <Moon className="w-5 h-5 text-[var(--foreground-muted)]" />
                  )}
                </button>
              )}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary group"
              >
                Book a Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Mobile Theme Toggle & Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-[var(--background-tertiary)] border border-[var(--border)]"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-[var(--foreground-muted)]" />
                  ) : (
                    <Moon className="w-5 h-5 text-[var(--foreground-muted)]" />
                  )}
                </button>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-[var(--background-secondary)] border-l border-[var(--border)] pt-24 px-6"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-lg font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] py-3 border-b border-[var(--border)]"
                  >
                    {link.icon && <link.icon className="w-5 h-5" />}
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="btn btn-primary mt-4"
                >
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

