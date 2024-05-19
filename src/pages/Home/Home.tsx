import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { Steam } from "./Chart";
import { getHttpErrorMessage } from "../../utils";
import { Spinner } from "@nextui-org/react";
import StatsAPI from "../../api/stats";
import { IStats } from "../../types/stats";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [stats, setStats] = useState<IStats>({
    totalVisits: 0,
    totalFilteredVisits: 0,
    totalBlockedImages: 0,
  });

  const fetchStats = async () => {
    try {
      const resp = await StatsAPI.get();
      if (resp.status === 200) {
        setStats(resp.data.result);
      }
    } catch (error) {
      const message = getHttpErrorMessage(error);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center w-full h-20" key="loader">
      <Spinner />
    </div>
  ) : (
    <div className="p-4 flex flex-col space-y-8">
      <div>
        <h2 className="text-l font-semibold mb-4">Statistics</h2>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 p-4 rounded-lg shadow-md bg-green-500 w-full">
            <h3 className="text-white lt-900 text-sm font-medium">
              Total Visited Pages
            </h3>
            <h1 className="text-white text-2xl font-bold">
              {stats.totalVisits}
            </h1>
          </div>
          <div className="flex flex-col gap-2 bg-red-500 p-4 rounded-lg shadow-md w-full">
            <h3 className="text-white text-sm font-medium">
              Total Filtered Pages
            </h3>
            <h1 className="text-white text-2xl font-bold">
              {stats.totalFilteredVisits}
            </h1>
          </div>
          <div className="flex flex-col gap-2 bg-blue-500 p-4 rounded-lg shadow-md w-full">
            <h3 className="text-white text-sm font-medium">
              Total Filtered Images
            </h3>
            <h1 className="text-white text-2xl font-bold">
              {stats.totalBlockedImages}
            </h1>
          </div>
        </div>
      </div>
      <Steam />
    </div>
  );
};

export default Home;
