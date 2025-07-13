import React from 'react'
import "./Skills.scss"
import HTML from "../assets/Images/HTML5.svg"
import Css from "../assets/Images/CSS.svg"
import Bootstrap from "../assets/Images/Bootstrap.svg"
import sass from "../assets/Images/Sass.svg"
import Js from "../assets/Images/JS.svg"
import jenkins from "../assets/Images/jenkins.svg"
import debug from "../assets/Images/debugging.svg"
import Reactimg from "../assets/Images/React.svg"
import PS from "../assets/Images/ProblemSolv.svg"
import Github from "../assets/Images/github.svg"
import bitbucket from "../assets/Images/bitbucket.svg"
import Typscript from "../assets/Images/Typscript.svg"
import CSharp from "../assets/Images/CSharp.svg"
import sql from "../assets/Images/SQL.svg"
import Postman from "../assets/Images/Postman.svg"


const Skills = () => {
    return (
        <div id ="Skills"className='Skills'>
            <h5>Skills & Tools</h5>
            <div className='Skills_list'>
                {SkillsList.map((itm) => (
                    <>
                        <div>
                            <h3>Front-end Technology</h3>
                            <ul className='Frontend'>
                                {itm.Frontend.map(ele => (
                                    <>
                                        <li>{ele.label}  <img src={ele.img} /></li>

                                    </>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Back-end Technology <code>(Basic Knowledge)</code></h3>
                            <ul className='Frontend'>
                                {itm.Backend.map(ele => (
                                    <li>{ele.label} <img src={ele.img} /></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Tools & others</h3>
                            <ul className='Frontend'>
                                {itm.Tools.map(ele => (
                                    <li>{ele.label}<img src={ele.img} /></li>
                                ))}
                            </ul>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Skills;

const SkillsList = [
    {
        Frontend: [{ img: HTML, label: "HTML5" }, { img: Css, label: "CSS" }, { img: sass, label: "Sass" }, { img: Bootstrap, label: "Bootstrap5" }, { img: Js, label: "Javascript(ES7)" }, { img: Typscript, label: "Typscript" }, { img: Reactimg, label: "React.Js" }],
        Backend: [{ img: CSharp, label: "Asp.net Web Api" }, { img: sql, label: " SQL Server" }],
        Tools: [{ img: Postman, label: "Postman" }, { img: jenkins, label: "Jenkins" }, { img: Github, label: "GitHub" }, { img: bitbucket, label: "Bitbucket" }, { img: debug, label: "debugging" }, { img: PS, label: "Problem Solving" }],
    }
]