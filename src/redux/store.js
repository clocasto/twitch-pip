import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';


import rootReducer from './reducers/reducers.js';

const defaultState = {
   playerReducer: {alex: 'memes'},
   buttonReducer: {thin: {height: 100,
                   width: 200,
                   color: 'green',
                   position: 'absolute',
                   top: 0,
                   left: 0},
                   fat: {height: 100,
                         width: 400,
                         color: 'red',
                         position: 'absolute',
                         right: 0,
                         bottom: 0},
                    one: 'thin',
                    two: 'fat'}
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
