import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Card from './components/Card'
import ContactSection from './ContactSection'


const RoutingComponent = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/contact' element={<ContactSection/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </Router>
    
  )
}

export default RoutingComponent