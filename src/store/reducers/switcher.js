import { handleActions } from 'redux-actions'
import constants from './../constants'
const { actions } = constants

const initialState = {
  isChecked: false,
}

export default handleActions({
  [constants.actions.switchState]: (state) => ({
    isChecked: !state.isChecked,
  }),
}, initialState)
