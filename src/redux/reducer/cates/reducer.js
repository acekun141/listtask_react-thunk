import { FETCH_CATE, ADD_CATE, DEL_CATE } from './actionTypes';

let initialState = [];

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_CATE:
            return action.payload;
        case ADD_CATE:
            return [...state, action.payload];
        case DEL_CATE:
            return state.filter(cate => cate.id != action.payload);
        default:
            return state;
    }
}