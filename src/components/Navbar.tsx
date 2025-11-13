import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="flex items-center space-x-2">
        <img
          src="/cyan-logo.svg"
          alt="CyanSync Logo"
          width={36}
          height={36}
          className="rounded-full"
        />
        <span className="text-cyanMain text-xl font-semibold tracking-wide">
          CyanSync
        </span>
      </Link>
      <div>
        <Link
          href="/dashboard"
          className="text-gray-600 hover:text-cyanMain transition-colors font-medium"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
