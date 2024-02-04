import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Docion",
  author: "bikrantjung",
  description:
    "An all in one collaborative document editing, and notes taking app.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "",
  },
  links: {
    github: "https://github.com/BikrantJung",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
