import React from 'react'
import ABout from './component/ABout'
import Contact from './component/Contact'
import Experience from './component/Experience'
import Home from './component/Home'
import NavBar from './component/NavBar'
import Portfolio from './component/Portfolio'
import Social from './component/Social'

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>

      <Social/>
      <ABout/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App
