import { Router } from "express";
import ActionInterface from "./action.interface";

interface RouteInterface {
  _router: Router;
  initRoutes(): void;
  get(route: string, action: ActionInterface): void;
  post(route: string, action: ActionInterface): void;
  patch(route: string, action: ActionInterface): void;
  put(route: string, action: ActionInterface): void;
  delete(route: string, action: ActionInterface): void;
}

export default RouteInterface;
