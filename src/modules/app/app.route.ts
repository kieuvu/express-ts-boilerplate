import RouteAbstract from "../../abstracts/route.abstract";
import IndexAction from "./app.action";
import HttpMethod from "../../enums/http.enum";
import ROUTES from "../../enums/route.enum";

class AppRoutes extends RouteAbstract {
  public override initRoutes(): void {
    this.defineRoute(HttpMethod.GET, ROUTES.INDEX, IndexAction);
  }
}

export default new AppRoutes();
