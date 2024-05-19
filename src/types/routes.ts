enum ROUTES {
  LOGIN = "/login",
  REGISTER = "/login/register",
  FORGOT_PASSWORD = "/login/forgot-password",
  RESET_PASSWORD = "/login/reset-password",

  DASHBOARD = "/dashboard",
  DASHBOARD_HISTORY = "/dashboard/history",
  DASHBOARD_SETTINGS = "/dashboard/settings",
  NOT_FOUND = "/404",
}

export const ROUTES_ARRAY = Object.values(ROUTES);

export default ROUTES;
