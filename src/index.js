import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';

// function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('state', serializedState);
//   } catch (e) {
//     console.log(e);
//   }
// }
const store = createStore(rootReducer, applyMiddleware(thunk));
// store.subscribe(()=> saveToLocalStorage(store.getState()));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
