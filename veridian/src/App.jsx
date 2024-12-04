import { useState } from 'react'
import './App.css'
import Navbar from './pages/navbar/navbar'
import Home from './pages/home/home'
import { Box } from '@mui/material'
import Shadow from './components/shadow'
import AboutUs from './pages/aboutUs/aboutUs'
import HolisticInvestmentApproach from './pages/holisticInvestmentApproach/holisticInvestmentApproach'
import OurTeam from './pages/ourTeam/ourTeam'
import ContactUs from './pages/contactUs/contactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <OurTeam/> */}
      {/* <ContactUs/> */}
    </>
  )
}

export default App
