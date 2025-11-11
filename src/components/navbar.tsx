import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center bg-navy py-4 px-6">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="CyanSync Logo" width={40} height={40} className="rounded-full"/>
        <span className="ml-3 text-cyanMain font-bold text-xl tracking-tight">CyanSync</span>
      </div>
    </nav>
  );
}
