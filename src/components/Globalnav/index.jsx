import React, { Component } from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import { Button, Menu, Dropdown, Icon } from 'antd'
import { Container, Row, Col } from 'reus'
import { LangContextConsumer } from 'Components/Context'
import { GlobalnavContextProvider, GlobalnavContextConsumer } from 'Components/Context/GlobalnavContext'
import { FormattedMessage } from 'react-intl'
import { Link, navigate } from 'gatsby'
import ModanaLink from 'Components/ModanaLink'
import logo from 'Images/logo-modana.png'

const showMenu = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
const Nav = styled.nav`
  height: ${({toggle}) => toggle ? '100vh' : '60px'};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999999;
  width: 100%;
  box-shadow: 0 2px 8px 0 rgba(198, 214, 239, 0.4);
  background-color: #ffffff;
  transition: background .36s cubic-bezier(0.32, 0.08, 0.24, 1),height .56s cubic-bezier(0.52, 0.16, 0.24, 1);
  `
const ButtonLogin = styled.a`
  color: #fff;
  height: 32px;
  display: block;
  border-radius: 16px;
  text-align: center;
  min-width: 71.38px;
  background-color: ${props => props.theme.color.secondary};
  border: 1px solid ${props => props.theme.color.secondary};
  &:hover {
    color: #fff;
  }
  span {
    display: block;
    padding: 4px;
  }
`
const ButtonSignUp = styled.a`
  color: ${props => props.theme.color.primary};
  min-width: 106.89px;
  height: 32px;
  text-align: center;
  display: block;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.color.secondary};
  span {
    display: block;
    padding: 4px;
  }
`

const services = (
  <Menu css={css`
    border-radius: 14px;
    min-width: 220px;
    padding: 10px 0;
    box-shadow: 0 8px 25px #33333312;
    a {
      padding: 7px 18px;
    }
  `}>
    <Menu.Item key="1">
      <ModanaLink to="/service/hr">HR</ModanaLink>
    </Menu.Item>
    <Menu.Item key="2">
      <ModanaLink to="/service/payroll">Payroll</ModanaLink>
    </Menu.Item>
    <Menu.Item key="3">
      <ModanaLink to="/service/lending">Lending</ModanaLink>
    </Menu.Item>
  </Menu>
)
const MenuLink = styled.a`
  color: ${({theme}) => theme.color.primary};
  position: relative;
  font-weight: bold;
  font-size: 14px;
  @media screen and (max-width: ${({theme}) => theme.breakPoints.md}) {
    border-bottom: 1px solid #d8d8d8;
    padding: 12px 0;
    display: block;
  }
  & ~ div .ant-dropdown {
    @media screen and (min-width: ${({theme}) => theme.breakPoints.md}) {
      top: 73.5px !important;
    }
  }
`
const StyledLink = styled(ModanaLink)`
  color: ${({theme}) => theme.color.primary};
  font-size: 14px;
  @media screen and (max-width: ${({theme}) => theme.breakPoints.md}) {
    border-bottom: 1px solid #d8d8d8;
    padding: 12px 0;
    display: block;
  }
  font-weight: bold;
`
const ToggleStyled = styled(Button)`
  border-radius: 21px;
`
const StyledLang = styled(Button)`
  border-radius: 21px;
  border: none;
  box-sizing: border-box;
  text-transform: uppercase;
  box-shadow: none;
  border: 1px solid #eaeaea;
  width: 49px;
`
const GlobalnavPlaceholder = styled.div`
  height: 60px;
`
const CircleIcon = styled(Icon)`
  vertical-align: middle;
  display: none;
  @media screen and (max-width: ${({theme}) => theme.breakPoints.md}) {
    right: 0;
    display: inline-block;
    top: 16px;
    position: absolute;
    color: #909090;
  }
`
const StyledCol = styled(Col)`
  margin-top: 70px;
  @media screen and (min-width: ${({theme}) => theme.breakPoints.md}) {
    display: none;
  }
`
const LangMobile = styled(Button)`
  width: 100%;
  height: 42px;
  color: #fff;
  border-radius: 21px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid #eaeaea;
  color: #444;
  font-weight: bold;
  text-transform: uppercase;
`
const SignInMobile = styled.a`
  width: 100%;
  height: 42px;
  color: #fff;
  border-radius: 21px;
  box-sizing: border-box;
  margin-bottom: 20px;
  color: ${({theme}) => theme.color.primary};
  border: 1px solid ${({theme}) => theme.color.secondary};
  font-weight: bold;
  text-transform: uppercase;
  height: 32px;
  display: block;
  span {
    display: block;
    padding: 4px;
  }
`
const GetStartedMobile = styled.a`
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  border-radius: 21px;
  background: ${({theme}) => theme.color.secondary};
  color: #fff;
  font-weight: bold;
  margin-bottom: 70px;
  text-transform: uppercase;
  height: 32px;
  display: block;
  span {
    display: block;
    padding: 4px;
  }
`

