import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo + Site Name */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/cyan-logo.svg"
            alt="CyanSync Logo"
            width={42}
            height={42}
            className="rounded-full"
          />
          <span className="text-cyanMain text-2xl font-bold tracking-wide">
            CyanSync
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-gray-700 hover:text-cyanMain font-medium text-base"
          >
            Dashboard
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
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

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white px-6 pb-4 space-y-2">
          <Link
            href="/dashboard"
            className="block text-gray-700 hover:text-cyanMain font-medium"
          >
            Dashboard
          </Link>
        </nav>
      )}
    </header>
  );
}
