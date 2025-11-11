import React from "react";

// Props definition for the Button component
type BtnProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string; // optional extra classes
};

// Button component
export default function Button({
  children,
  onClick,
  type = "button",
  className,
}: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-cyanMain text-white rounded-lg shadow-lg px-6 py-2 hover:bg-accent transition-colors font-semibold ${className || ""}`}
    >
      {children}
    </button>
  );
}
