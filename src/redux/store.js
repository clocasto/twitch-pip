import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';


import rootReducer from './reducers/reducers.js';

const base = {
    height: '100%',
    width: '100%',
    zIndex: 1,
    enabled: false
}

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
    button: {
        base,
        one: 'pip',
        two: 'base'
    }
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// if (module.hot) {
//  module.hot.accept('./reducers/', () => {
//    let nextRootReducer = require('./reducers/reducers').default;
//    store.replaceReducer(nextRootReducer);
//  })
// }

export default store;
