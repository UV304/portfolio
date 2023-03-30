import React from 'react'
import './project.css'

function Project(props) {
    return (
        <div className='p'>
            <div className="p-card">
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                <a href={props.link} target='_blank' rel="noreferrer">
                    <img className='p-img' src={props.img} alt="" />
                </a>
            </div>
            <div className="p-name">{props.name}</div>
        </div>
    )
}

export default Project
