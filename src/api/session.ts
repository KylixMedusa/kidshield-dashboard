import { ISession } from "../types/session";
import API from "./";

abstract class SessionAPI {
  private static readonly root = "/sessions";

  public static get = (page: number, limit: number) =>
    API.get<ISession[]>(`${this.root}?page=${page}&limit=${limit}`);
}

export default SessionAPI;
