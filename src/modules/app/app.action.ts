import { NextFunction, Request, Response } from "express";
import ActionAbstract from "../../abstracts/action.abstract";

class IndexAction extends ActionAbstract {
  public override handle(_: Request, res: Response, __: NextFunction): void {
    res.json({
      from: "vukm",
    });
  }
}

export default new IndexAction();
