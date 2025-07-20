import React from 'react'
import { Timeline } from 'antd'
import { CiLink } from "react-icons/ci";

const Project = () => {
  return (
   <div id = "Project" className='Experience'>
            <h5>Project</h5>
            <div>
                <Timeline
                className='EX_Timeline'
                    items={[
                       
                        {
                            children: (
                                <>
                                <h4 className='timeline_hdr'>
                                    <span>E-Commerce</span>
                                    <a href='https://e-commerece-by-sathish.netlify.app' target='_blank'>Live Link <CiLink width={50} height={50} /> </a> 
                                </h4>
                                <p className='timeline_Content'>
                                 <ul>
                                    <li><b>Dynamic Product Management and Cart System :</b> Developed an interactive product catalog with dynamic cart functionality, where users can add, remove, and view items, while leveraging React's state management to store cart details in local storage for persistent user experience.  </li>
                                    <li><b>E-commerce Platform with  User Authentication : </b>Built a e-commerce website in React.js, incorporating a user login system with local storage for session management, allowing users to  log in and maintain their session across page reloads. </li>
                                 </ul>
                                  </p>
                                </>
                            ),
                        },
                         {
                            children: (
                                <>
                                <h4 className='timeline_hdr'>
                                    <span>Simple Food Order</span>
                                     <a href='https://simplefoodorderwebsite.netlify.app' target='_blank'>Live Link <CiLink width={50} height={50} /></a> 
                                </h4>
                                <p className='timeline_Content'>
                                  <ul>
                                    <li><b>Dynamic User Interface with Real-time Cart Management :</b> Developed a responsive and interactive food ordering website using HTML, CSS, and JavaScript, featuring an intuitive interface that enables users to add, remove, and update food items in the cart with real-time dynamic updates for a seamless shopping experience.</li>
                                    <li>
                                       <b> Smooth and Efficient Checkout Process : </b>Implemented a user-friendly checkout system that manages orders, displays itemized lists, and dynamically updates the total price using JavaScript, ensuring a streamlined and efficient transaction flow.
                                    </li>
                                  </ul>
                                  </p>
                                </>
                            ),
                        },
                    ]}
                />
            </div>
        </div>
  )
}

export default Project