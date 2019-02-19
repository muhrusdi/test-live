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

const HR = () => {
  const Banner = styled.div`
    padding: 80px 0;
  `
  const ContentWrapper = styled.div`
    padding: 80px 0;
  `
  const StyledRow = styled(Row)`
    flex-direction: ${({reverse}) => reverse ? 'row-reverse' : 'row'};
    padding: 40px 0;
    margin-bottom: 70px;
    @media screen and (max-width: ${({theme}) => theme.breakPoints.sm}) {
      margin-bottom: 10px;
    }
  `
  const FiturPayroll = styled.div`
    max-width: ${({theme}) => theme.breakPoints.md};
    margin: 0 auto;
  `
  return (
    <StaticQuery
      query={graphql`
        query HRQuery {
          trackable: file(relativePath: { eq: "trackable.png" }) {
            childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          team: file(relativePath: { eq: "team.png" }) {
            childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          attendance: file(relativePath: { eq: "attendance.png" }) {
            childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          employeeProfile: file(relativePath: { eq: "Human resource.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          employeesAddNewEmployee: file(relativePath: { eq: "Trackable actions.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          employeesListPage: file(relativePath: { eq: "paperless and secure.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          overviewHero: file(relativePath: { eq: "HR-02-02.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
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
                title="HR" 
                description={["Modana" ]}
                keywords={[`businesses`, `productive`, `hrd`]} />
              <Banner>
                <Row gutter={10} align="center">
                  <Col md={6}>
                    <div>
                      <Typography
                        tag="h2"
                        type="headline"
                        weight="bold"
                        css={theme => css`color: ${theme.color.primary};`}
                      >
                        <FormattedMessage id="hr-banner-title"/>
                      </Typography>
                      <Typography
                        tag="p"
                        type="intro"
                        css={css`margin-bottom: 20px;};`}
                      >
                        <FormattedMessage id="hr-banner-desc"/> 
                      </Typography>
                      <LinkArrow text={<FormattedMessage id="try-now-for-free"/>}/>  
                    </div>
                  </Col>
                  <Col md={6}>
                    <div css={theme => css`
                      @media screen and (max-width: ${theme.breakPoints.sm}) {
                        padding-top: 30px;
                      }
                    `}>
                      <Img fluid={data.overviewHero.childImageSharp.fluid} />
                    </div>
                  </Col>
                </Row>
              </Banner>
              <FiturPayroll>
                <Row justify="center">
                  <Col span>
                    <div>
                      <Item
                        title={<FormattedMessage id="hr-fitur-item-1"/>}
                        image={data.trackable}
                      />
                    </div>
                  </Col>
                  <Col span>
                    <div>
                      <Item
                        title={<FormattedMessage id="hr-fitur-item-2"/>}
                        image={data.team}
                      />
                    </div>
                  </Col>
                  <Col span>
                    <div>
                      <Item
                        title={<FormattedMessage id="hr-fitur-item-3"/>}
                        image={data.attendance}
                      />
                    </div>
                  </Col>
                </Row>
              </FiturPayroll>
              <ContentWrapper>
                <StyledRow align="center" gutter={20}>
                  <Col md={6}>
                    <div>
                      <Typography
                        tag="h4"
                        type="manifesto"
                        css={theme => css`color: ${theme.color.primary};`}
                      >
                        <FormattedMessage id="hr-fitur-detail-1-title"/>
                      </Typography>
                      <Typography
                        tag="p"
                        type="body"
                      >
                        <FormattedMessage id="hr-fitur-detail-1-desc"/>
                      </Typography>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div css={theme => css`
                      @media screen and (max-width: ${theme.breakPoints.sm}) {
                        margin-top: 30px;
                      }
                    `}>
                      <Img fluid={data.employeeProfile.childImageSharp.fluid}/>
                    </div>
                  </Col>
                </StyledRow>
                <StyledRow align="center" gutter={20} reverse>
                  <Col md={6}>
                    <div>
                      <Typography
                        tag="h4"
                        type="manifesto"
                        css={theme => css`color: ${theme.color.primary};`}
                      >
                        <FormattedMessage id="hr-fitur-detail-2-title"/>
                      </Typography>
                      <Typography
                        tag="p"
                        type="body"
                      >
                        <FormattedMessage id="hr-fitur-detail-2-desc"/>
                      </Typography>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div css={theme => css`
                      @media screen and (max-width: ${theme.breakPoints.sm}) {
                        margin-top: 30px;
                      }
                    `}>
                      <Img fluid={data.employeesAddNewEmployee.childImageSharp.fluid}/>
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
                        <FormattedMessage id="hr-fitur-detail-3-title"/>
                      </Typography>
                      <Typography
                        tag="p"
                        type="body"
                      >
                        <FormattedMessage id="hr-fitur-detail-3-desc"/>
                      </Typography>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div css={theme => css`
                      @media screen and (max-width: ${theme.breakPoints.sm}) {
                        margin-top: 30px;
                      }
                    `}>
                      <Img fluid={data.employeesListPage.childImageSharp.fluid}/>
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

export default HR