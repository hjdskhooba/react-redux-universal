import { FETCH_NEWS_DN, LOAD_MORE_NEWS_DN, FETCH_NEWS_ITEM_DN } from "../../actionTypes";
import * as R from "ramda";

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch(type){
        case FETCH_NEWS_DN:
            const newValues = R.indexBy(R.prop('id'), payload);
            return R.merge(state, newValues);
        case LOAD_MORE_NEWS_DN:
            const moreValues = R.indexBy(R.prop('id'), payload);
            return R.merge(state, moreValues);
        case FETCH_NEWS_ITEM_DN:
            return R.assoc(payload.id, payload, state)
        default:
            return state;
    };
};