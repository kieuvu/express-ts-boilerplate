import { NextFunction, Request, Response } from "express";
import Action from "core/implements/action.implement";

class LoginAction extends Action {
  public override handle(_: Request, res: Response, __: NextFunction): void {
    res.json(1);
  }
}

export default new LoginAction();
