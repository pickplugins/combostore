"use client";

import { createContext, useContext } from "react";

const FeatuerboxContext = createContext(null);

export function FeatuerboxProvider({ value, children }) {
	return (
		<FeatuerboxContext.Provider value={value}>
			{children}
		</FeatuerboxContext.Provider>
	);
}

export function useFeatuerbox() {
	return useContext(FeatuerboxContext);
}