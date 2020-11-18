import { StoreController } from ".";
import { CompanyActions, UserActions } from "../libs/redux/actions";
import { AuthServer, CompaniesServer } from "../libs/server";

export const login = (data) => {
  const dispatch = StoreController.dispatch();
  return AuthServer.login(data)
    .then((response) => {
      dispatch(UserActions.saveUser(response.data.investor));
      dispatch(UserActions.isAuth(true));

      const { client, uid } = response.headers;

      const headers = {
        client,
        uid,
        accessToken: response.headers["access-token"],
      };

      localStorage.setItem("user", JSON.stringify(response.data.investor));
      localStorage.setItem("headers", JSON.stringify(headers));
    })
    .catch((error) => {
      if (
        error.response.data.errors[0] ===
        "Invalid login credentials. Please try again."
      )
        throw "Invalid login credentials";
    });
};

export const logout = (history) => {
  const dispatch = StoreController.dispatch();
  dispatch(UserActions.clearUser());
  dispatch(UserActions.isAuth(false));
  dispatch(CompanyActions.clearCompanies());
  localStorage.removeItem("user");
  localStorage.removeItem("headers");
  history.push("/login");
};
