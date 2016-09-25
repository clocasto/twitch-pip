import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { pip } from './pip-player';
import { controls } from './controls';
import { chat } from './chat';


const rootReducer = combineReducers({ chat, pip, controls, routing: routerReducer });

export default rootReducer;
