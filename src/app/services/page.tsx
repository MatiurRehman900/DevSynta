"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe, Smartphone, Zap, Shield, Search, Megaphone,
  ArrowRight, CheckCircle2,
} from "lucide-react";
import WebDevIllustration from "@/components/illustrations/WebDevIllustration";
import MobileAppIllustration from "@/components/illustrations/MobileAppIllustration";
import DevOpsIllustration from "@/components/illustrations/DevOpsIllustration";
import CybersecurityIllustration from "@/components/illustrations/CybersecurityIllustration";
import SEOIllustration from "@/components/illustrations/SEOIllustration";
import DigitalMarketingIllustration from "@/components/illustrations/DigitalMarketingIllustration";

const services = [
  {
    id: "web-development",
    icon: Globe,
    illustration: WebDevIllustration,
    title: "Web Development",
    shortDescription: "Custom websites and web applications built with modern technologies for optimal performance.",
    fullDescription:
      "Our web development services encompass the entire development lifecycle, from concept and design to deployment and maintenance. We build scalable, secure, and high-performance web applications using cutting-edge technologies like React, Next.js, Node.js, and more.",
    features: [
      "Custom Web Application Development",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "CMS Development & Integration",
      "API Development & Integration",
      "Performance Optimization",
    ],
    benefits: [
      "Improved user engagement and conversion rates",
      "Scalable architecture that grows with your business",
      "Enhanced security and data protection",
      "Seamless integration with existing systems",
      "Better SEO rankings and online visibility",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    illustration: MobileAppIllustration,
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform mobile apps for iOS and Android that engage your users.",
    fullDescription:
      "We create feature-rich, user-friendly mobile applications for both iOS and Android platforms. Our team specializes in native development as well as cross-platform solutions using React Native and Flutter, ensuring your app reaches the widest audience possible.",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-platform (React Native/Flutter)",
      "UI/UX Design & Prototyping",
      "App Store Optimization",
      "Maintenance & Support",
    ],
    benefits: [
      "Reach customers on their preferred devices",
      "Offline functionality for better user experience",
      "Push notifications for customer engagement",
      "Device-specific features integration",
      "Faster time-to-market with cross-platform",
    ],
    technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase"],
  },
  {
    id: "devops",
    icon: Zap,
    illustration: DevOpsIllustration,
    title: "DevOps Solutions",
    shortDescription: "Streamline your development pipeline with automated CI/CD and cloud infrastructure.",
    fullDescription:
      "Our DevOps services help organizations accelerate software delivery while maintaining high quality. We implement robust CI/CD pipelines, containerization, and cloud infrastructure that enable faster deployments, better collaboration, and improved reliability.",
    features: [
      "CI/CD Pipeline Implementation",
      "Cloud Infrastructure Setup",
      "Containerization (Docker/Kubernetes)",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Security Automation",
    ],
    benefits: [
      "Faster deployment cycles",
      "Reduced downtime and errors",
      "Improved collaboration between teams",
      "Cost optimization through cloud efficiency",
      "Better visibility into application performance",
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "Terraform"],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    illustration: CybersecurityIllustration,
    title: "Cybersecurity",
    shortDescription: "Protect your business with comprehensive security audits and threat prevention.",
    fullDescription:
      "Our cybersecurity services provide end-to-end protection for your digital assets. From comprehensive security audits and penetration testing to implementing robust security frameworks, we help businesses safeguard their data and maintain compliance with industry regulations.",
    features: [
      "Security Audits & Assessment",
      "Penetration Testing",
      "Vulnerability Management",
      "Security Compliance (GDPR, HIPAA, SOC 2)",
      "Incident Response Planning",
      "Employee Security Training",
    ],
    benefits: [
      "Protection against cyber threats and data breaches",
      "Regulatory compliance assurance",
      "Reduced risk of financial losses",
      "Enhanced customer trust",
      "Proactive threat detection and response",
    ],
    technologies: ["OWASP", "Nessus", "Burp Suite", "SIEM", "WAF", "Encryption"],
  },
  {
    id: "seo",
    icon: Search,
    illustration: SEOIllustration,
    title: "SEO Optimization",
    shortDescription: "Improve your online visibility and drive organic traffic with data-driven SEO strategies.",
    fullDescription:
      "Our SEO services are designed to improve your search engine rankings and drive quality organic traffic to your website. We use white-hat SEO techniques and data-driven strategies to ensure sustainable, long-term results that align with search engine guidelines.",
    features: [
      "Technical SEO Audit",
      "On-page Optimization",
      "Off-page Optimization",
      "Content Strategy",
      "Keyword Research",
      "Local SEO",
    ],
    benefits: [
      "Higher search engine rankings",
      "Increased organic traffic",
      "Better user experience",
      "Improved brand visibility",
      "Higher conversion rates",
    ],
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Moz", "Screaming Frog"],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    illustration: DigitalMarketingIllustration,
    title: "Digital Marketing",
    shortDescription: "Grow your brand with comprehensive digital marketing strategies that deliver results.",
    fullDescription:
      "Our digital marketing services cover the full spectrum of online marketing channels. From social media marketing and content marketing to paid advertising and email campaigns, we create integrated strategies that amplify your brand and drive measurable business growth.",
    features: [
      "Social Media Marketing",
      "Content Marketing",
      "Pay-per-Click Advertising",
      "Email Marketing Campaigns",
      "Influencer Marketing",
      "Analytics & Reporting",
    ],
    benefits: [
      "Increased brand awareness",
      "Better lead generation",
      "Improved customer engagement",
      "Higher ROI on marketing spend",
      "Data-driven decision making",
    ],
    technologies: ["Google Ads", "Facebook Ads", "Mailchimp", "HubSpot", "Hootsuite"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-8">
                Our Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 mb-5 tracking-tight"
            >
              Comprehensive{" "}
              <span className="gradient-text">IT Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
            >
              From web development to cybersecurity, we offer end-to-end IT services
              tailored to transform your business and drive measurable results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, serviceIndex) => {
        const Illustration = service.illustration;
        const isEven = serviceIndex % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${isEven ? "bg-white" : "bg-slate-50"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55 }}
                  viewport={{ once: true }}
                  className={!isEven ? "lg:order-2" : ""}
                >
                  {/* Service label */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
                      {service.title}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-snug">
                    {service.shortDescription}
                  </h2>

                  <p className="text-slate-500 mb-7 leading-relaxed text-sm">
                    {service.fullDescription}
                  </p>

                  {/* Features & Benefits in two columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-7">
                    <div>
                      <h3 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">
                        Benefits
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium border border-indigo-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Illustration */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.12 }}
                  viewport={{ once: true }}
                  className={`relative ${!isEven ? "lg:order-1" : ""}`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-white p-2">
                    <Illustration />
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-indigo-200 mb-10 max-w-xl mx-auto leading-relaxed">
              Let's discuss your project and create a tailored solution that meets
              your specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-md flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 border border-indigo-400 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200"
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
