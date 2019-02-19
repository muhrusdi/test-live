import React from 'react'
import { css } from '@emotion/core'
import { Container, Row, Col } from 'reus'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import { Headline, LearnMoreButton, TitleDesc, ImgWrapper } from 'Components'
import Img from 'gatsby-image'
import { FormattedMessage } from 'react-intl'

const Service = () => {
  const FeatureWrapped = styled.div`
    label: feature;
    padding: 70px 0 30px 0px;
  `

  const ServiceItem = styled.div`
    padding: 70px 0;
    @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
      padding: 35px 0;
    }
  `
  const StyledRow = styled(Row)`
    @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
      flex-direction: column-reverse;
    }
  `
  return (
    <StaticQuery
      query={graphql`
        query ServiceQuery {
          attendance: file(relativePath: { eq: "attendance.png" }) {
            childImageSharp {
              fixed(width: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          attendanceLeaveModana: file(relativePath: { eq: "attendance-leave-modana.png" }) {
            childImageSharp {
              fixed(width: 80) {
                ...GatsbyImageSharpFixed
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
          <FeatureWrapped>
              <Container xl gutter={22}>
                <Headline
                  title={<FormattedMessage id="home-services-title"/>}
                  desc={<FormattedMessage id="home-services-desc"/>}
                />
                <div>
                  <ServiceItem>
                    <StyledRow gutter={30} align="center">
                      <Col sm={6}>
                        <TitleDesc
                          title={<FormattedMessage id="home-services-item-1-title"/>}
                          desc={<FormattedMessage id="home-services-item-1-desc"/>}
                        />
                        <LearnMoreButton to="service/hr">
                          <FormattedMessage id="learn-more"/>
                        </LearnMoreButton>
                      </Col>
                      <Col sm={6}>
                        <div>
                          <Img fluid={data.hrd.childImageSharp.fluid} />
                        </div>
                      </Col>
                    </StyledRow>
                  </ServiceItem>
                  <ServiceItem>
                    <StyledRow gutter={30} align="center" css={css`
                      flex-direction: row-reverse;
                    `}>
                      <Col sm={6}>
                        <TitleDesc
                          soon
                          title={<FormattedMessage id="home-services-item-2-title"/>}
                          desc={<FormattedMessage id="home-services-item-2-desc"/>}
                        />
                        <LearnMoreButton to="service/payroll">
                          <FormattedMessage id="learn-more"/>
                        </LearnMoreButton>
                      </Col>
                      <Col sm={6}>
                        <div>
                          <Img fluid={data.payroll.childImageSharp.fluid} />
                        </div>
                      </Col>
                    </StyledRow>
                  </ServiceItem>
                  <ServiceItem>
                    <StyledRow gutter={30} align="center">
                      <Col sm={6}>
                        <TitleDesc
                          soon
                          title={<FormattedMessage id="home-services-item-3-title"/>}
                          desc={<FormattedMessage id="home-services-item-3-desc"/>}
                        />
                        <LearnMoreButton to="service/lending">
                          <FormattedMessage id="learn-more"/>
                        </LearnMoreButton>
                      </Col>
                      <Col sm={6}>
                        <div>
                          <Img fluid={data.lending.childImageSharp.fluid} />
                        </div>
                      </Col>
                    </StyledRow>
                  </ServiceItem>
                </div>
              </Container>
          </FeatureWrapped>
        )
      }}
    />
    
  )
}

export default Service