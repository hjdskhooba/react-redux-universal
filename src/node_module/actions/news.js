import { 
    FETCH_TOP_NEWS_ST, 
    FETCH_TOP_NEWS_DN, 
    FETCH_TOP_NEWS_FD,
    FETCH_NEWS_ST,
    FETCH_NEWS_DN,
    FETCH_NEWS_FD,
    LOAD_MORE_NEWS_ST,
    LOAD_MORE_NEWS_DN,
    LOAD_MORE_NEWS_FD,
    FETCH_NEWS_ITEM_ST,
    FETCH_NEWS_ITEM_DN,
    FETCH_NEWS_ITEM_FD,
    SEARCH_NEWS,
} from '../actionTypes';

import { fetchNews as fetchNewsApi } from "../api/index.js";
import { fetchTopNews as fetchTopNewsApi } from "../api/index.js";
import { fetchNewsItem as fetchNewsItemApi } from "../api/index.js";
import { loadMoreNews as loadMoreNewsApi } from "../api/index.js";
import { getRenderedNewsLength } from '../selectors/news';

export const fetchNews = () => async dispatch => {
    dispatch({
        type: FETCH_NEWS_ST,
    })
    try {
        const news = await fetchNewsApi();
        dispatch({
            type: FETCH_NEWS_DN,
            payload: news
        })
    } catch (err){
        dispatch({
            type: FETCH_NEWS_FD,
            payload: err,
            error: true,
        })
    }
}
export const fetchTopNews = () => async dispatch => {
    dispatch({
        type: FETCH_TOP_NEWS_ST,
    })
    try {
        const news = await fetchTopNewsApi();
        dispatch({
            type: FETCH_TOP_NEWS_DN,
            payload: news
        })
    } catch (err){
        dispatch({
            type: FETCH_TOP_NEWS_FD,
            payload: err,
            error: true,
        })
    }
}
export const fetchNewsItemById = id => async dispatch => {
    dispatch({
        type: FETCH_NEWS_ITEM_ST,
    })
    try {
        const newsItem = await fetchNewsItemApi(id);
        dispatch({
            type: FETCH_NEWS_ITEM_DN,
            payload: newsItem,
        });
    } catch (err){
        dispatch({
            type: FETCH_NEWS_ITEM_FD,
            payload: err,
            error: true,
        });
    };
};

export const loadMoreNews = () => async (dispatch, getState) => {
    const offset = getRenderedNewsLength(getState());
    
    dispatch({
        type: LOAD_MORE_NEWS_ST,
    })
    
    try {
        const news = await loadMoreNewsApi({offset});
        dispatch({
            type: LOAD_MORE_NEWS_DN,
            payload: news
        })
    } catch (e){
        dispatch({
            type: LOAD_MORE_NEWS_FD,
            payload: e,
            error: true,
        })
    }
};

export const handleSearch = text => dispatch => {
    dispatch({
        type: SEARCH_NEWS,
        payload: text
    })
}