"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import JsonLd from "./JsonLd";

export default function FaqAccordion({ faqs = [], showCategories = false }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(faqs.map((f) => f.category).filter(Boolean))];

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === selectedCategory);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Structured Data for FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="w-full">
      <JsonLd data={faqSchema} />

      {/* Optional Category Pills */}
      {showCategories && categories.length > 2 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-glow"
                  : "bg-surface text-text-secondary hover:text-white border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-surface border-primary/50 shadow-card"
                  : "bg-surface/60 border-border hover:border-primary/30 hover:bg-surface/80"
              }`}
            >
              <button
                onClick={() => toggleItem(idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 pr-4">
                  <HelpCircle
                    className={`w-5 h-5 flex-shrink-0 transition-colors ${
                      isOpen ? "text-primary-light" : "text-text-muted"
                    }`}
                  />
                  <h3 className="font-bold text-sm sm:text-base text-white">
                    {faq.q}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-primary-light" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border/50">
                  <p>{faq.a}</p>
                  {faq.category && (
                    <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-wider text-primary-light bg-primary/10 px-2 py-0.5 rounded">
                      Category: {faq.category}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
