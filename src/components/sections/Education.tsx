"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="My academic background and qualifications."
      className="bg-primary/6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-background-card p-6 rounded-2xl border border-border shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} className="text-primary" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-foreground-muted">
                    {edu.startDate} — {edu.endDate}
                  </span>
                </div>

                <p className="text-foreground-muted mb-1">{edu.field}</p>
                <p className="text-foreground-muted text-sm">{edu.institution}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
