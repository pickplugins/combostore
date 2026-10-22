"use client";

import { createContext, useContext } from "react";

const TermsGridContext = createContext(null);

export function TermsGridProvider({ value, children }) {
	return (
		<TermsGridContext.Provider value={value}>
			{children}
		</TermsGridContext.Provider>
	);
}

export function useTermsGrid() {
	return useContext(TermsGridContext);
}