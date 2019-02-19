import React from 'react'
import { Container } from 'reus'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { HeadlineModif } from 'Components'
import { FormattedMessage } from 'react-intl'

const Feature = () => {
  const ImgWrapper = styled.div`
    border-radius: 11px;
    box-shadow: 0px 8px 36px #d8d8d8;
    overflow: hidden;
  `
  const FeatureWrapped = styled.div`
    label: feature;
    padding: 70px 0 30px 0px;
  `
  return (
    <StaticQuery
      query={graphql`
        query FeatureQuery {
          prdoductIllust: file(relativePath: { eq: "Product Illustration.png" }) {
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
            <Container lg gutter={16}>
              <FormattedMessage id="home-section-1-title">
              {
                text => (
                  <HeadlineModif
                    title={text}
                    desc={<FormattedMessage id="home-section-1-desc"/>}
                  />
                )
              }
              </FormattedMessage>
              <div>
                <Img fluid={data.prdoductIllust.childImageSharp.fluid}/>
              </div>
            </Container>
          </FeatureWrapped>
        )
      }}
    />
  )
}

export default Feature