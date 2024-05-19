import React from "react";

import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import AuthGuard from "./containers/AuthGuard/AuthGuard";
import Dashboard from "./layouts/Dashboard/Dashboard";
import History from "./pages/History/History";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import ROUTES from "./types/routes";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.LOGIN}
        element={
          <AuthGuard redirectTo={ROUTES.DASHBOARD} reverse>
            <Outlet />
          </AuthGuard>
        }
      >
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={<div>Forgot Password</div>}
        />
        <Route
          path={ROUTES.RESET_PASSWORD}
          element={<div>Reset Password</div>}
        />
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Route>
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <AuthGuard redirectTo={ROUTES.LOGIN}>
            <Dashboard>
              <Outlet />
            </Dashboard>
          </AuthGuard>
        }
      >
        <Route path={ROUTES.DASHBOARD_HISTORY} element={<History />} />
        <Route path={ROUTES.DASHBOARD_SETTINGS} element={<Settings />} />
        <Route path={ROUTES.DASHBOARD} element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} />} />
      <Route path="" element={<Navigate to={ROUTES.DASHBOARD} />} />
      <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} />} />
    </Routes>
  );
};

export default Router;
