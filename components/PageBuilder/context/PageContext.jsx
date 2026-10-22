"use client";

import { createContext, useContext } from "react";

const PageContext = createContext(null);

export function PageProvider({ value, children }) {
	return (
		<PageContext.Provider value={value}>
			{children}
		</PageContext.Provider>
	);
}

export function usePage() {
	return useContext(PageContext);
}