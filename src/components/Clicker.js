
import React, { Component, PropTypes } from 'react'

class Clicker extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    state: PropTypes.object,
  };

  constructor(props) {
    super(props)
  }

  handleClick(props) {
    const { onClick } = props
    if (onClick) {
      onClick()
    }
  }

  render() {
    const { ...props } = this.props
    return (
      <button onClick={()=>{this.handleClick(props)}}>
        SWITCH
      </button>
    )
  }
}

export default Clicker

