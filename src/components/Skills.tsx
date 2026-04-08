"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-alt" ref={ref}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <motion.p className="section-tag" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}>04. Ko'nikmalar</motion.p>
        <motion.h2 className="section-title" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }}>Texnologiyalar</motion.h2>

        <div className="grid-2">
          {portfolioData.skills.map((skill, i) => (
            <motion.div key={skill.name} className="skill-row" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 * i }}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-track">
                <motion.div
                  className="skill-fill"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}