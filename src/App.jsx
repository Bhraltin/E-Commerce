import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import './App.css'

import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import HomePage from './components/pages/home/HomePage'
import ShopPage from './components/pages/shopPage/ShopPage'
import LoginForm from "./components/LoginForm"
import SignupForm from './components/pages/SignupForm'
import { verifyToken } from './store/actions/clientAction'

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          console.log('Found token, verifying...');
          const result = await dispatch(verifyToken());
          console.log('Token verification result:', result);
        }
      } catch (error) {
        console.error('Auth verification failed:', error);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>; 
  }
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
