import { fileURLToPath, URL } from "node:url";
import { defineConfig, includeIgnoreFile } from "eslint/config";

// Configs
import fdawgs from "./src/index.mjs";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

const config = defineConfig([
	// Include ignore file to prevent linting of files in .gitignore
	includeIgnoreFile(gitignorePath),
	{
		files: ["**/*.js"],
		extends: [fdawgs],
	},
]);

export default config;
