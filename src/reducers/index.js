import settingReduser from "./settingReduser";
import { createStore, applyMiddleware, combineReducers } from 'redux';

export default combineReducers({
    setting: settingReduser
})