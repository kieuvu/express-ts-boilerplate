import RouteAbstract from "../../abstracts/route.abstract";
import LoginAction from "./login.action";
import RegisterAction from "./register.action";
import HTTP_METHOD from "../../enums/http.enum";
import ROUTES from "../../enums/route.enum";

class AuthRoutes extends RouteAbstract {
  public override initRoutes(): void {
    this.defineRoute(HTTP_METHOD.POST, ROUTES.REGISTER, RegisterAction);
    this.defineRoute(HTTP_METHOD.POST, ROUTES.LOGIN, LoginAction);
  }
}

export default new AuthRoutes();
