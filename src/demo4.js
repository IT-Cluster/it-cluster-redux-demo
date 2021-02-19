import { createStore } from 'redux';

const initialState = {
    phones: [],
    value: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PHONE':
            return {
                ...state,
                phones: [
                    ...state.phones,
                    action.payload.phone
                ]
            }
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + action.payload
            }
        default:
            return state
    }
}

const actionIncrement = {type: 'INCREMENT', payload: 1};

const addPhoneActionCreator = phone => ({
    type: 'ADD_PHONE',
    payload: {phone}
});

let store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(actionIncrement);

store.dispatch(addPhoneActionCreator('123'));
store.dispatch(addPhoneActionCreator('456'));
store.dispatch(actionIncrement);


export default () => <h1>Дивись консоль</h1>;
