import express, { Express } from "express";
import AppConfig from "./configs/app.config";

class App {
  private _app: Express;
  private _port: string | number;
  private _env: string;

  public constructor() {
    this._app = express();
    this._port = AppConfig.PORT;
    this._env = AppConfig.NODE_ENV;
  }

  public setPort(port: number): App {
    this._port = port;
    return this;
  }

  public setEnv(env: string): App {
    this._env = env;
    return this;
  }

  public boot(cb: (port: string | number, env: string) => void = () => {}) {
    this._app.listen(this._port, () => cb(this._port, this._env));
    return this;
  }
}

export default App;