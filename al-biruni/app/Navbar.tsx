"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Seminars", href: "/seminars" },
  { name: "Blog", href: "/blog" },
  { name: "Articles", href: "/articles" },
  { name: "Activity Feed", href: "/activity-feed" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-30 w-full bg-white/90 dark:bg-[#18181b]/90 shadow-sm backdrop-blur transition-all">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-blue-700 dark:text-blue-400"
        >
          <AcademicCapIcon className="h-8 w-8" />
          Al Biruni
        </Link>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          {open ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#18181b] border-t border-gray-100 dark:border-gray-800 px-4 pb-4">
          <div className="flex flex-col gap-3 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
