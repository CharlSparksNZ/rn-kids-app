'use strict'

import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'

import reducers from './reducer'

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent

var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true
})

let createAppStore = applyMiddleware(thunk, logger)(createStore)

function configureStore (onComplete) {
  // TODO(frantic): reconsider usage of redux-persist, maybe add cache breaker
  const store = autoRehydrate()(createAppStore)(reducers)
  persistStore(store, {storage: AsyncStorage}, onComplete)
  if (isDebuggingInChrome) {
    window.store = store
  }
  return store
}

module.exports = configureStore
