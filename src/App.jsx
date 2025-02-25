import { Route, Switch } from 'react-router-dom'
import './App.css'

import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import HomePage from './components/pages/home/HomePage'
import ShopPage from './components/pages/ShopPage/ShopPage'
import LoginForm from "./components/LoginForm"
import SignupForm from './components/pages/SignupForm'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/signup">
          <SignupForm/>
        </Route>
        <Route path="/login">
          <LoginForm/>
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </>
  )
}

export default App