class Globalnav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  render() {
    return (
      <GlobalnavContextProvider>
        <GlobalnavContextConsumer>
          {
            ({toggle, handleToggle}) => (
              <>
                <Nav toggle={toggle}>
                  <Container xl gutter={16}>
                    <Row justify="space-between" align="center" css={css`
                      height: 60px;`}>
                      <Col>
                        <Row align="center" gutter={16}>
                          <Col>
                            <Link to="/"><img css={css`height: 40px;`} src={logo} alt=""/></Link>
                          </Col>
                          <Col css={theme => {
                              return css`
                                @media screen and (max-width: ${theme.breakPoints.md}) {
                                  display: ${toggle ? 'block' : 'none'};
                                  position: absolute;
                                  top: 90px;
                                  left: 0;
                                  width: 100%;
                                }
                              `
                            } 
                          }>
                            <Row gutter={16} css={theme => {
                                return css`
                                  @media screen and (max-width: ${theme.breakPoints.md}) {
                                    opacity: 0;
                                    transform: translateY(-20px);
                                    animation: ${showMenu} 1s ease .6s both;
                                    display: block !important;
                                    & > div > a {
                                      font-size: 18px;
                                      & ~ div {
                                        position: relative !important;
                                        & > div > div {
                                          position: relative !important;
                                          left: 0 !important;
                                          top: 0 !important;
                                          & > ul {
                                            margin: 20px 0;
                                          }
                                        }
                                      }
                                    }
                                  }
                                `
                              } 
                            }>
                              <Col>
                                <Dropdown 
                                  overlay={services} 
                                  getPopupContainer={(node) => node.parentElement}
                                  trigger={['click']}
                                  placement="bottomCenter">
                                  <MenuLink>
                                    <FormattedMessage id="nav-services"/>
                                    <Icon css={theme => css`
                                      vertical-align: middle;
                                      @media screen and (max-width: ${theme.breakPoints.md}) {
                                        display: none !important;
                                      }
                                    `} type="down" />
                                    <CircleIcon type="plus-circle"/>
                                  </MenuLink>
                                </Dropdown>
                              </Col>
                              <Col>
                                <StyledLink to="about-us"><FormattedMessage id="nav-about-us"/></StyledLink>
                              </Col>
                              <Col>
                                <StyledLink to="help-center"><FormattedMessage id="nav-help-center"/></StyledLink>
                              </Col>
                              <StyledCol>
                                <div>
                                  <LangContextConsumer>
                                  {
                                    ({lang, handleLang}) => (
                                      <LangMobile onClick={handleLang}>
                                        {lang === 'en' ? 'Indonesia' : 'English'}
                                      </LangMobile>
                                    )
                                  }
                                </LangContextConsumer>
                                </div>
                                <div>
                                  <SignInMobile>Sign In</SignInMobile>
                                </div>
                                <div>
                                  <GetStartedMobile>Sign Up</GetStartedMobile>
                                </div>
                              </StyledCol>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Container gutter={16}>
                          <Row gutter={16} align="center">
                            <Col>
                              <Row gutter={16} align="center">
                                <Col css={theme => {
                                    return css`
                                      @media screen and (max-width: ${theme.breakPoints.sm}) {
                                        display: none;
                                      }
                                    `
                                  } 
                                }>
                                  <LangContextConsumer>
                                    {
                                      ({lang, handleLang, location}) => (
                                        <StyledLang onClick={() => {
                                          const _path = location.pathname.replace(/id\/|en\//gi, '')
                                          lang !== 'en' ? navigate(`en/${_path}`) : navigate(`id/${_path}`)
                                          handleLang()
                                        }}>{lang === 'en' ? 'id' : 'en'}</StyledLang>
                                      )
                                    }
                                  </LangContextConsumer>
                                </Col>
                                <Col>
                                  <ButtonSignUp href="https://hr.modana.id/signup"><FormattedMessage id="nav-get-started"/></ButtonSignUp>
                                </Col>
                                <Col css={theme => {
                                    return css`
                                      @media screen and (max-width: ${theme.breakPoints.sm}) {
                                        display: none;
                                      }
                                    `
                                  } 
                                }>
                                  <ButtonLogin href="https://hr.modana.id"><FormattedMessage id="nav-login"/></ButtonLogin>
                                </Col>
                                <Col css={theme => {
                                    return css`
                                      @media screen and (min-width: ${theme.breakPoints.md}) {
                                        display: none;
                                      }
                                    `
                                  } 
                                }>
                                  <ToggleStyled onClick={handleToggle}>
                                    <Icon css={css`transform: rotate(90deg);`} type="pause" />
                                  </ToggleStyled>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Nav>
                <GlobalnavPlaceholder/>
              </>
            )
          }
        </GlobalnavContextConsumer>
      </GlobalnavContextProvider>
    )
  }
}

export default Globalnav