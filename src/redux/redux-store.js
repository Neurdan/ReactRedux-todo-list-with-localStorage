import {combineReducers, createStore} from "redux";
import todoReducer from "./reducers/todoReducer/todoReducer";

const reducer = combineReducers({
    todo: todoReducer,
});

const store = createStore(reducer);
window.store = store;

export default store;