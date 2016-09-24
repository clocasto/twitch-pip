import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import playerReducer from './player';

const rootReducer = combineReducers({ playerReducer, routing: routerReducer });

export default rootReducer;
