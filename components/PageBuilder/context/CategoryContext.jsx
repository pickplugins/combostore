"use client";

import { createContext, useContext } from "react";

const CategoryContext = createContext(null);

export function CategoryProvider({ value, children }) {
	return (
		<CategoryContext.Provider value={value}>
			{children}
		</CategoryContext.Provider>
	);
}

export function useCategory() {
	return useContext(CategoryContext);
}