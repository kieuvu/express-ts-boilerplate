import express, { Express } from "express";
import AppConfig from "./configs/app.config";

class App {
  private _app: Express;
  private _port: string | number;
  private _env: string;
  private _url: string;

  public constructor() {
    this._app = express();
    this._port = AppConfig.APP_PORT;
    this._env = AppConfig.APP_ENV;
    this._url = AppConfig.APP_URL;
  }

  public boot(cb: (port: string | number, env: string, url: string) => void = () => {}) {
    this._app.listen(this._port, () => cb(this._port, this._env, this._url));
    return this;
  }
}

export default App;
