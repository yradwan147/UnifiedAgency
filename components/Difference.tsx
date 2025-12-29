"use client";

import { motion } from "framer-motion";
import {
  Code2,
  FileCheck,
  TestTube,
  GitBranch,
  Video,
  Receipt,
  Users,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  TrendingUp,
} from "lucide-react";

const ctoFeatures = [
  { icon: Code2, label: "Full code reviews on every PR" },
  { icon: FileCheck, label: "Architecture documentation" },
  { icon: TestTube, label: "Comprehensive test coverage" },
  { icon: GitBranch, label: "CI/CD pipelines included" },
];

const ceoFeatures = [
  { icon: Video, label: "Weekly demo sessions" },
  { icon: Receipt, label: "Milestone-based billing" },
  { icon: Users, label: "Dedicated project manager" },
  { icon: ShieldCheck, label: "SLA guarantees" },
];

export default function Difference() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background-secondary)] to-[var(--background)]" />
      
      {/* Decorative grid lines */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center section-header flex flex-col items-center"
        >
          <span className="badge mb-6">The UNI-FIED Way</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-display mb-6 text-center">
            Built for{" "}
            <span className="text-gradient-accent">Every Leader</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-center">
            Whether you&apos;re a technical founder or business executive, we speak your language
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* CTO Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Card with gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-blue-500/10 to-transparent rounded-2xl blur-sm group-hover:blur-none transition-all duration-300" />
            <div className="relative bg-[var(--card)] border border-blue-500/20 rounded-2xl p-6 lg:p-8 h-full">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Terminal className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold heading-display">For CTOs</h3>
                  <p className="text-[var(--foreground-muted)] text-sm lg:text-base">
                    Technical Leaders & Engineering Directors
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 lg:space-y-4">
                {ctoFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center gap-4 p-3 lg:p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl hover:bg-blue-500/10 hover:border-blue-500/20 transition-all group/item"
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="font-medium text-sm lg:text-base flex-grow">{feature.label}</span>
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 pt-6 border-t border-blue-500/10">
                <p className="text-[var(--foreground-muted)] italic text-sm lg:text-base">
                  &quot;Review our GitHub. Judge us by our code. No black boxes.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* CEO Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            {/* Card with gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/30 via-[var(--accent)]/10 to-transparent rounded-2xl blur-sm group-hover:blur-none transition-all duration-300" />
            <div className="relative bg-[var(--card)] border border-[var(--accent)]/20 rounded-2xl p-6 lg:p-8 h-full">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent)] to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-[var(--accent)]/25">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold heading-display">For CEOs</h3>
                  <p className="text-[var(--foreground-muted)] text-sm lg:text-base">
                    Founders & Business Leaders
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 lg:space-y-4">
                {ceoFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center gap-4 p-3 lg:p-4 bg-[var(--accent)]/5 border border-[var(--accent)]/10 rounded-xl hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/20 transition-all group/item"
                  >
                    <div className="w-10 h-10 bg-[var(--accent)]/20 rounded-lg flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-[var(--accent)]" />
                    </div>
                    <span className="font-medium text-sm lg:text-base flex-grow">{feature.label}</span>
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 pt-6 border-t border-[var(--accent)]/10">
                <p className="text-[var(--foreground-muted)] italic text-sm lg:text-base">
                  &quot;See progress weekly. Pay for milestones. Stay in control.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
