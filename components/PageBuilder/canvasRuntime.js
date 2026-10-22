/*
  Pieces of the canvas runtime that both the editor document and the canvas
  document need to agree on.

  They live in a module of their own because the two sides are wired up in
  different places: app/builder/layout.jsx loads the Tailwind browser build
  into the editor document, CanvasFrame loads the same build into the frame,
  and EditorActions and CanvasFrame both have to know which <style> holds the
  compiled stylesheet - one writes it, the other has to leave it alone while
  cloning the editor's own sheets.
*/


/*
  The Tailwind compiler, in the browser.

  Block classes live in page data rather than in source files, so Tailwind
  cannot scan them at build time and the editor compiles them at runtime
  instead. The build watches the DOM of whichever document it was loaded
  into, which is why the canvas frame loads its own copy: once the blocks
  render inside the frame, the editor document's copy cannot see them.

  Pinned to the v4 major the project builds with (see `tailwindcss` in
  package.json) so the canvas and the saved stylesheet come from the same
  generation of the compiler.
*/
export const TAILWIND_BROWSER_SRC = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";


/* The <style> the compiled stylesheet lives in while the editor is open. */
export const GENERATED_STYLE_ID = "combo-generated-css";
