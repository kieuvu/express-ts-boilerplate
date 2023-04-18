import HTTP_METHOD from "core/enums/http.enum";
import { Router } from "express";
import ActionInterface from "./action.interface";

interface RouteInterface {
  _router: Router;
  initRoutes(): void;
  defineRoute(method: HTTP_METHOD, route: string, action: ActionInterface): void;
}

export default RouteInterface;
