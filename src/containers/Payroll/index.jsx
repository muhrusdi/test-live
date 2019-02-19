import React from 'react'
import Layout from 'Containers/Layout'
import { LinkArrow, Item, ImgWrapper } from 'Components'
import { Container, Row, Col, Typography } from 'reus'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { FormattedMessage } from 'react-intl'
import SEO from 'Components/Seo'

const Payroll = () => {
  const Banner = styled.div`
    padding: 80px 0;
  `
  const ContentWrapper = styled.div`
    padding: 80px 0;
  `
  const StyledRow = styled(Row)`
    flex-direction: ${({reverse}) => reverse ? 'row-reverse' : 'row'};
    @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
      flex-direction: column-reverse;
    }
    padding: 40px 0;
  `
  const FiturPayroll = styled.div`
    max-width: ${({theme}) => theme.breakPoints.sm};
    margin: 0 auto;
  `
  const StyledImgWrapper = styled(ImgWrapper)`
    max-width: 200px;
    margin: 0 auto;
    @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
      margin-top: 30px;
    }
  `
  return (
    <StaticQuery
      query={graphql`
        query PayrollQuery {
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
          cashless2: file(relativePath: { eq: "Cashless2.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          efficiencies: file(relativePath: { eq: "Efficiencies.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          shiftStart: file(relativePath: { eq: "Payroll-03.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
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
                  title="Payroll" 
                  description={["Modana" ]}
                  keywords={[`businesses`, `productive`, `hrd`]} />
              <Banner>
                <Row align="center">
                  <Col md={6}>
                    <div>
                      <Typography
                        tag="h2"
                        type="headline"
                        weight="bold"
                        css={theme => css`color: ${theme.color.primary};`}
                      >
                        <FormattedMessage id="payroll-banner-title"/>
                      </Typography>
                      <Typography
                        tag="p"
                        type="intro"
                        css={css`margin-bottom: 20px;};`}
                      >
                        <FormattedMessage id="payroll-banner-desc"/> 
                      </Typography>
                      <LinkArrow text="Try Now for Free"/>  
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      <Img fluid={data.shiftStart.childImageSharp.fluid} />
                    </div>
                  </Col>
                </Row>
              </Banner>
              <FiturPayroll>
                <Row justify="center">
                  <Col span>
                    <div>
                      <Item
                        title={<FormattedMessage id="payroll-fitur-1-item"/>}
                        image={data.cashless}
                      />
                    </div>
                  </Col>
                  <Col span>
                    <div>
                      <Item
                        title={<FormattedMessage id="payroll-fitur-2-item"/>}
                        image={data.settings}
                      />
                    </div>
                  </Col>
                </Row>
              </FiturPayroll>
              <ContentWrapper>
                <StyledRow align="center" gutter={20} reverse>
                  <Col md={6}>
                    <div>
                      <Typography
                        tag="h4"
                        type="manifesto"
                        css={theme => css`color: ${theme.color.primary};`}
                      >
                        <FormattedMessage id="payroll-fitur-2-item"/>
                      </Typography>
                      <Typography
                        tag="p"
                        type="body"
                      >
                        <FormattedMessage id="payroll-fitur-detail-2"/>
                      </Typography>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      <Img fluid={data.efficiencies.childImageSharp.fluid}/>
                    </div>
                  </Col>
                </StyledRow>
                <StyledRow align="center" gutter={20}>
                  <Col md={6}>
                    <div>
                      <Typography
                        tag="h4"
                        type="manifesto"
                        css={theme => css`color: ${theme.color.primary};`}
                      >
                        <FormattedMessage id="payroll-fitur-1-item"/>
                      </Typography>
                      <Typography
                        tag="p"
                        type="body"
                      >
                        <FormattedMessage id="payroll-fitur-detail-1"/>
                      </Typography>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      <Img fluid={data.cashless2.childImageSharp.fluid}/>
                    </div>
                  </Col>
                </StyledRow>
              </ContentWrapper>
            </Container>
          </Layout>
        )
      }}
    />
  )
}

export default Payroll