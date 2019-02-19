import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Carousel } from 'antd'
import SEO from 'Components/Seo'
import Layout from 'Containers/Layout'
import Banner from './Banner'
import { Item, LinkArrow } from 'Components'
import { Container, Typography, Row, Col } from 'reus'
import { FormattedMessage } from 'react-intl'

const AboutUs  = () => {
  const ContentWrapper = styled.div`
    padding-top: 40px;
  `
  const HeadWrapper = styled.div`
    margin-bottom: 50px;
    max-width: ${({theme}) => theme.breakPoints.md};
    margin-left: auto;
    margin-right: auto;
  `
  const Section = styled.section`
    padding: 40px 0;
  `
  const ImageTeam = styled(Img)`
    background: #eaeaea;
    height: 150px;
    margin-bottom: 20px;
    & > img {
      object-fit: ${props => props.fit || 'cover'} !important;
      object-position: ${props => props.position || '50% 50%'} !important;
    }
  `
  const TitleTeam = styled.div`
    padding-bottom: 15px;
  `
  const BodyTeam = styled.div`
  
  `
  const TeamWraaper = styled.div`
  
  `
  const CarouselItem = styled.div`
    padding: 10px;
  `
  const CarouselItemInner = styled(Img)`
    height: 300px;
    background: #eaeaea;
    & > img {
      object-fit: ${props => props.fit || 'cover'} !important;
      object-position: ${props => props.position || '50% 50%'} !important;
    }
  `
  const MeetTeamItem = styled.div`
    margin-bottom: 50px;
  `
  return (
    <StaticQuery
      query={graphql`
        query AboutUsQuery {
          banner: file(relativePath: { eq: "placeholder.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          office2: file(relativePath: { eq: "office2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          office3: file(relativePath: { eq: "office3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          office4: file(relativePath: { eq: "office4.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          vision: file(relativePath: { eq: "vision.png" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          mission: file(relativePath: { eq: "mission.png" }) {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          goverment: file(relativePath: { eq: "government.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          finance: file(relativePath: { eq: "finance.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          employer: file(relativePath: { eq: "employer.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          employee: file(relativePath: { eq: "employee.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          other: file(relativePath: { eq: "other.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Layout>
            <SEO 
              title="About Us" 
              description={["Empowering people and businesses to do their best at work and life with the help of technology" ]}
              keywords={[`businesses`, `productive`, `hrd`]} />
            <Banner image={data.banner}/>
            <ContentWrapper>
              <Container md gutter={22}>
                <Section>
                  <Typography
                    tag="h2"
                    align="center"
                    type="headline"
                    css={theme => css`
                      margin-bottom: 40px;
                      color: ${theme.color.secondary};`}
                    weight="bold"
                  >
                    <FormattedMessage id="about-us-content-title"/>
                  </Typography>
                  <Typography
                    tag="p"
                    color="#676767"
                    type="body"
                  >
                    <FormattedMessage id="about-us-content-body"/> 
                  </Typography>
                  {/* <Typography
                    tag="p"
                    color="#676767"
                    type="body"
                  >
                    <FormattedMessage id="aboutUs2"/>
                  </Typography>
                  <Typography
                    tag="p"
                    color="#676767"
                    type="body"
                  >
                    <FormattedMessage id="aboutUs3"/>
                  </Typography> */}
                </Section>
                <Section>
                  <Row>
                    <Col md={6}>
                      <Item
                        title={<FormattedMessage id="about-us-vision-title"/>}
                        titleWeight="bold"
                        desc={<FormattedMessage id="about-us-vision-desc"/>}
                        image={data.mission}
                      />
                    </Col>
                    <Col md={6}>
                      <Item
                        title={<FormattedMessage id="about-us-mission-title"/>}
                        titleWeight="bold"
                        desc={<FormattedMessage id="about-us-mission-desc"/>}
                        image={data.vision}
                      />
                    </Col>
                  </Row>
                </Section>
                <Section>
                  <div>
                    <Typography
                      tag="h2"
                      align="center"
                      type="headline"
                      css={theme => css`
                        margin-bottom: 20px;
                        color: ${theme.color.secondary};`}
                      weight="bold"
                    >
                      <FormattedMessage id="about-us-value-title"/>
                    </Typography>
                    <Typography
                      tag="p"
                      color="#676767"
                      type="label"
                      weight="normal"
                      align="center"
                    >
                      <FormattedMessage id="about-us-value-desc"/>
                    </Typography>
                    <div css={css`
                      margin-top: 60px !important;
                    `}>
                      <Typography
                        tag="p"
                        color="#676767"
                        type="body"
                      >
                        <FormattedMessage id="about-us-body"/>
                      </Typography>
                    </div>
                  </div>
                  <div css={theme => css`
                    padding-top: 40px;
                    & > div {
                      padding-bottom: 10px;
                      @media screen and (max-width: ${theme.breakPoints.sm}) {
                        h4 {
                          text-align: center;
                        }
                        p {
                          text-align: center;
                        }
                      }
                    }
                  `}>
                    <div>
                      <Row align="center">
                        <Col md={3}>
                          <div>
                            <Img fluid={data.goverment.childImageSharp.fluid}/>
                          </div>
                        </Col>
                        <Col md={9}>
                          <div>
                            <Typography
                              tag="h4"
                              type="label"
                            >
                              <FormattedMessage id="about-us-value-list-1-title"/>
                            </Typography>
                            <Typography
                              tag="p"
                              type="body"
                            >
                              <FormattedMessage id="about-us-value-list-1-desc"/>
                            </Typography>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Row align="center">
                        <Col md={3}>
                          <div>
                            <Img fluid={data.finance.childImageSharp.fluid}/>
                          </div>
                        </Col>
                        <Col md={9}>
                          <div>
                            <Typography
                              tag="h4"
                              type="label"
                            >
                              <FormattedMessage id="about-us-value-list-2-title"/>
                            </Typography>
                            <Typography
                              tag="p"
                              type="body"
                            >
                              <FormattedMessage id="about-us-value-list-2-desc"/>
                            </Typography>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Row align="center">
                        <Col md={3}>
                          <div>
                            <Img fluid={data.employer.childImageSharp.fluid}/>
                          </div>
                        </Col>
                        <Col md={9}>
                          <div>
                            <Typography
                              tag="h4"
                              type="label"
                            >
                              <FormattedMessage id="about-us-value-list-3-title"/>
                            </Typography>
                            <Typography
                              tag="p"
                              type="body"
                            >
                              <FormattedMessage id="about-us-value-list-3-desc"/>
                            </Typography>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Row align="center">
                        <Col md={3}>
                          <div>
                            <Img fluid={data.employee.childImageSharp.fluid}/>
                          </div>
                        </Col>
                        <Col md={9}>
                          <div>
                            <Typography
                              tag="h4"
                              type="label"
                            >
                              <FormattedMessage id="about-us-value-list-4-title"/>
                            </Typography>
                            <Typography
                              tag="p"
                              type="body"
                            >
                              <FormattedMessage id="about-us-value-list-4-desc"/>
                            </Typography>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Row align="center">
                        <Col md={3}>
                          <div>
                            <Img fluid={data.other.childImageSharp.fluid}/>
                          </div>
                        </Col>
                        <Col md={9}>
                          <div>
                            <Typography
                              tag="h4"
                              type="label"
                            >
                              <FormattedMessage id="about-us-value-list-5-title"/>
                            </Typography>
                            <Typography
                              tag="p"
                              type="body"
                            >
                              <FormattedMessage id="about-us-value-list-5-desc"/>
                            </Typography>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Section>
              </Container>
            </ContentWrapper>
            {/* <Section>
              <div css={css`
                .ant-carousel {
                  .slick-dots {
                    bottom: -18px;
                    li {
                      &.slick-active {
                        button {
                          background: orange;
                        }
                      }
                      background: #6666;
                    }
                  }
                }
              `}>
                <Carousel {
                  ...{
                    infinite: true,
                    speed: 500,
                    swipeToSlide: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    responsive: [
                      {
                        breakpoint: 962,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          infinite: true,
                          dots: true
                        }
                      },
                      {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 2,
                          centerMode: true,
                          initialSlide: 2
                        }
                      },
                      {
                        breakpoint: 576,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                        }
                      }
                    ]
                  }
                }>
                  <CarouselItem>
                    <CarouselItemInner fluid={data.office2.childImageSharp.fluid}/>
                  </CarouselItem>
                  <CarouselItem>
                    <CarouselItemInner fluid={data.office3.childImageSharp.fluid}/>
                  </CarouselItem>
                  <CarouselItem>
                    <CarouselItemInner fluid={data.office4.childImageSharp.fluid}/>
                  </CarouselItem>
                  <CarouselItem>
                    <CarouselItemInner fluid={data.office2.childImageSharp.fluid}/>
                  </CarouselItem>
                  <CarouselItem>
                    <CarouselItemInner fluid={data.office2.childImageSharp.fluid}/>
                  </CarouselItem>
                </Carousel>
              </div>
            </Section>
            <TeamWraaper>
              <Container lg gutter={22}>
                <Section>
                  <HeadWrapper>
                    <Typography 
                      tag="h2" 
                      type="headline"
                      css={theme =>  css`color: ${theme.color.secondary};`}
                      align="center">
                      <FormattedMessage id="about-us-meet-team-title"/>
                    </Typography>
                    <Typography
                      tag="p" 
                      type="intro" 
                      align="center">
                      <FormattedMessage id="about-us-meet-team-desc"/>
                    </Typography>
                  </HeadWrapper>
                  <Row gutter={25}>
                    <Col lg={4} md={6}>
                      <MeetTeamItem>
                        <ImageTeam fluid={data.office2.childImageSharp.fluid}/>
                        <TitleTeam>
                          <Typography
                            tag="h4" 
                            type="tout" 
                            css={theme => css`color: ${theme.color.primary};`}
                            align="center">
                            Lorem ipsum
                          </Typography>
                          <Typography
                            tag="p" 
                            type="body-reduced" 
                            align="center">
                            Founder & Chief Executive Officer
                          </Typography>
                        </TitleTeam>
                        <BodyTeam>
                          <Typography
                            tag="p" 
                            type="body">
                            Welly is the Chief Executive Officer and co-founder of Modana. He leads the company on its mission to create a world where work empowers a better life. 
                          </Typography>
                        </BodyTeam>
                      </MeetTeamItem>
                    </Col>
                    <Col lg={4} md={6}>
                      <MeetTeamItem>
                        <ImageTeam fluid={data.office3.childImageSharp.fluid}/>
                        <TitleTeam>
                          <Typography
                            tag="h4" 
                            type="tout" 
                            css={theme => css`color: ${theme.color.primary};`}
                            align="center">
                            Lorem ipsum
                          </Typography>
                          <Typography
                            tag="p" 
                            type="body-reduced" 
                            align="center">
                            Founder & Chief Executive Officer
                          </Typography>
                        </TitleTeam>
                        <BodyTeam>
                          <Typography
                            tag="p" 
                            type="body">
                            Welly is the Chief Executive Officer and co-founder of Modana. He leads the company on its mission to create a world where work empowers a better life. 
                          </Typography>
                        </BodyTeam>
                      </MeetTeamItem>
                    </Col>
                    <Col lg={4} md={6}>
                      <MeetTeamItem>
                        <ImageTeam fluid={data.office4.childImageSharp.fluid}/>
                        <TitleTeam>
                          <Typography
                            tag="h4" 
                            type="tout" 
                            css={theme => css`color: ${theme.color.primary};`}
                            align="center">
                            Lorem ipsum
                          </Typography>
                          <Typography
                            tag="p" 
                            type="body-reduced" 
                            align="center">
                            Lorem ipsum
                          </Typography>
                        </TitleTeam>
                        <BodyTeam>
                          <Typography
                            tag="p" 
                            type="body">
                            Welly is the Chief Executive Officer and co-founder of Modana. He leads the company on its mission to create a world where work empowers a better life. 
                          </Typography>
                        </BodyTeam>
                      </MeetTeamItem>
                    </Col>
                  </Row>
                </Section>
                <Section css={css`padding: 30px 0 73px 0px;`}>
                  <Row gutter={20} align="center">
                    <Col md={5}>
                      <Img css={theme => css`
                        background: #eaeaea;
                        height: 250px;
                        @media screen and (max-width: ${theme.breakPoints.sm}) {
                          margin-bottom: 40px;
                        }
                        & > img {
                          object-fit: cover !important;
                          object-position: 50% 50% !important;
                        }
                      `}
                      fluid={data.office2.childImageSharp.fluid}/>
                    </Col>
                    <Col md={7}>
                      <div>
                        <Typography
                          tag="h3" 
                          weight="bold"
                          css={theme => css`color: ${theme.color.primary};`}
                          type="headline-reduced">
                          <FormattedMessage id="about-us-join-us-title"/>
                        </Typography>
                        <Typography
                          tag="p" 
                          type="body">
                          <FormattedMessage id="about-us-join-us-desc"/>
                        </Typography>
                        
                          <LinkArrow text={<FormattedMessage id="about-us-see-link"/>}/>
                      </div>
                    </Col>
                  </Row>
                </Section>
              </Container>
            </TeamWraaper> */}
          </Layout>
        )
      }}
    />
  )
}

export default AboutUs