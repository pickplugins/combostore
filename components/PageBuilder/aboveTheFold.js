"use client";

import { createContext, useContext } from "react";

/*
	Where a block sits relative to the fold, as PageBuilderContent marks it:
	'header' for the site header, 'hero' for the first block of the page's
	content, false for the rest. next/image lazy-loads by default, so the hero
	image - usually the page's Largest Contentful Paint - was not even
	requested until layout reached it (Lighthouse: "LCP request discovery").
	Image and logo blocks now load eagerly in the header and eagerly at high
	priority in the hero.

	False in the builder, which renders without PageBuilderContent.
*/
export const AboveTheFold = createContext(false);

export const useAboveTheFold = () => useContext(AboveTheFold);

/* next/image props for an image block in that position. */
export function imageLoadingProps(position) {
	if (position === 'hero') return { loading: "eager", fetchPriority: "high" };
	if (position === 'header') return { loading: "eager" };
	return {};
}
