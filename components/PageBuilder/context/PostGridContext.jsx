"use client";

import { createContext, useContext } from "react";

const PostGridContext = createContext(null);

export function PostGridProvider({ value, children }) {
	return (
		<PostGridContext.Provider value={value}>
			{children}
		</PostGridContext.Provider>
	);
}

export function usePostGrid() {
	return useContext(PostGridContext);
}