"use client";

import React from "react";

import registry from "../extensions";

/*
	Mount point for the extensions' runtime components.

	Some of what an extension does is not a screen and not a block. Pricing
	the cart is the example: the rules have to be in effect wherever a cart
	exists, which is every page, and hanging that off a block the merchant may
	or may not have placed would make the discounts depend on page layout.

	A runtime component renders nothing. It subscribes to whatever it needs,
	does its work in effects, and publishes the result into a store.

	Rendered from app/layout.jsx, so it sits inside the same tree as the rest
	of the app and sees the same stores. It is a client component because
	those stores are; the layout itself stays a server component.
*/
const ExtensionsRuntime = () => {

	/*
		The manifests' own `enabled`, not the activation store.

		The on/off switch on Dashboard → Extensions is kept in the editing
		browser's localStorage, and reading it here would mean the first
		client render disagreed with the server markup - the hydration trap
		extensions/README.md documents. It is also the wrong question on the
		storefront: one admin's local preference must not decide whether a
		shopper gets their discount.
	*/
	const runtimes = React.useMemo(
		() => registry.runtimeComponents(registry.defaultActiveIds),
		[]
	);

	if (runtimes.length === 0) return null;

	return (
		<>
			{runtimes.map(({ id, Component }) => (
				<RuntimeBoundary key={id} id={id}>
					<Component />
				</RuntimeBoundary>
			))}
		</>
	);
};

/*
	One extension's runtime throwing must not blank the page it is mounted on.

	It renders nothing, so there is nothing to fall back to - the boundary
	exists purely to contain the failure and name the extension responsible,
	the same bargain the registry makes when it drops a bad manifest instead
	of taking the dashboard down.
*/
class RuntimeBoundary extends React.Component {

	constructor(props) {
		super(props);
		this.state = { failed: false };
	}

	static getDerivedStateFromError() {
		return { failed: true };
	}

	componentDidCatch(error) {
		console.warn(`[extensions] ${this.props.id}: runtime failed -`, error);
	}

	render() {
		return this.state.failed ? null : this.props.children;
	}
}

export default ExtensionsRuntime;
