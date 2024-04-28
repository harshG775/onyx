import { envServer } from "@/utils/env/env.server";
import axios from "axios";
const { CONSUMET_BASEURL } = envServer;
export const Consumet = axios.create({
    baseURL: CONSUMET_BASEURL,
    headers: {
        accept: "application/json",
        "content-type": "application/json",
        // Authorization: `Bearer ${"token"}`,
    },
    timeout: 5000,
});
