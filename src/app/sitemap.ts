import { MetadataRoute } from "next";

const locales = ["en", "fr", "ru"];
const baseUrl = "https://myeffl.com";

const slugs = ["confident-in-meetings","english-job-interview","business-email-templates"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/packages", "/blog", "/contact", "/faq",
    "/legal/terms", "/legal/privacy", "/legal/refund"];
  const blogPages = slugs.map(s => `/blog/${s}`);
  const allPages = [...pages, ...blogPages];

  return locales.flatMap(locale =>
    allPages.map(page => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly" as const,
      priority: page === "" ? 1 : page.includes("/blog/") ? 0.6 : 0.8,
    }))
  );
}
