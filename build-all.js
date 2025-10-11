import { execSync } from "child_process";
import fs from "fs";

const REPO = "sLogicAndSetTheory2026";

const decks = fs
  .readdirSync(".")
  .filter(f => /^\d{2}[-_].*\.md$/.test(f));

fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist");

for (const file of decks) {
  const base = file.replace(/\.md$/, "");
  console.log(`\n▶ Building ${file} ...`);
  execSync(
    `npx slidev build ${file} --base "/${REPO}/${base}/" -o dist/${base}`,
    { stdio: "inherit" }
  );
  // SPA fallback for deep links like /2
  fs.copyFileSync(`dist/${base}/index.html`, `dist/${base}/404.html`);
}

// create simple index.html linking to all decks
const indexHtml = `<!doctype html><html><head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Logic and Set Theory 2026</title>
<style>body{font-family:sans-serif;max-width:700px;margin:3em auto;line-height:1.6}
a{color:#2563eb;text-decoration:none}a:hover{text-decoration:underline}</style>
</head><body>
<h1>Logic and Set Theory 2026 — Slide Decks</h1>
<ul>
${decks.map(f => {
  const n = f.replace(/\.md$/, "");
  const title = n.replace(/^\d{2}[-_]/, "").replace(/[-_]/g, " ");
  return `<li><a href="./${n}/">${title}</a></li>`;
}).join("\n")}
</ul>
</body></html>`;
fs.writeFileSync("dist/index.html", indexHtml);
fs.copyFileSync("dist/index.html", "dist/404.html");

console.log("\n✅ All decks built successfully.");
