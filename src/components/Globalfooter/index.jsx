import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Button, Input, Icon } from 'antd'
import { FormattedMessage } from 'react-intl'
import { Container, Row, Col, Typography } from 'reus'
import ModanaLink from 'Components/ModanaLink'

const Globalfooter = () => {
  const Search = Input.Search
  const FooterWrapper = styled.footer`
    background: ${({theme}) => theme.color.bgFooter};
    padding: 80px 0 74px 0;
  `
  const HeadWrapper = styled.div`
    margin-bottom: 70px;
    text-align: center;
  `
  const List = styled.ul`
    list-style: none;
    padding: 0;
    li {
      padding-bottom: 10px;
      a {
        text-transform: uppercase;
        font-weight: bold;
        color: #fff;
      }
    }
  `
  const GetStarted = styled.a`
    height: 48px;
    width: 180px;
    border-radius: 26px;
    font-size: 14px;
    display: inline-block;
    text-transform: uppercase;
    color: #fff;
    border: 1px solid ${({theme}) => theme.color.secondary};
    background: ${({theme}) => theme.color.secondary};
    &:hover {
      color: #fff;
    }
    span {
      display: block;
      padding: 12px;
    }
  `
  const NewsLetterInputStyled = styled(Search)`
    height: 44px;
    input {
      background: #fff !important;
      height: 44px;
      border-radius: 22px !important;
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      font-size: 14px !important;
    }
    .ant-input-group-addon {
      background: none !important;
    }
    button {
      border-bottom-right-radius: 22px;
      border-top-right-radius: 22px;
      background: ${({theme}) => theme.color.secondary};
      border: 1px solid ${({theme}) => theme.color.secondary};
      font-size: 14px;
      height: 44px;
    }
  `
  const SosmedLink = styled.a`
    color: #fff;
    font-size: 30px;
  `
  const SosmedWrapper = styled.div`
    margin-bottom: 20px;
  `
  const GfItem = styled.div`
    margin-bottom: 30px;
  `
  return (
    <StaticQuery
      query={graphql`
        query GlobalfooterQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        return (
          <FooterWrapper>
            <Container md gutter={22}>
              <HeadWrapper>
                <Typography
                  type="headline-reduced"
                  align="center"
                  color="#fff"
                  tag="h2">
                  <FormattedMessage id="footer-title"/>
                </Typography>
                <GetStarted href="https://hr.modana.id/signup"><FormattedMessage id="nav-get-started"/></GetStarted>
              </HeadWrapper>
            </Container>
            <Container xl gutter={22}>
              <Row gutter={30} css={css`
                padding-top: 30px;
              `}>
                <Col md={4}>
                  <GfItem>
                    <Typography
                      type="tout"
                      color="#fff"
                      tag="h4">
                      <FormattedMessage id="footer-newsletter-title"/>
                    </Typography>
                    {/* <Typography
                      type="body-reduced"
                      css={css`
                        margin-bottom: 30px;
                        opacity: .8;`}
                      color="#fff"
                      tag="p">
                      <FormattedMessage id="footer-newsletter-desc"/>
                    </Typography> */}
                    <NewsLetterInputStyled
                      enterButton="Subscribe"
                      size="large"
                      placeholder="Your Email Address"/>
                  </GfItem>
                </Col>
                <Col md={4}>
                  <GfItem>
                    <List>
                      <li>
                        <ModanaLink to="/about-us"><FormattedMessage id="footer-about"/></ModanaLink>
                      </li> 
                      <li>
                        <ModanaLink to="/help-center"><FormattedMessage id="footer-contact"/></ModanaLink>
                      </li> 
                      <li>
                        <ModanaLink to="/term-of-service/agrement-employee/"><FormattedMessage id="footer-term"/></ModanaLink>
                      </li> 
                      <li>
                        <ModanaLink to="/privacy-policy/"><FormattedMessage id="footer-privacy"/></ModanaLink>
                      </li> 
                      <li>
                        <ModanaLink to="#"><FormattedMessage id="footer-press"/></ModanaLink>
                      </li>  
                    </List>
                  </GfItem>
                </Col>
                <Col md={4} css={css`align-self: flex-end;`}>
                  <GfItem>
                    <Typography
                      type="body-reduced"
                      color="#fff"
                      weight="bold"
                      css={css`text-transform: uppercase;`}
                      tag="p">
                      <FormattedMessage id="footer-follow"/>
                    </Typography>
                    <SosmedWrapper>
                      <Row gutter={15}>
                        {/* <Col>
                          <SosmedLink>
                            <Icon type="facebook" />
                          </SosmedLink>
                        </Col> */}
                        <Col>
                          <SosmedLink href="https://www.linkedin.com/company/modana-group" target="_blank">
                            <Icon type="linkedin" />
                          </SosmedLink>
                        </Col>
                        <Col>
                          <SosmedLink href="https://www.instagram.com/modana.id/" target="_blank">
                            <Icon type="instagram" />
                          </SosmedLink>
                        </Col>
                        {/* <Col>
                          <SosmedLink>
                            <Icon type="youtube" />
                          </SosmedLink>
                        </Col> */}
                      </Row>
                    </SosmedWrapper>
                    <Typography
                      type="caption"
                      color="#fff"
                      tag="p">
                      © 2018 Modana All Rights Reserved
                    </Typography>
                  </GfItem>
                </Col>
              </Row>
            </Container>
          </FooterWrapper>
        )
      }}
    />
  )
}

export default Globalfooter