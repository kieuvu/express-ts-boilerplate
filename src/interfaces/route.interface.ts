import { Router } from "express";
import ActionInterface from "./action.interface";
import HttpMethod from "../enums/http.enum";

interface RouteInterface {
  _router: Router;
  initRoutes(): void;
  defineRoute(method: HttpMethod, route: string, action: ActionInterface): void;
}

export default RouteInterface;
