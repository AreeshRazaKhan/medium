"use client";

import React, { useState } from "react";
import Link from "next/link";
import AuthModal from "../AuthModal";

const Navbar = ({ background = "#fff" }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const isDarkBg = background === "#242424";
  const logoSrc = isDarkBg ? "/images/logo-white.svg" : "/images/logo.svg";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Articles", href: "/articles" },
    { name: "Latest Articles", href: "/articles/latest" },
    { name: "Featured Articles", href: "/articles/featured" },
  ];

  return (
    <>
      <header
        className="py-6 px-5 border-b border-[#242424] fixed top-0 left-0 right-0 w-full z-50"
        style={{ backgroundColor: background }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="logo-wrapper max-w-28.5">
              <img src={logoSrc} alt="Logo" />
            </Link>

            <div className="flex items-center justify-between gap-6">
              <nav className="hidden md:flex gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`navlink ${isDarkBg ? "text-white" : "text-black"}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Modal Trigger */}
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="btn-sm btn-primary"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Auth Modal Component */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
