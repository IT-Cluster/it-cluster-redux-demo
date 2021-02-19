import { createStore } from 'redux';

const initialState = {
    value: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 }
        default:
            return state
    }
}

const action = {type: 'INCREMENT'};

let store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(action);
store.dispatch(action);
store.dispatch(action);


export default () => <h1>Дивись консоль</h1>;
