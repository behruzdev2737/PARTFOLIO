"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const stats = [
  { label: "Tajriba", value: "2+" },
  { label: "Loyihalar", value: "20+" },
  { label: "Texnologiyalar", value: "10+" },
  { label: "Mijozlar", value: "15+" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section" ref={ref}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <motion.p className="section-tag" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}>02. Men haqimda</motion.p>
        <motion.h2 className="section-title" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }}>Kim men?</motion.h2>

        <div className="grid-2">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
            <p className="about-text">{portfolioData.about}</p>
            <p className="about-text">Foydalanuvchi tajribasini yaxshilash va sifatli kod yozish mening ustuvorligim.</p>
            <a href="#contact" className="btn-primary" style={{ marginTop: 8 }}>Bog'lanish</a>
          </motion.div>

          <div className="stat-grid">
            {stats.map((s, i) => (
              <motion.div key={s.label} className="stat-card" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}