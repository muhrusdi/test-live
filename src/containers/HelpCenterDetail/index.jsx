import React, { Component } from 'react'
import Layout from 'Containers/Layout'
import styled from '@emotion/styled'
import { Icon, Breadcrumb, Button } from 'antd'
import { css } from '@emotion/core'
import { Container, Typography, Row, Col } from 'reus'
import { graphql } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import ModanaLink from 'Components/ModanaLink'
import SEO from 'Components/Seo'

class SubLi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleMenu: false,
      toggleMainContent: false
    }
  }
  componentDidMount() {
    this.setState({toggleMenu: this.props.slug === this.props.node.fields.slug})
  }
  handleClick = e => {
    this.setState(({toggleMenu}) => ({toggleMenu: !toggleMenu}))
  }
  render() {
    const SubLi = styled.li`
      padding: 5px 0;
    `
    const MenuLink = ({children, href}) => (
      <div>
        <ModanaLink to={`${href}`} css={theme => css`
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          align-items: center;
          span {
            font-weight: bold;
            color: ${theme.color.primary};
          }
        `}>
          <span>{children}</span>
          <Icon type={this.state.toggleMenu ? 'minus' : 'plus'} css={theme => css`
            color: ${theme.color.secondary};
            margin-left: 16px;
          `}/>
        </ModanaLink>
      </div>
    )
    const SubLink = styled.span`
      color: #333;
      font-size: 14px;
    `
    return (
      <li>
        <MenuLink href={this.props.node.fields.slug} onClick={this.handleClick}>
          <FormattedMessage id={`side-title-${this.props.node.frontmatter.title}`}/>
        </MenuLink>
        <ul css={css`
          overflow: hidden;
          transition: height .3s ease;
          height: ${this.state.toggleMenu ? this.ulEl.scrollHeight : 0}px;
          & > li {
            &:last-of-type {
              padding-bottom: 30px;
            }
          }
        `} ref={node => this.ulEl = node}>
          {
            this.props.node.frontmatter.headings.map((item, i) => {
              return (
                <SubLi key={i}>
                  <SubLink>
                    <FormattedMessage id={item}/>
                  </SubLink>
                </SubLi>
              )
            })
          }
        </ul>
      </li>
    )  
  }
}

class HelpCenterDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleSide: false,
      toggleMainContent: false,
      alertText: 'alert-title',
      alertConfirm: false,
      alertClose: false
    }
  }
  componentDidMount() {
    if (window.innerWidth <= 768) {
      this.setState({toggleSide: true})
      if (this.state.toggleSide) {
        this.setState({toggleMainContent: true})
      }
    } else {
      this.setState({toggleSide: false})
      this.setState({toggleMainContent: true})
    }
    window.addEventListener('resize', this.handleResize, false)
  }
  componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize, false)
  }
  handleResize = () => {
    if (window.innerWidth <= 768) {
      this.setState({toggleSide: true})
      if (this.state.toggleSide) {
        this.setState({toggleMainContent: true})
      }
    } else {
      this.setState({toggleSide: false})
      this.setState({toggleMainContent: true})
    }
  }
  handleClickAlert = () => {
    this.setState({
      alertText: 'alert-title-confirm',
      alertConfirm: true
    })
  }
  handleAlertClose = () => {
    this.setState({alertClose: true})
  }
  render() {
    const Sidebar = styled.div`
      position: relative;
      left: 0;
      top: 0;
      margin-left: ${this.state.toggleSide ? -262 : 0}px;
      width: 250px;
      flex: none;
      padding: 20px 10px;
      transition: all .7s ease;
      ul {
        list-style: none;
        padding: 0;
      }
    `
    const ContentWrapper = styled.div`
      position: relative;
      display: flex;
      margin-bottom: 40px;
    `
    const MainContent = styled.div`
      @media screen and (max-width: ${({theme}) => theme.breakPoints.md}) {
        margin-right: ${this.state.toggleSide ? 0 : -240}px;
      }
      @media screen and (min-width: ${({theme}) => theme.breakPoints.md}) {
        margin-right: 0;
      }
      padding: 30px 90px;
      @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
        padding: 30px 8px;
      }
      position: relative;
      transition: all .7s ease;
      h2 {
        font-size: 24px;
        border-bottom: 3px solid #e8e8e8;
        display: inline-block;
      }
      p {
        color: #6d6d6d;
      }
    `
    const pathNames = this.props.pathContext.slug.split('/')

    const Alert = () => (
      <div css={css`
        padding: 12px 15px;
        background: #e4e4e4;
        margin-top: 60px;
        position: relative;
      `}>
        <Row align="center">
          <Col>
            <div css={css`
              display: flex;
              align-items: center;
              padding: 10px 0;
              height: 40px;
            `}>
              <span css={css`padding-right: 20px;`}>
                <FormattedMessage id={`${this.state.alertText}`}/>
              </span>
            </div>
          </Col>
          {
            this.state.alertConfirm ? 
              <></> : (
                <Col>
                  <div>
                    <Button type="default" onClick={this.handleClickAlert}><FormattedMessage id="alert-yes"/></Button>
                    <Button type="default" onClick={this.handleClickAlert}><FormattedMessage id="alert-no"/></Button>
                  </div>
                </Col>
              )
          }

          <div css={css`
            position: absolute;
            right: 14px;
            top: 18px;
            button {
              outline: none;
              border: none;
              background: none;
            }
          `}>
            <button onClick={this.handleAlertClose}><Icon type="close" /></button>
          </div>
        </Row>
      </div>
    )
    return (
      <Layout>
        <Container xl gutter={20}>
          <div css={css`
            padding: 30px 5px 10px 5px;
            display: flex;
            align-items: center;
          `}>
            <SEO 
              title={this.props.data.markdownRemark.frontmatter.title}
              description={["Modana" ]}
              keywords={[`businesses`, `productive`, `hrd`]} />
            <div css={theme => css`
              padding: 5px 10px;
              margin-right: 20px;
              vertical-align: middle;
              cursor: pointer;
              border-radius: 4px;
              background: #eaeaea;
              @media screen and (min-width: ${theme.breakPoints.md}) {
                display: none;
              }
            `} onClick={() => this.setState(({toggleSide, toggleMainContent}) => ({
              toggleSide: !toggleSide,
              toggleMainContent: !toggleMainContent
            }))}>
              <Icon type="bars" />
            </div>
            <Breadcrumb separator={<Icon css={css`
              font-size: 12px;
              transform: scaleX(.7);
            `} type="right" />}>
              {
                pathNames.map((item, i) => {
                  if (item) {
                    return <Breadcrumb.Item key={i}>
                      <ModanaLink css={css`text-transform: capitalize;`} to="help-center">
                        {item.replace('-', ' ')}
                      </ModanaLink>
                    </Breadcrumb.Item>
                  }
                  return null
                })
              }
            </Breadcrumb>
          </div>
          <ContentWrapper>
            <Sidebar>
              <div>
                <Typography
                  tag="h4"
                  type="tout"
                  css={theme => css`
                    color: ${theme.color.primary};
                    padding-bottom: 20px;
                  `}
                >
                  <FormattedMessage id="side-title"/>
                </Typography>
              </div>
              <ul>
                {
                  this.props.pageContext.dataMenus && this.props.pageContext.dataMenus.map((item, i) => {
                    return <SubLi key={i} node={item.node} slug={this.props.data.markdownRemark.fields.slug}/>
                  })
                }
              </ul>
            </Sidebar>
            <MainContent>
              <div>
                <div dangerouslySetInnerHTML={{__html: this.props.data.markdownRemark && this.props.data.markdownRemark.html}}></div>
                { this.state.alertClose ? null : <Alert/>}
              </div>
            </MainContent>
          </ContentWrapper>
        </Container>
      </Layout>
    )
  }
}

export default HelpCenterDetail

export const pageQuery = graphql`
  query($slug: String!, $lang: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}, frontmatter: {lang: {eq: $lang}}) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        headings
      }
    }
  }
`