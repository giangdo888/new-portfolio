"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { education } from "@/data/portfolio";

export function Education() {
  const getInstitutionInitials = (name: string) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

  return (
    <Section
      id="education"
      title="Education"
      subtitle="My academic background and qualifications."
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
              {/* Institution logo */}
              <div className="w-12 h-12 rounded-full border border-border-strong bg-background flex items-center justify-center text-xs font-semibold text-foreground-muted flex-shrink-0 overflow-hidden relative">
                {edu.logo ? (
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                ) : (
                  getInstitutionInitials(edu.institution)
                )}
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

                <p className="text-foreground-muted text-sm">
                  {edu.institution}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}