import { Switch, Route } from "react-router";
import Weather from "../pages/Weather";
import Money from "../pages/Money";
import Todo from "../pages/Todo";
import News from "../pages/News";
import Main from "../pages/Main";

const Routing = () => (
  <Switch>
    <Route path="/" component={Main} exact />
    <Route path="/main" component={Main} />
    <Route path="/todo" component={Todo} />
    <Route path="/news" component={News} />
    <Route path="/weather" component={Weather} />
    <Route path="/money" component={Money} />
  </Switch>
);

export default Routing;
