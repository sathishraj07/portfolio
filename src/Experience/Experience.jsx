import React from 'react'
import "./Experience.scss"
import { Timeline } from 'antd'

const Experience = () => {
    return (
        <div id = "Experience" className='Experience'>
            <h5>Work Experience</h5>
            <div>
                <Timeline
                className='EX_Timeline'
                    items={[
                       
                        {
                            children: (
                                <>
                                <h4 className='timeline_hdr'>
                                    <span>Software Engineer</span>
                                    <span>Present - 2025</span>
                                </h4>
                                <p className='timeline_sub'>Novac Technology Solution</p>
                                <p className='timeline_Content'>
                                  After completing trainee Period, I transitioned to an Insurance Domain Project where I primarily work as a Frontend Developer. My responsibilities include building and enhancing user interfaces using React.js, with Redux for state management. I collaborate closely with backend teams to integrate ASP.NET Web API services, backed by a SQL Server database. While my main contribution is on the frontend, I’ve also gained basic exposure to backend development and API handling within the project.
                                </p>
                                </>
                            ),
                        },
                         {
                            children: (
                                <>
                                <h4 className='timeline_hdr'>
                                    <span>Software Engineer - Trainee</span>
                                    <span>2023 - 2024</span>
                                </h4>
                                <p className='timeline_sub'>Novac Technology Solution</p>
                                <p className='timeline_Content'>
                                    As a Full Stack Developer during my trainee period, I contributed to a Retail Application project, gaining hands-on experience across both frontend and backend development. On the frontend, I worked with React and TypeScript, managing application state using MobX. On the backend, I built and integrated ASP.NET Web APIs using Entity Framework, with PostgreSQL as the database. This role provided me a strong foundation in building scalable, responsive applications and understanding the end-to-end development lifecycle in a production-level environment.
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

export default Experience