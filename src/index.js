import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux';
import storeReducer from './Store/reducers/storeResult';
import counterReducer from './Store/reducers/counter';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: storeReducer
})

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
