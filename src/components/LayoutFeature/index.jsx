/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { Container, Typography } from 'reus'
import { jsx } from '@emotion/core'

const LayoutFeature = ({children, title, desc}) => {
  const FeatureWrapped = styled.div`
    label: feature;
    padding: 70px 0 30px 0px;
  `
  const HeadWrapper = styled.div`
    margin-bottom: 70px;
  `
  return (
    <>
      <FeatureWrapped>
        <Container md gutter={22}>
          <HeadWrapper>
            <Typography
              type="headline"
              align="center"
              css={theme => css`color: ${theme.color.secondary};`}
              tag="h2">
              {title}
            </Typography>
            <Typography
              type="intro"
              align="center"
              tag="p">
              {desc}
            </Typography>
          </HeadWrapper>
        </Container>
        <Container lg gutter={22}>
          {children}
        </Container>
      </FeatureWrapped>
    </>
  )
}