"use client";

import { motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { skills } from "@/data/portfolio";

const categories = [
  { key: "design", label: "Design" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
] as const;

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I use to bring ideas to life."
      className="bg-neutral-50"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category, categoryIndex) => {
          const categorySkills = skills.filter(
            (skill) => skill.category === category.key
          );

          return (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-neutral-100"
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <Badge>{skill.name}</Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
