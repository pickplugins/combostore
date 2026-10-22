"use client";

import { createContext, useContext } from "react";

const CommentContext = createContext(null);

export function CommentProvider({ value, children }) {
	return (
		<CommentContext.Provider value={value}>
			{children}
		</CommentContext.Provider>
	);
}

export function useComment() {
	return useContext(CommentContext);
}