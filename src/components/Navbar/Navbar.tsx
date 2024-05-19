import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar as NavbarNext,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";

import { useApp } from "../../context";
import ROUTES from "../../types/routes";
import { setLocalData } from "../../utils/localData";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser, setIsLoggedIn } = useApp();

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setLocalData(null);

    navigate(ROUTES.LOGIN);
  };

  return (
    <NavbarNext className="border-b border-divider px-4">
      <NavbarBrand>
        <p className="font-bold text-lg">Hi, {user?.name}</p>
      </NavbarBrand>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name={user?.name}
              size="sm"
              src="https://i.pravatar.cc/150?u=5"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user?.email}</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleLogout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </NavbarNext>
  );
};

export default Navbar;
