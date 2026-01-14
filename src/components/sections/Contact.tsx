"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/data/portfolio";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - placeholder for now
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <Mail size={18} className="text-neutral-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <MapPin size={18} className="text-neutral-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Location</p>
                <p className="text-neutral-900">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            <Send size={18} className="mr-2" />
            Send Message
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}
