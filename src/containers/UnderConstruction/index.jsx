import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Container, Row, Col, Typography } from 'reus'
import { Button } from 'antd'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { navigate } from "gatsby"
import { isLoggedIn } from "Services/auth"

const UnderConstruction = () => {
  console.log(isLoggedIn())
  if (isLoggedIn()) {
    navigate(`/app`)
  }
  const RowWrapper = styled(Row)`
    height: 100vh;
    @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
      text-align: center;
    }
  `
  const ComingStyled = styled(Button)`
    height: 32px;
    border-radius: 16px;
    background: #fff;
    margin-bottom: 20px;
    font-weight: bold;
    text-transform: upperacase;
    border: 1px solid ${({theme}) => theme.color.secondary};
  `
  return (
    <StaticQuery
      query={graphql`
        query UnderContruction {
          underconstruction: file(relativePath: { eq: "underconstruction@3x.png" }) {
            childImageSharp {
              fluid(maxWidth: 846) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <Container xl gutter={22}>
            <RowWrapper jutify="center" align="center">
              <Col md={6}>
                <div>
                  <Typography
                    tag="h2"
                    type="headline"
                    weight="bold"
                    css={theme => css`color: ${theme.color.primary};`}
                  >
                    Everyone Mattersd
                  </Typography>
                  <Typography
                    tag="p"
                    type="intro"
                    color="#444"
                  >
                    Humanized platform of choice for people and businesses to work, interact and transact, empowering economic inclusion for everyone.
                  </Typography>
                  <div>
                    <ComingStyled css={theme => css`
                      background: ${theme.color.secondary};
                      margin-right: 10px;
                      color: #fff;
                    `}>
                      <Link to="/app">Log In</Link>
                    </ComingStyled>
                    <ComingStyled>
                      Coming Soon
                    </ComingStyled>
                    <Typography
                      tag="div"
                      type="body"
                    >
                      Contact us at: <a href="#">info@modana.id</a>
                    </Typography>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <Img fluid={data.underconstruction.childImageSharp.fluid} />
                </div>
              </Col>
            </RowWrapper>
          </Container>
        </div>
      )}
    />
  )
}

export default UnderConstruction