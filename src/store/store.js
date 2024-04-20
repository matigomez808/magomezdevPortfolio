import { create } from "zustand";

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
  cuento : "",
  setCuento: (text) => set({cuento: text}),
  allCuentos: null,
  setAllCuentos: (json) => set({allCuentos : json}),
  error : null,
  setError: (error) => set({error: error})
}));
