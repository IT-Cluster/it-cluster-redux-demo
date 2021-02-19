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
                    action.phone
                ]
            }
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            }
        default:
            return state
    }
}

const actionIncrement = {type: 'INCREMENT'};
const actionAddPhone1 = {type: 'ADD_PHONE', phone: '12345'};
const actionAddPhone2 = {type: 'ADD_PHONE', phone: '45678'};

let store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(actionIncrement);
store.dispatch(actionAddPhone1);
store.dispatch(actionAddPhone2);
store.dispatch(actionIncrement);


export default () => <h1>Дивись консоль</h1>;
