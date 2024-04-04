import { create } from "zustand";

interface SideBareStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSideBar = create<SideBareStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSideBar;
