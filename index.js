import { createStore, applyMiddleware } from "redux";
import { allReducers } from "./reducer";

const store = createStore(allReducers, {}, applyMiddleware);

export default store;
