"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Zap, Shield, Globe, Smartphone } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { featuredProjects } from "@/data/projects";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
    features: ["Responsive Design", "CMS Integration", "E-commerce Solutions"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android that engage your users.",
    features: ["iOS & Android", "React Native", "UI/UX Design"],
  },
  {
    icon: Zap,
    title: "DevOps Solutions",
    description: "Streamline your development pipeline with automated CI/CD and cloud infrastructure.",
    features: ["CI/CD Pipelines", "Cloud Architecture", "Containerization"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with comprehensive security audits and threat prevention.",
    features: ["Security Audits", "Penetration Testing", "Compliance"],
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const testimonials = [
  {
    quote: "Devsynta transformed our digital presence. Their team delivered a stunning website that increased our conversions by 40%.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
  },
  {
    quote: "Professional, responsive, and highly skilled. They understood our vision and brought it to life beyond our expectations.",
    author: "Michael Chen",
    role: "CTO",
    company: "FinanceFlow",
  },
  {
    quote: "The best IT partner we've ever worked with. Their DevOps solutions streamlined our entire development process.",
    author: "Emily Davis",
    role: "VP of Engineering",
    company: "CloudScale",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#28a0a0]/15 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#143c78]/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0f2f2] border border-[#28a0a0]/30 text-[#14648c] text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-[#28a0a0] animate-subtle-pulse" />
                Full-Service IT Company
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight"
            >
              Building Scalable{" "}
              <span className="gradient-text">Digital Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Devsynta is a full-service IT company specializing in web development,
              mobile apps, DevOps, cybersecurity, and digital marketing. We transform
              your ideas into powerful digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-[#14283c] text-white rounded-lg font-semibold hover:bg-[#143c78] transition-all duration-200 shadow-md flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="px-7 py-3.5 border border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-[#e0f2f2] hover:border-[#28a0a0]/40 transition-all duration-200"
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#14648c] font-medium text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Comprehensive IT Solutions
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              End-to-end IT services tailored to your business needs, from development
              to security and marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-[#14648c] hover:text-[#14283c] font-medium text-sm transition-colors"
            >
              View All Services
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <span className="text-[#14648c] font-medium text-sm uppercase tracking-wider">Our Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Featured Projects
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl text-sm leading-relaxed">
                A selection of projects we've built for our clients — from booking platforms
                to enterprise dashboards and mobile apps.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="flex-shrink-0 inline-flex items-center gap-1.5 text-[#14648c] hover:text-[#14283c] font-medium text-sm transition-colors"
            >
              See All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/portfolio?project=${project.id}`}
                  className="group block rounded-2xl bg-white border border-slate-200 overflow-hidden card-hover shadow-sm"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[#14283c]/0 group-hover:bg-[#14283c]/15 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#14283c] text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                        View Project
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 bg-[#14283c] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      Featured
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full bg-[#e0f2f2] text-[#14648c] text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-slate-900 font-semibold text-lg mb-1 group-hover:text-[#14283c] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-medium mb-2">{project.tagline}</p>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* See all button */}
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-[#e0f2f2] hover:border-[#28a0a0]/40 hover:text-[#14283c] transition-all duration-200 text-sm shadow-sm"
            >
              View All Projects in Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-[#14648c] font-medium text-sm uppercase tracking-wider">About Devsynta</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-5">
                Driving Digital Transformation
              </h2>
              <p className="text-slate-500 mb-7 leading-relaxed">
                At Devsynta, we believe in the power of technology to transform businesses.
                With over 10 years of experience, we've helped 150+ companies achieve their
                digital goals through innovative solutions.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Expert team with cutting-edge skills",
                  "Agile methodology for fast delivery",
                  "24/7 support and maintenance",
                  "Competitive pricing with no hidden costs",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-[#28a0a0] mr-3 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-[#e0f2f2] hover:border-[#28a0a0]/40 transition-all duration-200 shadow-sm text-sm"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-center"
                  >
                    <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-slate-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#14648c] font-medium text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              What Our Clients Say
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say
              about working with Devsynta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #14283c 0%, #143c78 60%, #14648c 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
              Let's discuss your project and see how we can help you achieve
              your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-white text-[#14283c] rounded-lg font-semibold hover:bg-[#e0f2f2] transition-all duration-200 shadow-md"
              >
                Get Started Today
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
