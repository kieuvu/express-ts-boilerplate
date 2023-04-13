import { ENV } from "../Env";

const AppConfig = {
  PORT: ENV.PORT || 3000,
  NODE_ENV: ENV.NODE_ENV || "development",
};

export default AppConfig;
