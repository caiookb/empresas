import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./utils/Routes";
import PrivateRoute from "./PrivateRoute";

import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={routes[0].component} />
        {routes.map((route) => {
          const { isPrivate, path, ...props } = route;
          const Routable = isPrivate ? PrivateRoute : Route;
          return <Routable key={path} path={path} {...props} />;
        })}
      </Switch>
    </HashRouter>
  );
};

export default App;
