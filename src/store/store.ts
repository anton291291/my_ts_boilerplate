import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import {rootReducer} from './rootReducer';
import { rootSaga } from './sagas/rootSaga';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = this?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const middleware = composeEnhancers(applyMiddleware(thunk, sagaMiddleware));

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga)

export default store;
