import React, { Component, PropTypes } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Clicker from './../components/Clicker'

import store from 'store'
const { actions } = store

// console.log(actions = actions)

class Foo extends Component {
  static propTypes = {
    // switchState: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  handlerClick() {
    const { dispatch, switchState } = this.props
    // switchState()
    console.log('foo Handler')
    dispatch(actions.switchState())
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
  (dispatch) =>({dispatch: dispatch})
)(Foo)
  // (dispatch) => bindActionCreators(store.actions, dispatch)
  // {
    // return bindActionCreators(actions, dispatch)
    // var d = bindActionCreators(actions, dispatch)

  // }

export default connect(
  (dispatch) => bindActionCreators(store.actions, dispatch)
)(Foo)
