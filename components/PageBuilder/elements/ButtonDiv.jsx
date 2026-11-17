'use client'

import React from "react";

/*
	A Button block with no link (ButtonMarkup's non-link case). It stays a
	<div> - a real <button> would change the default display, width and font
	of every existing button, and the icon / label <div>s inside are not valid
	in a <button> - but it now acts like one: role="button", reachable with
	Tab, and Enter or Space clicks it. It used to be a bare <div> that
	keyboard users could not reach, so a no-link Button used to open or close
	a popup (or as any other click target) only worked with a mouse.

	The click it fires bubbles like a mouse click, so the document-level
	listeners those features use (popup triggers, `.popup-close`) see it.

	A client component of its own because ButtonView may render on the
	server, where an onKeyDown handler cannot be passed.
*/
const ButtonDiv = React.forwardRef(function ButtonDiv({ children, onKeyDown, ...props }, ref) {
	return (
		<div
			ref={ref}
			role="button"
			tabIndex={0}
			{...props}
			onKeyDown={(e) => {
				onKeyDown?.(e);
				if (e.defaultPrevented || e.target !== e.currentTarget) return;
				if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
					/* Space would otherwise scroll the page. */
					e.preventDefault();
					e.currentTarget.click();
				}
			}}
		>
			{children}
		</div>
	);
});

export default ButtonDiv;
