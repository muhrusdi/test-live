import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Typography } from 'reus'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Icon } from 'antd'

const LearnMoreButton = styled(Link)`
  height: 48px;
  border-radius: 26px;
  min-width: 150px;
  font-weight: bold;
  border: none;
  background-color: #fff0e8;
  display: inline-block;
  padding: 13px 0px;
  text-align: center;
  text-transform: uppercase;
  color: ${({theme}) => theme.color.secondary};
  &:hover {
    color: ${({theme}) => theme.color.secondary};
  }
  span {
    display: inline-block;
    padding: 0 20px;
  }
`

const HeadWrapper = styled.div`
  max-width: ${({theme}) => theme.breakPoints.md};
  margin-left: auto;
  padding-bottom: 40px;
  margin-right: auto;
  @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
    margin-bottom: 20px;
  }
`

const Headline = ({title, desc}) => (
  <HeadWrapper>
    <Typography 
      tag="h2" 
      type="headline"
      css={theme =>  css`color: ${theme.color.secondary};`}
      align="center">
      {title}
    </Typography>
    {
      desc && 
        <Typography
          tag="p" 
          type="intro" 
          align="center">
          {desc}
        </Typography>
    }
  </HeadWrapper>
)

export const HeadlineModif = ({title, desc}) => (
  <HeadWrapper>
    <Typography 
      tag="h2" 
      type="headline"
      css={theme =>  css`color: ${theme.color.secondary};`}
      align="center">
      <span dangerouslySetInnerHTML={{ __html: title }}/>
    </Typography>
    {
      desc && 
        <Typography
          tag="p" 
          type="intro" 
          align="center">
          {desc}
        </Typography>
    }
  </HeadWrapper>
)

const ItemWrapper = styled.div`
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
    display: flex;
    align-items: center;
  }
`

const Item = ({image, title, desc, titleWeight}) => {
  return (
    <ItemWrapper>
      <div css={theme => css`
        @media screen and (max-width: ${theme.breakPoints.sm}) {
          & > div {
            margin-bottom: 0;
          }
        }
      `}>
        <Img css={css`
          min-width: 50px;
          max-width: 80px;
          margin: 0 auto;
          margin-bottom: 21px;`} fluid={image.childImageSharp.fluid} />
      </div>
      <div css={theme => css`
        @media screen and (max-width: ${theme.breakPoints.sm}) {
          padding-left: 20px;
          p {
            text-align: left;
            margin-bottom: 0;
          }
        }
      `}>
        <Typography
          type="body"
          align="center"
          weight={titleWeight}
          tag="p">
          {title}
        </Typography>
        {
          desc &&
          <Typography
            type="body"
            align="center"
            color="#888"
            tag="p">
            {desc}
          </Typography>
        }
      </div>
    </ItemWrapper>
  )
}

const Coming = styled.span`
  display: inline-block;
  background: #dadada;
  font-size: 18px;
  padding: 7px 10px;
  border-radius: 8px;
  vertical-align: middle;
  color: #6b6b6b;
  margin-left: 14px;
`

const TitleDesc = ({title, desc, soon}) => (
  <>
    <Typography
      type="manifesto"
      css={theme => css`color: ${theme.color.primary};`}
      tag="h4">
      {title} { soon ? <Coming>Coming soon</Coming> : null }
    </Typography>
    <Typography
      type="body"
      color="#444"
      tag="p">
      {desc}
    </Typography>
  </>
)

const ImgWrapper = styled.div`
  border-radius: 11px;
  box-shadow: 0px 8px 36px #d8d8d8;
  overflow: hidden;
  @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
    margin-bottom: 40px;
  }
`
const List = styled.ul`
  list-style: none;
  padding: 0;
`
const LinkArrow = ({text, className}) => (
  <a
    href="#"
    className={className}
    css={theme => css`
      color: ${theme.color.primary};
      text-transform: uppercase;
      font-weight: bold;
      display: block;
  `}>
    {text} 
    <Icon css={theme => css`
      color: ${theme.color.secondary};
      padding-left: 10px;
    `} color="" type="arrow-right" />
  </a>
)

export {
  LearnMoreButton,
  Item,
  Headline,
  TitleDesc,
  ImgWrapper,
  List,
  LinkArrow
}