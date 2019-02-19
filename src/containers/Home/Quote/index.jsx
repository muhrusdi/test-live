import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import { Typography, Container } from 'reus'

const TestimonyWrapper = styled.div`
  padding: 90px 0;
  background: #fff;
`
// const QuoteAssign = () => <svg width="80" height="70" viewBox="0 0 6 5">
//   <path d="M4.80002 0.420008L4.71602 0.264008C4.54802 0.376008 4.36402 0.504008 4.16402 0.648008C3.96402 0.784008 3.78002 0.944008 3.61202 1.12801C3.44402 1.31201 3.30002 1.52401 3.18002 1.76401C3.06802 2.00401 3.01202 2.28001 3.01202 2.59201C3.01202 3.04801 3.12002 3.40001 3.33602 3.64801C3.55202 3.89601 3.81202 4.02001 4.11602 4.02001C4.22002 4.02001 4.32402 4.00401 4.42802 3.97201C4.54002 3.94001 4.64002 3.89201 4.72802 3.82801C4.81602 3.75601 4.88802 3.66801 4.94402 3.56401C5.00002 3.45201 5.02802 3.32001 5.02802 3.16801C5.02802 3.01601 5.00002 2.88801 4.94402 2.78401C4.88802 2.67201 4.82002 2.58401 4.74002 2.52001C4.66002 2.44801 4.57202 2.39601 4.47602 2.36401C4.38002 2.33201 4.28802 2.31601 4.20002 2.31601C4.11202 2.31601 4.02402 2.32401 3.93602 2.34001C3.84802 2.35601 3.76802 2.38801 3.69602 2.43601C3.65602 2.39601 3.61602 2.33601 3.57602 2.25601C3.53602 2.17601 3.51602 2.07201 3.51602 1.94401C3.51602 1.65601 3.63202 1.40001 3.86402 1.17601C4.09602 0.944007 4.40802 0.692008 4.80002 0.420008ZM2.31602 0.420008L2.23202 0.264008C2.06402 0.376008 1.88002 0.504008 1.68002 0.648008C1.48002 0.784008 1.29602 0.944008 1.12802 1.12801C0.960015 1.31201 0.816015 1.52401 0.696015 1.76401C0.584015 2.00401 0.528015 2.28001 0.528015 2.59201C0.528015 3.04801 0.636015 3.40001 0.852015 3.64801C1.06802 3.89601 1.32802 4.02001 1.63202 4.02001C1.73602 4.02001 1.84002 4.00401 1.94402 3.97201C2.05602 3.94001 2.15602 3.89201 2.24401 3.82801C2.33202 3.75601 2.40402 3.66801 2.46002 3.56401C2.51602 3.45201 2.54402 3.32001 2.54402 3.16801C2.54402 3.01601 2.51602 2.88801 2.46002 2.78401C2.40402 2.67201 2.33602 2.58401 2.25602 2.52001C2.17602 2.44801 2.08802 2.39601 1.99202 2.36401C1.89602 2.33201 1.80402 2.31601 1.71602 2.31601C1.62802 2.31601 1.54002 2.32401 1.45202 2.34001C1.36402 2.35601 1.28402 2.38801 1.21202 2.43601C1.17202 2.39601 1.13202 2.33601 1.09202 2.25601C1.05202 2.17601 1.03202 2.07201 1.03202 1.94401C1.03202 1.65601 1.14802 1.40001 1.38002 1.17601C1.61202 0.944007 1.92402 0.692008 2.31602 0.420008Z" fill="#C7C7C7"/>
//   </svg>

// const StyledImage = styled(Img)`
//   border-radius: 50%;
//   overflow: hidden;
//   background: #eaeaea;
//   & > img {
//     object-fit: ${props => props.fit || 'cover'} !important;
//     object-position: ${props => props.position || '50% 50%'} !important;
//   }
//   @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
//     flex-direction: column-reverse;
//     height: 120px;
//     width: 120px;
//     margin: 0 auto;
//     margin-bottom: 30px;
//   }
// `
// const SpanQuote = styled.span`
//   position: absolute;
//   @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
//     display: none;
//   }
//   svg {
//     top: -70px;
//     position: absolute;
//   }
// `

const Quote = () => {
  return (
    <StaticQuery
      query={graphql`
        query QuoteQuery {
          people: file(relativePath: { eq: "photo.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 170) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <TestimonyWrapper>
          <Container xl gutter={22}>
            <div css={css`position: relative;`}>
              <div>
                <Typography
                  type="headline-elevated"
                  color="#444"
                  align="center"
                  css={css`margin: 0;`}
                  tag="h4">
                  Everyone Matters
                </Typography>
              </div>
            </div>
          </Container>
        </TestimonyWrapper>
      )}
    />
  )
}

export default Quote