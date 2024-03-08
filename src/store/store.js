import { create } from "zustand";

export const useTorreStore = create((set) => ({
  activeStep: 0,
  nextStep: () =>
    set((state) => ({
      activeStep: state.activeStep >= 3 ? 0 : state.activeStep + 1,
    })),
  currentValue: "",
  setCurrentValue: (value) => set({ currentValue: value }),
  prompts: [],
  addPrompts: (word) =>
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
}));
