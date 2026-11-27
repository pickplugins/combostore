/*
	`npm run build`, whichever host runs it.

	  - Cloudflare Workers Builds (WORKERS_CI=1, set by Cloudflare on every
	    build) gets the Workers build - scripts/cloudflare.mjs build, the same
	    as `npm run cf:build` - so a Worker whose build command was left at the
	    default `npm run build` still produces .open-next for its deploy step.
	  - Everywhere else (Vercel, local) it is a plain `next build`, as before.

	The OpenNext build itself runs `npm run build` to compile the app, with
	COMBOSTORE_TARGET=cloudflare already set (scripts/cloudflare.mjs). That
	inner call takes the `next build` branch, so this never loops.
*/

import { spawnSync } from 'node:child_process';

const onWorkersBuilds = process.env.WORKERS_CI === '1';
const insideCloudflareBuild = process.env.COMBOSTORE_TARGET === 'cloudflare';

const [command, args] = onWorkersBuilds && !insideCloudflareBuild
	? ['node', ['scripts/cloudflare.mjs', 'build']]
	: ['npx', ['--no-install', 'next', 'build']];

if (command === 'node') console.log('Cloudflare Workers Builds detected (WORKERS_CI=1): building for Workers.');

const result = spawnSync(command, args, {
	stdio: 'inherit',
	shell: process.platform === 'win32',
	env: process.env,
});

if (result.error) {
	console.error(result.error.message);
	process.exit(1);
}
process.exit(result.status ?? 1);
