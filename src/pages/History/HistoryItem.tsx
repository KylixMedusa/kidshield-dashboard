import React from "react";

import dayjs from "dayjs";

import { ISession } from "../../types/session";

interface Props extends ISession {}

const HistoryItem: React.FC<Props> = ({ url, metadata, createdAt }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <img src={metadata.icon} alt={metadata.title} className="w-8 h-8" />
        <div>
          <p className="text-sm font-medium text-gray-700">{metadata.title}</p>
          <p className="text-xs text-gray-400">{url}</p>
        </div>
      </div>
      <p className="text-xs text-gray-400">
        {dayjs(createdAt).format("HH:mm A")}
      </p>
    </div>
  );
};

export default React.memo(HistoryItem);
