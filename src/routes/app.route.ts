import indexAction from "actions/app/index.action";
import HTTP_METHOD from "core/enums/http.enum";
import RouteAbstract from "core/implements/route.implement";

class AppRoutes extends RouteAbstract {
  public override initRoutes(): void {
    this.defineRoute(HTTP_METHOD.GET, "/", indexAction);
  }
}

export default new AppRoutes();
