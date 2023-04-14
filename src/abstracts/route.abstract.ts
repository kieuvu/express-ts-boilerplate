import { Router } from "express";
import RouteInterface from "../interfaces/route.interface";
import ActionInterface from "../interfaces/action.interface";
import HTTP_METHOD from "../enums/http.enum";
import ROUTES from "../enums/route.enum";

abstract class RouteAbstract implements RouteInterface {
  public _router: Router;

  constructor() {
    this._router = Router();
    this.initRoutes();
  }

  public defineRoute(method: HTTP_METHOD, route: ROUTES, action: ActionInterface) {
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

export default RouteAbstract;
