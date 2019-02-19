import React, { Component } from 'react'
import cookies from 'js-cookie'
import { Location } from "@reach/router"

export const LangContext = React.createContext('en')

class LangContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: 'en'
    }
  }

  componentDidMount() {
    const lang = cookies.get('lang')
    if (lang) {
      this.setState({lang})
    }
  }

  handleLang = () => {
    if (this.state.lang === 'en') {
      this.setState({lang: 'id'}, () => cookies.set('lang', this.state.lang))
      
    } else {
      this.setState({lang: 'en'}, () => cookies.set('lang', this.state.lang))
    }
  }
  render() {
    return (
      <Location>
        {
          ({location}) => (
            <LangContext.Provider value={{
              lang: this.state.lang,
              handleLang: this.handleLang,
              location
            }}>
              {this.props.children}
            </LangContext.Provider>
          )
        }
      </Location>
    )
  }
}

const LangContextConsumer = LangContext.Consumer

export { LangContextProvider, LangContextConsumer }