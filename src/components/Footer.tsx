export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16 py-6 text-center text-gray-600 text-sm">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-cyanMain font-semibold">CyanSync</span>. All rights reserved.
      </p>
      <p className="mt-1">
        Need help?{" "}
        <a
          href="mailto:georgec.ignite@gmail.com"
          className="text-cyanMain font-medium hover:underline"
        >
          Contact us
        </a>
      </p>
    </footer>
  );
}
