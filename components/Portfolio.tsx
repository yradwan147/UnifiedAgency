"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Clock, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Question Rush - PVP Learning Games",
    description:
      "Turn studying into friendly competition! Students answer questions head-to-head in real time, making learning interactive and fun. Classrooms using competitive game-based learning report up to a 48% increase in student engagement.",
    image: "/projects/pvp.jpg",
    techStack: ["Next.js", "WebSockets", "Redis", "PostgreSQL", "React"],
    businessMetric: "48% increase in student engagement",
    technicalNote: "Real-time sync under 50ms latency",
    timeline: "12 weeks",
    demoUrl: "https://uni-fied.com",
    githubUrl: "#",
    featured: true,
    client: "Slovenia",
  },
  {
    title: "Boss Fight - PVE Collaborative Learning",
    description:
      "Learn together as a team! Students collaborate to solve challenges and practice problems, turning studying into a shared experience. Collaborative gamified learning has shown improvements of 34.75% in student scores.",
    image: "/projects/pve.jpg",
    techStack: ["React", "Socket.io", "Node.js", "MongoDB"],
    businessMetric: "34.75% improvement in student scores",
    technicalNote: "Multi-player real-time collaboration",
    timeline: "10 weeks",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    client: "Slovenia",
  },
  {
    title: "Leaderboard & Quest System",
    description:
      "Stay motivated with leaderboards! Students using leaderboard-based learning scored over 12% higher. Turn learning goals into adventures with challenge-based quest systems.",
    image: "/projects/leaderboard.jpg",
    techStack: ["Next.js", "PostgreSQL", "Redis", "GraphQL"],
    businessMetric: "12% higher scores with leaderboards",
    technicalNote: "Real-time ranking with caching",
    timeline: "6 weeks",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    client: "Saudi Arabia",
  },
  {
    title: "Realtime Collaboration Engine",
    description:
      "Create virtual study spaces for any educational activity — from group projects to exam prep sessions. Communicate instantly with classmates, teachers, and study partners through real-time messaging.",
    image: "/projects/realtime.jpg",
    techStack: ["WebSockets", "CRDT", "Node.js", "React", "Redis"],
    businessMetric: "Instant communication, zero lag",
    technicalNote: "Conflict-free replicated data types",
    timeline: "14 weeks",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    client: "Egypt",
  },
  {
    title: "AI Content Enhancement",
    description:
      "Make your educational materials better with AI assistance. Our AI can create custom images, generate video content, and enhance learning materials automatically for better engagement.",
    image: "/projects/ai-content.jpg",
    techStack: ["OpenAI", "LangChain", "Python", "FastAPI", "React"],
    businessMetric: "70% reduction in content creation time",
    technicalNote: "Custom AI pipeline with 95% accuracy",
    timeline: "8 weeks",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    client: "Slovenia",
  },
  {
    title: "AI Chat & Voice Tutors",
    description:
      "Build personalized AI tutors that students can talk to! These assistants chat through text and speak out loud, helping students learn anytime through interactive, personalized tutoring.",
    image: "/projects/ai-tutor.jpg",
    techStack: ["OpenAI", "Whisper", "ElevenLabs", "Next.js", "Python"],
    businessMetric: "24/7 personalized learning support",
    technicalNote: "Multi-modal AI with voice synthesis",
    timeline: "10 weeks",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    client: "Saudi Arabia",
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
    },
  },
};

export default function Portfolio() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="section relative bg-[var(--background-secondary)]" id="work">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center section-header flex flex-col items-center"
        >
          <span className="badge mb-6">Our Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-display mb-6 text-center">
            Projects That{" "}
            <span className="text-gradient-accent">Deliver Results</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-center">
            Real solutions for real businesses. Code you can review, results you can measure.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="card p-0 overflow-hidden group">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-[var(--accent)]/20 to-[var(--background-tertiary)] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-black heading-display">U</span>
                    </div>
                    <span className="badge">Featured Project</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold heading-display mb-4">
                    {featuredProject.title}
                  </h3>
                  <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm font-medium bg-[var(--background)] text-[var(--foreground-muted)] rounded-full border border-[var(--border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-[var(--accent)] mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-[var(--accent)]">Business Impact</div>
                        <div className="text-sm text-[var(--foreground-muted)]">
                          {featuredProject.businessMetric}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[var(--foreground-subtle)] mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">Delivered in</div>
                        <div className="text-sm text-[var(--foreground-muted)]">
                          {featuredProject.timeline}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-4">
                    <a
                      href={featuredProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="card group flex flex-col h-full"
            >
              {/* Project Visual */}
              <div className="h-32 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--background-tertiary)] rounded-lg mb-6 flex items-center justify-center">
                <div className="w-12 h-12 bg-[var(--accent-muted)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl font-bold text-[var(--accent)] heading-display">U</span>
                </div>
              </div>

              <h3 className="text-lg font-bold heading-display mb-3 group-hover:text-[var(--accent)] transition-colors leading-tight">
                {project.title}
              </h3>

              <p className="text-[var(--foreground-muted)] text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-medium bg-[var(--background)] text-[var(--foreground-subtle)] rounded-md border border-[var(--border)]"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2 py-0.5 text-xs font-medium bg-[var(--background)] text-[var(--foreground-subtle)] rounded-md border border-[var(--border)] opacity-60">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              {/* Spacer to push footer to bottom */}
              <div className="flex-grow" />

              {/* Quick Metrics */}
              <div className="pt-4 border-t border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                  <span className="text-[var(--foreground-muted)]">
                    {project.businessMetric}
                  </span>
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-1.5 text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.demoUrl}
                  className="flex items-center gap-1.5 text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#github" className="btn btn-secondary group">
            View All Projects on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

