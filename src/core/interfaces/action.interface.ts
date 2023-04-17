import { NextFunction, Request, Response } from "express";

interface ActionInterface {
  handle(req: Request, res: Response, next: NextFunction): void;
}

export default ActionInterface;
