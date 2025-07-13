import React from 'react'
import './Home.scss'
import { TfiEmail } from "react-icons/tfi";
import { ImLinkedin } from "react-icons/im";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const Home = () => {
    return (
        <div id="Home" className='Home'>
            <div className='hdr'>
                <div className='opentowork'>
                    <label className='Blink_Effect'></label>
                    <label>open to work</label>
                </div>
                <div className='CV_btn'><a href="/assests/Sathish_resume.pdf" download target="Resume.pdf">
                    Download CV</a>
                    </div>
            </div>
            <div className='Home_Content'>
                <div className='item1'>
                    <label>Software Engineer</label>
                    <p>Sathish</p>
                    <div className='Contact'>
                        <span>
                          <TfiEmail className='Dtls_icon'/>  rajSathish775@gamil.com</span>
                        <span> <LuPhoneCall className='Dtls_icon'/>+91 9894685596</span>
                        <span>
                            <ImLinkedin className='Dtls_icon' />
                            <a href={"https://www.linkedin.com/in/sathishrajprofile"} target='_blank'>https://www.linkedin.com/in/sathishrajprofile</a>
                        </span>
                        <span>
                            <IoLocationOutline className='Dtls_icon'/>
                            India , chennai
                        </span>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Home