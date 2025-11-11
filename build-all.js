import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const REPO = "sLogicAndSetTheory2026";

const decks = fs
  .readdirSync(process.cwd(), { withFileTypes: true })
  .filter(dirent => dirent.isFile() && dirent.name.endsWith(".md"))
  .map(dirent => dirent.name);

if (decks.length === 0) {
  console.error("No .md decks found in the current directory.");
  process.exit(1);
}

// Create dist directory if it doesn't exist
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

function needsRebuild(sourceFile, outputDir) {
  const outputHtml = path.join(outputDir, `${path.basename(sourceFile, '.md')}.html`);
  
  // If output doesn't exist, rebuild
  if (!fs.existsSync(outputHtml)) {
    return true;
  }
  
  // Compare modification times
  const sourceMtime = fs.statSync(sourceFile).mtime;
  const outputMtime = fs.statSync(outputHtml).mtime;
  
  return sourceMtime > outputMtime;
}

let builtCount = 0;
let skippedCount = 0;

for (const file of decks) {
    const base = file.replace(/\.md$/, "");
    const outputDir = `dist/${base}`;
    
    if (!needsRebuild(file, outputDir)) {
      console.log(`⏭️  Skipping ${file} (up to date)`);
      skippedCount++;
      continue;
    }
    
    console.log(`\n▶ Building ${file} ...`);
    
    // Remove old build output for this deck
    fs.rmSync(outputDir, { recursive: true, force: true });
    
    execSync(
        `npx slidev build ${file} --base "/${REPO}" -o ${outputDir}`,
        { stdio: "inherit" }
    );

    fs.renameSync(`${outputDir}/index.html`, `${outputDir}/${base}.html`);

    fs.cpSync(outputDir, "dist", { recursive: true });
    builtCount++;
}

// SPA fallback for deep links
if (fs.existsSync("dist/index.html")) {
  fs.copyFileSync("dist/index.html", "dist/404.html");
}

console.log(`\n✅ Build complete: ${builtCount} built, ${skippedCount} skipped`);