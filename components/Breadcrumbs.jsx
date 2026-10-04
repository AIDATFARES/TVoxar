import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import JsonLd from "./JsonLd";
import { siteConfig } from "../lib/site-config";

export default function Breadcrumbs({ items = [] }) {
  const fullItems = [{ label: "Home", href: "/" }, ...items];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.domain}${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center space-x-2 text-xs sm:text-sm text-text-muted py-3 px-1 overflow-x-auto whitespace-nowrap"
      >
        {fullItems.map((item, idx) => {
          const isLast = idx === fullItems.length - 1;
          return (
            <div key={item.href || idx} className="flex items-center space-x-2">
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-text-muted flex-shrink-0" />}
              {isLast ? (
                <span className="text-primary-light font-medium flex items-center gap-1.5" aria-current="page">
                  {idx === 0 && <Home className="w-3.5 h-3.5" />}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-text-primary transition-colors flex items-center gap-1.5"
                >
                  {idx === 0 && <Home className="w-3.5 h-3.5" />}
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
