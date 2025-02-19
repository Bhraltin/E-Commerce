import Footer from "./Footer";
import Header from "./Header";

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Layout = ({ children }) => {
 

  return (
    <>
  <Header/>
  <main className="mx-auto font-montserrat"> {children} </main>
  <Footer/>
  </>
 
  )
}

export default Layout

