import { createStore } from 'redux';

const initialState = {
    value: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + action.value }
        case 'DECREMENT':
            return { value: state.value - action.value }
        default:
            return state
    }
}

const actionIncrementBy1 = {type: 'INCREMENT', value: 1};
const actionIncrementBy5 = {type: 'INCREMENT', value: 5};
const actionDecrementBy1 = {type: 'DECREMENT', value: 1};

let store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(actionIncrementBy1);
store.dispatch(actionIncrementBy5);
store.dispatch(actionDecrementBy1);


export default () => <h1>Дивись консоль</h1>;
