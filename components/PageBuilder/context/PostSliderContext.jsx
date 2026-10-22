"use client";

import { createContext, useContext } from "react";

const PostSliderContext = createContext(null);

export function PostSliderProvider({ value, children }) {
	return (
		<PostSliderContext.Provider value={value}>
			{children}
		</PostSliderContext.Provider>
	);
}

export function usePostSlider() {
	return useContext(PostSliderContext);
}