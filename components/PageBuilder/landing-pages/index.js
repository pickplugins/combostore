/**
 * Every one-page product landing page in this folder, as one list.
 *
 * These are campaign pages, not site templates: one product, one page, built to
 * be dropped whole onto the canvas. Where templates/ ships a 16 entry set (14
 * page types plus the header and footer parts), a file here default-exports an
 * ARRAY of landing page objects, each:
 *
 *   { title, description, thumbnail, meta, content }
 *
 * `content` is an array of builder blocks, and the `title`/`content` pair is
 * the same shape ready-layouts/ uses, so a picker can map over `landingPages`
 * and drop one in with `handlePasteBlock(page.content)`. If one is saved
 * through the API instead, a page's content is stored as a JSON string, so
 * whoever saves it must `JSON.stringify(page.content)` on the way out.
 *
 * None of these carry a siteHeader or siteFooter. Those are template parts,
 * applied once for the whole site, and a page carrying its own copy would
 * double up with them.
 *
 * Nothing consumes this barrel yet.
 */

import KidsBuildingBlocks from './KidsBuildingBlocks';

var landingPages = [...KidsBuildingBlocks];

export default landingPages;
