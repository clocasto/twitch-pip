import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import playerReducer from './reducers/player';

import rootReducer from './reducers/reducers.js';

const defaultState = {
   playerReducer: {alex: 'memes'}
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// if (module.hot) {
// 	module.hot.accept('./reducers/', () => {
// 		let nextRootReducer = require('./reducers/reducers').default;
// 		store.replaceReducer(nextRootReducer); 
// 	})
// }

export default store;
