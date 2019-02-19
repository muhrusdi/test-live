import React, { Component } from 'react'

const GlobalnavContext = React.createContext(false)

class GlobalnavContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
  }

  handleToggle = () => {
    this.setState(({toggle}) => ({toggle: !toggle}))
  }
  componentDidUpdate() {
    if (this.state.toggle) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }
  render() {
    return (
      <GlobalnavContext.Provider value={{toggle: this.state.toggle, handleToggle: this.handleToggle}}>
        {this.props.children}
      </GlobalnavContext.Provider>
    )
  }
}

const GlobalnavContextConsumer = GlobalnavContext.Consumer

export { GlobalnavContextProvider, GlobalnavContextConsumer }