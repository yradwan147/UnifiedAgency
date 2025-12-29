"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "UNI-FIED's code quality is exceptional. Clean architecture, comprehensive tests, and documentation that actually makes sense. It's rare to find an agency that understands both the technical and business sides so well.",
    author: "Ahmed Hassan",
    role: "CTO",
    company: "TechStart Inc.",
    type: "cto",
    rating: 5,
  },
  {
    quote:
      "We launched 3 weeks ahead of schedule and under budget. The weekly demos kept us in the loop, and the milestone billing gave us complete financial control. Highly recommend for any serious project.",
    author: "Sarah Mitchell",
    role: "CEO",
    company: "EduVenture",
    type: "ceo",
    rating: 5,
  },
  {
    quote:
      "Their real-time expertise is unmatched. We needed sub-50ms latency for our gaming platform, and they delivered. The architecture documentation was so thorough that our in-house team could maintain it easily.",
    author: "Michael Chen",
    role: "Engineering Director",
    company: "GameHub Studios",
    type: "cto",
    rating: 5,
  },
  {
    quote:
      "As a non-technical founder, I was worried about communication barriers. UNI-FIED made everything crystal clear. They translated complex tech into business outcomes I could understand and pitch to investors.",
    author: "Emma Rodriguez",
    role: "Founder",
    company: "HealthTech Solutions",
    type: "ceo",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center section-header flex flex-col items-center"
        >
          <span className="badge mb-6">Testimonials</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold heading-display mb-6 text-center">
            Trusted by{" "}
            <span className="text-gradient-accent">Leaders</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-center">
            What CTOs and CEOs say about working with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[var(--accent)] opacity-30 absolute top-6 right-6" />

              {/* Type Badge */}
              <span
                className={`badge mb-6 ${
                  testimonial.type === "cto"
                    ? "bg-blue-500/20 text-blue-400 border-blue-500/50"
                    : ""
                }`}
              >
                {testimonial.type === "cto" ? "Technical Leader" : "Business Leader"}
              </span>

              {/* Quote */}
              <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-8 relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center">
                    <span className="text-black font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[var(--accent)] text-[var(--accent)]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

