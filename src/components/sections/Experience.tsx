"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My professional journey and the companies I've had the pleasure to work with."
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`hidden md:block absolute top-2 w-3 h-3 bg-neutral-900 rounded-full ${
                  index % 2 === 0 ? "right-0 translate-x-1/2 -mr-[1.5px]" : "left-0 -translate-x-1/2 -ml-[1.5px]"
                }`}
              />

              <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-neutral-500">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>

                <p className="text-neutral-600 font-medium mb-4">
                  {exp.company}
                </p>

                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-neutral-600 text-sm flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
