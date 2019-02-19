import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { LangContextProvider, LangContextConsumer } from 'Components/Context'
import id from 'react-intl/locale-data/id'
import en from 'react-intl/locale-data/en'
import { addLocaleData, IntlProvider } from 'react-intl'
import localEng from './src/locales/en/messages.json'
import localId from './src/locales/id/messages.json'
import { theme } from './src/utils/constants'
import './src/containers/Layout/layout.css'

addLocaleData(id, en)

export const wrapRootElement = ({ element }) => {
  return (
    <LangContextProvider>
      <LangContextConsumer>
        {
          ({lang}) => (
            <IntlProvider locale={lang} messages={lang === 'en' ? localEng : localId}>
              <ThemeProvider theme={theme}>
                {element}
              </ThemeProvider>
            </IntlProvider>
          )
        }
      </LangContextConsumer>
    </LangContextProvider>  
  )
}

export const onRouteUpdate = () => {
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
}