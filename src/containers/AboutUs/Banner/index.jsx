import React from 'react'
import styled from '@emotion/styled'
import { Typography, Container } from 'reus'
import { FormattedMessage } from 'react-intl'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const Banner = ({image}) => {
  const BackgroundImage = styled.div`
    background: transparent;
  `
  const BgImg = styled(Img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 300px;
    & > img {
      object-fit: ${props => props.fit || 'cover'} !important;
      object-position: ${props => props.position || '50% 50%'} !important;
    }
    &::before {
      content: '';
      background: rgba(0, 0, 0, 0.25);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
    }
  `
  const BgInner = styled.div`
    display: flex;
    max-width: 500px;
    height: 300px;
    align-items: center;
  `
  return (
    <BackgroundImage>
      <div css={css`
        position: absolute;
        left: 0;
        right: 0;
        top: 60px;
      `}>
        <BgImg 
          height={300}
          fluid={image.childImageSharp.fluid}
        />
      </div>
      <Container xl gutter={22}>
        <BgInner>
          <Typography
            tag="h2"
            color="#fff"
            type="headline"
            css={css`position: relative;`}
          >
            <FormattedMessage id="about-us-banner-title"/>
          </Typography>
        </BgInner>
      </Container>
    </BackgroundImage>
  )
}

export default Banner