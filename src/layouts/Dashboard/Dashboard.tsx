import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Dashboard: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-1 w-full h-full">
      <Sidebar />
      <div className="flex flex-1 w-full h-full flex-col">
        <Navbar />
        <div className="h-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
