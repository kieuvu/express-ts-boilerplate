import Action from "core/implements/action.implement";
import { NextFunction, Request, Response } from "express";

class RegisterAction extends Action {
  public override handle(_: Request, res: Response, __: NextFunction) {
    res.json({
      status: true,
    });
  }
}

export default new RegisterAction();
