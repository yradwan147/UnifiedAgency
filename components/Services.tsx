"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Bot,
  Radio,
  Database,
  Gamepad2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    techStack: ["React", "Next.js", "TypeScript", "Vue", "Node.js"],
    ctoAngle: "Clean Architecture, Server Components, Edge Runtime",
    ceoAngle: "Fast time-to-market, SEO-optimized, scalable",
    description:
      "Modern web applications built with the latest frameworks and best practices for performance and maintainability.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    techStack: ["React Native", "Flutter", "iOS", "Android"],
    ctoAngle: "Native APIs, Offline-first, Push Notifications",
    ceoAngle: "Cross-platform savings, unified experience",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    techStack: ["OpenAI", "LangChain", "Custom Models", "RAG"],
    ctoAngle: "Fine-tuning, Vector DBs, Prompt Engineering",
    ceoAngle: "Automation, efficiency gains, competitive edge",
    description:
      "Intelligent AI solutions that automate workflows, enhance user experiences, and unlock new possibilities.",
  },
  {
    icon: Radio,
    title: "Real-time Systems",
    techStack: ["WebSockets", "Redis", "Socket.io", "GraphQL Subscriptions"],
    ctoAngle: "Event-driven architecture, Pub/Sub, Low latency",
    ceoAngle: "Live collaboration, instant updates, engaged users",
    description:
      "Real-time features that power live collaboration, instant messaging, and interactive experiences.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    techStack: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"],
    ctoAngle: "Microservices, REST, GraphQL, gRPC",
    ceoAngle: "Reliable, secure, compliant infrastructure",
    description:
      "Robust backend systems and APIs that scale with your business and integrate seamlessly.",
  },
  {
    icon: Gamepad2,
    title: "EdTech & Gamification",
    techStack: ["LMS", "Gamification", "Analytics", "Multiplayer"],
    ctoAngle: "Learning analytics, adaptive algorithms, real-time sync",
    ceoAngle: "Engagement boost, retention, measurable outcomes",
    description:
      "Educational technology solutions with gamification that make learning engaging and effective.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
} as const;

export default function Services() {
  return (
    <section className="section relative" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center section-header flex flex-col items-center"
        >
          <span className="badge mb-6">What We Build</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-display mb-6 text-center">
            Full-Stack{" "}
            <span className="text-gradient-accent">Expertise</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-center">
            From concept to deployment, we handle every layer of your technology stack
          </p>
        </motion.div>

        {/* Toggle for CTO/CEO view could go here */}

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card group cursor-pointer flex flex-col h-full"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[var(--accent-muted)] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-[var(--accent)] group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold heading-display group-hover:text-[var(--accent)] transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[var(--foreground-muted)] mb-4 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium bg-[var(--background-tertiary)] text-[var(--foreground-muted)] rounded-md border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Spacer to push dual perspective to bottom */}
              <div className="flex-grow" />

              {/* Dual Perspective */}
              <div className="space-y-2 pt-4 border-t border-[var(--border)]">
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] shrink-0 mt-0.5">
                    Tech:
                  </span>
                  <span className="text-sm text-[var(--foreground-muted)]">
                    {service.ctoAngle}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] shrink-0 mt-0.5">
                    Business:
                  </span>
                  <span className="text-sm text-[var(--foreground-muted)]">
                    {service.ceoAngle}
                  </span>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-[var(--accent)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-[var(--foreground-muted)] mb-4">
            Need something specific? We love unique challenges.
          </p>
          <a href="https://calendly.com" className="btn btn-secondary group">
            Discuss Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

