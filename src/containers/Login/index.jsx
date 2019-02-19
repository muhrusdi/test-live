import React from "react"
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { navigate } from "gatsby"
import { Container, Row, Col } from 'reus'
import { Input, Icon } from 'antd'
import { handleLogin, isLoggedIn } from "Services/auth"
import logo from 'Images/logo-modana.png'
import { Transition } from 'react-transition-group'
import { TweenLite, Elastic } from 'gsap'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isExist: false,
      isNotValid: false
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    handleLogin({
      username: this.state.username,
      password: this.state.password
    }) ? navigate('/app') : this.setState({isNotValid: true})
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
    if (e.target.name === 'password') {
      if (e.target.value !== '') {
        this.setState({isExist: true})
      } else {
        this.setState({isExist: false})
      }
    }
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app`)
    }
    // const RowWrapper = styled(Row)`
    //   height: 100vh;
    //   background: #f4fcff;
    // `
    // const FormInner = styled.div`
    //   padding: 20px;
    //   max-width: 320px;
    // `
    const StyledSubmit = styled.button`
      background: none;
      height: 32px;
      border: none;
      position: relative;
      outline: none;
      cursor: pointer;
    `
    return (
      <div>
        <Container>
          <Row justify="center" align="center" css={css`
            height: 100vh;
            background: #f4fcff;
            height: 100vh;`}>
            <Col>
              <form onSubmit={this.handleSubmit}>
                <div css={css`text-align: center;`}>
                  <img src={logo} alt=""/>
                </div>
                <div css={css`
                  max-width: 320px;
                  padding: 20px;
                `}>
                  <Transition
                    in={this.state.isNotValid}
                    appear
                    onEnter={node => {
                      TweenLite.set(node, { 
                        x: -25
                      })
                    }}
                    addEndListener={node => {
                      TweenLite.to(node, 1, { 
                        ease: Elastic.easeOut.config(1, 0.1), 
                        x: 0,
                        onComplete: () => {
                          this.setState({isNotValid: false})
                        }
                      })
                    }}
                  >
                    <div>
                      <Input css={css`
                        border-bottom: 1px solid rgba(255,255,255,0);
                        border-bottom-left-radius: 0;
                        border-bottom-right-radius: 0;
                      `} size="large"
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="Username" />
                      <Input css={css`
                        border-top-left-radius: 0;
                        border-bottom-right-radius: 3px !important;
                        & ~ .ant-input-group-addon {
                          position: absolute;
                          top: 0;
                          display: ${this.state.isExist ? 'inline-block' : 'none'};
                          padding-top: 5px;
                          cursor: pointer;
                          right: 0;
                          z-index: 10;
                          bottom: 0;
                          width: 43px;
                          background: none;
                          border: none;
                        }
                      `} 
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        size="large" placeholder="Password" addonAfter={<StyledSubmit type="submit"><Icon type="right-circle" /></StyledSubmit>} />
                    </div>
                  </Transition>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Login