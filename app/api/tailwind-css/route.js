import { generateTailwindCSS, normalizeClasses } from "../../../lib/generateTailwindCSS";

/**
 * Compile a set of Tailwind class names into a stylesheet.
 *
 * The editor calls this on save: block data holds class strings that Tailwind
 * never sees at build time, so the CSS for a template has to be generated at
 * save time and stored with it. lib/generateTailwindCSS.js does the work and
 * can only run in Node, which is why this is a route handler and not something
 * the client imports directly.
 *
 * POST { classes: string | string[], preflight?: boolean, minify?: boolean }
 *   -> { success: true, css, count, length }
 *
 * `count` is how many distinct candidates were compiled and `length` the size
 * of the stylesheet, both handy for a save confirmation.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// A guard against a runaway payload, not a security boundary. Measured against
// the largest template in components/PageBuilder/templates, whose whole class
// list is a few tens of KB.
const MAX_CLASSES_LENGTH = 500_000;

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, message: "Request body is not valid JSON." },
      { status: 400 }
    );
  }

  const { classes, preflight = false, minify = true } = body ?? {};

  if (typeof classes !== "string" && !Array.isArray(classes)) {
    return Response.json(
      { success: false, message: "Send `classes` as a string or an array of strings." },
      { status: 400 }
    );
  }

  const asText = Array.isArray(classes) ? classes.join(" ") : classes;

  if (asText.length > MAX_CLASSES_LENGTH) {
    return Response.json(
      {
        success: false,
        message: `Class list is ${asText.length} characters, over the ${MAX_CLASSES_LENGTH} limit.`,
      },
      { status: 413 }
    );
  }

  try {
    const css = await generateTailwindCSS(classes, {
      preflight: Boolean(preflight),
      minify: Boolean(minify),
    });

    return Response.json({
      success: true,
      css,
      count: normalizeClasses(classes).length,
      length: css.length,
    });
  } catch (error) {
    // A bad candidate does not throw -- Tailwind just skips it -- so reaching
    // here means the compiler itself failed, and the message is worth showing.
    console.error("tailwind-css: compile failed", error);

    return Response.json(
      { success: false, message: error?.message ?? "Could not compile the stylesheet." },
      { status: 500 }
    );
  }
}
