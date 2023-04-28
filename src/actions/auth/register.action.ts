import Action from "core/implements/action.implement";
import { NextFunction, Request, Response } from "express";

class RegisterAction extends Action {
  public override handle(_: Request, res: Response, __: NextFunction): void {
    res.json({
      status: true,
    });
  }
}

export default new RegisterAction();
