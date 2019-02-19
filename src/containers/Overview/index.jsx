import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { LinkArrow, Headline, TitleDesc, Item, LearnMoreButton, ImgWrapper } from 'Components'
import { Typography, Container, Row, Col } from 'reus'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from 'Containers/Layout'
import { FormattedMessage } from 'react-intl'
import SEO from 'Components/Seo'

const Overview = () => {
  const BannerHero = styled.div`
    min-height: 400px;
    max-width: ${({theme}) => theme.breakPoints.lg};
    margin: 0 auto;
    padding: 80px 0 50px 0;
  `
  const ContentWrapper = styled.div`
    padding: 40px 0;
  `
  const ContentItem = styled.div`
    padding: 60px 0;
  `
  const TrustContent = styled.div`
    &:after, &:before {
      display: table;
      content: ' ';
    }
    &:after {
      clear: both;
    }
  `
  const TrustItem = styled.div`
    margin-bottom: 10px;
    float: left;
    height: 80px;
    width: 100%;
    position: relative;
    @media screen and (min-width: ${({theme}) => theme.breakPoints.md}) {
      width: 20%;
      height: 140px;
      &:nth-of-type(5n+1) {
        border-left: 0;
      }
      border-left: 1px solid #eaeaea;
    }
  `
  const TrustItemImage = styled(Img)`
    left: 50%;
    max-width: 100px;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  `
  const TrustHeader = styled.div`
    max-width: ${({theme}) => theme.breakPoints.md};
    margin: 0 auto;
    padding-bottom: 60px;
  `
  const TrustWrapper = styled.div`
    padding: 40px 0;
  `
  return (
    <StaticQuery
      query={graphql`
        query OverviewQuery {
          attendance: file(relativePath: { eq: "attendance.png" }) {
            childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          team: file(relativePath: { eq: "team.png" }) {
            childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          secure: file(relativePath: { eq: "secure.png" }) {
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
          trackable: file(relativePath: { eq: "trackable.png" }) {
            childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          cashless: file(relativePath: { eq: "cashless.png" }) {
            childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          settings: file(relativePath: { eq: "settings.png" }) {
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
          payroll: file(relativePath: { eq: "payroll-modana.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          google: file(relativePath: { eq: "logo-google.png" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Layout>
            <BannerHero>
              <SEO 
                  title="Overview" 
                  description={["Modana" ]}
                  keywords={[`businesses`, `productive`, `hrd`]} />
              <Container lg gutter={22}>
                <Typography
                  tag="h2"
                  type="headline"
                  align="center"
                  weight="bold"
                  css={theme => css`color: ${theme.color.primary};`}
                >
                  <FormattedMessage id="overview-banner-title"/>
                </Typography>
                <Typography
                  tag="p"
                  type="intro-product-reduced"
                  align="center"
                  css={css`padding-bottom: 10px;`}
                >
                  <FormattedMessage id="overview-banner-desc"/>
                </Typography>
                <LinkArrow css={css`
                  text-align: center;
                `} text="Try Now for Free"/>  
              </Container>
            </BannerHero>
            <ContentWrapper>
              <Container md gutter={22}>
                <Headline
                  title={<FormattedMessage id="whyus"/>}
                  desc={<FormattedMessage id="overview-whyus-desc"/>}
                />
              </Container>
              <Container xl gutter={22}>
                <ContentItem>
                  <Row gutter={20} align="center" css={theme => css`
                    @media screen and (max-width: ${theme.breakPoints.sm}) {
                      flex-direction: column-reverse;
                    }
                  `}>
                    <Col md={6}>
                      <div>
                        <TitleDesc
                          title={<FormattedMessage id="overview-whyus-1-title"/>}
                          desc={<FormattedMessage id="overview-whyus-1-desc"/>}
                        />
                        <Row>
                          <Col md={4}>
                            <Item
                              image={data.team}
                              titleWeight="normal"
                              title={<FormattedMessage id="overview-whyus-1-items-1"/>}
                            />
                          </Col>
                          <Col md={4}>
                            <Item
                              image={data.trackable}
                              titleWeight="normal"
                              title={<FormattedMessage id="overview-whyus-1-items-2"/>}
                            />
                          </Col>
                          <Col md={4}>
                            <Item
                              image={data.attendance}
                              titleWeight="normal"
                              title={<FormattedMessage id="overview-whyus-1-items-3"/>}
                            />
                          </Col>
                        </Row>
                        <LearnMoreButton>
                          <FormattedMessage id="learn-more"/>
                        </LearnMoreButton>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div css={theme => css`
                        @media screen and (max-width: ${theme.breakPoints.sm}) {
                          padding-bottom: 40px;
                        }
                      `}>
                        <ImgWrapper>
                          <Img fluid={data.payroll.childImageSharp.fluid} />
                        </ImgWrapper>
                      </div>
                    </Col>
                  </Row>
                </ContentItem>
                <ContentItem>
                  <Row gutter={20} align="center" css={theme => css`
                    @media screen and (max-width: ${theme.breakPoints.sm}) {
                      flex-direction: column-reverse;
                    }
                  `}>
                    <Col md={6}>
                      <div>
                        <TitleDesc
                          title={<FormattedMessage id="overview-whyus-2-title"/>}
                          desc={<FormattedMessage id="overview-whyus-2-desc"/>}
                        />
                        <Row>
                          <Col md={4}>
                            <Item
                              image={data.cashless}
                              titleWeight="normal"
                              title={<FormattedMessage id="overview-whyus-2-items-1"/>}
                            />
                          </Col>
                          <Col md={4}>
                            <Item
                              image={data.settings}
                              titleWeight="normal"
                              title={<FormattedMessage id="overview-whyus-2-items-1"/>}
                            />
                          </Col>
                        </Row>
                        <LearnMoreButton>
                          <FormattedMessage id="learn-more"/>
                        </LearnMoreButton>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div css={theme => css`
                        @media screen and (max-width: ${theme.breakPoints.sm}) {
                          padding-bottom: 40px;
                        }
                      `}>
                        <ImgWrapper>
                          <Img fluid={data.payroll.childImageSharp.fluid} />
                        </ImgWrapper>
                      </div>
                    </Col>
                  </Row>
                </ContentItem>
                <ContentItem>
                  <Row gutter={20} align="center" css={theme => css`
                    @media screen and (max-width: ${theme.breakPoints.sm}) {
                      flex-direction: column-reverse;
                    }
                  `}>
                    <Col md={6}>
                      <div>
                        <TitleDesc
                          title={<FormattedMessage id="overview-whyus-3-title"/>}
                          desc={<FormattedMessage id="overview-whyus-3-desc"/>}
                        />
                        <Row>
                          <Col md={4}>
                            <Item
                              image={data.secure}
                              titleWeight="normal"
                              title={<FormattedMessage id="overview-whyus-3-items-1"/>}
                            />
                          </Col>
                          <Col md={4}>
                            <Item
                              image={data.checklist}
                              titleWeight="normal"
                              title={<FormattedMessage id="overview-whyus-3-items-2"/>}
                            />
                          </Col>
                          <Col md={4}>
                            <Item
                              image={data.time}
                              titleWeight="normal"
                              title={<FormattedMessage id="overview-whyus-3-items-3"/>}
                            />
                          </Col>
                        </Row>
                        <LearnMoreButton>
                          <FormattedMessage id="learn-more"/>
                        </LearnMoreButton>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div css={theme => css`
                        @media screen and (max-width: ${theme.breakPoints.sm}) {
                          padding-bottom: 40px;
                        }
                      `}>
                        <ImgWrapper>
                          <Img fluid={data.payroll.childImageSharp.fluid} />
                        </ImgWrapper>
                      </div>
                    </Col>
                  </Row>
                </ContentItem>
                <TrustWrapper>
                  <TrustHeader>
                    <Typography
                      tag="h2"
                      type="headline-reduced"
                      align="center"
                      weight="bold"
                      css={theme => css`color: ${theme.color.primary};`}
                    >
                      {<FormattedMessage id="overview-trust-title"/>}
                    </Typography>
                    <Typography
                      tag="p"
                      type="intro"
                      align="center"
                      css={css`padding-bottom: 10px;`}
                    >
                      {<FormattedMessage id="overview-trust-desc"/>}
                    </Typography>
                  </TrustHeader>
                  <TrustContent>
                    <TrustItem>
                      <TrustItemImage fluid={data.google.childImageSharp.fluid} />
                    </TrustItem>
                    <TrustItem>
                      <TrustItemImage fluid={data.google.childImageSharp.fluid} />
                    </TrustItem>
                    <TrustItem>
                      <TrustItemImage fluid={data.google.childImageSharp.fluid} />
                    </TrustItem>
                    <TrustItem>
                      <TrustItemImage fluid={data.google.childImageSharp.fluid} />
                    </TrustItem>
                    <TrustItem>
                      <TrustItemImage fluid={data.google.childImageSharp.fluid} />
                    </TrustItem>
                    <TrustItem>
                      <TrustItemImage fluid={data.google.childImageSharp.fluid} />
                    </TrustItem>
                  </TrustContent>
                </TrustWrapper>
              </Container>
            </ContentWrapper>
          </Layout>
        )
      }}
    />
  )
}

export default Overview