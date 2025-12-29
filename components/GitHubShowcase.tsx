"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react";

const featuredRepos = [
  {
    name: "edtech-gamification-platform",
    description:
      "Real-time multiplayer learning platform with PVP/PVE modes, leaderboards, and AI integration",
    stars: 124,
    forks: 28,
    language: "TypeScript",
    languageColor: "#3178c6",
    topics: ["nextjs", "websockets", "ai", "education"],
  },
  {
    name: "realtime-collaboration-engine",
    description:
      "WebSocket-based real-time collaboration library with CRDT support for conflict-free editing",
    stars: 89,
    forks: 15,
    language: "TypeScript",
    languageColor: "#3178c6",
    topics: ["websockets", "crdt", "collaboration"],
  },
  {
    name: "ai-content-pipeline",
    description:
      "LangChain-powered content generation pipeline with RAG, fine-tuning, and vector search",
    stars: 67,
    forks: 12,
    language: "Python",
    languageColor: "#3572A5",
    topics: ["langchain", "openai", "rag", "ai"],
  },
];

const stats = [
  { label: "Repositories", value: "50+" },
  { label: "Total Stars", value: "500+" },
  { label: "Contributors", value: "12" },
  { label: "Open Source Projects", value: "15" },
];

export default function GitHubShowcase() {
  return (
    <section className="section bg-[var(--background-secondary)]" id="github">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center section-header flex flex-col items-center"
        >
          <span className="badge mb-6">
            <Github className="w-4 h-4" />
            Open Source
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-display mb-6 text-center">
            Code Speaks{" "}
            <span className="text-gradient-accent">Louder</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-center">
            Don&apos;t just take our word for it. Review our code, star our repos, judge us by our commits.
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="card text-center py-6"
            >
              <div className="text-3xl font-bold heading-display text-gradient-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--foreground-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Featured Repos */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredRepos.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/uni-fied/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              {/* Repo Icon & Name */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-[var(--foreground-muted)]" />
                  <span className="text-sm font-semibold text-[var(--accent)] group-hover:underline">
                    {repo.name}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[var(--foreground-subtle)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Description */}
              <p className="text-[var(--foreground-muted)] text-sm mb-4 line-clamp-2">
                {repo.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {repo.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-0.5 text-xs bg-[var(--accent-muted)] text-[var(--accent)] rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-sm text-[var(--foreground-muted)]">
                    {repo.language}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[var(--foreground-muted)]">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">{repo.stars}</span>
                </div>
                <div className="flex items-center gap-1 text-[var(--foreground-muted)]">
                  <GitFork className="w-4 h-4" />
                  <span className="text-sm">{repo.forks}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://github.com/uni-fied"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary group"
          >
            <Github className="w-5 h-5" />
            View Our GitHub
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <p className="text-sm text-[var(--foreground-subtle)] mt-4">
            Star our repos if you like what you see!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

