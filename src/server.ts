import App from "./app";
import AppRoutes from "./routes/api/app.route";
import authRoute from "./routes/api/auth.route";

const app: App = new App();

app
  .useApiRoutes([AppRoutes, authRoute])

  .boot((port, env, url) => {
    console.log(`App info: \n- port: ${port} \n- env: ${env} \n- url: ${url}`);
  });
