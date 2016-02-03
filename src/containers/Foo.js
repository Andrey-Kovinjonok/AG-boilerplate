import React, { Component, PropTypes } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Clicker from './../components/Clicker'

import store from 'store'
const { actions } = store
import { switchState as actionSwitch } from './../store/actions.js'

class Foo extends Component {
  static propTypes = {
    switchState: PropTypes.func.isRequired,
  };

  handlerClick() {
    const { dispatch, switchState } = this.props
    switchState()
  }

  render() {
    const { switchState } = this.props

    return (
      <div>
        <h1>SAMPLE FOO COMPONENT</h1>
        <Clicker onClick={()=>this.handlerClick()}/>
      </div>
    )
  }
}

export default connect(
  undefined,
  //(dispatch) =>(console.log('dispatch', dispatch), {switchState: () => dispatch(actionSwitch())})
  //(dispatch) =>({switchState: (...args) => dispatch(actionSwitch(...args))})
  (dispatch) => bindActionCreators({switchState: actionSwitch}, dispatch)
  // (state) => (console.log('dispatch', dispatch), {dispatch})
)(Foo)
