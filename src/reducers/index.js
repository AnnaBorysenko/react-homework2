import resourceReduser from "./resourceReduser";
import { createStore, applyMiddleware, combineReducers } from 'redux';

export default combineReducers({
    resource: resourceReduser
})