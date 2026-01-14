"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of projects that showcase my skills and approach to problem-solving."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-background-card rounded-2xl border border-border overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
            role="button"
            tabIndex={0}
            onClick={() => {
              const url = project.liveUrl || project.githubUrl;
              if (url) {
                window.open(url, "_blank", "noopener,noreferrer");
              }
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const url = project.liveUrl || project.githubUrl;
                if (url) {
                  window.open(url, "_blank", "noopener,noreferrer");
                }
              }
            }}
          >
            {/* Project Image */}
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 relative overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-foreground-muted">
                  <span className="text-sm">Project Preview</span>
                </div>
              )}
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-foreground-muted text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                {project.liveUrl && (
                  <span className="flex items-center gap-2 text-sm text-primary">
                    <ExternalLink size={16} />
                    View Demo
                  </span>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-sm text-foreground-muted hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
