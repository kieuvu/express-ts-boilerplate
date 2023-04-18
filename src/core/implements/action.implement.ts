import ActionInterface from "core/interfaces/action.interface";
import { NextFunction, Request, Response } from "express";

abstract class Action implements ActionInterface {
  abstract handle(req: Request, res: Response, next: NextFunction): void;
}

export default Action;
