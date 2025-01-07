import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to capitalize the first letter of a string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to create directory and page.tsx file
function createDirWithPage(dirName) {
  const dirPath = path.join(__dirname, "app", dirName);
  const filePath = path.join(dirPath, "page.tsx");

  // Capitalize directory name
  const componentName = capitalize(dirName);

  // Placeholder content
  const placeholderContent = `
const ${componentName}Page = () => {
  return <div>${componentName}Page</div>;
};

export default ${componentName}Page;
  `.trim();

  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }

  // Write placeholder content to page.tsx
  fs.writeFileSync(filePath, placeholderContent, "utf8");
  console.log(`Created file: ${filePath}`);
}

// Get directory names from command-line arguments
const dirs = process.argv.slice(2);
if (dirs.length === 0) {
  console.log("Please provide at least one directory name.");
} else {
  dirs.forEach(createDirWithPage);
}
