import { ConnectedRouter } from "connected-react-router";
import { store, history } from "./node_module/store.js";
import Routing from "./node_module/Routing";
import "./node_module/scss/styles.scss";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./node_module/i18n.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routing/>
    </ConnectedRouter>
  </Provider>
);
