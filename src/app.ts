import express, { Express } from "express";
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

  private useRoutes(prefix: string, listRoutes: RouteInterface[]): App {
    listRoutes.forEach((route) => {
      this._app.use(prefix, route._router);
    });

    return this;
  }

  public useWebRoutes(listRoutes: RouteInterface[] = []): App {
    return this.useRoutes("/", listRoutes);
  }

  public useApiRoutes(listRoutes: RouteInterface[] = []): App {
    return this.useRoutes("/api", listRoutes);
  }

  public boot(cb: (port: string | number, env: string, url: string) => void = () => {}): void {
    this._app.listen(this._port, () => cb(this._port, this._env, this._url));
  }
}

export default App;
