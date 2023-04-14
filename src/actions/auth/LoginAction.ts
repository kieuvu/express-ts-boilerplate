import { NextFunction, Request, Response } from "express";
import ActionAbstract from "../../abstracts/action.abstract";

class LoginAction extends ActionAbstract {
  public override handle(_: Request, res: Response, __: NextFunction) {
    res.json({
      status: true,
    });
  }
}

export default new LoginAction();
