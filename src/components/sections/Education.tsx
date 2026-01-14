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
      className="bg-neutral-50"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-neutral-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} className="text-neutral-600" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-neutral-500">
                    {edu.startDate} — {edu.endDate}
                  </span>
                </div>

                <p className="text-neutral-600 mb-1">{edu.field}</p>
                <p className="text-neutral-500 text-sm">{edu.institution}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
