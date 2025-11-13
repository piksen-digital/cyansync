import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
      {/* Logo + Site Name */}
      <Link href="/" className="flex items-center gap-3 group">
        <img
          src="/cyan-logo.svg"
          alt="CyanSync Logo"
          width={42}
          height={42}
          className="rounded-full transition-transform duration-200 group-hover:scale-105"
        />
        <span className="text-cyanMain text-2xl font-bold tracking-wide group-hover:text-cyan-600">
          CyanSync
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link
          href="/dashboard"
          className="text-gray-700 hover:text-cyanMain transition-colors font-medium text-base"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
