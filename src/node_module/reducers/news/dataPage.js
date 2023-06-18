import * as R from "ramda"; 
import { FETCH_NEWS_DN, LOAD_MORE_NEWS_DN, SEARCH_NEWS } from '../../actionTypes';

const initialState = {
    ids: [],
    search: "",
};

export default (state = initialState, {type, payload}) => {
    const compareDates = (a, b) => new Date(b.created_at) - new Date(a.created_at);
    switch(type){
        case FETCH_NEWS_DN:
            return R.merge(state, {
                // Sorting news by date
                ids: R.pluck("id", payload.sort(compareDates))
            });
        case LOAD_MORE_NEWS_DN:
            const ids = payload;
            return R.merge(state, {
                ids: R.concat(state.ids, ids)
            });
        case SEARCH_NEWS:
            return R.merge(state, {
                search: payload
            });
        default:
        return state
    };
};