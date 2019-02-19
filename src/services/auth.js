import cookie from 'js-cookie'

export const isBrowser = () => typeof window !== "undefined"

const setUser = user =>
  cookie.set("user", user)

export const getUser = () => {
  return cookie.get('user') ? JSON.parse(cookie.get('user')) : {}
}

export const handleLogin = ({ username, password }) => {
  // const { _username, _password } = localStorage.getItem('gatsbyUser')
  const u = 'admin'
  const p = 'Modana18'
  if (username === u && password === p) {
    return setUser({
      username: u,
      password: p,
      email: `modana@example.org`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  const user = getUser()
  return user.username === 'admin' && user.password === 'Modana18'
}

export const logout = callback => {
  setUser({})
  callback()
}