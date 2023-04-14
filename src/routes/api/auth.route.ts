import RouteAbstract from "../../abstracts/route.abstract";
import RegisterAction from "../../actions/auth/RegisterAction";
import RouteConstant from "../../constants/route.constant";
import HttpMethod from "../../enums/http.enum";

class AuthRoutes extends RouteAbstract {
  public override initRoutes(): void {
    this.defineRoute(HttpMethod.POST, RouteConstant.AUTH_ROUTES.REGISTER, RegisterAction);
  }
}

export default new AuthRoutes();
