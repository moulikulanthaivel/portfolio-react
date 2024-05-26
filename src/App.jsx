import React from 'react'
import Navbar from './components/Navabar/Navbar'
import Aboutme from './components/AboutMe/Aboutme'
import Myself from './components/Myself/Myself'
import Service from "./components/Service/Service"
import Mywork from './components/Mywork/Mywork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Aboutme/>
      <Myself/>
      <Service/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App