import React from 'react'
import { Container, Row, Col } from 'reus'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import { Headline, Item } from 'Components'
import { FormattedMessage } from 'react-intl'

const WhyUs = () => {
  const FeatureWrapped = styled.div`
    label: feature;
    padding: 70px 0 30px 0px;
  `
  
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          attendance: file(relativePath: { eq: "attendance.png" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          network: file(relativePath: { eq: "network.png" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          team: file(relativePath: { eq: "team.png" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          cloud: file(relativePath: { eq: "cloud.png" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          time: file(relativePath: { eq: "time.png" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          secure: file(relativePath: { eq: "secure.png" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <FeatureWrapped>
              <Container md gutter={22}>
                <Headline
                  title={<FormattedMessage id="whyus"/>}
                />
              </Container>
              <Container lg gutter={22}>
                <Row >
                  <Col lg={4} md={6} sm={12}>
                    <Item
                      title={<FormattedMessage id="home-whyus-item-1"/>}
                      image={data.secure}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Item
                      title={<FormattedMessage id="home-whyus-item-2"/>}
                      image={data.team}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Item
                      title={<FormattedMessage id="home-whyus-item-3"/>}
                      image={data.time}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Item
                      title={<FormattedMessage id="home-whyus-item-4"/>}
                      image={data.attendance}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Item
                      title={<FormattedMessage id="home-whyus-item-5"/>}
                      image={data.cloud}
                    />
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Item
                      title={<FormattedMessage id="home-whyus-item-6"/>}
                      image={data.network}
                    />
                  </Col>
                </Row>
            </Container>
          </FeatureWrapped>
        )
      }}
    />
    
  )
}

export default WhyUs