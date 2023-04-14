import App from "./app";
import AppRoutes from "./routes/app.route";

const app: App = new App();

app
  .useApiRoutes([AppRoutes])

  .boot((port, env, url) => {
    console.log(`App info: \n- port: ${port} \n- env: ${env} \n- url: ${url}`);
  });
