import { NextFunction, Request, Response } from "express";
import ActionInterface from "../interfaces/action.interface";

abstract class ActionAbstract implements ActionInterface {
  abstract handle(req: Request, res: Response, next: NextFunction): void;
}

export default ActionAbstract;
