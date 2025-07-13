import React from 'react'
import "./Navbar.scss"
const Navbar = (props) => {
    const {slectedbar , setselectedbar} = props

    const handlebar = (val) => {
        setselectedbar(val)
    }
    return (
        <span className='Navabar'>
            <div>
                {Navbarlist.map(ele => (
                    <a href={`#${ele}`} onClick={() => handlebar(ele)}className={slectedbar == ele && "Selected"}>{ele}</a>
                ))}
            </div>
            
        </span>
    )
}

export default Navbar

const Navbarlist = [
    "Home","Summary","Experience" , "Skills","Links"
]