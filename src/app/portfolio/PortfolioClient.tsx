"use client";

import { useState, useEffect, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  X, ExternalLink, ArrowRight, CheckCircle2, Tag, Calendar, User,
} from "lucide-react";
import { projects, type Project } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

// ─── Isolated component that calls useSearchParams ───────────────────────────
// Must be wrapped in <Suspense> to satisfy Next.js static generation rules.
function SearchParamsHandler({
  onProject,
}: {
  onProject: (project: Project) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("project");
    if (id) {
      const found = projects.find((p) => p.id === id);
      if (found) onProject(found);
    }
  }, [searchParams, onProject]);

  return null;
}

// ─── Main portfolio UI ────────────────────────────────────────────────────────
function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // stable ref so SearchParamsHandler's useEffect dep array stays stable
  const handleProjectFromUrl = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Reads ?project= from URL and opens the modal */}
      <Suspense fallback={null}>
        <SearchParamsHandler onProject={handleProjectFromUrl} />
      </Suspense>

      {/* Hero */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-8">
              Our Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-5 tracking-tight"
          >
            Work We&apos;re{" "}
            <span className="gradient-text">Proud Of</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            A curated collection of projects we&apos;ve built for our clients — from
            consumer apps to enterprise platforms. Each one crafted with care.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200"
                    : "bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-2xl bg-white border border-slate-200 overflow-hidden card-hover shadow-sm cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-indigo-600 text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                        View Project
                      </span>
                    </div>
                    {project.featured && (
                      <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-slate-900 font-semibold text-lg mb-1 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-medium mb-2">{project.tagline}</p>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-indigo-200 mb-8 max-w-xl mx-auto leading-relaxed">
            Let&apos;s build something great together. Tell us about your idea and
            we&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-md"
          >
            Start a Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Project Detail Modal ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-x-4 top-[5vh] bottom-[5vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl z-50 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header image */}
              <div className="relative w-full aspect-video flex-shrink-0 bg-slate-100">
                <Image
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:bg-white transition-colors shadow-md"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
                <span className="absolute bottom-4 left-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {selectedProject.category}
                </span>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                {/* Title + live link */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">
                      {selectedProject.title}
                    </h2>
                    <p className="text-indigo-600 font-medium text-sm">
                      {selectedProject.tagline}
                    </p>
                  </div>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Site
                    </a>
                  )}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-slate-100">
                  {selectedProject.client && (
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                      <User className="w-4 h-4 text-indigo-400" />
                      <span>{selectedProject.client}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span>{selectedProject.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                    <Tag className="w-4 h-4 text-indigo-400" />
                    <span>{selectedProject.category}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {selectedProject.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div>
                  <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium border border-indigo-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export { PortfolioContent };
