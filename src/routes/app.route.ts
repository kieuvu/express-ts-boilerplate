import RouteAbstract from "../abstracts/route.abstract";
import RouteConstant from "../constants/route.constant";
import IndexAction from "../actions/app/IndexAction";
import HttpMethod from "../enums/http.enum";

class AppRoutes extends RouteAbstract {
  initRoutes(): void {
    this.defineRoute(HttpMethod.GET, RouteConstant.APP_ROUTES.INDEX, IndexAction);
  }
}

export default new AppRoutes();
