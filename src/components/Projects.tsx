"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section" ref={ref}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <motion.p className="section-tag" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}>03. Loyihalar</motion.p>
        <motion.h2 className="section-title" initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }}>Ishlarim</motion.h2>

        <div className="grid-3">
          {portfolioData.projects.map((project, i) => (
            <motion.div key={project.title} className="project-card" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}>
              <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 20 }}>
                <div className="project-icon"><div className="project-icon-inner" /></div>
                <div className="project-links">
                  <a href={project.github} className="project-link">GH</a>
                  <a href={project.live} className="project-link">LIVE ↗</a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tech-list">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}