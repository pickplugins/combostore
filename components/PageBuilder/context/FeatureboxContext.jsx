"use client";

import { createContext, useContext } from "react";

const MenuContext = createContext(null);

export function MenuProvider({ value, children }) {
	return (
		<MenuContext.Provider value={value}>
			{children}
		</MenuContext.Provider>
	);
}

export function useMenu() {
	return useContext(MenuContext);
}