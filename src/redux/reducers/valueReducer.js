import actionTypes from "../actions/action-types";

export const valueReducer = (state = 0, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return state + 1
        default:
            return state
    }
}
