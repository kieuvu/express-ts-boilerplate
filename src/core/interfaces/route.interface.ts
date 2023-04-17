import { Router } from "express";
import HTTP_METHOD from "../enums/http.enum";
import ActionInterface from "./action.interface";

interface RouteInterface {
  _router: Router;
  initRoutes(): void;
  defineRoute(method: HTTP_METHOD, route: string, action: ActionInterface): void;
}

export default RouteInterface;
