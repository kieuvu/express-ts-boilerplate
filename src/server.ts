import App from "./app";
import AppRoutes from "./modules/app/app.route";
import authRoute from "./modules/auth/auth.route";

const app: App = new App();

app
  .useApiRoutes([AppRoutes, authRoute])

  .boot((port, env, url) => {
    console.log(`App info: \n- port: ${port} \n- env: ${env} \n- url: ${url}`);
  });
