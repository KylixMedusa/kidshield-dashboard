import React, { createContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { NextUIProvider } from "@nextui-org/react";

import UserAPI from "../api/user";
import { IUser } from "../types/user";

interface IAppContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  fetchUser: () => Promise<void>;
}

export const AppContext = createContext<IAppContext>({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  loading: false,
  setLoading: () => {},
  fetchUser: async () => {},
});

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    try {
      const resp = await UserAPI.get();
      if (resp.status === 200) {
        setUser(resp.data.result);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    } catch (err) {
      setUser(null);
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        loading,
        setLoading,
        fetchUser,
      }}
    >
      <NextUIProvider navigate={navigate}>{children}</NextUIProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;
