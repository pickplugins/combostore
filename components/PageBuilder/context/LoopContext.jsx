"use client";

import { createContext, useContext } from "react";

const LoopContext = createContext(null);

export function LoopProvider({ value, children }) {
	return (
		<LoopContext.Provider value={value}>
			{children}
		</LoopContext.Provider>
	);
}

export function useLoop() {
	return useContext(LoopContext);
}