// ============================================================
// tools/build-ratings.mjs
//
// ratings.json is the hand-authored source of truth for the six
// game ratings. Browsers cannot load a .json file via a <script>
// tag, so this tiny script mirrors it into ratings.js, which the
// page loads after people.js.
//
// Run:  node tools/build-ratings.mjs
// ============================================================

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function main() {
    const ratings = JSON.parse(
        await fs.readFile(path.join(ROOT, "ratings.json"), "utf8")
    );

    const output = [
        "// ==========================================================",
        "// ratings.js",
        "//",
        "// GENERATED FILE - do not edit by hand.",
        "// Source: ratings.json (hand-authored game data).",
        "// Regenerate with:  node tools/build-ratings.mjs",
        "// ==========================================================",
        "",
        "const RATINGS = " + JSON.stringify(ratings, null, 4) + ";",
        "",
        "// Allow tools/build-ratings.mjs style tooling to read this file too.",
        "if (typeof module !== \"undefined\") {",
        "    module.exports = RATINGS;",
        "}",
        ""
    ].join("\n");

    await fs.writeFile(path.join(ROOT, "ratings.js"), output, "utf8");
    console.log(`Wrote ratings.js with ${Object.keys(ratings).length} entries.`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
