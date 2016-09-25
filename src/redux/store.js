import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';


import rootReducer from './reducers/reducers.js';

const defaultState = {
    pip: {
        shield: {
            height: '0%',
            width: '0%'
        },
        reference: {
            x: 0,
            y: 0
        },
        style: {
            size: {
                height: 141,
                width: 250
            },
            zIndex: 10,
            enabled: true
        },
        disabled: false,
        resize: false
    },
    controls: {
        '1': 'pip',
        '2': 'base'
    }
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
