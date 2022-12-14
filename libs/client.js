import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "isak-portfolio",
  apiKey: process.env.API_KEY,
});
