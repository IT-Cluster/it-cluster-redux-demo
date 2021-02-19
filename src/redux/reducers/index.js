import { combineReducers } from "redux";
import { phonesReducer } from "./phoneReducer";
import { valueReducer } from "./valueReducer";

export default combineReducers({
    phones: phonesReducer,
    value: valueReducer
});
