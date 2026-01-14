"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const getCompanyInitials = (name: string) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My professional journey and the companies I've had the pleasure to work with."
      className="bg-primary/6"
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border-strong -translate-x-1/2 hidden md:block" />

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
                className={`hidden md:block absolute top-2 w-3 h-3 bg-primary rounded-full ${
                  index % 2 === 0 ? "right-0 translate-x-1/2 -mr-[1.5px]" : "left-0 -translate-x-1/2 -ml-[1.5px]"
                }`}
              />

              <div className="bg-background-card p-6 rounded-2xl border border-border shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-4">
                  {/* Company logo */}
                  <div className="w-12 h-12 rounded-full border border-border-strong bg-background flex items-center justify-center text-xs font-semibold text-foreground-muted flex-shrink-0 overflow-hidden relative">
                    {exp.logo ? (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    ) : (
                      getCompanyInitials(exp.company)
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-foreground-muted">
                        {exp.startDate} — {exp.endDate}
                      </span>
                    </div>

                    <p className="text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-foreground-muted text-sm flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
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
