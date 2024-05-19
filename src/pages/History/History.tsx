import React, { useMemo, useState } from "react";

import dayjs from "dayjs";
import EasyVirtualized from "react-easy-virtualized";

import SessionAPI from "../../api/session";
import { ISession } from "../../types/session";
import HistoryItem from "./HistoryItem";
import { Spinner } from "@nextui-org/react";

interface IState {
  data: ISession[];
  loading: boolean;
  page: number;
  hasMore: boolean;
}

const SIZE = 20;

const initialState: IState = {
  data: [],
  loading: false,
  page: 1,
  hasMore: true,
};

const History: React.FC = () => {
  const [state, setState] = useState(initialState);

  const onLoadMore = async () => {
    if (state.loading || !state.hasMore) return;

    setState((prev) => ({ ...prev, loading: true }));

    try {
      const resp = await SessionAPI.get(state.page, SIZE);
      if (resp.status === 200) {
        const data = resp.data.result;

        setState((prev) => ({
          data: [...prev.data, ...data],
          loading: false,
          page: prev.page + 1,
          hasMore: data.length === SIZE,
        }));
      } else {
        setState((prev) => ({
          ...prev,
          loading: false,
          hasMore: false,
        }));
      }
    } catch (err) {
      setState((prev) => ({
        ...prev,
        loading: false,
        hasMore: false,
      }));
    }
  };

  const groupDataByDate = (data: ISession[]) => {
    const grouped: Record<string, ISession[]> = {};
    data.forEach((session) => {
      //   const date = new Date(session.createdAt).toDateString();
      const date = dayjs(session.createdAt).format("YYYY-MM-DD");
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(session);
    });
    return grouped;
  };

  const itemsToRender = useMemo(() => {
    const grouped = groupDataByDate(state.data);

    const nodes: React.ReactNode[] = [];

    for (const date in grouped) {
      nodes.push(
        <div className="p-2 border-b border-gray-200 bg-gray-200">
          <h3 className="text-sm font-medium text-gray-700">
            {
              // if today
              dayjs(date, "YYYY-MM-DD").isSame(dayjs(), "day")
                ? "Today - "
                : // if yesterday
                dayjs(date).isSame(dayjs().subtract(1, "day"), "day")
                ? "Yesterday - "
                : null
            }
            {dayjs(date).format("dddd MMMM DD, YYYY")}
          </h3>
        </div>
      );
      grouped[date].forEach((session) =>
        nodes.push(<HistoryItem key={session._id} {...session} />)
      );
    }
    return nodes;
  }, [state.data]);

  return (
    <div className="w-full h-full overflow-scroll">
      <EasyVirtualized
        onLoadMore={onLoadMore}
        hasMore={state.hasMore}
        loader={
          <div
            className="flex justify-center items-center w-full h-20"
            key="loader"
          >
            <Spinner />
          </div>
        }
        useParentScrollElement
      >
        {itemsToRender}
      </EasyVirtualized>
      {!state.hasMore && !state.loading && state.data.length === 0 && (
        <div className="flex justify-center items-center w-full h-20">
          <p className="text-gray-500 text-sm">No history found</p>
        </div>
      )}
    </div>
  );
};

export default History;
