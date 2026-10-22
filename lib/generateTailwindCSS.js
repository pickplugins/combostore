/**
 * Build a stylesheet from a set of Tailwind class names.
 *
 * SERVER ONLY. `@tailwindcss/node` is the Node build of the Tailwind compiler:
 * it imports `module` and `url`, resolves `@import` through enhanced-resolve,
 * and optimizes through lightningcss, which ships as a native `.node` binary.
 * None of that can run in a browser, so this module must only be reached from
 * a route handler or other server code -- importing it from a "use client"
 * component breaks the client bundle. app/api/tailwind-css/route.js is the way
 * in from the editor.
 *
 * Three things about the compiler API that are easy to get wrong:
 *
 *   1. `optimize` comes from `@tailwindcss/node`, not from `tailwindcss`. The
 *      `tailwindcss` package does not export it, so importing it from there
 *      silently yields `undefined` and calling it throws.
 *   2. `optimize()` returns `{ code, map }`, not a string.
 *   3. `compile()` needs `{ base, onDependency }`. Called with only the CSS it
 *      throws "Cannot destructure property 'base' of 'undefined'". `base` is
 *      the directory `@import` specifiers resolve against, so it has to be the
 *      project root for `@import "tailwindcss"` to find node_modules.
 *
 * A compiler is built per call on purpose. `build()` is incremental: a
 * compiler remembers every candidate it has already seen and returns the CSS
 * for all of them, so reusing one across saves would make each template's
 * stylesheet also contain the classes of every template saved before it.
 *
 * The default input is theme + utilities, without preflight. These stylesheets
 * are stored per template and injected into a storefront that already has its
 * own base styles, and preflight would reset that page's typography, margins
 * and form controls. Tailwind 4 emits only the theme variables the chosen
 * utilities actually reference, so the theme import costs little: a realistic
 * template's worth of classes comes out around 3KB, against 8KB for the full
 * `@import "tailwindcss"`. Pass `preflight: true` when the CSS has to stand on
 * its own.
 */

import { compile, optimize } from "@tailwindcss/node";

const UTILITIES_ONLY = `@import "tailwindcss/theme.css";
@import "tailwindcss/utilities.css";
`;

const WITH_PREFLIGHT = `@import "tailwindcss";
`;

/**
 * Generate CSS from Tailwind class names.
 *
 * @param {string|string[]} classes Space separated class names, or an array.
 * @param {object} [options]
 * @param {boolean} [options.preflight=false] Include Tailwind's base reset.
 * @param {boolean} [options.minify=true] Minify through lightningcss.
 * @param {string} [options.base=process.cwd()] Directory `@import` resolves against.
 * @param {string} [options.input] Replace the generated input stylesheet entirely.
 * @returns {Promise<string>} The stylesheet, or "" when there is nothing to build.
 */
export async function generateTailwindCSS(classes, options = {}) {
  const {
    preflight = false,
    minify = true,
    base = process.cwd(),
    input,
  } = options;

  const candidates = normalizeClasses(classes);

  if (!candidates.length) {
    return "";
  }

  const compiler = await compile(input ?? (preflight ? WITH_PREFLIGHT : UTILITIES_ONLY), {
    base,
    onDependency() {},
  });

  const { code } = optimize(compiler.build(candidates), { minify });

  return code.trim();
}

/**
 * Split a class string (or array) into unique, non-empty candidates.
 *
 * @param {string|string[]} classes
 * @returns {string[]}
 */
export function normalizeClasses(classes) {
  if (Array.isArray(classes)) {
    classes = classes.join(" ");
  }

  if (typeof classes !== "string") {
    return [];
  }

  return [
    ...new Set(
      classes
        .split(/\s+/)
        .map((item) => item.trim())
        .filter(Boolean)
    ),
  ];
}
