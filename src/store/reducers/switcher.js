import { handleActions } from 'redux-actions'
import constants from './../constants'
const { actions } = constants

const initialState = {
  isChecked: false,
}

export const switchState = handleActions({
  [constants.actions.switchState]: (state) => ({
    isChecked: !state.isChecked,
  }),
}, initialState)
