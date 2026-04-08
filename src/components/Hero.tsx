"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {easeOut } from "framer-motion";

const WORDS = ["Frontend Developer", "React Specialist", "Next.js Expert", "UI Enthusiast"];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1500);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setWordIndex(i => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

const up = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: easeOut } },
});

export default function Hero() {
  const typed = useTypewriter(WORDS);
  const particles = Array.from({ length: 18 }, (_, i) => i);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 24px",
      }}
    >
      <div className="grid-bg" />
      <div className="hero-glow" />

      {particles.map((i) => (
        <motion.div
          key={i}
          className="particle"
          style={{ left: `${(i / 18) * 100}%`, bottom: 0 }}
          animate={{ y: [0, -700], opacity: [0, 0.5, 0] }}
          transition={{
            duration: 5 + (i % 4),
            delay: i * 0.3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* HERO GRID (ONLY RESPONSIVE FIX HERE) */}
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 60,
          alignItems: "center",
        }}
      >

        {/* LEFT */}
        <div>
          <motion.div variants={up(0.2)} initial="hidden" animate="show">
            <div className="badge">
              <span className="badge-dot" />
              <span className="badge-text">Available for work</span>
            </div>
          </motion.div>

          <motion.h1 className="hero-name" variants={up(0.35)} initial="hidden" animate="show">
            {portfolioData.name}
          </motion.h1>

          <motion.div className="typewriter-wrap" variants={up(0.5)} initial="hidden" animate="show">
            <span className="typewriter-text">{typed}</span>
            <span className="cursor" />
          </motion.div>

          <motion.div
            className="hero-divider"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />

          <motion.p className="hero-desc" variants={up(0.65)} initial="hidden" animate="show">
            {portfolioData.about}
          </motion.p>

          <motion.div className="btn-group" variants={up(0.8)} initial="hidden" animate="show">
            <a href="#projects" className="btn-primary">Loyihalarni ko'rish</a>
            <a href="#contact" className="btn-secondary">Bog'lanish</a>
          </motion.div>

          <motion.div className="social-links" variants={up(0.95)} initial="hidden" animate="show">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href={`mailto:${portfolioData.email}`} className="social-link">Email</a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", width: 340, height: 340 }}>

            {/* glow */}
            <div
              style={{
                position: "absolute",
                inset: -20,
                borderRadius: "50%",
                background: "rgba(99,102,241,0.12)",
                filter: "blur(30px)",
              }}
            />

            {/* rotating border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: -3,
                borderRadius: "50%",
                border: "1px dashed rgba(99,102,241,0.3)",
              }}
            />

            {/* avatar */}
            <img
              src={portfolioData.avatar}
              alt="Profil rasmi"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                border: "1px solid rgba(99,102,241,0.4)",
                position: "relative",
                zIndex: 1,
                display: "block",
              }}
            />

            {/* AVAILABLE BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              style={{
                position: "absolute",
                bottom: 20,
                right: -10,
                background: "rgba(6,11,24,0.95)",
                border: "1px solid rgba(99,102,241,0.3)",
                borderRadius: 10,
                padding: "8px 14px",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#10b981",
                  display: "inline-block",
                  animation: "pulse-dot 2s ease infinite",
                }}
              />
              <span style={{ fontSize: 11, color: "#94a3b8", letterSpacing: 1 }}>
                Available
              </span>
            </motion.div>

            {/* TECH BADGE */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              style={{
                position: "absolute",
                top: 20,
                left: -10,
                background: "rgba(6,11,24,0.95)",
                border: "1px solid rgba(99,102,241,0.3)",
                borderRadius: 10,
                padding: "8px 14px",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: "#818cf8",
                  letterSpacing: 1,
                  fontFamily: "monospace",
                }}
              >
                Next.js
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="scroll-text">SCROLL</span>
      </div>
    </section>
  );
}