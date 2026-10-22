"use client";

import { createContext, useContext } from "react";

const PostContext = createContext(null);

export function PostProvider({ value, children }) {
	return (
		<PostContext.Provider value={value}>
			{children}
		</PostContext.Provider>
	);
}

export function usePost() {
	return useContext(PostContext);
}