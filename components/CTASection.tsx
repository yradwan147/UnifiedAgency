"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)] rounded-full blur-[200px] opacity-10" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-[10%] w-20 h-20 border border-[var(--accent)]/20 rounded-xl opacity-30"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-[15%] w-16 h-16 border border-[var(--border)] rounded-full opacity-30"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto flex flex-col items-center text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 mb-8">
            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-sm font-medium text-[var(--accent)]">
              Limited Q1 2025 Availability
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold heading-display mb-8 text-center">
            Ready to Build Something{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient-accent">Exceptional?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--foreground-muted)] mb-12 max-w-2xl mx-auto leading-relaxed text-center">
            Whether you&apos;re a technical founder or business leader, we speak your language. 
            Let&apos;s discuss how we can bring your vision to life.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-lg px-8 py-4 glow group w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5" />
              Book a Discovery Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/201151472079"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-lg px-8 py-4 group w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Message on WhatsApp
            </a>
          </div>

          {/* Trust Note */}
          <p className="text-sm text-[var(--foreground-subtle)]">
            No commitment required. 30-minute call. See if we&apos;re the right fit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

