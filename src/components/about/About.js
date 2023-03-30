import React from 'react'
import './about.css'
import Me from '../about/myImg.jpg'

function About() {
    return (
        <>
            <div className="a">
                <div className="a-left">
                    <div className="a-card bg"></div>
                    <div className="a-card">
                        <img src={Me} alt="..." className="a-img" />
                    </div>
                </div>
                <div className="a-right"><div className="a-right-wrapper">
                    <h1 className='a-intro'>About me</h1>
                    <p className='a-text'> I have a passion for creating visually appealing and user-friendly websites. With a solid foundation in HTML, CSS, and JavaScript, I am able to create responsive designs that are optimized for desktop and mobile devices. I am also familiar with various frontend frameworks such as ReactJs, NextJs, jQuery, BootStrap and TailWindcss. <br /><br /> My strong problem-solving skills and attention to detail enable me to effectively debug and troubleshoot issues in code. I am committed to staying up-to-date with the latest web development trends and technologies to continuously improve my skills. In addition to technical skills, I am a strong communicator and team player, able to collaborate effectively with designers, developers, and other stakeholders. I am eager to contribute my skills and learn from experienced developers to create innovative and impactful digital experiences</p>
                    <h2 className='a-title' >Achievements</h2>
                    <ul className='a-list' >
                        <li>Responsive Web Development- <span className='i-list-desc'>FreeCodeCamp</span></li>
                        <li>JavaScript Basics- <span className='i-list-desc'>University of California, Davis and offered through Coursera.</span></li>
                        <li>JavaScript Algorithms and Data Structures - <span className='i-list-desc'>FreeCodeCamp</span></li>
                        <li>Front-End Development - <span className='i-list-desc'>FreeCodeCamp</span></li>
                        <li>NextJs - <span className='i-list-desc'>Mindluster</span></li>
                    </ul>
                </div></div>
            </div>
        </>
    )
}

export default About
