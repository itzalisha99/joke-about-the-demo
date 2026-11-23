import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "My AI agent fixed the demo bug live — by deleting the demo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
