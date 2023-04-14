import { Router } from "express";

interface RouteInterface {
  _router: Router;
  initRoutes(): void;
}

export default RouteInterface;
