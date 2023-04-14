import { Request, Response } from "express";

class IndexAction {
  handle(req: Request, res: Response) {
    res.send("Vukm");
  }
}

export default new IndexAction();
