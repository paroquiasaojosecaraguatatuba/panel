import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type User = {
  name: string;
  email: string;
  role: "user" | "admin" | "viewer";
};

interface States {
  isLogged: boolean;
  token: string | null;
  user: User;
  initialized: boolean;
  wasCodeSent: boolean;
  email: string;
  sessionId: string;
  showOnboarding: boolean;
  onboardingName: string;
  setLogged: (data: {
    token?: string;
    user: User;
    initialized?: boolean;
  }) => void;
  setLoggedOut: () => void;
  setEmail: (email: string) => void;
  setWasCodeSent: (wasCodeSent: boolean) => void;
  closeOnboarding: () => void;
  setOnboarding: (name: string, open: boolean) => void;
}

const useAuthStore = create<States>()(
  persist(
    (set) => ({
      userIdentifier: "",
      wasCodeSent: false,
      isLogged: false,
      token: null,
      user: {} as User,
      initialized: false,
      logoutReason: null,
      email: "",
      sessionId: "",
      showOnboarding: false,
      onboardingName: "",
      setLogged: (values) =>
        set((state) => ({
          ...state,
          ...values,
          isLogged: Boolean(values.token),
        })),
      setLoggedOut: () => {
        return set({
          email: "",
          sessionId: "",
          wasCodeSent: false,
          isLogged: false,
          token: null,
          user: null,
          initialized: false,
        });
      },
      setEmail: (email: string) => set({ email }),
      setWasCodeSent: (wasCodeSent: boolean) => set({ wasCodeSent }),
      closeOnboarding: () => set({ showOnboarding: false }),
      setOnboarding: (name: string, open: boolean) =>
        set({ onboardingName: name, showOnboarding: open }),
    }),
    {
      name: "authentication-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        token: state.token,
      }),
    },
  ),
);

export default useAuthStore;
