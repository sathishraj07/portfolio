import { useState } from 'react'
import './App.scss'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Summary from './Summary/Summary'
import Experience from './Experience/Experience'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Skills/Skills'
import Link from './Link/Link'
import Footer from './Footer/Footer'
import Project from './Project/Project'

function App() {
const [slectedbar , setselectedbar] = useState("Home")
  return (
    <>
      <div className='mainComponent'>
        <Home id ="Home" />
        <Summary id= "Summary"/>
        <Experience/>
        <Project/>
        <Skills/>
        <Link/>
        <Footer/>
        <div className='mainNavbar'>
          <Navbar slectedbar={slectedbar} setselectedbar= {setselectedbar}/>
        </div>
      </div>
    </>
  )
}


export default App
