import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { pip } from './pip-player';
import { controls } from './controls';
import { chat } from './chat';
import { application } from './application';


const rootReducer = combineReducers({ application, chat, pip, controls, routing: routerReducer });

export default rootReducer;
