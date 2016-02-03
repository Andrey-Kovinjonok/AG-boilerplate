import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import api from 'api'

import store from 'store'
const { actions } = store

import 'isomorphic-fetch'

class App extends Component {
  static propTypes = {
    isChecked: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props)

    this.state = {
      gazp: '--',
    }

    const { dispatch } = props
    setInterval(() => {
      fetch('http://www.google.com/finance/info?q=MCX:GAZP')
      .then(req => {
        return req.text()
      })
      .then(data => {
        const stock = JSON.parse(data.replace(/[\/\[\]]/g, ''))
        console.log(stock)
        dispatch(actions.stockData({ valueName: 'MCX:GAZP', value: stock.l_fix }))
      })
      .catch(error => {
        console.log('error:', error)
        dispatch(actions.stockData({ valueName: 'MCX:GAZP', value: '-!-' }))
      })
    }, 1000)
  }

  render() {
    const { children, isChecked = false, gazp } = this.props

    return (
      <div>
        CLICK TO SWITCH CURRENT STATE: {isChecked.toString()}

        <div>
          GAZP: {gazp}
        </div>

        {children}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      isChecked: state.switcher.isChecked,
      gazp: state.fetcher.stocks['MCX:GAZP'],
    }
  },
  (dispatch) => ({dispatch}),

  /*
  (dispatch) => {
    return {
      stockData: dispatch(actions.stockData),
    }
  }*/
)(App)
