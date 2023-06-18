import * as R from "ramda"; 
import { FETCH_NEWS_ITEM_DN } from '../../actionTypes';

const initialState = {
    id: null,
};

export default (state = initialState, {type, payload}) => {
    switch(type){
        case FETCH_NEWS_ITEM_DN:
            return R.merge(state, {
                id: payload.id,
            });
        default:
        return state
    }
}