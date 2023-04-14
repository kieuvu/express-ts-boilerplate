import { Router } from "express";
import ActionInterface from "./action.interface";
import HTTP_METHOD from "../enums/http.enum";
import ROUTES from "../enums/route.enum";

interface RouteInterface {
  _router: Router;
  initRoutes(): void;
  defineRoute(method: HTTP_METHOD, route: ROUTES, action: ActionInterface): void;
}

export default RouteInterface;
