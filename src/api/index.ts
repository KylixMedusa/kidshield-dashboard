import axios, { AxiosInstance } from "axios";

import { IResponseType } from "../types/base";
import ROUTES from "../types/routes";
import config from "./config";

abstract class API {
  private static instance: AxiosInstance;

  static create() {
    API.instance = axios.create({
      baseURL: config.API_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    API.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          window.location.href = ROUTES.LOGIN;
        }
        return Promise.reject(error);
      }
    );
  }

  static setToken(token: string | null) {
    if (!token) {
      delete API.instance.defaults.headers.common["Authorization"];
      return;
    }
    API.instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  static get<T>(url: string) {
    return API.instance.get<IResponseType<T>>(url);
  }

  static post<T>(url: string, data: unknown) {
    return API.instance.post<IResponseType<T>>(url, data);
  }

  static put<T>(url: string, data: unknown) {
    return API.instance.put<IResponseType<T>>(url, data);
  }

  static delete<T>(url: string) {
    return API.instance.delete<IResponseType<T>>(url);
  }

  static patch<T>(url: string, data: unknown) {
    return API.instance.patch<IResponseType<T>>(url, data);
  }
}

API.create();

export default API;
