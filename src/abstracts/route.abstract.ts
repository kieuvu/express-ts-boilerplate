import { Router } from "express";
import RouteInterface from "../interfaces/route.interface";

abstract class RouteAbstract implements RouteInterface {
  public _router: Router;

  constructor() {
    this._router = Router();
    this.initRoutes();
  }

  public initRoutes() {
    console.log("Empty Route");
  }
}

export default RouteAbstract;
