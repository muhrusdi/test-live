import React from 'react'
import { Link } from 'gatsby'
import { LangContextConsumer } from 'Components/Context'

const ModanaLink = ({children, to, ...props}) => {
  return (
    <LangContextConsumer>
      {
        ({lang}) => {
          const _to = lang === 'en' ? to : `id/${to}`
          return (
            <Link to={_to} {...props}>
              {children}
            </Link>
          )
        }
      }
    </LangContextConsumer>
  )
}

export default ModanaLink