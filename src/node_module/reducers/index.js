import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { todos } from "./todos";
import newsItemPage from "./news/newsItemPage";
import weather from './weather/index';
import newsPage from "./news/dataPage";
import swiper from "./news/swiper";
import money from './money/index';
import news from "./news/data";

const rootReducers = (history) =>
  combineReducers({
    todos,
    news,
    money,
    newsPage,
    swiper,
    weather,
    newsItemPage,
    router: connectRouter(history),
  });

export default rootReducers;
