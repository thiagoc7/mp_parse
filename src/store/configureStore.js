import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './../reducers/index'

import routes from './../routes'
import { createHistory } from 'history';
import { reduxReactRouter } from 'redux-router';

import createLogger from 'redux-logger'
const loggerMiddleware = createLogger()

const finalStore = compose(
    applyMiddleware(
        loggerMiddleware,
        thunkMiddleware
    ),
    reduxReactRouter({
      routes,
      createHistory
    })
)(createStore);

export default function configureStore(initialState) {
  return finalStore(rootReducer, initialState)
}