import React, { PureComponent } from 'react'
import { withPrefix } from 'gatsby-link'

class Redirect extends PureComponent {
  constructor(props) {
    super(props)

    const { pathname } = props.location
    console.log('from redirect', props)

    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('gatsbyUser')) {
        window.location.replace('/')
      } else {
        const newUrl = withPrefix(`/app`)
        window.location.replace('/app/login')
      }
    }
  }

  render() {
    return <div/>
  }
}

export default Redirect