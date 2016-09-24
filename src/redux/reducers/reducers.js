import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import playerReducer from './player';
import buttonReducer from  './buttons'

const rootReducer = combineReducers({ playerReducer, buttonReducer, routing: routerReducer });

export default rootReducer;
