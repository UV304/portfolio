import React from 'react'
import './project.css'
// import cardImg from '../../img/cardImg1.jpeg'

function Project(props) {
    return (
        <>
            <div className="p">
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                <a target='_blank' rel='noreferrer' href={props.link}>
                    <img className='p-img' src={props.img} alt="..." />
                </a>
            </div>
        </>
    )
}

export default Project
