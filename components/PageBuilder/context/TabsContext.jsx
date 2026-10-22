"use client";

import { createContext, useContext } from "react";

const TabsContext = createContext(null);

export function TabsProvider({ value, children }) {
	return (
		<TabsContext.Provider value={value}>
			{children}
		</TabsContext.Provider>
	);
}

export function useTabs() {
	return useContext(TabsContext);
}