import React, { Component } from 'react'
import { css } from '@emotion/core'
import { Tabs, Input, Icon } from 'antd'
import { Container, Typography } from 'reus'
import Layout from 'Containers/Layout'
import TabContentList from './TabContentList'
import { FormattedMessage } from 'react-intl'
import ModanaLink from 'Components/ModanaLink'
import SEO from 'Components/Seo'

const TabContentWrapper = ({data}) => {
  return (
    <div css={css`margin-top: 30px;`}>
      {
        data && data.map((item, i) => (
          <TabContentList key={i} data={item}/>
        ))
      }
    </div>
  )
}

class HelpCenter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      query: ``,
      results: []
    }
  }

  emitEmpty = () => {
    this.setState({searchValue: ''})
  }

  getSearchResults = (query) => {
    if (!query || !window.__LUNR__) return []
    const lunrIndex =  window.__LUNR__['en'];
    const results = lunrIndex.index.search(query) // you can  customize your search , see https://lunrjs.com/guides/searching.html
    return results.map(({ ref }) => lunrIndex.store[ref])
}

  onChangeSearch = e => {
    const q = e.target.value
    const results = this.getSearchResults(q)
    this.setState({searchValue: q, results})
  }

  handleClick = e => {
    e.currentTarget.childNodes[1].style.height = 'auto'
  }

  render() {
    const { TabPane } = Tabs
    const suffix = this.state.searchValue ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

    const { data } = this.props.pageContext
    const  TabsContent = () => (
      <Container gutter={22} md>
        <Tabs defaultActiveKey="1" css={theme => css`
          top: -44px;
          .ant-tabs-nav-scroll {
            text-align: center;
          }
          .ant-tabs-bar {
            border-bottom: none;
          }
          .ant-tabs-ink-bar-animated {
            background-color: ${theme.color.secondary};
          }
          .ant-tabs-tab {
            text-transform: uppercase;
            color: #fff;
            &.ant-tabs-tab-active {
              color: ${theme.color.secondary};
            }
          }
        `}>
          <TabPane tab="FAQ" key="1">
            <TabContentWrapper data={data}/>
          </TabPane>
        </Tabs>
      </Container>
    )
    
    return (
      <Layout>
        <div css={theme => css`
          background: ${theme.color.primary};
          form {
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}>
          <SEO 
            title="Help Center" 
            description={["Modana" ]}
            keywords={[`businesses`, `productive`, `hrd`]} />
          <Container md gutter={22}>
            <form>
              <div>
                <Typography
                  tag="h3"
                  type="headline"
                  color="#fff"
                  css={css`padding-bottom: 20px;`}
                >
                  <FormattedMessage id="help-center-banner-title"/>
                </Typography>
                <div css={css`position: relative;`}>
                  <Input className="input-search-docs" css={css`
                    input {
                      border-radius: 21px;
                    }
                  `}
                    prefix={<Icon type="search" />}
                    size="large"
                    onChange={this.onChangeSearch} 
                    value={this.state.searchValue}
                    suffix={suffix} 
                    placeholder="Type your question here..."
                  />
                  {
                    this.state.results.length ?
                      <div css={css`
                        position: absolute;
                        left: 0;
                        right: 0;
                        z-index: 10;
                        top: 60px;
                        ul {
                          list-style: none;
                          background: #fff;
                          border-radius: 20px;
                          padding: 13px 21px;
                          box-shadow: 0px 3px 24px #a0a0a06e;
                          li {
                            padding: 10px 0;
                            a {
                              font-weight: bold;
                              color: #333;
                              display: block;
                            }
                            p {
                              color: #717171;
                            }
                          }
                        }
                      `}>
                        <ul>
                          {
                            this.state.results.map(item => (
                              <li>
                                <ModanaLink to={item.slug}>{item.title}</ModanaLink>
                              </li>
                            ))
                          }
                        </ul>
                      </div> : null
                  }
                </div>
              </div>
            </form>
          </Container>
        </div>
        <TabsContent/>
      </Layout>
          
    )
  }
}

export default HelpCenter