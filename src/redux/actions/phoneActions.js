import actions from "./action-types";

export const addPhone = phone => ({
    type: actions.ADD_PHONE,
    payload: { phone }
});

export const editPhone = (index, newPhone) => ({
    type: actions.EDIT_PHONE,
    payload: { index, newPhone }
});
