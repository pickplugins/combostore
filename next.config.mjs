/** @type {import('next').NextConfig} */
const nextConfig = {
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
  */
  serverExternalPackages: ['@tailwindcss/node', 'lightningcss'],

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
    remotePatterns: [

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
      {
        protocol: 'https',
        hostname: 'server.kidobazar.com',
      },

    ],
  },
};

export default nextConfig;
