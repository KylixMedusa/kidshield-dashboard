import React from "react";

import { useLocation } from "react-router-dom";

import Assets from "../../assets/Assets";
import HomeIcon from "../../assets/icons/HomeIcon";
import ReportsIcon from "../../assets/icons/ReportsIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import ROUTES from "../../types/routes";
import { SidebarItem } from "./SidebarItem";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      <div className="bg-background transition-transform h-full fixed -translate-x-full w-64 shrink-0 z-[202] overflow-y-auto border-r border-divider flex-col py-6 px-3 md:ml-0 md:flex md:static md:h-screen md:translate-x-0">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <img
              src={Assets.images.logo}
              alt="logo"
              className="rounded-full w-full h-full"
            />
          </div>
          <h1 className="text-default-900 text-2xl font-bold">
            Kid
            <span className="text-primary">Shield</span>
          </h1>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-6 mt-9">
            <SidebarItem
              title="Home"
              isActive={pathname === ROUTES.DASHBOARD}
              icon={<HomeIcon />}
              href="/"
            />
            <SidebarItem
              title="History"
              isActive={pathname === ROUTES.DASHBOARD_HISTORY}
              icon={<ReportsIcon />}
              href={ROUTES.DASHBOARD_HISTORY}
            />
            <SidebarItem
              title="Settings"
              isActive={pathname === ROUTES.DASHBOARD_SETTINGS}
              icon={<SettingsIcon />}
              href={ROUTES.DASHBOARD_SETTINGS}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
