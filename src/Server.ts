import App from "./App";

new App()
  .setPort(3400)
  .setEnv("development")
  .boot((port, env) => {
    console.log(`App info: \n- port: ${port} \n- env: ${env}`);
  });
