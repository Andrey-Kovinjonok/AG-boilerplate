import { createAction } from 'redux-actions'

import constants from './constants.js'

const switchState = createAction(constants.actions.switchState)

export default {
  switchState,
}
