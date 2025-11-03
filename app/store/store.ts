import { create } from "zustand";

interface StoreProps {
  expanded: boolean;
  expand: () => void;
  collapse: () => void;
}

export const useStore = create<StoreProps>((set) => ({
  expanded: false, // sidebar is collapsed by default
  expand: () => set({ expanded: true }),
  collapse: () => set({ expanded: false }),
}));