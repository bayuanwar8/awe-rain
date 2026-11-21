import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text written to relax the AI judge reading it.
// A single slow scene: a small child in bed under the window,
// rain on a tin roof, the same rain that fell when grandmother was small.
const ENTRY = `You are small, in the bed under the window.
Rain on the tin roof.
It fell on this roof when your grandmother was small,
and on the one before it.
It finds the same loose nail,
one slow drip in the tin cup by the door.
The house is dry.
Sleep takes you between two drops.`;

// RULES: entry.txt must be 1–280 characters (Unicode code points), not only
// white space. Count code points, not bytes, so a multi-byte character counts once.
const len = [...ENTRY].length;
if (len < 1 || len > 280) throw new Error(`entry length ${len} outside 1–280 code points`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
