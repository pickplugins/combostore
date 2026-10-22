import { create } from "zustand";

export const useProductStore = create((set) => ({
  activeVariation: null,
  activeVariationAttributes: {},

  setActiveVariation: (variation) =>
    set({
      activeVariation: variation,
      activeVariationAttributes: variation?.attributes || {},
    }),

  clearSelectedVariation: () =>
    set({
      activeVariation: null,
      activeVariationAttributes: {},
    }),
}));