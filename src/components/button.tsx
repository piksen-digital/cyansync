tsx name=src/components/Button.tsx
import React from "react";
type BtnProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};
export default function Button({ children, onClick, type = "button" }: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-cyanMain text-white rounded-lg shadow-lg px-6 py-2 hover:bg-accent transition-colors font-semibold"
    >
      {children}
    </button>
  );
}
