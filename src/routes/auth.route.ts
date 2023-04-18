import Route from "core/implements/route.implement";
import LoginAction from "../actions/auth/login.action";
import RegisterAction from "../actions/auth/register.action";
import HTTP_METHOD from "core/enums/http.enum";

class AuthRoutes extends Route {
  public override initRoutes(): void {
    this.defineRoute(HTTP_METHOD.POST, "/register", RegisterAction);
    this.defineRoute(HTTP_METHOD.POST, "/login", LoginAction);
  }
}

export default new AuthRoutes();
