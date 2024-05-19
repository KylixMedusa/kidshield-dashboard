import API from ".";
import { IStats } from "../types/stats";

abstract class StatsAPI {
  private static readonly root = "/stats";

  public static get = () => API.get<IStats>(`${this.root}`);
}

export default StatsAPI;
