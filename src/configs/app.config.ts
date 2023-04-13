import { ENV } from "../utils/Env";

const AppConfig = {
  APP_PORT: ENV.APP_PORT || 3000,
  APP_ENV: ENV.APP_ENV || "development",
  APP_URL: ENV.APP_URL || "",
};

export default AppConfig;
