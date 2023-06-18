import { FETCH_TOP_NEWS_DN } from '../../actionTypes';
import * as R from "ramda";

const initialState = {
    ids: []
};

export default (state = initialState, {type, payload}) => {
    switch(type){
        case FETCH_TOP_NEWS_DN:
            return R.merge(state, {
                ids: R.pluck("id", payload)
            });
        default:
        return state
    }
}