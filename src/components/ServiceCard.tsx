"use client";

import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  href?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features = [],
  href = "/services",
}: ServiceCardProps) {
  return (
    <div className="group relative p-7 rounded-2xl bg-white border border-slate-200 hover:border-indigo-200 card-hover shadow-sm">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors duration-300">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-1.5 mb-5">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Learn More Link */}
      <a
        href={href}
        className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
      >
        Learn more
        <svg
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}
