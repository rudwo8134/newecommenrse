import {createStore} from 'redux'
import {persistStore}from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import rootReducer from './root-reducer'


// import logger from 'redux-logger'


// const middlewares = [logger];
// applyMiddleware (...middlewares)


export const store = createStore(rootReducer, composeWithDevTools())

export const persistor = persistStore(store)

export default {store, persistor};