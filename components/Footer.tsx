"use client";

import { Github, Linkedin, Twitter, MessageCircle, Mail, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
  ],
  resources: [
    { label: "GitHub", href: "https://github.com/uni-fied" },
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#work" },
  ],
  contact: [
    { label: "+20 115 147 2079", href: "https://wa.me/201151472079", icon: MessageCircle },
    { label: "hello@uni-fied.com", href: "mailto:hello@uni-fied.com", icon: Mail },
    { label: "Cairo, Egypt", href: "#", icon: MapPin },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/uni-fied", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/company/uni-fied", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/unifed", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <a href="#" className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl heading-display">U</span>
            </div>
            <span className="text-xl font-bold tracking-tight heading-display">
              UNI-FIED
            </span>
          </a>
          
          <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-6 max-w-md mx-auto">
            Egypt&apos;s elite software development agency delivering international-quality 
            software at competitive rates.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--background-secondary)] rounded-lg flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-muted)] transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Links Row */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 md:gap-24 mb-12">
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-base">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 text-base">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-base">Contact</h4>
              <ul className="space-y-2">
                {footerLinks.contact.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="w-full pt-8 border-t border-[var(--border)]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="text-sm text-[var(--foreground-subtle)]">
                © 2025 UNI-FIED. All rights reserved.
              </p>
              <span className="hidden sm:block text-[var(--foreground-subtle)]">•</span>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-sm text-[var(--foreground-subtle)] hover:text-[var(--foreground)] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-[var(--foreground-subtle)] hover:text-[var(--foreground)] transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
