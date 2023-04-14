import { NextFunction, Request, Response } from "express";
import ActionAbstract from "../../abstracts/action.abstract";
import ResponseUtils from "../../utils/response.utils";
import STATUS from "../../enums/status.enum";

class LoginAction extends ActionAbstract {
  public override handle(_: Request, res: Response, __: NextFunction) {
    res.json(new ResponseUtils().setStatus(STATUS.SUCCESS));
  }
}

export default new LoginAction();
