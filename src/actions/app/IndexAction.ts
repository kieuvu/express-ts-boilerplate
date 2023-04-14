import { NextFunction, Request, Response } from "express";
import ActionAbstract from "../../abstracts/action.abstract";

class IndexAction extends ActionAbstract {
  handle(_: Request, res: Response, __: NextFunction) {
    res.send("Vukm");
  }
}

export default new IndexAction();
