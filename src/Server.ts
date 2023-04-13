import App from "./App";
import AppConstance from "./constants/app.constant";

new App()
  .setPort(3400)
  .setEnv(AppConstance.ENV.LOCAL)
  .boot((port, env) => {
    console.log(`App info: \n- port: ${port} \n- env: ${env}`);
  });
