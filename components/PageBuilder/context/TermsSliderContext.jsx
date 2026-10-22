"use client";

import { createContext, useContext } from "react";

const TermsSliderContext = createContext(null);

export function TermsSliderProvider({ value, children }) {
	return (
		<TermsSliderContext.Provider value={value}>
			{children}
		</TermsSliderContext.Provider>
	);
}

export function useTermsSlider() {
	return useContext(TermsSliderContext);
}