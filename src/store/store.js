import { create } from "zustand";

export const usePortfolioStore = create((set) => ({
  isOpen: true,
}));
