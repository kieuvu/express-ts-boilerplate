import { Request, Response } from "express";

class IndexAction {
  handle(_: Request, res: Response) {
    res.send("Vukm");
  }
}

export default new IndexAction();
