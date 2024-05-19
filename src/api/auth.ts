import { ILoginResponse } from "../types/auth";
import API from "./";

abstract class AuthAPI {
  public static login = (data: { email: string; password: string }) =>
    API.post<ILoginResponse>("/login", data);

  public static register = (data: {
    name: string;
    email: string;
    password: string;
  }) => API.post<ILoginResponse>("/register", data);
}

export default AuthAPI;
