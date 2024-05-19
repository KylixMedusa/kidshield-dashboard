import API from "../api";

const LOCAL_STORAGE_KEY = "kidshield_token";

const getLocalData = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEY);
};

const setLocalData = (token: string | null) => {
  API.setToken(token);
  if (!token) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return;
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, token);
};

export { getLocalData, setLocalData };
