import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { pip } from './pip-player';
import { controls } from './controls';

const rootReducer = combineReducers({ pip, controls, routing: routerReducer });

export default rootReducer;
