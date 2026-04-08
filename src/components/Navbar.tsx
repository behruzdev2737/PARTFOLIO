"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const links = [
  { label: "Bosh sahifa", href: "#home" },
  { label: "Men haqimda", href: "#about" },
  { label: "Loyihalar", href: "#projects" },
  { label: "Ko'nikmalar", href: "#skills" },
  { label: "Aloqa", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.div
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="navbar-inner">
        <a href="#home" className="nav-logo">
          &lt;{portfolioData.name.split(" ")[0]} /&gt;
        </a>
        <div className="nav-links">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="nav-link"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.4 }}
            >
              {l.label}
            </motion.a>
          ))}
          <a href="#contact" className="nav-cta">Bog'lanish</a>
        </div>
      </div>
    </motion.div>
  );
}