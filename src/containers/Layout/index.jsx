import React from 'react'
import { css } from '@emotion/core'
import Globalnav from 'Components/Globalnav'
import Globalfooter from 'Components/Globalfooter'

const Layout = ({children}) => {
  return (
    <div css={css`
      overflow: hidden;
      padding: 0;
      width: 100%;
    `}>
      <Globalnav/>
      { children }
      <Globalfooter/>
    </div>
  )
}

export default Layout