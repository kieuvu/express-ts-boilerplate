import express, { Express } from "express";
import RouteInterface from "./interfaces/route.interface";
import { ENV } from "./utils/env";
import APP_ENV from "./enums/env.enum";

class App {
  private _app: Express;
  private _port: string | number;
  private _env: string;
  private _url: string;

  public constructor() {
    this._app = express();
    this._port = ENV["APP_PORT"] || 3000;
    this._env = ENV["APP_ENV"] || APP_ENV.DEVELOPMENT;
    this._url = ENV["APP_URL"] || "";
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
