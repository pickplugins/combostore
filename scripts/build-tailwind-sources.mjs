/*
	Copies Tailwind's own stylesheets (theme, utilities, preflight, index) into
	lib/tailwindSources.json, for lib/tailwindPortable.js.

	The page and editor styles are compiled at request time
	(lib/generateTailwindCSS.js). On Vercel that runs on @tailwindcss/node, which
	reads these files from node_modules. A Cloudflare Worker has no node_modules
	and no file system to read them from, so the Cloudflare build bundles them
	as data instead. Generated on every dev / build (npm predev, prebuild) so it
	always matches the installed tailwindcss.
*/

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const root = process.cwd();
const require = createRequire(path.join(root, 'package.json'));
const dir = path.dirname(require.resolve('tailwindcss/package.json'));
const { version } = require('tailwindcss/package.json');

const files = {};
for (const name of ['index.css', 'theme.css', 'utilities.css', 'preflight.css']) {
	files[name] = fs.readFileSync(path.join(dir, name), 'utf8');
}

const out = path.join(root, 'lib', 'tailwindSources.json');
fs.writeFileSync(out, JSON.stringify({ version, files }));
console.log(`tailwind sources: ${Object.keys(files).length} stylesheets from tailwindcss ${version} -> lib/tailwindSources.json`);
