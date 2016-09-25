import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { pip } from './pip-player';
import { button } from './buttons';

const rootReducer = combineReducers({ pip, button, routing: routerReducer });

export default rootReducer;
