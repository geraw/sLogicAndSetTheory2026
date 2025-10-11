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

// Redirect to 99-index.md if it exists
if (fs.existsSync("99-index.md")) {
    // console.log(`\n▶ Building index.md ...`);
    // execSync(
    //     `npx slidev build index.md --base "/${REPO}/" -o dist/index`,
    //     { stdio: "inherit" }
    // );

    // Add a redirect from /index.html to index/index.html
    fs.writeFileSync(
        "dist/index.html",
        `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=99-index/index.html"></head><body>If you are not redirected automatically, follow this <a href="99-index/index.html">link to the main page</a>.</body></html>`
    );

    // // Copy dist/index to dist recursively
    // fs.cpSync("dist/index", "dist", { recursive: true });
    



} else {
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

    console.log("\n✅ Simple index.html created successfully.");
}
console.log("\n✅ All decks built successfully.");
