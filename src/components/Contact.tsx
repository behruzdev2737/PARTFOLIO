"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section" ref={ref}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <motion.p className="section-tag" initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}>05. Aloqa</motion.p>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>Bog'lanish</motion.h2>
        <motion.p className="about-text" initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
          Yangi loyiha yoki hamkorlik bo'yicha gaplashmoqchimisiz? Menga yozing!
        </motion.p>

        <motion.a href={`mailto:${portfolioData.email}`} className="contact-email-btn" initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
          Email yuborish
        </motion.a>

        <motion.div className="footer-links" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href={`mailto:${portfolioData.email}`} className="footer-link">Email</a>
        </motion.div>

        <p className="footer-copy">© 2025 {portfolioData.name}</p>
      </div>
    </section>
  );
}