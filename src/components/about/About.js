import React from 'react'
import './about.css'
import Me from '../../img/myImg.jpg'

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
                    <h2 className='a-title' >Achievements:</h2>
                    <ul className='a-list' >
                        <li>Responsive Web Development- <span className='i-list-desc'>FreeCodeCamp</span></li>
                        <li>JavaScript Basics- <span className='i-list-desc'>University of California, Davis and offered through Coursera.</span></li>
                        <li>JavaScript Algorithms and Data Structures - <span className='i-list-desc'>FreeCodeCamp</span></li>
                    </ul>
                </div></div>
            </div>
        </>
    )
}

export default About
