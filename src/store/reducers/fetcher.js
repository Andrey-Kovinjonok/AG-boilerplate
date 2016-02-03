import { handleActions } from 'redux-actions'
import constants from './../constants'
const { actions } = constants

const initialState = {
  stocks: {},
}

export const stockData = handleActions({
  [constants.actions.stockData]: (state, {payload}) => {
    const {valueName, value} = payload
    state.stocks[valueName] = value
    return {
      ...state,
    }
  },
}, initialState)
