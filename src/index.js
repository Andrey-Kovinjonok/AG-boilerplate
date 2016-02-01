
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import Foo from './containers/Foo'

import reduxStore from 'store'

const configuredStore = reduxStore.createAndConfigureStore()
const history = createHistory()

syncReduxAndRouter(history, configuredStore)

ReactDOM.render(
  <Provider store={configuredStore}>
    <Router history={history}>
      <Route path='/' component={App}>
        <Route path='foo' component={Foo} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
