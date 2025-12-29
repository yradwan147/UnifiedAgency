"use client";

import { motion } from "framer-motion";
import { Globe, Code, DollarSign, ArrowUpRight } from "lucide-react";

const valueProps = [
  {
    icon: Globe,
    title: "International Quality",
    subtitle: "Silicon Valley standards, Egyptian efficiency",
    description:
      "Our developers are trained in global best practices. We deliver code that meets the highest international standards, with the efficiency and dedication that sets us apart.",
    ctoPoint: "Clean architecture, comprehensive testing, CI/CD pipelines",
    ceoPoint: "Reliable delivery, scalable solutions, long-term value",
  },
  {
    icon: Code,
    title: "Transparent Code",
    subtitle: "Every project on GitHub",
    description:
      "We believe in complete transparency. Review our code before you decide. Our public repositories showcase our commitment to quality and open collaboration.",
    ctoPoint: "Open-source contributions, code reviews, documentation",
    ceoPoint: "Full visibility, no black boxes, audit-ready",
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    subtitle: "Premium results without premium prices",
    description:
      "Access world-class development talent at rates that make sense for your budget. We offer the best value proposition in the industry without compromising on quality.",
    ctoPoint: "Senior developers, not juniors. Real expertise.",
    ceoPoint: "Up to 60% cost savings vs US/EU agencies",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function ValueProps() {
  return (
    <section className="section relative overflow-hidden" id="about">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background-secondary)]/50 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center section-header flex flex-col items-center"
        >
          <span className="badge mb-6">Why UNI-FIED</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-display mb-6 text-center">
            The{" "}
            <span className="text-gradient-accent">UNI-FIED</span>{" "}
            Advantage
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-center">
            Three pillars that set us apart from any other development partner
          </p>
        </motion.div>

        {/* Value Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              variants={itemVariants}
              className="card group relative overflow-hidden flex flex-col h-full"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 bg-[var(--accent-muted)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <prop.icon className="w-7 h-7 text-[var(--accent)]" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold heading-display mb-2 flex items-center gap-2">
                  {prop.title}
                  <ArrowUpRight className="w-5 h-5 text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                {/* Subtitle */}
                <p className="text-[var(--accent)] font-medium mb-4 text-sm md:text-base">
                  {prop.subtitle}
                </p>

                {/* Description */}
                <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed text-sm md:text-base">
                  {prop.description}
                </p>

                {/* Spacer to push dual perspective to bottom */}
                <div className="flex-grow" />

                {/* Dual Perspective */}
                <div className="space-y-3 pt-4 border-t border-[var(--border)]">
                  <div className="flex items-start gap-3">
                    <span className="badge-outline text-xs shrink-0 px-2.5 py-1">CTO</span>
                    <span className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                      {prop.ctoPoint}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="badge-outline text-xs shrink-0 px-2.5 py-1">CEO</span>
                    <span className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                      {prop.ceoPoint}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Number */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-[var(--border)] opacity-50">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

