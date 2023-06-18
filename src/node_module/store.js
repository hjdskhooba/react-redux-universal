import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import createRootReducers from "./reducers";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const middlewares = [ routerMiddleware(history), thunk ];

export const store = createStore(
    createRootReducers(history),
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store