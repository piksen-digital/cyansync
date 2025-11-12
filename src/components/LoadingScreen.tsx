import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src="/cyan-logo.svg"
          alt="CyanSync Loading"
          width={80}
          height={80}
          className="drop-shadow-lg"
        />
      </motion.div>
    </div>
  );
}
