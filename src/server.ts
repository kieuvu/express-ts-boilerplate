import App from "./core/app";
import AppRoutes from "./routes/app.route";
import authRoute from "./routes/auth.route";

const app: App = new App();

app
  .useApiRoutes([AppRoutes, authRoute])

  .boot((port, env, url) => {
    console.log(`App info: \n- port: ${port} \n- env: ${env} \n- url: ${url}`);
  });
