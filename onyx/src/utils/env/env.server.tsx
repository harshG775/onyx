import { z } from "zod";

// server env
const envSchema = z.object({
    CONSUMET_BASEURL: z.string(),
});
export const envServer = envSchema.parse({
    CONSUMET_BASEURL: process.env.CONSUMET_BASEURL,
});
