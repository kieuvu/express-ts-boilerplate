import RouteAbstract from "../abstracts/route.abstract";
import HTTP_METHOD from "../enums/http.enum";
import ROUTES from "../enums/route.enum";
import IndexAction from "../actions/app/index.action";

class AppRoutes extends RouteAbstract {
  public override initRoutes(): void {
    this.defineRoute(HTTP_METHOD.GET, ROUTES.INDEX, IndexAction);
  }
}

export default new AppRoutes();
