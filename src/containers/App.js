import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  static propTypes = {
    isChecked: PropTypes.bool.isRequired,
  };

  render() {
    const { children, isChecked = false } = this.props

    return (
      <div>
        CLICK TO SWITCH CURRENT STATE: {isChecked.toString()}
        {children}
      </div>
    )
  }
}

// export default App
export default connect(
  (state) => ({isChecked: state.switcher.isChecked})
)(App)
