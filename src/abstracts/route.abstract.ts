import { Router } from "express";
import RouteInterface from "../interfaces/route.interface";
import ActionInterface from "../interfaces/action.interface";

abstract class RouteAbstract implements RouteInterface {
  public _router: Router;

  constructor() {
    this._router = Router();
    this.initRoutes();
  }

  public get(route: string, action: ActionInterface) {
    this._router.get(route, action.handle);
  }

  public post(route: string, action: ActionInterface) {
    this._router.post(route, action.handle);
  }

  public patch(route: string, action: ActionInterface) {
    this._router.patch(route, action.handle);
  }

  public put(route: string, action: ActionInterface) {
    this._router.put(route, action.handle);
  }

  public delete(route: string, action: ActionInterface) {
    this._router.delete(route, action.handle);
  }

  public abstract initRoutes(): void;
}

export default RouteAbstract;
