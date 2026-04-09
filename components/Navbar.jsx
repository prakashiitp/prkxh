"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="container flex justify-between items-center py-6"
    >
      <h1 className="text-lg font-semibold tracking-tight">prkxh</h1>

      <div className="flex gap-6 text-sm text-gray-600">
        <a href="#projects" className="hover:text-black">Projects</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </div>
    </motion.div>
  );
}