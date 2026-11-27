import fs from "fs";
import path from "path";

function main() {
  const inputPath = path.join(process.cwd(), "POSTS.json");
  const outputDir = "/output";
  const outputPath = path.join(outputDir, "POSTS.json");
  
  if (!fs.existsSync(inputPath)) {
    console.error("POSTS.json not found");
    process.exit(1);
  }
  
  fs.mkdirSync(outputDir, { recursive: true });
  fs.copyFileSync(inputPath, outputPath);
  console.log("POSTS.json copied to /output");
}

main();
