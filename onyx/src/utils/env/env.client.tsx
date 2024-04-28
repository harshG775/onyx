import { z } from "zod";
const envClientSchema = z.object({
    NEXT_PUBLIC_TMDB_BASE_URL: z.string(),
    NEXT_PUBLIC_API_KEY: z.string(),
    NEXT_PUBLIC_IFRAME_BASE_URL: z.string(),
});
export const envClient = envClientSchema.parse({
    NEXT_PUBLIC_TMDB_BASE_URL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    NEXT_PUBLIC_IFRAME_BASE_URL: process.env.NEXT_PUBLIC_IFRAME_BASE_URL,
});
