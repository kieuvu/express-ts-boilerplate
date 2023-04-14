import { Router } from "express";
import RouteInterface from "../interfaces/route.interface";
import ActionInterface from "../interfaces/action.interface";
import HttpMethod from "../enums/http.enum";

abstract class RouteAbstract implements RouteInterface {
  public _router: Router;

  constructor() {
    this._router = Router();
    this.initRoutes();
  }

  public defineRoute(method: HttpMethod, route: string, action: ActionInterface) {
    switch (method) {
      case HttpMethod.GET:
        this._router.get(route, action.handle);
        break;
      case HttpMethod.POST:
        this._router.post(route, action.handle);
        break;
      case HttpMethod.PATCH:
        this._router.patch(route, action.handle);
        break;
      case HttpMethod.PUT:
        this._router.put(route, action.handle);
        break;
      case HttpMethod.DELETE:
        this._router.delete(route, action.handle);
        break;
      default:
        throw new Error(`Invalid HTTP method: ${method}`);
    }
  }

  public abstract initRoutes(): void;
}

export default RouteAbstract;
