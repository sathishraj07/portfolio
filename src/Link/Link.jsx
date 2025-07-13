import React from 'react'
import "./Link.scss"
import linkedin from "../assets/Images/Linkedin.svg"
import naukri from "../assets/Images/naukri.svg"
import whatsapp from "../assets/Images/Whatsapp.svg"
import github from "../assets/Images/github.svg"

const Link = () => {
    const handleLink = (link) => {
        window.open(link, "_blank")
    }
    return (
        <div id="Links" className='Links'>
            <div className='Links_Hdr'>
                <h3>Links</h3>
            </div>
            <div className="Links_list">
                <img src={linkedin} onClick={() => handleLink('https://www.linkedin.com/in/sathishrajprofile')} />
            
                    <img className="naukri" src={naukri} onClick={() =>handleLink("https://www.naukri.com/mnjuser/homepage") } />
           
                    <img src={github} onClick={() =>handleLink("https://github.com/sathishraj07") } />
                
                    <img src={whatsapp} />
             

            </div>
        </div>
    )
}

export default Link