import { createStore,compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createsagamiddleware from 'redux-saga'
import rootSaga from './root_saga'

import rootReducer from './root-reducer';


const sagaMiddleware = createsagamiddleware()

const middlewares = [sagaMiddleware];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

const all = { store, persistStore };

export default all
