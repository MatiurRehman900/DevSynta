"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Send, CheckCircle2, Clock,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@devsynta.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon–Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "San Francisco, CA",
      description: "Visit our headquarters",
    },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#28a0a0] focus:ring-2 focus:ring-[#28a0a0]/20 outline-none transition-all text-sm";

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#28a0a0]/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0f2f2] border border-[#28a0a0]/30 text-[#14648c] text-sm font-medium mb-8">
                Contact Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 mb-5 tracking-tight"
            >
              Get in{" "}
              <span className="gradient-text">Touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
            >
              Have a project in mind? We'd love to hear from you. Let's discuss
              how we can help transform your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Send us a Message</h2>
              <p className="text-slate-500 text-sm mb-7">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-white border border-green-200 text-center shadow-sm">
                  <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setError(null); }}
                    className="text-[#14648c] hover:text-[#14283c] font-medium text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a subject</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">Mobile App Development</option>
                      <option value="devops">DevOps Solutions</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3.5 bg-[#14283c] text-white rounded-xl font-semibold hover:bg-[#143c78] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-sm text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Contact Information</h2>
              <p className="text-slate-500 text-sm mb-7">
                Prefer to reach out directly? Here's how you can contact us.
              </p>

              <div className="space-y-4 mb-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#28a0a0] card-hover shadow-sm"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#e0f2f2] flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#14283c]" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-semibold text-sm mb-0.5">{info.title}</h3>
                      <p className="text-[#14648c] font-medium text-sm">{info.details}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm mb-6">
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-[#28a0a0] mr-2.5" />
                  <h3 className="text-slate-900 font-semibold text-sm">Response Time</h3>
                </div>
                <p className="text-slate-500 text-sm">
                  We typically respond to all inquiries within{" "}
                  <span className="text-[#14648c] font-medium">24 hours</span> during business days.
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-slate-900 font-semibold text-sm mb-3">Follow Us</h3>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-[#14283c] hover:text-white transition-all duration-200 text-xs font-medium"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#14648c] font-medium text-sm uppercase tracking-wider">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Our Location
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[360px] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#e0f2f2] flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#14283c]" />
                </div>
                <p className="text-slate-700 font-semibold">San Francisco, CA</p>
                <p className="text-slate-400 text-sm mt-1">
                  Interactive map would be embedded here
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
