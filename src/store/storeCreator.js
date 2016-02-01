import { createStore, applyMiddleware, compose } from 'redux'
import middleware from './middleware'
import reducers from './reducers'

export default function createAndConfigureStore(/*initialState*/) {
  /*
  const finalCreateStore = compose(
    applyMiddleware(middleware),
  )(createStore)*/

  // const store = finalCreateStore(reducers/*, initialState*/)
  const store = createStore(reducers)

  /*
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers')
      store.replaceReducer(nextReducer)
    })
  }*/
  return store
}
