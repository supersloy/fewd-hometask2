import React, { useCallback, useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { RegisterPage } from './Pages/AuthPages/RegisterPage'
import { LoginPage } from './Pages/AuthPages/LoginPage'
import { HomePage } from './Pages/HomePage/HomePage'

const App = () => {
  const [token, setToken] = useState(null)
  const setTokenWrapper = useCallback(
    (newToken) => {
      sessionStorage.setItem('userToken', newToken)
      setToken(newToken)
    },
    [setToken]
  )

  useEffect(() => {
    const tokenFromSessionStorage = sessionStorage.getItem('userToken')
    if (tokenFromSessionStorage) {
      setToken(tokenFromSessionStorage)
    }
  }, [])

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage setToken={setTokenWrapper} />
        </Route>
        <Route path="/home">
          {token && <HomePage token={token} />}
          {!token && <div>You need to login in order to check home page</div>}
        </Route>
        <Route>
          <Redirect to="/register" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default hot(App)
