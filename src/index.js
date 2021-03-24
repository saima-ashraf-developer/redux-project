import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import storeReducer from './Store/reducers/storeResult';
import counterReducer from './Store/reducers/counter';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    ctr: counterReducer,
    res: storeReducer
})
const logger=store=>{
    return next=> {
        return action=>{
            console.log(action, 'middleware dispatch')
            const result = next(action)
            console.log(result, store.getState())
            return result
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
