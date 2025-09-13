"use client";

import { useEffect, useRef, useState } from "react";
import cn from "clsx";
import ThemeToggle from "./ThemeToggle";

type NavLink = {
  href: string;
  label: string;
};

type NavbarProps = {
  links: NavLink[];
  className?: string;
};

export default function Navbar({ links, className }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Simple scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 100;
      const elementPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: "smooth"
      });
      
      setActiveSection(targetId);
    }
  };

  // Simple scroll listener for active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update indicator position
  useEffect(() => {
    const updateIndicator = () => {
      const activeLink = document.querySelector(`[data-section="${activeSection}"]`) as HTMLElement;
      if (activeLink && indicatorRef.current) {
        const linkRect = activeLink.getBoundingClientRect();
        const navRect = activeLink.parentElement?.getBoundingClientRect();
        
        if (navRect) {
          const left = linkRect.left - navRect.left;
          const width = linkRect.width;
          
          indicatorRef.current.style.left = `${left}px`;
          indicatorRef.current.style.width = `${width}px`;
          indicatorRef.current.style.opacity = '1';
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(updateIndicator, 50);
    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <header className={cn("sticky top-4 z-50 mx-4 mt-4 rounded-2xl", className)}>
      {/* iPhone Glass Effect Navbar */}
      <nav className="relative">
        {/* Glass Background */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl" />
        
        {/* Inner Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-2xl" />
        
        {/* Content */}
        <div className="relative px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
        <a
          href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
          style={{
            fontFamily: "var(--font-elegant)",
            letterSpacing: "0.1em",
              }}
            >
              ARAFAT
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 relative">
              {/* Active Indicator */}
              <div
                ref={indicatorRef}
                className="absolute top-2 bottom-2 bg-white/20 dark:bg-white/10 rounded-xl transition-all duration-300 ease-out border border-white/30 dark:border-white/20 opacity-0"
            style={{
                  left: 0,
                  width: 0,
                }}
              />
              
          {links.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                
            return (
              <a
                key={link.href}
                href={link.href}
                    data-section={sectionId}
                    onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                      "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ease-out cursor-pointer",
                  isActive
                        ? "text-white dark:text-white"
                        : "text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/5"
                    )}
                  >
                    {link.label}
              </a>
            );
          })}
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {mounted && <ThemeToggle />}
              
              {/* Mobile Menu Button */}
                <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                  </svg>
                </button>
              </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-2xl overflow-hidden transition-all duration-300 ease-out",
          mobileOpen
            ? "opacity-100 visible transform translate-y-0"
            : "opacity-0 invisible transform -translate-y-2"
        )}
      >
        {/* Mobile Glass Background */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl" />
        
        {/* Mobile Content */}
        <div className="relative px-6 py-4">
          <div className="flex flex-col space-y-2">
            {links.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setMobileOpen(false);
                  }}
                        className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ease-out cursor-pointer",
                          isActive
                      ? "text-white dark:text-white bg-white/20 dark:bg-white/10"
                      : "text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/5"
                  )}
                        >
                          {link.label}
                    </a>
                  );
                })}
            
            {/* Mobile Contact Info */}
            <div className="pt-4 mt-4 border-t border-white/20 dark:border-white/10">
              <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <a href="mailto:arafathaquebiswas@gmail.com" className="hover:text-white dark:hover:text-white transition-colors">
                  arafathaquebiswas@gmail.com
                </a>
                <a href="tel:+8801316816333" className="hover:text-white dark:hover:text-white transition-colors">
                  +880 1316 816 333
                </a>
                <a href="https://github.com/OkArafat" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-white transition-colors">
                  github.com/OkArafat
                </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </header>
  );
}