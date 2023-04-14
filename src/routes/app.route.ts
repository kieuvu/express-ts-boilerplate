import RouteAbstract from "../abstracts/route.abstract";
import RouteConstant from "../constants/route.constant";
import IndexAction from "../actions/app/IndexAction";

class AppRoutes extends RouteAbstract {
  initRoutes(): void {
    this._router.get(RouteConstant.APP_ROUTES.INDEX, IndexAction.handle);
  }
}

export default new AppRoutes();
