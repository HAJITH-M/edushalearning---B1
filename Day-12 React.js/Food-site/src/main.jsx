import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NavBar from './components/NavBar'
import Card from './components/Card'
import ContactSection from './ContactSection'

ReactDOM.createRoot(document.getElementById('root')).render(
<>
  {/* <App/> */}
  <NavBar/>
  <Card/>
  <ContactSection/>
</>
)
