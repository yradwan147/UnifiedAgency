"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Code,
  TestTube,
  Rocket,
  Headphones,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We learn about your vision, goals, and technical requirements.",
    ctoDeliverable: "Technical requirements document",
    ceoDeliverable: "Project scope overview",
    duration: "30-60 min",
  },
  {
    number: "02",
    icon: FileText,
    title: "Proposal & Scope",
    description: "Detailed proposal with timeline, milestones, and transparent pricing.",
    ctoDeliverable: "Architecture diagrams & tech specs",
    ceoDeliverable: "Fixed-price quote & timeline",
    duration: "2-3 days",
  },
  {
    number: "03",
    icon: Code,
    title: "Sprint Development",
    description: "Agile development with regular updates and code access from day one.",
    ctoDeliverable: "GitHub access, PR reviews",
    ceoDeliverable: "Weekly progress demos",
    duration: "2-week sprints",
  },
  {
    number: "04",
    icon: TestTube,
    title: "QA & Testing",
    description: "Comprehensive testing ensures everything works flawlessly.",
    ctoDeliverable: "Test reports, coverage metrics",
    ceoDeliverable: "UAT sessions & feedback",
    duration: "Ongoing",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description: "Smooth deployment to production with zero-downtime strategies.",
    ctoDeliverable: "CI/CD pipelines, monitoring",
    ceoDeliverable: "Launch checklist & support",
    duration: "1-2 days",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Support",
    description: "Ongoing maintenance, updates, and feature development as you grow.",
    ctoDeliverable: "SLA, incident response",
    ceoDeliverable: "Dedicated support channel",
    duration: "Ongoing",
  },
];

export default function Process() {
  return (
    <section className="section bg-[var(--background-secondary)]">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center section-header flex flex-col items-center"
        >
          <span className="badge mb-6">How We Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-display mb-6 text-center">
            A Process You Can{" "}
            <span className="text-gradient-accent">Trust</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-center">
            Transparent, milestone-based development with full visibility at every step
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-full"
              >
                <div className="card h-full flex flex-col">
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-[var(--accent)] rounded-xl flex items-center justify-center">
                        <step.icon className="w-5 h-5 md:w-6 md:h-6 text-black" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--background)] border border-[var(--accent)] rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-[var(--accent)]">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold heading-display leading-tight">
                        {step.title}
                      </h3>
                      <span className="text-sm text-[var(--foreground-subtle)]">
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--foreground-muted)] mb-6 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>

                  {/* Spacer to push deliverables to bottom */}
                  <div className="flex-grow" />

                  {/* Deliverables */}
                  <div className="space-y-3 pt-4 border-t border-[var(--border)]">
                    <div className="flex items-start gap-3">
                      <span className="badge-outline text-xs shrink-0 px-2.5 py-1">
                        Tech
                      </span>
                      <span className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                        {step.ctoDeliverable}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="badge-outline text-xs shrink-0 px-2.5 py-1">
                        Biz
                      </span>
                      <span className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                        {step.ceoDeliverable}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Arrow (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-24 z-10 w-6 h-6 bg-[var(--background-secondary)] items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

