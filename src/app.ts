import express, { Express, Router } from "express";
import AppConfig from "./configs/app.config";
import RouteInterface from "./interfaces/route.interface";

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

  private useRoutes(prefix: string, router: Router): void {
    this._app.use(prefix, router);
  }

  public useWebRoutes(listRoutes: RouteInterface): App {
    this.useRoutes("/", listRoutes._router);
    return this;
  }

  public useApiRoutes(listRoutes: RouteInterface): App {
    this.useRoutes("/api", listRoutes._router);
    return this;
  }

  public boot(cb: (port: string | number, env: string, url: string) => void = () => {}) {
    this._app.listen(this._port, () => cb(this._port, this._env, this._url));
  }
}

export default App;
