import { mkdirSync, writeFileSync } from "node:fs";

// One fixed joke, written byte-identically on every run: no randomness,
// no network, no clock. The judge reads exactly this text.
const JOKE = "My AI agent fixed the demo bug live — by deleting the demo.";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
