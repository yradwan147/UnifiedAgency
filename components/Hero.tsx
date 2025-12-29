"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Globe, Shield, Zap } from "lucide-react";

const trustBadges = [
  { icon: Globe, label: "Slovenia" },
  { icon: Globe, label: "Saudi Arabia" },
  { icon: Globe, label: "Egypt" },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent)] rounded-full blur-[128px] opacity-20" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--accent)] rounded-full blur-[128px] opacity-10" />
      
      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[20%] w-16 h-16 border border-[var(--accent)]/30 rounded-lg opacity-40"
      />
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-[15%] w-24 h-24 border border-[var(--border)] rounded-full opacity-30"
      />
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-[10%] w-8 h-8 bg-[var(--accent)]/20 rounded-full"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 mb-8"
          >
            <Zap className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-sm font-medium text-[var(--accent)]">
              Egypt&apos;s Elite Development Team
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold heading-display mb-6 md:mb-8 tracking-tight px-2 text-center"
          >
            Build Faster.{" "}
            <span className="text-gradient-accent">Ship Better.</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Scale Confidently.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--foreground-muted)] mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 text-center"
          >
            Egypt&apos;s top developers delivering international-quality software at
            competitive rates. From MVPs to enterprise systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 md:mb-12 px-4"
          >
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm sm:text-base md:text-lg px-5 sm:px-8 py-3 sm:py-4 glow group w-full sm:w-auto"
            >
              Schedule a Discovery Call
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="btn btn-secondary text-sm sm:text-base md:text-lg px-5 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto"
            >
              <Play className="w-4 sm:w-5 h-4 sm:h-5" />
              Explore Our Work
            </a>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <p className="text-sm text-[var(--foreground-subtle)] mb-4 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Trusted by startups and enterprises across
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-1.5 text-[var(--foreground-muted)]"
                >
                  <badge.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center items-center w-full"
          >
            <div className="grid grid-cols-3 gap-6 sm:gap-10 md:gap-16 lg:gap-20 w-full max-w-2xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold heading-display text-gradient-accent mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--foreground-subtle)] uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[var(--border)] rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

