import { IUser } from "../types/user";
import API from "./";

abstract class UserAPI {
  private static readonly root = "/user";

  public static get = () => API.get<IUser>(this.root);

  public static update = (data: Partial<IUser>) =>
    API.patch<IUser>(this.root, data);

  public static delete = () => API.delete<IUser>(this.root);

  public static updatePassword = (password: string) =>
    API.patch<IUser>(this.root, {
      password,
    });
}

export default UserAPI;
