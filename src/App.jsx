
import { Route, Switch } from 'react-router-dom'
import './App.css'

import ShopPage from './components/pages/ShopPage/ShopPage'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'
import HomePage from './components/pages/home/HomePage'
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
    <Route path="/shop">
    <ShopPage />
    </Route>
    <Route path="about">
    <About/>
    </Route>
    <Route path="blog">
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
