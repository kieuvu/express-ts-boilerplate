import App from "./App";

const app = new App();

app.boot((port, env, url) => {
  console.log(`App info: \n- port: ${port} \n- env: ${env} \n- url: ${url}`);
});
