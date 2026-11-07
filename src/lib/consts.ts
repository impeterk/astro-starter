import { loadEnv } from "vite";

// export const SITE_URL =
//   process.env.SITE_URL || "https://astro-starter.peterk.dev";
// let SITE_URL = ''
export const PORT = process.env.NODE_ENV === 'development' ? Number((loadEnv(process.env.NODE_ENV!, process.cwd(), "")).PORT) : Number(process.env.PORT) || 4321;
export const SITE_TITLE = "Astro Starter";
export const SITE_DESCRIPTION = "astro + react + shadcn starter";
export const BRAND_NAME = "Peter.dev Astro starter";

export const SITE_URL = process.env.NODE_ENV === 'development' ? (loadEnv(process.env.NODE_ENV!, process.cwd(), "")).SITE_URL : process.env.SITE_URL || "https://astro-starter.peterk.dev";