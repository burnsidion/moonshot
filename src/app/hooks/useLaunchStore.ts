import { create } from "zustand";

type LaunchState = {
	hasLaunched: boolean;
	toggleLaunch: () => void;
};

export const useLaunchStore = create<LaunchState>((set) => ({
	hasLaunched: false,
	toggleLaunch: () => set((state) => ({ hasLaunched: !state.hasLaunched })),
}));
