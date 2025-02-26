import { create } from "zustand";

interface LanguageStoreState {
  language: string;
  toggleLanguage: () => void;
}

const useLanguageStore = create<LanguageStoreState>((set) => ({
  language: localStorage.getItem("language") || "en",
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === "en" ? "ger" : "en",
    })),
}));

export default useLanguageStore;
