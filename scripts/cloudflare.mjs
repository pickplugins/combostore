/*
	Runs the @opennextjs/cloudflare CLI with COMBOSTORE_TARGET=cloudflare, which
	next.config.mjs reads to make a Workers build (see lib/tailwindPortable.js).
	A plain `next build` - Vercel's - never has it.

	  node scripts/cloudflare.mjs build      (npm run cf:build)
	  node scripts/cloudflare.mjs preview    (any opennextjs-cloudflare command)

	Done here rather than as `COMBOSTORE_TARGET=cloudflare opennextjs-cloudflare
	build` in package.json so the same script works in cmd, PowerShell and sh.
*/

import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
const result = spawnSync('npx', ['--no-install', 'opennextjs-cloudflare', ...args], {
	stdio: 'inherit',
	shell: process.platform === 'win32',
	env: { ...process.env, COMBOSTORE_TARGET: 'cloudflare' },
});

if (result.error) {
	console.error(result.error.message);
	process.exit(1);
}
process.exit(result.status ?? 1);
