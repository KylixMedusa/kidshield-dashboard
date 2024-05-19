import "./App.scss";

import React, { useEffect } from "react";

import { Spinner } from "@nextui-org/react";

import API from "./api";
import { useApp } from "./context";
import Router from "./Router";
import { getLocalData } from "./utils/localData";

const App: React.FC = () => {
  const { fetchUser, loading, setLoading } = useApp();

  useEffect(() => {
    const token = getLocalData();
    if (token) {
      API.setToken(token);
      fetchUser();
    } else {
      API.setToken(null);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="app">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner size="lg" />
        </div>
      ) : (
        <Router />
      )}
    </main>
  );
};

export default App;
