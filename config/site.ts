import type { Metadata } from "next";

type SiteConfig = typeof siteConfig;

const siteConfig = {
  metadata: {
    title: "Next-Airbnb",
    description: "Airbnb clone built using the latest Next.js technologies."
  } satisfies Metadata,
} as const;

export { siteConfig, type SiteConfig };
