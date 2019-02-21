import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Container, Row, Col, Typography } from 'reus'
import { Button, Input } from 'antd'
import { FormattedMessage } from 'react-intl'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Banner  = () => {
  const InputStyled = styled(Input)`
    border-radius: 21px;
    margin-bottom: 20px;
    border: 1px solid #f3f3f4;
    padding: 6px 20px;
    max-width: 60%;
    @media screen and (max-width: ${({theme}) => theme.breakPoints.md}) {
      max-width: 100%;
    }
  `
  const SubmitStyled = styled.a`
    line-height: 1.499;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    height: 42px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
    border-radius: 21px;
    background: ${({theme}) => theme.color.secondary};
    color: #fff;
    border: 1px solid ${({theme}) => theme.color.secondary};
    text-transform: uppercase;
    max-width: 60%;
    width: 100%;
    font-size: 12px;
    font-weight: bold;
    box-sizing: border-box;
    &:hover {
      color: #fff;
    }
    span {
      display: block;
      padding: 11px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakPoints.md}) {
      max-width: 100%;
      text-align: center;
    }
  `
  const BannerWrapper = styled.div`
    /* .banner-heading {
      opacity: 0;
    }
    .banner-desc {
      opacity: 0;
    }
    .banner-form {
      opacity: 0;
    } */
  `
  const BannerLeftWrapper = styled.div`
    padding-bottom: 20px;
  `
  
  return (
    <StaticQuery
      query={graphql`
        query BannerQuery {
          google: file(relativePath: { eq: "google-logo.png" }) {
            childImageSharp {
              fixed(width: 20) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          heroImage: file(relativePath: { eq: "Mockup laptop and mobile.png" }) {
            childImageSharp {
              fluid(maxWidth: 633) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Container xl gutter={22}>
            <Row align="center" css={theme => css`
              height: 100vh;
              min-height: 900px;
              @media screen and (max-width: ${theme.breakPoints.md}) {
                min-height: 800px;
              }
              @media screen and (max-width: ${theme.breakPoints.sm}) {
                min-height: 900px;
              }
            `}>
              <Col lg={6} md={6} sm={6}>
                <Col>
                  {/* <Transition
                    mountOnEnter
                    unmountOnExit
                    in={true}
                    appear
                    timeout={50}
                    onEnter={node => {
                      TweenLite.set(node.childNodes[0].firstChild, {
                        opacity: 0,
                        y: -20
                      })

                      TweenLite.set(node.childNodes[0].lastChild, {
                        opacity: 0,
                        y: -20,
                      })
                      TweenLite.set(node.childNodes[1], {
                        opacity: 0
                      })
                    }}
                    onEntered={node => {
                      TweenLite.to(node.childNodes[0].firstChild, 1.7, {
                        opacity: 1,
                        y: 0,
                        delay: 0
                      })
                      TweenLite.to(node.childNodes[0].lastChild, 1.4, {
                        opacity: 1,
                        y: 0,
                        delay: 1.3
                      })
                      TweenLite.to(node.childNodes[1], 1, {
                        opacity: 1,
                        delay: 2
                      })
                    }}
                    > */}
                    <BannerWrapper>
                      <BannerLeftWrapper>
                        <Typography 
                          className="banner-heading"
                          tag="h2" 
                          weight="bold"
                          css={theme => css`color: ${theme.color.primary};`}
                          type="headline-elevated">
                            <FormattedMessage id="home-banner-title" />
                        </Typography>
                        <Typography className="banner-desc" tag="p" type="intro-elevated">
                          <FormattedMessage id="home-banner-desc" />
                        </Typography>
                      </BannerLeftWrapper>
                      <div css={css`margin-top: 30px;`} className="banner-form">
                        {/* <SignUpGoogle size="large">
                          <Img css={css`margin-right: 12px;`} fixed={data.google.childImageSharp.fixed} />
                          <FormattedMessage id="home-banner-signup-google" />
                        </SignUpGoogle> */}
                        {/* <Or>or</Or> */}
                        <form>
                          {/* <label>
                            <FormattedMessage tagName="" id="home-banner-form-fullname">
                            {
                              text => 
                                <InputStyled size="large" placeholder={text} alt="Full Name"/>
                            }
                            </FormattedMessage>
                          </label>
                          <label>
                            <FormattedMessage tagName="" id="home-banner-form-email">
                              {
                                text =>
                                  <InputStyled size="large" placeholder={text} alt="Work email address"/> 
                              }
                            </FormattedMessage>
                          </label>
                          <label>
                            <FormattedMessage tagName="" id="home-banner-form-company-name">
                              {
                                text => 
                                  <InputStyled size="large" placeholder={text} alt="Company Name"/>
                              }
                            </FormattedMessage>
                          </label> */}
                          <SubmitStyled size="large" href="https://hr.modana.id/signup">
                            <FormattedMessage id="home-banner-get-started" />
                          </SubmitStyled>
                        </form>
                      </div>
                    </BannerWrapper>
                  {/* </Transition> */}
                </Col>
              </Col>
              <Col lg={6} md={6} sm={6}>
                <div>
                  <Img css={css`transform: scale(1.2);`} fluid={data.heroImage.childImageSharp.fluid}/>
                </div>
              </Col>
            </Row>
          </Container>
        )
      }}
    />
  )
}

export default Banner