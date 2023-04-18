import Action from "core/implements/action.implement";
import { NextFunction, Request, Response } from "express";

class IndexAction extends Action {
  public override handle(_: Request, res: Response, __: NextFunction): void {
    res.json({
      from: "vukm",
    });
  }
}

export default new IndexAction();
