"use client";

import { createContext, useContext } from "react";

const CollectionsContext = createContext(null);

export function CollectionsProvider({ value, children }) {
	return (
		<CollectionsContext.Provider value={value}>
			{children}
		</CollectionsContext.Provider>
	);
}

export function useCollections() {
	return useContext(CollectionsContext);
}