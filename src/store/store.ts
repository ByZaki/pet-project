import AuthService from "../services/AuthService";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UsersType } from "../types/UsersType";

type useStoreType = {
  isAuth: boolean;
  user: UsersType | null;
  setIsAuth: (isAuth: boolean) => void;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
};

const useStore = create<useStoreType>()(
  persist(
    (set) => ({
      isAuth: false,
      user: null,

      setIsAuth: (isAuth: boolean) => {
        set({ isAuth });
      },

      async login(email: string, password: string) {
        try {
          const response = await AuthService.login(email, password);
          console.log("Auth Response:", response.data);

          const { token, data } = response.data;
          localStorage.setItem("token", token);

          set({ user: data, isAuth: true });

          return { success: true, message: "OK" };
        } catch (error: any) {
          return { success: false, message: "Email or password wrong" };
        }
      },
      logout: () => {
        localStorage.removeItem("token");
        set({ isAuth: false, user: null });
      },
    }),
    {
      name: "authStore",
      partialize: (state) => ({ isAuth: state.isAuth, user: state.user }),
    }
  )
);

export default useStore;
