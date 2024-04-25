import { create } from "zustand";
import i18n from "@/lib/i18n"; // Import your i18n instance

export const useTorreStore = create((set) => ({
  activeStep: 0,
  nextStep: () =>
    set((state) => ({
      activeStep: state.activeStep >= 3 ? 0 : state.activeStep + 1,
    })),
  prompts: [],
  setPrompts: (word) =>
    set((state) => {
      const updatedPrompts = [...state.prompts];
      updatedPrompts.push(word);
      return {
        prompts: updatedPrompts,
      };
    }),
  author: "",
  setAuthor: (name) => set({ author: name }),
  roll: 0,
  setRoll: (num) => set({ roll: num }),
  cuento: "",
  setCuento: (text) => set({ cuento: text }),
  allCuentos: null,
  setAllCuentos: (json) => set({ allCuentos: json }),
  error: null,
  setError: (error) => set({ error: error }),
  // Language settings
  language: "es", // Default language is English
  setLanguage: (lang) => {
    set({ language: lang });
    i18n.changeLanguage(lang); // Update i18n language
  },
}));
