"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
// Using Font Awesome icons
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/articles", label: "Articles" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transition-smooth hover:opacity-80">
            <img
              src="/images/logo.png"
              alt="RAI-GI Logo"
              className="h-12 w-12"
            />
            <span className="hidden font-bold text-lg sm:inline-block">
              RAI-GI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-smooth hover:text-foreground hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Contact Us Button */}
            <Link href="/contact" className="hidden sm:inline-flex">
              <Button className="bg-brand-blue text-white hover:bg-opacity-90 transition-smooth">
                Contact Us
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <i className="fas fa-times text-lg"></i>
              ) : (
                <i className="fas fa-bars text-lg"></i>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-sm font-medium text-foreground/80 transition-smooth hover:text-foreground hover:bg-accent rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="mx-4">
                <Button
                  className="w-full bg-brand-blue text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
