// @flow
import Login from "../views/Login/Login";
import Enterprises from "../views/Enterprises/Enterprises";
import EnterpriseDetail from "../views/EnterpriseDetail/EnterpriseDetail";

export const routes = [
  { path: "/login", component: Login, isPrivate: false },
  { path: "/enterprises", component: Enterprises, isPrivate: true },
  { path: "/enterprise/:id", component: EnterpriseDetail, isPrivate: true },
];
