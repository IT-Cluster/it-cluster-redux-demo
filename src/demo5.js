import actions from "./redux/actions";
import { store } from "./redux/store";

store.subscribe(() => console.log(store.getState()));

store.dispatch(actions.increment());
store.dispatch(actions.addPhone('123'));
store.dispatch(actions.addPhone('456'));
store.dispatch(actions.increment());


export default () => <h1>Дивись консоль</h1>;
