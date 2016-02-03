import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './reducers'

export default function createAndConfigureStore(/* initialState*/) {
  const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
  )

  /*
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers')
      store.replaceReducer(nextReducer)
    })
  }*/
  return store
}
