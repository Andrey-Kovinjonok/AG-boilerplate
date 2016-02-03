import { createAction } from 'redux-actions'

import constants from './constants.js'

const switchState = createAction(constants.actions.switchState)

const stockData = createAction(constants.actions.stockData)

export {
  switchState,
  stockData,
}
