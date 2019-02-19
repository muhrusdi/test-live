import React from 'react'
import styled from '@emotion/styled'
import Layout from 'Containers/Layout'
import { LinkArrow, Item, Headline } from 'Components'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col, Typography } from 'reus'
import { css } from '@emotion/core'
import { FormattedMessage } from 'react-intl'
import Img from 'gatsby-image'
import SEO from 'Components/Seo'

const Lenders = () => {
  const Banner = styled.div`
    @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
      padding-top: 30px;
    }
  `
  const StyledRow = styled(Row)`
    height: 500px;
  `
  const LenderItem = styled.div`
    padding: 70px 0;
    @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
      padding: 40px 0;
    }
  `
  return (
    <StaticQuery
      query={graphql`
        query LendersQuery {
          secure: file(relativePath: { eq: "secure.png" }) {
            childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          checklist: file(relativePath: { eq: "checklist.png" }) {
            childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          time: file(relativePath: { eq: "time.png" }) {
            childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          illusSecurity: file(relativePath: { eq: "Easy use mobile system.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          registrasi: file(relativePath: { eq: "registrasi.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          overviewHero: file(relativePath: { eq: "lending-04.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          lending: file(relativePath: { eq: "Lending Illustration.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          payroll: file(relativePath: { eq: "Payroll Illustration.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          hrd: file(relativePath: { eq: "HR Illustration.png" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Layout>
            <Container xl gutter={20}>
              <SEO 
                  title="Lending" 
                  description={["Modana" ]}
                  keywords={[`businesses`, `productive`, `hrd`]} />
              <Banner>
                <StyledRow align="center">
                  <Col md={6}>
                    <div>
                      <Typography
                        tag="h2"
                        type="headline"
                        weight="bold"
                        css={theme => css`
                          color: ${theme.color.primary};
                          margin-bottom: 30px;
                        `}
                      >
                        <FormattedMessage id="lending-banner-title"/>
                      </Typography>
                      <LinkArrow text={<FormattedMessage id="try-now-for-free"/>}/> 
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      <Img fluid={data.overviewHero.childImageSharp.fluid} />
                    </div>
                  </Col>
                </StyledRow>
              </Banner>
              <div css={css`padding-top: 50px;`}>
                <Row justify="space-around">
                  <Col md={3}>
                    <Item
                      title={<FormattedMessage id="lending-fitur-1-item"/>}
                      image={data.secure}
                    />
                  </Col>
                  <Col md={3}>
                    <Item
                      title={<FormattedMessage id="lending-fitur-2-item"/>}
                      image={data.checklist}
                    />
                  </Col>
                  <Col md={3}>
                    <Item
                      title={<FormattedMessage id="lending-fitur-3-item"/>}
                      image={data.time}
                    />
                  </Col>
                </Row>
              </div>
              <LenderItem>
                <div css={css`margin-bottom: 70px;`}>
                  <Headline
                    title={<FormattedMessage id="lending-section-1-title"/>}
                    desc={<FormattedMessage id="lending-section-1-desc"/>}
                  />
                </div>
                <Row align="center" gutter={20}>
                  <Col md={3}>
                    <div css={theme => css`
                      @media screen and (max-width: ${theme.breakPoints.sm}) {
                        display: none;
                      }
                    `}>
                      <Img fluid={data.illusSecurity.childImageSharp.fluid} />
                    </div>
                  </Col>
                  <Col md={9}>
                    <div>
                      <div>
                        <Row align="center">
                          <Col md={3}>
                            <div>
                              <Img fluid={data.hrd.childImageSharp.fluid} />
                            </div>
                          </Col>
                          <Col md={9}>
                            <div>
                              <Typography
                                tag="h4"
                                type="label"
                                css={theme => css`
                                  @media screen and (max-width: ${theme.breakPoints.sm}) {
                                    text-align: center;
                                  }
                                `}
                              >
                                <FormattedMessage id="lending-list-1"/>
                              </Typography>
                              <Typography
                                tag="p"
                                type="body"
                                css={theme => css`
                                  @media screen and (max-width: ${theme.breakPoints.sm}) {
                                    text-align: center;
                                  }
                                `}
                              >
                                <FormattedMessage id="lending-list-1-desc"/>
                              </Typography>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        <Row align="center">
                          <Col md={3}>
                            <div>
                              <Img fluid={data.payroll.childImageSharp.fluid} />
                            </div>
                          </Col>
                          <Col md={9}>
                            <div>
                              <Typography
                                tag="h4"
                                type="label"
                                css={theme => css`
                                  @media screen and (max-width: ${theme.breakPoints.sm}) {
                                    text-align: center;
                                  }
                                `}
                              >
                                <FormattedMessage id="lending-list-2"/>
                              </Typography>
                              <Typography
                                tag="p"
                                type="body"
                                css={theme => css`
                                  @media screen and (max-width: ${theme.breakPoints.sm}) {
                                    text-align: center;
                                  }
                                `}
                              >
                                <FormattedMessage id="lending-list-2-desc"/>
                              </Typography>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        <Row align="center">
                          <Col md={3}>
                            <div>
                              <Img fluid={data.lending.childImageSharp.fluid} />
                            </div>
                          </Col>
                          <Col md={9}>
                            <div>
                              <Typography
                                tag="h4"
                                type="label"
                                css={theme => css`
                                  @media screen and (max-width: ${theme.breakPoints.sm}) {
                                    text-align: center;
                                  }
                                `}
                              >
                                <FormattedMessage id="lending-list-3"/>
                              </Typography>
                              <Typography
                                tag="p"
                                type="body"
                                css={theme => css`
                                  @media screen and (max-width: ${theme.breakPoints.sm}) {
                                    text-align: center;
                                  }
                                `}
                              >
                                <FormattedMessage id="lending-list-3-desc"/>
                              </Typography>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </LenderItem>
              {/* <LenderItem>
                <div>
                  <Headline
                    title={<FormattedMessage id="lending-section-2-title"/>}
                  />
                </div>
                <Img fluid={data.registrasi.childImageSharp.fluid} />
              </LenderItem> */}
            </Container>
          </Layout>
        )
      }}
    />
  )
}

export default Lenders