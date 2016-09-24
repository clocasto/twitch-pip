import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';


import rootReducer from './reducers/reducers.js';

const fat = {
    height: '100%',
    width: '100%',
    color: 'red',
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: null,
    left: null,
    zIndex: -1
}

const thin = {
    height: 100,
    width: 200,
    color: 'green',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: null,
    right: null,
    zIndex: 1
}


const defaultState = {
    playerReducer: { alex: 'memes' },
    buttonReducer: {
        thin: thin,
        fat: fat,
        one: 'thin',
        two: 'fat'
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
