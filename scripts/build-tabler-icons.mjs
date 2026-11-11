/*
	Writes lib/icons/tabler-icons.json: the drawing data of every
	@tabler/icons-react icon, keyed by its export name, for the storefront's
	icon blocks (components/icons/TablerIcon.jsx).

	Why: blocks name their icons as strings ("IconUser"), and the views used to
	look them up with `import * as TablerIcons from '@tabler/icons-react'`,
	which put all ~6,000 icons into every storefront page's JavaScript
	(PageSpeed: ~630 KB of script, ~1 s of main-thread work). Now the server
	reads the icons a page uses from this file and sends only those.

	Format: { "IconUser": [type, "user", node], "IconNumber123": "IconAlias" }
	  type  0 outline, 1 filled
	  node  the icon's elements, [[tag, attrs], ...], as Tabler draws them
	  a string value is an alias: the name of the entry it draws.

	Runs before `npm run dev` and `npm run build` (package.json predev /
	prebuild), so it always matches the installed Tabler version. The output
	is generated: it is in .gitignore.
*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
/* Resolved the way Node resolves it, so a hoisted or linked node_modules works too. */
const esm = path.join(path.dirname(createRequire(import.meta.url).resolve('@tabler/icons-react/package.json')), 'dist/esm');
const out = path.join(root, 'lib/icons/tabler-icons.json');

const icons = {};

/* Each icons/<File>.mjs: `const __iconNode = [...]; const X = createReactComponent("outline", "user", "User", __iconNode);` */
for (const file of fs.readdirSync(path.join(esm, 'icons'))) {
	if (!/^Icon\w+\.mjs$/.test(file)) continue;
	const src = fs.readFileSync(path.join(esm, 'icons', file), 'utf8');
	const m = src.match(/const __iconNode = (\[[\s\S]*?\]);\s*const \w+ = createReactComponent\("(outline|filled)", "([^"]+)"/);
	if (!m) throw new Error(`Unexpected icon module format: ${file}`);
	/* React keys are added back when the icon is drawn. */
	const node = JSON.parse(m[1]).map(([tag, { key, ...attrs }]) => [tag, attrs]);
	icons[file.slice(0, -4)] = [m[2] === 'filled' ? 1 : 0, m[3], node];
}

/* The package's export names, some of them aliases: `export { default as Icon123, default as IconNumber123 } from './icons/IconNumber123.mjs'`. */
const index = fs.readFileSync(path.join(esm, 'tabler-icons-react.mjs'), 'utf8');
for (const [, names, file] of index.matchAll(/export \{([^}]*)\} from '\.\/icons\/(Icon\w+)\.mjs'/g)) {
	for (const [, name] of names.matchAll(/default as (Icon\w+)/g)) {
		if (name !== file && icons[file] && !icons[name]) icons[name] = file;
	}
}

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(icons));
console.log(`tabler-icons.json: ${Object.keys(icons).length} icons`);
