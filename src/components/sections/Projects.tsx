"use client";

import { motion } from "motion/react";
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
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Project Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                <span className="text-sm">Project Preview</span>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-300" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">
                {project.title}
              </h3>

              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
