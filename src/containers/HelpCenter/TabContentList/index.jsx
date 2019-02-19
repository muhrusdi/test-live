import React, { Component } from 'react'
import { css } from '@emotion/core'
import { Icon } from 'antd'
import { FormattedMessage } from 'react-intl'
import ModanaLink from 'Components/ModanaLink'

class TabContentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }
  
  handleClick = () => {
    this.setState(({isActive}) => ({isActive: !isActive}))
  }
  render() {
    const { data } = this.props
    return (
      <div css={css`
        padding: 10px;
        cursor: pointer;
      `} onClick={this.handleClick}>
        <div css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}>
          <h4 css={theme => css`
            margin: 0;
            color: ${theme.color.primary};`}>
            <FormattedMessage id={`side-title-${data.node.frontmatter.title}`}/>
          </h4>
          <Icon css={theme => css`color: ${theme.color.secondary};`} type={this.state.isActive ? 'minus' : 'plus'}/>
        </div>
        <div ref={node => this.nodeEl = node} css={css`
          transition: height .3s ease;
          height: ${this.state.isActive ? this.nodeEl.scrollHeight : 0}px; 
          overflow: hidden;`}>
          <ul css={css`
            list-style: none;
            padding: 20px;
            margin: 0;
            li {
              padding: 6px;
              a {
                color: #444;
                display: block;
              }
            }
          `}>
            {
              data.node.frontmatter.headings.map((item, i) => (
                <li key={i}>
                  <ModanaLink to={data.node.fields.slug}>
                    <FormattedMessage id={item}/>
                  </ModanaLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default TabContentList