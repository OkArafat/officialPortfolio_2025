"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactInline() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto mt-20 md:mt-28 scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <p className="text-sm tracking-widest uppercase text-foreground/60">
            Contact
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium font-[var(--font-display)]">
            Let&apos;s build something great
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
            I&apos;m open to freelance and full-time opportunities. Tell me
            about your goals and timeline, and I&apos;ll reply within 24–48
            hours.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
            <a
              href="mailto:arafathaquebiswas@gmail.com"
              className="h-9 sm:h-10 px-3 sm:px-4 inline-flex items-center justify-center rounded-full border border-foreground/15 text-xs sm:text-sm font-medium hover:bg-foreground/5 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/arafathaquebiswas/"
              target="_blank"
              rel="noreferrer"
              className="h-9 sm:h-10 px-3 sm:px-4 inline-flex items-center justify-center rounded-full border border-foreground/15 text-xs sm:text-sm font-medium hover:bg-foreground/5 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/OkArafat"
              target="_blank"
              rel="noreferrer"
              className="h-9 sm:h-10 px-3 sm:px-4 inline-flex items-center justify-center rounded-full border border-foreground/15 text-xs sm:text-sm font-medium hover:bg-foreground/5 transition-colors"
            >
              GitHub
            </a>
            <a
              href="/My_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Arafat_Haque_Biswas_CV.pdf"
              className="h-9 sm:h-10 px-3 sm:px-4 inline-flex items-center justify-center rounded-full border border-foreground/15 text-xs sm:text-sm font-medium hover:bg-foreground/5 transition-colors"
            >
              CV
            </a>
          </div>

          {/* Grab a coffee section */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200/50 dark:border-amber-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 flex items-center justify-center">
                <span className="text-2xl">☕</span>
              </div>
              <h3
                className="text-lg font-bold text-foreground"
                style={{
                  fontFamily: "var(--font-elegant)",
                  textShadow:
                    "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 165, 0, 0.2)",
                  letterSpacing: "0.05em",
                  fontWeight: "400",
                  transform: "rotate(-1deg)",
                  transformOrigin: "left center",
                }}
              >
                Grab a coffee ☕
              </h3>
            </div>
            {/* Contact Details */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-foreground/5 to-foreground/10 hover:from-foreground/10 hover:to-foreground/15 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-blue-500"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="22,6 12,13 2,6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-sm font-medium text-foreground/80"
                    style={{
                      fontFamily:
                        "var(--font-roboto), var(--font-inter), 'Roboto', 'Inter', sans-serif",
                    }}
                  >
                    Email
                  </span>
                  <a
                    href="mailto:arafathaquebiswas@gmail.com"
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    style={{
                      fontFamily:
                        "var(--font-roboto), var(--font-inter), 'Roboto', 'Inter', sans-serif",
                    }}
                  >
                    arafathaquebiswas@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-foreground/5 to-foreground/10 hover:from-foreground/10 hover:to-foreground/15 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-green-500"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-sm font-medium text-foreground/80"
                    style={{
                      fontFamily:
                        "var(--font-roboto), var(--font-inter), 'Roboto', 'Inter', sans-serif",
                    }}
                  >
                    Phone
                  </span>
                  <span
                    className="text-sm text-foreground/60"
                    style={{
                      fontFamily:
                        "var(--font-roboto), var(--font-inter), 'Roboto', 'Inter', sans-serif",
                    }}
                  >
                    +8801316816333
                  </span>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-foreground/5 to-foreground/10 hover:from-foreground/10 hover:to-foreground/15 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-foreground/20 to-foreground/30 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-foreground"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-sm font-medium text-foreground/80"
                    style={{
                      fontFamily:
                        "var(--font-roboto), var(--font-inter), 'Roboto', 'Inter', sans-serif",
                    }}
                  >
                    GitHub
                  </span>
                  <a
                    href="https://github.com/OkArafat"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    style={{
                      fontFamily:
                        "var(--font-roboto), var(--font-inter), 'Roboto', 'Inter', sans-serif",
                    }}
                  >
                    @OkArafat
                  </a>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="rounded-2xl border border-foreground/10 p-4 sm:p-6 md:p-8 bg-background/60 backdrop-blur relative overflow-hidden"
        >
          <div className="pointer-events-none absolute -inset-24 rounded-[inherit] bg-[radial-gradient(260px_200px_at_10%_120%,rgba(120,119,198,0.18),transparent)]" />
          <ContactForm toEmail="arafathaquebiswas@gmail.com" />
        </motion.div>
      </div>
    </section>
  );
}
