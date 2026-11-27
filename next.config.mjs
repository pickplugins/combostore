import { storeImagePatterns } from './lib/imageOptimization.mjs';

/*
  The store's WordPress server (NEXT_PUBLIC_SERVER_URL in .env), whose images
  next/image resizes - http and https both (lib/imageOptimization.mjs).
*/
const storePatterns = storeImagePatterns();

/*
  Set by scripts/cloudflare.mjs (npm run cf:build / cf:preview / cf:deploy)
  for a Cloudflare Workers build through @opennextjs/cloudflare. A Vercel build
  never sets it, so everything below that depends on it leaves Vercel as it was.
*/
const forCloudflare = process.env.COMBOSTORE_TARGET === 'cloudflare';

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* A second instance beside the dev server needs its own build folder. */
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),

  // basePath: '/dashboard',

  publicRuntimeConfig: {
    APP_VERSION: process.env.npm_package_version,
  },

  /*
    app/api/tailwind-css compiles block classes into CSS through
    @tailwindcss/node, which optimizes via lightningcss. lightningcss loads a
    platform-specific `.node` binary with a computed require(), which the
    bundler cannot resolve or place in an ESM chunk:

      Module not found: Can't resolve '../lightningcss.' <dynamic> '.node'

    Leaving both packages external makes the route require them from
    node_modules at runtime instead, which is how native addons have to load.

    A Cloudflare Worker cannot load native addons at all, and has no
    node_modules to require from. There @tailwindcss/node is swapped for
    lib/tailwindPortable.js - the same compiler from the plain-JS `tailwindcss`
    package, without the lightningcss pass - and nothing is left external.
  */
  serverExternalPackages: forCloudflare ? [] : ['@tailwindcss/node', 'lightningcss'],

  ...(forCloudflare
    ? { turbopack: { resolveAlias: { '@tailwindcss/node': './lib/tailwindPortable.js' } } }
    : {}),

  /*
    The compile resolves `@import "tailwindcss/theme.css"` at runtime, from a
    string, so output file tracing never sees those files and leaves them out
    of the serverless bundle. The package itself still gets copied (it is a
    dependency of @tailwindcss/node), so on the server the exports field
    resolves ./theme.css to a file that is not there:

      Package path ./theme.css is exported from package
      /var/task/node_modules/tailwindcss, but no valid target file was found

    Locally there is no bundle and node_modules is whole, which is why this
    only ever shows up on a deploy. Naming the stylesheets here puts them in
    the function. Keep this in step with the imports in lib/generateTailwindCSS.js.
  */
  outputFileTracingIncludes: {
    '/api/tailwind-css': [
      './node_modules/tailwindcss/*.css',
      './node_modules/tailwindcss/package.json',
      /*
        Same blind spot, one layer down: lightningcss picks its native addon
        with `require(`lightningcss-${platform}`)`, a specifier the tracer
        cannot read, so the platform package can be left out as well. The glob
        only ever matches the one platform the build machine installed.
      */
      './node_modules/lightningcss-*/*',
      './node_modules/@tailwindcss/node/node_modules/lightningcss-*/*',
    ],
  },
  images: {
    /*
      Resized images are cached for 31 days (Next's default is 4 hours).
      Uploads keep their URL for life - a new image is a new file - and on
      Vercel every cache miss counts as a billed transformation.
    */
    minimumCacheTTL: 2678400,
    remotePatterns: [
      ...storePatterns,

      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },

    ],
  },
};

export default nextConfig;
