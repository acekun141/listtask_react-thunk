import { FETCH_TASK, EDIT_TASK, DEL_TASK, ADD_TASK } from './actionTypes';

let initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TASK:
            return action.payload;
        case EDIT_TASK:
            return state.map(task => {
                if (task.id == action.payload.id) {
                    return {...action.payload};
                } else {
                    return task;
                }
            })
        case DEL_TASK:
            return state.filter(task => task.id != action.payload);
        case ADD_TASK:
            return [...state, action.payload]
        default:
            return state;
    }
}