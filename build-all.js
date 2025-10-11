import { execSync } from "child_process";
import fs from "fs";

const REPO = "sLogicAndSetTheory2026";

const decks = fs
  .readdirSync(process.cwd(), { withFileTypes: true })
  .filter(dirent => dirent.isFile() && dirent.name.endsWith(".md"))
  .map(dirent => dirent.name);

if (decks.length === 0) {
  console.error("No .md decks found in the current directory.");
  process.exit(1);
}

fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist");

for (const file of decks) {
    const base = file.replace(/\.md$/, "");
    console.log(`\n▶ Building ${file} ...`);
    execSync(
        `npx slidev build ${file} --base "/${REPO}" -o dist/${base}`,
        { stdio: "inherit" }
    );

    fs.renameSync(`dist/${base}/index.html`, `dist/${base}/${base}.html`);

    fs.cpSync(`dist/${base}`, "dist", { recursive: true });
}

// SPA fallback for deep links like /2
fs.copyFileSync(`dist/${base}/index.html`, `dist/${base}/404.html`);

