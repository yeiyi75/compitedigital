"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#geo", label: "GEO" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on anchor click
  const handleLinkClick = () => setIsMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto max-w-[1280px] px-8 py-6 flex items-center justify-between"
        role="navigation"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display italic text-[1.4rem] tracking-[-0.03em] text-primary no-underline"
        >
          compite digital
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.78rem] uppercase font-medium text-on-surface/70 tracking-[0.12em] no-underline hover:text-on-surface transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#contacto"
              className="bg-primary text-on-primary px-6 py-2.5 rounded-[0.5rem] text-[0.72rem] font-bold tracking-[0.14em] uppercase no-underline transition-colors duration-300 hover:bg-primary-container"
            >
              Diagnóstico Gratuito
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden relative z-[101] flex flex-col items-center justify-center gap-[5px] bg-transparent border-none cursor-pointer p-1"
          aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú de navegación"}
          aria-expanded={isMobileOpen}
        >
          <span
            className={`block w-[22px] h-[1.5px] bg-on-surface transition-all duration-300 ${
              isMobileOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-on-surface transition-all duration-300 ${
              isMobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-on-surface transition-all duration-300 ${
              isMobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-surface/95 backdrop-blur-xl z-[99] flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-[1.1rem] uppercase font-medium text-on-surface tracking-[0.12em] no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contacto"
            onClick={handleLinkClick}
            className="bg-primary text-on-primary px-8 py-3 rounded-[0.5rem] text-[0.82rem] font-bold tracking-[0.14em] uppercase no-underline"
          >
            Diagnóstico Gratuito
          </a>
        </div>
      )}
    </header>
  );
}
