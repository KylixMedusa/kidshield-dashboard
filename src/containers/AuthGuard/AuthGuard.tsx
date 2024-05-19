import React, { memo } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { useApp } from "../../context";
import ROUTES from "../../types/routes";

interface Props {
  children: React.ReactNode;
  redirectTo?: ROUTES;
  reverse?: boolean;
}

const AuthGuard: React.FC<Props> = ({
  children,
  redirectTo = ROUTES.LOGIN,
  reverse = false,
}) => {
  const location = useLocation();
  const { isLoggedIn } = useApp();

  if (reverse ? !isLoggedIn : isLoggedIn) {
    return children;
  }

  return (
    <Navigate
      to={redirectTo}
      replace
      state={{
        redirectTo: location.pathname,
        search: location.search,
        ...(location.state || {}),
      }}
    />
  );
};

export default memo(AuthGuard);
