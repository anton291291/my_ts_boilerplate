import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {rootReducer} from './rootReducer';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, middleware);

export default store;
