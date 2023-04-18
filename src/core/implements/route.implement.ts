import HTTP_METHOD from "core/enums/http.enum";
import ActionInterface from "core/interfaces/action.interface";
import RouteInterface from "core/interfaces/route.interface";
import { Router } from "express";

abstract class Route implements RouteInterface {
  public _router: Router;

  constructor() {
    this._router = Router();
    this.initRoutes();
  }

  public defineRoute(method: HTTP_METHOD, route: string, action: ActionInterface) {
    switch (method) {
      case HTTP_METHOD.GET:
        this._router.get(route, action.handle);
        break;
      case HTTP_METHOD.POST:
        this._router.post(route, action.handle);
        break;
      case HTTP_METHOD.PATCH:
        this._router.patch(route, action.handle);
        break;
      case HTTP_METHOD.PUT:
        this._router.put(route, action.handle);
        break;
      case HTTP_METHOD.DELETE:
        this._router.delete(route, action.handle);
        break;
      default:
        throw new Error(`Invalid HTTP method: ${method}`);
    }
  }

  public abstract initRoutes(): void;
}

export default Route;
