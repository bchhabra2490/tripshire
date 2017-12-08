import {createStore,combineReducers,applyMiddleware} from "redux";

import btnReducer from './reducer';

export default createStore(combineReducers({btnReducer}),{},
    applyMiddleware());