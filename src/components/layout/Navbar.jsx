"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Navbar = ({ background = "#fff" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Determine which logo to use based on the background color
  const isDarkBg = background === "#242424";
  const logoSrc = isDarkBg ? "/images/logo-white.svg" : "/images/logo.svg";

  return (
    <header
      className="py-6 px-5 border-b border-[#242424] fixed top-0 left-0 right-0 w-full z-50"
      style={{ backgroundColor: background }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo-wrapper max-w-28.5">
            <img src={logoSrc} alt="Logo" />
          </div>

          <div className="flex items-center justify-between gap-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`navlink ${isDarkBg ? "text-white" : "text-black"}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <button className="btn-sm btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
