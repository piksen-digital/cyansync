import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo + Site Name */}
        <div className="flex items-center gap-3">
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
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-gray-700 hover:text-cyanMain font-medium text-base"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
