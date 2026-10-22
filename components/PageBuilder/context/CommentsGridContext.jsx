"use client";

import { createContext, useContext } from "react";

const CommentsGridContext = createContext(null);

export function CommentsGridProvider({ value, children }) {
	return (
		<CommentsGridContext.Provider value={value}>
			{children}
		</CommentsGridContext.Provider>
	);
}

export function useCommentsGrid() {
	return useContext(CommentsGridContext);
}