import actionTypes from "../actions/action-types";

export const phonesReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_PHONE:
            return [
                ...state,
                action.payload.phone
            ]
        case actionTypes.EDIT_PHONE:
            let phones = [...state];
            phones[action.payload.index] = action.payload.newPhone;
            return phones;
        default:
            return state
    }
}
